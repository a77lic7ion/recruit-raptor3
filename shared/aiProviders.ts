export type AiProvider = {
  name: string;
  endpoint: string;
  model: string;
};

export const AI_PROVIDERS: AiProvider[] = [
  { name: "OpenAI", endpoint: "https://api.openai.com/v1", model: "gpt-4.1-mini" },
  { name: "Mistral", endpoint: "https://api.mistral.ai/v1", model: "mistral-small-latest" },
  { name: "Gemini", endpoint: "https://generativelanguage.googleapis.com", model: "gemini-2.5-flash" },
  { name: "OpenRouter", endpoint: "https://openrouter.ai/api/v1", model: "meta-llama/llama-3.1-8b-instruct:free" },
  { name: "Nous", endpoint: "https://inference-api.nousresearch.com/v1", model: "Hermes-3-Llama-3.1-8B:free" },
];

export const FREE_MODEL_CATALOG: Record<string, string[]> = {
  OpenRouter: [
    "meta-llama/llama-3.1-8b-instruct:free",
    "google/gemma-3-4b-it:free",
    "deepseek/deepseek-r1:free",
  ],
  Nous: [
    "Hermes-3-Llama-3.1-8B:free",
    "Hermes-3-Llama-3.1-70B:free",
  ],
};

export type ProviderModelMetadata = { id: string; pricing?: { prompt?: string | number; completion?: string | number } };

export function isFreeModel(model: string) {
  return model.endsWith(":free") || model.toLowerCase().includes("free");
}

export function isFreeModelMetadata(model: ProviderModelMetadata) {
  const prompt = Number(model.pricing?.prompt ?? NaN);
  const completion = Number(model.pricing?.completion ?? NaN);
  return isFreeModel(model.id) || (Number.isFinite(prompt) && Number.isFinite(completion) && prompt === 0 && completion === 0);
}

export function freeModelsForProvider(provider: string, selectedModel?: string) {
  const catalog = FREE_MODEL_CATALOG[provider];
  if (!catalog) return [selectedModel ?? "custom-model-1", "fast-extraction", "long-context"];
  return Array.from(new Set([...(selectedModel && isFreeModel(selectedModel) ? [selectedModel] : []), ...catalog]));
}

export async function discoverFreeModels(endpoint: string, provider: string, apiKey?: string) {
  const fallback = freeModelsForProvider(provider);
  try {
    const response = await fetch(`${endpoint.replace(/\/$/, "")}/models`, {
      headers: apiKey ? { Authorization: `Bearer ${apiKey}` } : undefined,
    });
    if (!response.ok) throw new Error(`Model discovery returned ${response.status}`);
    const payload = (await response.json()) as { data?: ProviderModelMetadata[] };
    const discovered = (payload.data ?? []).filter(isFreeModelMetadata).map((model) => model.id);
    return Array.from(new Set([...discovered, ...fallback]));
  } catch {
    return fallback;
  }
}
