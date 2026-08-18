import { describe, expect, it } from "vitest";
import { formatZar, isRecruitmentStage, recruitmentStages } from "../shared/recruitment";

describe("recruitment stage vocabulary", () => {
  it("keeps the candidate pipeline stages ordered for the UI", () => {
    expect(recruitmentStages).toEqual(["New", "Screening", "Shortlisted", "Interview", "Approved", "Placed"]);
  });

  it("formats money values as South African Rand", () => {
    expect(formatZar(186400)).toContain("186");
    expect(formatZar(186400)).toMatch(/R/);
  });

  it("rejects unsupported stage values before they reach a candidate record", () => {
    expect(isRecruitmentStage("Interview")).toBe(true);
    expect(isRecruitmentStage("Archived")).toBe(false);
  });
});

import { AI_PROVIDERS, FREE_MODEL_CATALOG, freeModelsForProvider, isFreeModel } from "../shared/aiProviders";

describe("AI provider catalog", () => {
  it("uses the configured Nous inference endpoint", () => {
    expect(AI_PROVIDERS.find((provider) => provider.name === "Nous")?.endpoint).toBe("https://inference-api.nousresearch.com/v1");
  });

  it("keeps Nous and OpenRouter model choices free-only", () => {
    for (const provider of ["Nous", "OpenRouter"]) {
      expect(FREE_MODEL_CATALOG[provider].every(isFreeModel)).toBe(true);
      expect(freeModelsForProvider(provider).every(isFreeModel)).toBe(true);
    }
  });
});
