export type StoredSubmission = {
  campaignId: string;
  videoUrl: string;
  submittedAt: string;
};

const STORAGE_KEY = "affiliate-mobile-submissions";

export function readStoredSubmissions(): StoredSubmission[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function upsertStoredSubmission(submission: StoredSubmission) {
  if (typeof window === "undefined") {
    return;
  }

  const current = readStoredSubmissions();
  const next = [
    submission,
    ...current.filter((item) => item.campaignId !== submission.campaignId),
  ];

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}
