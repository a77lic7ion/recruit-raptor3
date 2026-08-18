export const recruitmentStages = ["New", "Screening", "Shortlisted", "Interview", "Approved", "Placed"] as const;

export const defaultCurrency = { code: "ZAR", symbol: "R", locale: "en-ZA" } as const;

export function formatZar(value: number): string {
  return new Intl.NumberFormat(defaultCurrency.locale, { style: "currency", currency: defaultCurrency.code, maximumFractionDigits: 0 }).format(value);
}

export type RecruitmentStage = (typeof recruitmentStages)[number];

export function isRecruitmentStage(value: string): value is RecruitmentStage {
  return recruitmentStages.includes(value as RecruitmentStage);
}
