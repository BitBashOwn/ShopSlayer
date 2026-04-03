"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Phone, Link as LinkIcon } from "lucide-react";

const PAGE_BG = "#F0F2F8";
const CARD_BORDER = "#E8ECF4";
const CARD_SHADOW = "0px 2px 8px rgba(0, 0, 0, 0.06)";
const TEXT_PRIMARY = "#1E1B4B";
const TEXT_SECONDARY = "#6B7280";
const TEXT_MUTED = "#9CA3AF";
const ACCENT = "#F43F5E";
const BTN_PRIMARY = "#1E1B4B";
const LINK_PREVIEW = "#4B47B0";
const BIO_MAX = 200;
const LOGO_MAX_BYTES = 2 * 1024 * 1024;

export default function BrandProfilePage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const logoObjectUrlRef = useRef<string | null>(null);

  const [companyName, setCompanyName] = useState("");
  const [tiktokUrl, setTiktokUrl] = useState("");
  const [bio, setBio] = useState("");
  const [contactName, setContactName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  const initials = (() => {
    const parts = companyName.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) return "GL";
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  })();

  const handleBioChange = (v: string) => {
    setBio(v.slice(0, BIO_MAX));
  };

  const revokeLogoObjectUrl = () => {
    if (logoObjectUrlRef.current) {
      URL.revokeObjectURL(logoObjectUrlRef.current);
      logoObjectUrlRef.current = null;
    }
  };

  const handleLogoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > LOGO_MAX_BYTES) {
      e.target.value = "";
      return;
    }
    revokeLogoObjectUrl();
    const url = URL.createObjectURL(file);
    logoObjectUrlRef.current = url;
    setLogoPreview(url);
  };

  const handleRemoveLogo = () => {
    revokeLogoObjectUrl();
    setLogoPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  useEffect(() => {
    return () => {
      if (logoObjectUrlRef.current) {
        URL.revokeObjectURL(logoObjectUrlRef.current);
        logoObjectUrlRef.current = null;
      }
    };
  }, []);

  const openFilePicker = () => {
    queueMicrotask(() => fileInputRef.current?.click());
  };

  const inputClass =
    "h-11 w-full rounded-[10px] border border-[#E8ECF4] px-[14px] text-sm text-[#1E1B4B] outline-none transition-colors placeholder:text-[#9CA3AF] focus:border-[#4B47B0] focus:ring-1 focus:ring-[#4B47B0]";

  const labelClass = "block text-[13px] font-medium text-[#6B7280]";

  return (
    <div className="flex h-full flex-col" style={{ backgroundColor: PAGE_BG }}>
      <div className="flex-1 overflow-y-auto p-8">
        <h1 className="text-2xl font-bold leading-tight" style={{ color: TEXT_PRIMARY }}>
          Brand Profile
        </h1>
        <p className="mt-1 text-sm font-normal" style={{ color: TEXT_SECONDARY }}>
          Manage your public brand presence and internal contact details
        </p>

        <div className="mt-8 flex max-w-3xl flex-col gap-5">
          {/* Card 1 — Public */}
          <div
            className="rounded-[16px] border bg-white p-6"
            style={{ borderColor: CARD_BORDER, boxShadow: CARD_SHADOW }}
          >
            <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-base font-bold" style={{ color: TEXT_PRIMARY }}>
                  Public Profile
                </h2>
                <p className="mt-1 text-[13px] font-normal" style={{ color: TEXT_SECONDARY }}>
                  Visible to affiliates — name, logo, TikTok Shop link, and bio
                </p>
              </div>
              <span
                className="shrink-0 rounded-full text-[11px] font-semibold"
                style={{ backgroundColor: "#D1FAE5", color: "#065F46", padding: "3px 10px" }}
              >
                Affiliate Visible
              </span>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap items-start gap-6">
                <div className="flex flex-col items-center sm:items-start">
                  {logoPreview ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={logoPreview}
                      alt=""
                      className="h-20 w-20 shrink-0 rounded-full object-cover"
                    />
                  ) : (
                    <div
                      className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full text-base font-bold text-white"
                      style={{ backgroundColor: "#E879A0" }}
                    >
                      {initials}
                    </div>
                  )}
                  <p className="mt-2 text-center text-[11px] sm:text-left" style={{ color: TEXT_MUTED }}>
                    PNG, JPG up to 2MB
                  </p>
                </div>
                <div className="flex min-w-[140px] flex-col gap-2">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/png,image/jpeg,image/webp"
                    className="sr-only"
                    onChange={handleLogoSelect}
                  />
                  <button
                    type="button"
                    onClick={openFilePicker}
                    className="rounded-lg border bg-white px-4 py-2 text-[13px] font-medium transition-opacity hover:opacity-90"
                    style={{ borderColor: BTN_PRIMARY, color: BTN_PRIMARY, borderWidth: 1 }}
                  >
                    Upload Logo
                  </button>
                  <button
                    type="button"
                    onClick={handleRemoveLogo}
                    className="text-left text-xs font-medium transition-opacity hover:opacity-80"
                    style={{ color: ACCENT }}
                  >
                    Remove
                  </button>
                </div>
              </div>

              <div>
                <label className={labelClass}>Company Name</label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. GlowLab Co."
                  className={`${inputClass} mt-1.5`}
                />
              </div>

              <div>
                <label className={labelClass}>TikTok Shop URL</label>
                <div className="relative mt-1.5">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                    <LinkIcon className="text-[#9CA3AF]" size={18} strokeWidth={1.75} />
                  </div>
                  <input
                    type="url"
                    value={tiktokUrl}
                    onChange={(e) => setTiktokUrl(e.target.value)}
                    placeholder="https://shop.tiktok.com/..."
                    className={`${inputClass} pl-10`}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>Brand Bio</label>
                <p className="mt-0.5 text-[11px]" style={{ color: TEXT_MUTED }}>
                  1–2 sentences shown to affiliates
                </p>
                <div className="relative mt-1.5">
                  <textarea
                    value={bio}
                    onChange={(e) => handleBioChange(e.target.value)}
                    placeholder="Tell affiliates what your brand is about..."
                    rows={4}
                    style={{ minHeight: 96 }}
                    className={`${inputClass} resize-none py-2.5 pb-7 align-top`}
                  />
                  <span
                    className="pointer-events-none absolute bottom-2 right-3 text-[11px]"
                    style={{ color: TEXT_MUTED }}
                  >
                    {bio.length} / {BIO_MAX}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 — Contact */}
          <div
            className="rounded-[16px] border bg-white p-6"
            style={{ borderColor: CARD_BORDER, boxShadow: CARD_SHADOW }}
          >
            <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-base font-bold" style={{ color: TEXT_PRIMARY }}>
                  Contact Details
                </h2>
                <p className="mt-1 text-[13px] font-normal" style={{ color: TEXT_SECONDARY }}>
                  Internal only — not shown to affiliates
                </p>
              </div>
              <span
                className="shrink-0 rounded-full text-[11px] font-semibold"
                style={{
                  backgroundColor: "#F3F4F6",
                  color: TEXT_SECONDARY,
                  padding: "3px 10px",
                }}
              >
                Internal Only
              </span>
            </div>

            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>Contact Name</label>
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Full name"
                    className={`${inputClass} mt-1.5`}
                  />
                </div>
                <div>
                  <label className={labelClass}>Job Title</label>
                  <input
                    type="text"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    placeholder="e.g. Marketing Manager"
                    className={`${inputClass} mt-1.5`}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>Email Address</label>
                <div className="relative mt-1.5">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                    <Mail className="text-[#9CA3AF]" size={18} strokeWidth={1.75} />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="contact@yourbrand.com"
                    className={`${inputClass} pl-10`}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>Phone Number</label>
                <div className="relative mt-1.5">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                    <Phone className="text-[#9CA3AF]" size={18} strokeWidth={1.75} />
                  </div>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className={`${inputClass} pl-10`}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-1">
            <button
              type="button"
              onClick={() => {}}
              className="rounded-[10px] bg-[#1E1B4B] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2D2A7A]"
            >
              Save Changes
            </button>
          </div>

          {/* Card 3 — Preview */}
          <div
            className="rounded-[16px] border bg-white p-6"
            style={{ borderColor: CARD_BORDER, boxShadow: CARD_SHADOW }}
          >
            <div className="mb-5">
              <h2 className="text-base font-bold" style={{ color: TEXT_PRIMARY }}>
                Affiliate View Preview
              </h2>
              <p className="mt-1 text-[13px] font-normal" style={{ color: TEXT_SECONDARY }}>
                This is what affiliates see on your public profile
              </p>
            </div>

            <div
              className="rounded-xl p-5"
              style={{ backgroundColor: "#F9FAFB" }}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                {logoPreview ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={logoPreview}
                    alt=""
                    className="h-16 w-16 shrink-0 rounded-full object-cover"
                  />
                ) : (
                  <div
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                    style={{ backgroundColor: "#E879A0" }}
                  >
                    {initials}
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <p className="text-base font-bold" style={{ color: TEXT_PRIMARY }}>
                    {companyName.trim() || "Your company name"}
                  </p>
                  {tiktokUrl.trim() ? (
                    <a
                      href={tiktokUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-sm font-medium break-all underline-offset-2 hover:underline"
                      style={{ color: LINK_PREVIEW }}
                    >
                      {tiktokUrl}
                    </a>
                  ) : (
                    <p className="mt-2 text-sm" style={{ color: TEXT_MUTED }}>
                      TikTok Shop link not set
                    </p>
                  )}
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: TEXT_SECONDARY }}>
                    {bio.trim() || "No bio yet — add a short description in Public Profile."}
                  </p>
                </div>
              </div>
              <p
                className="mt-5 border-t pt-4 text-xs italic"
                style={{ color: TEXT_MUTED, borderColor: CARD_BORDER }}
              >
                ℹ Contact details are never shown to affiliates
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
