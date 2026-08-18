export type ParsedCandidateDraft = {
  name: string;
  role: string;
  location: string;
  confidence: number;
};

const roleHints = ["front office manager", "general manager", "restaurant manager", "hotel manager", "chef", "manager", "receptionist", "waiter", "bartender", "housekeeper", "front office", "tourism", "hospitality"];
const locationHints = ["cape town", "johannesburg", "durban", "pretoria", "gqeberha", "port elizabeth", "south africa", "western cape", "gauteng", "kwazulu-natal"];

export function extractCandidateDraft(text: string): ParsedCandidateDraft {
  const normalized = text.replace(/\r/g, "").replace(/[ \t]+/g, " ");
  const lines = normalized.split("\n").map((line) => line.trim()).filter(Boolean);
  const email = normalized.match(/[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}/)?.[0] ?? "";
  const roleLine = lines.find((line) => roleHints.some((hint) => line.toLowerCase().includes(hint)));
  const roleMatch = /(front office manager|general manager|restaurant manager|hotel manager|chef|receptionist|waiter|bartender|housekeeper|front office|tourism|hospitality|manager)/i.exec(normalized);
  const role = roleMatch?.[0] ?? (roleLine && roleLine.length < 70 ? roleLine : "Hospitality candidate");
  const location = locationHints.find((hint) => normalized.toLowerCase().includes(hint)) ?? "South Africa";
  const nameFromPrefix = roleMatch ? normalized.slice(0, roleMatch.index).trim().replace(/[|,:-]+$/, "").trim() : "";
  const name = lines.find((line) => /^[A-Z][A-Za-z' -]{2,45}$/.test(line) && !roleHints.some((hint) => line.toLowerCase().includes(hint)) && !line.includes("@")) ?? (nameFromPrefix && /^[A-Z][A-Za-z' -]{2,45}$/.test(nameFromPrefix) ? nameFromPrefix : "Candidate from uploaded CV");
  const signals = [name !== "Candidate from uploaded CV", role !== "Hospitality candidate", location !== "South Africa", Boolean(email)].filter(Boolean).length;
  return { name, role: email ? `${role} · ${email}` : role, location, confidence: Math.min(96, 52 + signals * 11) };
}
