"use client";

import Link from "next/link";
import { ArrowLeft, User, Video, Clock, DollarSign, Gift, Copy, Zap, CheckCircle2, XCircle } from "lucide-react";

export default function CampaignDetail() {
  const campaign = {
    id: "glowlab-serum",
    name: "GlowLab Serum Campaign",
    product: "GlowLab Serum",
    dates: "Mar 10, 2026 – Mar 31, 2026",
    daysRemaining: 6,
    optIns: 34,
    videos: 18,
    commission: "14% via TikTok Shop",
    minVideos: "Minimum 1 video during campaign dates.",
    prizePool: "iPad, Apple Watch — raffle among all qualifying participants.",
    url: "https://shop.tiktok.com/view/product/glowlab-serum-123456",
  };

  const NAVY = "#1E1B4B";
  const PINK = "#F43F5E";
  const BORDER = "#E5E7EB";

  return (
    <div className="flex h-full flex-col bg-[#FAFAFA]">
      {/* Top bar — Figma */}
      <div className="z-10 flex shrink-0 items-center justify-between border-b border-[#E5E7EB] bg-white px-8 py-5 shadow-sm">
        <div className="flex items-center gap-3">
          <Link
            href="/brand/dashboard"
            className="flex items-center gap-2 text-sm font-medium text-[#6B7280] transition-colors hover:text-[#1E1B4B]"
          >
            <ArrowLeft size={16} />
            <span>Campaigns</span>
          </Link>
          <span className="text-[#D1D5DB]">/</span>
          <h1 className="text-base font-bold" style={{ color: NAVY }}>
            {campaign.name}
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="rounded-lg border bg-white px-5 py-2 text-sm font-medium text-[#6B7280] shadow-sm transition-colors hover:border-[#D1D5DB] hover:text-[#374151]"
            style={{ borderColor: BORDER }}
          >
            Edit Campaign
          </button>
          <button
            type="button"
            className="rounded-lg px-5 py-2 text-sm font-medium transition-colors hover:opacity-90"
            style={{ color: PINK }}
          >
            Close Campaign
          </button>
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto">
          <div className="mx-auto w-full max-w-[1200px] px-8 py-8">
            {/* Top card: campaign left + stats right */}
            <div
              className="mb-6 flex flex-col gap-8 rounded-xl border bg-white p-6 lg:flex-row lg:items-start lg:justify-between lg:gap-8 lg:rounded-[12px]"
              style={{ borderColor: BORDER }}
            >
              <div className="min-w-0 flex-1">
                <h2 className="mb-2 text-3xl font-bold leading-tight" style={{ color: NAVY }}>
                  {campaign.name}
                </h2>
                <p className="mb-4 text-base text-[#6B7280]">{campaign.product}</p>
                <div className="mb-6 flex flex-wrap gap-2">
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Active
                  </span>
                  <span className="rounded-full bg-[#F3F4F6] px-3 py-1 text-xs font-semibold text-[#6B7280]">
                    Beauty
                  </span>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Open Plan
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-[#6B7280]">
                  <CalendarIcon size={16} />
                  {campaign.dates}
                </div>
              </div>

              <div className="flex shrink-0 flex-wrap gap-4 lg:flex-nowrap">
                <div className="flex w-[140px] flex-col justify-between rounded-xl border border-pink-100 bg-pink-50/80 p-6">
                  <User size={20} className="mb-2 text-pink-400" strokeWidth={2} />
                  <div>
                    <div className="text-3xl font-bold" style={{ color: NAVY }}>
                      {campaign.optIns}
                    </div>
                    <div className="text-xs font-medium text-[#6B7280]">Opt-Ins</div>
                  </div>
                </div>
                <div className="flex w-[150px] flex-col justify-between rounded-xl border border-cyan-100 bg-cyan-50/80 p-6">
                  <Video size={20} className="mb-2 text-cyan-500" strokeWidth={2} />
                  <div>
                    <div className="text-3xl font-bold" style={{ color: NAVY }}>
                      {campaign.videos}
                    </div>
                    <div className="whitespace-nowrap text-xs font-medium text-[#6B7280]">Videos Submitted</div>
                  </div>
                </div>
                <div className="flex w-[140px] flex-col justify-between rounded-xl border border-amber-100 bg-amber-50/80 p-6">
                  <Clock size={20} className="mb-2 text-amber-500" strokeWidth={2} />
                  <div>
                    <div className="text-3xl font-bold" style={{ color: NAVY }}>
                      {campaign.daysRemaining}
                    </div>
                    <div className="text-xs font-medium text-[#6B7280]">Days Remaining</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom: ~65% left column | ~35% Participation Summary */}
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
              <div className="min-w-0 flex-1 space-y-6 lg:max-w-[calc(100%-24px-380px)]">
                {/* Affiliate Terms */}
                <div className="rounded-[12px] border bg-white p-6" style={{ borderColor: BORDER }}>
                  <h2 className="mb-8 text-xl font-bold" style={{ color: NAVY }}>
                    Affiliate Terms
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pink-50">
                        <DollarSign size={20} className="text-pink-400" strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold" style={{ color: NAVY }}>
                          Commission Rate
                        </h3>
                        <p className="mt-0.5 text-sm text-[#6B7280]">{campaign.commission}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-50">
                        <Video size={20} className="text-cyan-500" strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold" style={{ color: NAVY }}>
                          Videos Required
                        </h3>
                        <p className="mt-0.5 text-sm text-[#6B7280]">{campaign.minVideos}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-50">
                        <Gift size={20} className="text-purple-400" strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold" style={{ color: NAVY }}>
                          Prize Pool
                        </h3>
                        <p className="mt-0.5 text-sm text-[#6B7280]">{campaign.prizePool}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-100">
                        <TikTokGlyph size={18} className="text-[#1E1B4B]" />
                      </div>
                      <div className="w-full min-w-0">
                        <h3 className="text-sm font-bold" style={{ color: NAVY }}>
                          Opt-In URL
                        </h3>
                        <div className="mt-2 flex w-full items-center justify-between rounded-lg border border-[#F3F4F6] bg-[#F9FAFB] px-3 py-2">
                          <span className="truncate pr-4 text-sm text-[#6B7280]">{campaign.url}</span>
                          <button type="button" className="shrink-0 transition-opacity hover:opacity-80" style={{ color: PINK }}>
                            <Copy size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Brief */}
                <div className="rounded-[12px] border bg-white p-6" style={{ borderColor: BORDER }}>
                  <h2 className="mb-8 text-xl font-bold" style={{ color: NAVY }}>
                    Content Brief
                  </h2>
                  <div className="mb-8 border-b pb-8" style={{ borderColor: BORDER }}>
                    <h3 className="mb-3 text-sm font-bold" style={{ color: NAVY }}>
                      Product Overview
                    </h3>
                    <p className="text-sm leading-relaxed text-[#374151]">
                      GlowLab Serum is a premium vitamin-enriched skincare solution designed to boost radiance and improve
                      skin texture. Perfect for morning and evening routines, it absorbs quickly and delivers visible
                      results within 2 weeks.
                    </p>
                  </div>
                  <div className="mb-8 border-b pb-8" style={{ borderColor: BORDER }}>
                    <h3 className="mb-4 text-sm font-bold" style={{ color: NAVY }}>
                      Suggested Hooks
                    </h3>
                    <div className="space-y-3">
                      {[
                        "Wake up with glass skin…",
                        "The serum that gave me my glow back…",
                        "POV: You finally found a serum…",
                      ].map((hook, i) => (
                        <div
                          key={i}
                          className="flex gap-3 rounded-[8px] p-4 text-sm font-medium text-[#374151]"
                          style={{ backgroundColor: "#FFF1F2" }}
                        >
                          <Zap size={18} className="mt-0.5 shrink-0" strokeWidth={2} style={{ color: PINK }} />
                          {hook}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mb-8 border-b pb-8" style={{ borderColor: BORDER }}>
                    <h3 className="mb-4 text-sm font-bold" style={{ color: NAVY }}>
                      Key Angles
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {["Morning routine", "Before & After", "Ingredient focus", "Glass skin"].map(
                        (angle) => (
                          <span
                            key={angle}
                            className="shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold text-[#374151]"
                            style={{ backgroundColor: "#F3F4F6" }}
                          >
                            {angle}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-4 text-sm font-bold" style={{ color: NAVY }}>
                      Content Guidelines
                    </h3>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                      <div>
                        <div className="mb-4 flex items-center gap-2 font-bold text-emerald-600">
                          <CheckCircle2 size={18} />
                          Do
                        </div>
                        <ul className="space-y-3">
                          {[
                            "Show the product packaging clearly",
                            "Demonstrate application technique",
                            "Share genuine before/after results",
                            "Mention the vitamin-enriched formula",
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-[#374151]">
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="mb-4 flex items-center gap-2 font-bold" style={{ color: PINK }}>
                          <XCircle size={18} />
                          Don&apos;t
                        </div>
                        <ul className="space-y-3">
                          {[
                            "Don't make medical claims",
                            "Avoid harsh lighting that distorts skin tone",
                            "Don't compare to competitor products",
                            "No stock footage or reposted content",
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-[#374151]">
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: PINK }} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Participation Summary — Figma right rail */}
              <aside className="w-full shrink-0 lg:sticky lg:top-8 lg:w-[380px]">
                <div
                  className="rounded-[12px] bg-white p-6 text-center"
                  style={{ border: `1.5px solid ${NAVY}` }}
                >
                  <h2 className="mb-6 text-center text-lg font-bold" style={{ color: NAVY }}>
                    Participation Summary
                  </h2>
                  <div className="mb-1 text-6xl font-bold leading-none tracking-tight" style={{ color: NAVY }}>
                    {campaign.optIns}
                  </div>
                  <div className="mb-8 text-sm font-medium text-[#6B7280]">affiliates opted in</div>
                  <div className="mb-3 h-2.5 w-full overflow-hidden rounded-full bg-[#E5E7EB]">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${Math.min(100, (campaign.videos / campaign.optIns) * 100)}%`,
                        backgroundColor: PINK,
                      }}
                    />
                  </div>
                  <div className="mb-8 flex justify-between text-xs font-semibold">
                    <span className="text-emerald-600">{campaign.videos} videos submitted</span>
                    <span className="text-[#6B7280]">{campaign.optIns - campaign.videos} still to submit</span>
                  </div>
                  <Link
                    href={`/brand/campaigns/${campaign.id}/participation`}
                    className="mb-4 flex w-full items-center justify-center rounded-[8px] py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: PINK }}
                  >
                    View All Participants →
                  </Link>
                  <p className="text-center text-xs font-medium text-[#9CA3AF]">Campaign closes Mar 31, 2026</p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CalendarIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );
}

function TikTokGlyph({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}
