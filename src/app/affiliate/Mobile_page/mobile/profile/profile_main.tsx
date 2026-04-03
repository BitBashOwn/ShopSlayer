"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Edit3,
  Hash,
  LogOut,
  Mail,
  Music2,
  Pencil,
  Tag,
  X,
} from "lucide-react";
import BottomNav from "../../BottomNav";
import DesktopSidebarNav from "../../DesktopSidebarNav";
import {
  readStoredAffiliateProfile,
  writeStoredAffiliateProfile,
  type AffiliateProfile,
} from "../../affiliateProfileStorage";

const stats = [
  { value: "6", label: "Campaigns", sublabel: "Joined" },
  { value: "4", label: "Active", sublabel: "Now" },
  { value: "3", label: "Videos", sublabel: "Submitted" },
];

type DetailKey = "email" | "handle" | "niche";
type ModalType = "profile" | DetailKey | null;

function ProfileEditModal({
  type,
  profile,
  onClose,
  onSaveProfile,
  onSaveField,
}: {
  type: Exclude<ModalType, null>;
  profile: AffiliateProfile;
  onClose: () => void;
  onSaveProfile: (
    nextProfile: Pick<AffiliateProfile, "fullName" | "handle" | "niche" | "avatarUrl">,
  ) => void;
  onSaveField: (field: DetailKey, value: string) => void;
}) {
  const [profileDraft, setProfileDraft] = useState({
    fullName: profile.fullName,
    handle: profile.handle,
    niche: profile.niche,
    avatarUrl: profile.avatarUrl,
  });
  const [imageError, setImageError] = useState("");
  const [fieldDraft, setFieldDraft] = useState(
    type === "email" ? profile.email : type === "handle" ? profile.handle : profile.niche,
  );

  const modalTitle =
    type === "profile"
      ? "Edit Profile"
      : type === "email"
        ? "Edit Email"
        : type === "handle"
          ? "Edit TikTok Handle"
          : "Edit Content Niche";

  const fieldLabel =
    type === "email" ? "Email" : type === "handle" ? "TikTok Handle" : "Content Niche";

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    if (!["image/png", "image/jpeg", "image/jpg", "image/webp"].includes(file.type)) {
      setImageError("Upload a PNG, JPG, or WEBP image.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const imageDataUrl = reader.result;
      if (typeof imageDataUrl === "string") {
        setProfileDraft((current) => ({ ...current, avatarUrl: imageDataUrl }));
        setImageError("");
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    if (type === "profile") {
      onSaveProfile({
        fullName: profileDraft.fullName.trim() || profile.fullName,
        handle: profileDraft.handle.trim() || profile.handle,
        niche: profileDraft.niche.trim() || profile.niche,
        avatarUrl: profileDraft.avatarUrl.trim(),
      });
      onClose();
      return;
    }

    onSaveField(type, fieldDraft.trim() || fieldDraft);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#101828]/55 px-4">
      <div className="w-full max-w-md rounded-[28px] bg-white p-6 shadow-[0_28px_80px_rgba(15,23,42,0.28)]">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-[#20145f]">{modalTitle}</h2>
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer rounded-full p-2 text-[#98a2b3] transition-colors hover:bg-[#f7f8fc] hover:text-[#20145f]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {type === "profile" ? (
          <div className="mt-5 space-y-4">
            <label className="block">
              <span className="text-sm font-medium text-[#344054]">Full Name</span>
              <input
                type="text"
                value={profileDraft.fullName}
                onChange={(e) =>
                  setProfileDraft((current) => ({ ...current, fullName: e.target.value }))
                }
                className="mt-2 w-full rounded-2xl border border-[#d0d5dd] px-4 py-3 text-sm text-[#20145f] outline-none focus:border-[#3b38b8]"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-[#344054]">TikTok Handle</span>
              <input
                type="text"
                value={profileDraft.handle}
                onChange={(e) =>
                  setProfileDraft((current) => ({ ...current, handle: e.target.value }))
                }
                className="mt-2 w-full rounded-2xl border border-[#d0d5dd] px-4 py-3 text-sm text-[#20145f] outline-none focus:border-[#3b38b8]"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-[#344054]">Content Niche</span>
              <input
                type="text"
                value={profileDraft.niche}
                onChange={(e) =>
                  setProfileDraft((current) => ({ ...current, niche: e.target.value }))
                }
                className="mt-2 w-full rounded-2xl border border-[#d0d5dd] px-4 py-3 text-sm text-[#20145f] outline-none focus:border-[#3b38b8]"
              />
            </label>

            <div>
              <span className="text-sm font-medium text-[#344054]">Upload Profile Image</span>
              <label className="mt-2 flex cursor-pointer items-center justify-center rounded-2xl border border-dashed border-[#d0d5dd] px-4 py-4 text-sm text-[#667085] transition-colors hover:border-[#3b38b8] hover:bg-[#f8faff]">
                <input
                  type="file"
                  accept=".png,.jpg,.jpeg,.webp"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                Choose PNG, JPG, or WEBP
              </label>
              {profileDraft.avatarUrl ? (
                <p className="mt-2 text-xs text-[#667085]">Image selected successfully.</p>
              ) : null}
              {imageError ? (
                <p className="mt-2 text-xs text-[#d92f6d]">{imageError}</p>
              ) : null}
            </div>
          </div>
        ) : (
          <div className="mt-5">
            <label className="block">
              <span className="text-sm font-medium text-[#344054]">{fieldLabel}</span>
              <input
                type={type === "email" ? "email" : "text"}
                value={fieldDraft}
                onChange={(e) => setFieldDraft(e.target.value)}
                className="mt-2 w-full rounded-2xl border border-[#d0d5dd] px-4 py-3 text-sm text-[#20145f] outline-none focus:border-[#3b38b8]"
              />
            </label>
          </div>
        )}

        <div className="mt-6 flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer flex-1 rounded-2xl border border-[#d0d5dd] px-4 py-3 text-sm font-medium text-[#344054] transition-colors hover:bg-[#f9fafb]"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="cursor-pointer flex-1 rounded-2xl bg-[#20145f] px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProfileMain() {
  const router = useRouter();
  const [profile, setProfile] = useState<AffiliateProfile>(() => readStoredAffiliateProfile());
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const initials = useMemo(() => {
    const parts = profile.fullName.trim().split(/\s+/).filter(Boolean);
    return parts.slice(0, 2).map((part) => part[0]?.toUpperCase() ?? "").join("") || "SC";
  }, [profile.fullName]);

  const details = [
    {
      key: "email" as const,
      icon: Mail,
      label: "Email",
      value: profile.email,
    },
    {
      key: "handle" as const,
      icon: Hash,
      label: "TikTok Handle",
      value: profile.handle,
    },
    {
      key: "niche" as const,
      icon: Tag,
      label: "Content Niche",
      value: profile.niche,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f8fc] pb-20 lg:pb-0">
      <div className="mx-auto max-w-[1280px] lg:px-6 lg:py-8">
        <div className="lg:grid lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-8">
          <DesktopSidebarNav sectionLabel="Affiliate Profile">
            <div className="rounded-3xl bg-white/10 p-5">
              <p className="text-sm text-white/70">Creator snapshot</p>
              <p className="mt-3 text-3xl font-semibold">{profile.fullName}</p>
              <p className="mt-3 text-sm leading-6 text-white/75">
                Keep your creator details up to date so brands can match you with the right campaigns.
              </p>
            </div>
          </DesktopSidebarNav>

          <main className="min-h-screen bg-white lg:min-h-0 lg:rounded-[32px] lg:border lg:border-white/70 lg:shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
            <div className="flex items-center justify-between border-b border-[#eceff5] px-4 py-4 lg:rounded-t-[32px] lg:px-8 lg:py-6">
              <h1 className="text-[28px] font-semibold text-[#20145f]">Profile</h1>
              <button
                type="button"
                onClick={() => setActiveModal("profile")}
                className="cursor-pointer rounded-full p-2 text-[#E83A7A] transition-colors hover:bg-[#fff0f6]"
              >
                <Pencil className="h-5 w-5" />
              </button>
            </div>

            <div className="px-4 py-5 lg:px-8 lg:py-8">
              <div className="mx-auto max-w-[620px]">
                <div className="rounded-[28px] bg-white text-center">
                  {profile.avatarUrl ? (
                    <Image
                      src={profile.avatarUrl}
                      alt={profile.fullName}
                      width={80}
                      height={80}
                      className="mx-auto rounded-full object-cover"
                    />
                  ) : (
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#3b38b8] text-[28px] font-semibold text-white">
                      {initials}
                    </div>
                  )}

                  <h2 className="mt-4 text-[32px] font-semibold leading-tight text-[#20145f]">
                    {profile.fullName}
                  </h2>

                  <div className="mt-2 flex items-center justify-center gap-2 text-[#ff3b86]">
                    <Music2 className="h-4 w-4" />
                    <span className="text-sm font-medium">{profile.handle}</span>
                  </div>

                  <div className="mt-4 flex justify-center">
                    <span className="rounded-full bg-[#eef2ff] px-4 py-2 text-sm font-medium text-[#3b38b8]">
                      {profile.niche}
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {stats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-[#dfe3ee] bg-white px-3 py-4 text-center shadow-sm"
                    >
                      <p className="text-[34px] font-semibold leading-none text-[#20145f]">{item.value}</p>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.02em] text-[#667085]">
                        {item.label}
                      </p>
                      <p className="text-xs text-[#98a2b3]">{item.sublabel}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-3xl border border-[#d7dcea] bg-white p-5 shadow-sm">
                  <h3 className="text-xl font-semibold text-[#20145f]">Account Details</h3>

                  <div className="mt-5 space-y-4">
                    {details.map(({ key, icon: Icon, label, value }) => (
                      <div
                        key={label}
                        className="flex items-start justify-between gap-3 border-b border-[#eef1f6] pb-4 last:border-b-0 last:pb-0"
                      >
                        <div className="flex items-start gap-3">
                          <div className="pt-0.5 text-[#98a2b3]">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-xs text-[#98a2b3]">{label}</p>
                            <p className="mt-1 text-sm font-medium text-[#20145f]">{value}</p>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => setActiveModal(key)}
                          className="cursor-pointer rounded-full p-2 text-[#98a2b3] transition-colors hover:bg-[#f7f8fc] hover:text-[#20145f]"
                        >
                          <Edit3 className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="mt-5 text-center text-sm text-[#98a2b3]">
                  Member since March 2026 - Open Plan Affiliate
                </p>

                <button
                  type="button"
                  onClick={() => router.push("/")}
                  className="mt-5 flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl border border-[#e4e7ec] bg-white px-4 py-3 text-base font-medium text-[#20145f] transition-colors hover:bg-[#f9fafb]"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Log Out</span>
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>

      {activeModal ? (
        <ProfileEditModal
          type={activeModal}
          profile={profile}
          onClose={() => setActiveModal(null)}
          onSaveProfile={(nextProfile) =>
            setProfile((current) => {
              const updatedProfile = {
                ...current,
                ...nextProfile,
              };
              writeStoredAffiliateProfile(updatedProfile);
              return updatedProfile;
            })
          }
          onSaveField={(field, value) =>
            setProfile((current) => {
              const updatedProfile = {
                ...current,
                [field]: value || current[field],
              };
              writeStoredAffiliateProfile(updatedProfile);
              return updatedProfile;
            })
          }
        />
      ) : null}

      <BottomNav />
    </div>
  );
}
