export type AffiliateProfile = {
  fullName: string;
  handle: string;
  niche: string;
  email: string;
  avatarUrl: string;
};

export const defaultAffiliateProfile: AffiliateProfile = {
  fullName: "Sarah Cruz",
  handle: "@sarahcreates",
  niche: "Beauty & Lifestyle",
  email: "sarah@email.com",
  avatarUrl: "",
};

const STORAGE_KEY = "shopslayer-affiliate-profile";

export function readStoredAffiliateProfile(): AffiliateProfile {
  if (typeof window === "undefined") {
    return defaultAffiliateProfile;
  }

  try {
    const rawValue = window.localStorage.getItem(STORAGE_KEY);
    if (!rawValue) {
      return defaultAffiliateProfile;
    }

    const parsedValue = JSON.parse(rawValue) as Partial<AffiliateProfile>;
    return {
      ...defaultAffiliateProfile,
      ...parsedValue,
    };
  } catch {
    return defaultAffiliateProfile;
  }
}

export function writeStoredAffiliateProfile(profile: AffiliateProfile) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
}
