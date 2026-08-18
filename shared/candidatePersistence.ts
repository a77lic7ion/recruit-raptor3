export type CandidateSaveDraft = {
  name: string;
  role: string;
  location: string;
};

export type PersistedCandidate = CandidateSaveDraft & {
  stage: string;
  tone: string;
  initials: string;
  updated: string;
  salary: string;
};

export function createCandidateFromDraft(draft: CandidateSaveDraft): PersistedCandidate {
  const name = draft.name.trim();
  return {
    name,
    role: draft.role.trim() || "Hospitality candidate",
    location: draft.location.trim() || "South Africa",
    stage: "New",
    tone: "orange",
    initials: name.split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase() || "CA",
    updated: "Just now",
    salary: "",
  };
}

export function upsertCandidateRecord(records: PersistedCandidate[], draft: CandidateSaveDraft): PersistedCandidate[] {
  const candidate = createCandidateFromDraft(draft);
  return [candidate, ...records.filter((record) => record.name.toLowerCase() !== candidate.name.toLowerCase())];
}

export function parsePersistedCandidates(raw: string | null): PersistedCandidate[] {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((record) => record && typeof record.name === "string") as PersistedCandidate[] : [];
  } catch {
    return [];
  }
}

export function candidateCount(records: PersistedCandidate[]): number {
  return records.length;
}
