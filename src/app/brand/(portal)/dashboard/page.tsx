"use client";

import Link from "next/link";
import { useState } from "react";
import { Users, Video, Megaphone, TrendingUp, Plus } from "lucide-react";

/** Brand / Figma campaign card tokens */
const NAVY_SOFT = "#1a1a6e";
const CARD_BORDER = "#E5E7EB";
const ACTIVE_BADGE_BG = "#E6F4EA";
const ACTIVE_BADGE_TEXT = "#1E8E3E";
const CARD_SUBTITLE = "#6B7280";
const CARD_DATE = "#9CA3AF";
const CARD_STAT = "#1a1a6e";
/** Figma: Participation link magenta */
const PINK_ACTION = "#E91E63";

/** Right-panel metric cards (Figma) */
const STAT_CARD_BORDER = "#EAECF4";
const STAT_NUMBER_COLOR = "#1E1B4B";
const STAT_ICON_MUTED = "#B0B4C0";
const STAT_TREND_GREEN = "#22C55E";
const STAT_LABEL_COLOR = "#6B7280";
const STAT_CARD_SHADOW = "0px 1px 6px rgba(0, 0, 0, 0.05)";

export default function BrandDashboard() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    { name: "All", count: 6 },
    { name: "Active", count: 3 },
    { name: "Draft", count: 2 },
    { name: "Closed", count: 1 },
  ];

  const campaigns = [
    {
      id: "glowlab-serum",
      name: "GlowLab Serum Campaign",
      product: "Radiance Boost Serum",
      status: "Active",
      optIns: 34,
      videos: 18,
      dates: "Jan 15 - Mar 30, 2026",
    },
    {
      id: "vitamin-c",
      name: "Vitamin C Launch",
      product: "Vitamin C Brightening Drops",
      status: "Active",
      optIns: 12,
      videos: 4,
      dates: "Feb 1 - Apr 15, 2026",
    },
    {
      id: "face-mist",
      name: "Face Mist Spring Push",
      product: "Hydrating Face Mist",
      status: "Draft",
      optIns: 0,
      videos: 0,
      dates: "Mar 20 - May 30, 2026",
    },
    {
      id: "lip-butter",
      name: "Lip Butter Q2",
      product: "Nourishing Lip Butter",
      status: "Active",
      optIns: 8,
      videos: 2,
      dates: "Feb 10 - Apr 20, 2026",
    },
    {
      id: "summer-glow",
      name: "Summer Glow Bundle",
      product: "Complete Summer Kit",
      status: "Closed",
      optIns: 51,
      videos: 29,
      dates: "Dec 1, 2025 - Feb 28, 2026",
    },
  ];

  const filteredCampaigns =
    activeTab === "All"
      ? campaigns
      : campaigns.filter((c) => c.status === activeTab);

  return (
    <div className="flex h-full flex-col bg-[#f8f9fc]">
      {/* Top Header */}
      <div className="z-20 flex shrink-0 items-center justify-between border-b border-gray-100 bg-white px-8 py-5 shadow-sm">
        <h1
          className="text-[28px] font-bold leading-tight"
          style={{ color: NAVY_SOFT }}
        >
          Campaign Manager
        </h1>
        <Link
          href="/brand/campaigns/create"
          className="inline-flex min-h-[44px] items-center justify-center gap-2.5 rounded-[12px] bg-[#E91E63] px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#D81B60] active:bg-[#C2185B]"
        >
          <Plus size={20} strokeWidth={2.25} className="shrink-0 text-white" aria-hidden />
          Create Campaign
        </Link>
      </div>

      {/* Tabs Row */}
      <div className="flex shrink-0 items-center gap-10 border-b border-gray-100 bg-white px-8">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            type="button"
            onClick={() => setActiveTab(tab.name)}
            className={`relative flex items-center gap-2 py-4 text-sm font-bold transition-colors ${
              activeTab === tab.name
                ? "text-[#e8445a]"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.name}
            <span
              className={`flex h-5 min-w-[20px] items-center justify-center rounded-full px-1.5 text-[10px] font-bold ${
                activeTab === tab.name
                  ? "bg-[#e8445a]/10 text-[#e8445a]"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              {tab.count}
            </span>
            {activeTab === tab.name && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#e8445a]" />
            )}
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 gap-5 overflow-hidden">
        {/* Campaign grid uses full main column width */}
        <div className="min-w-0 flex-1 overflow-y-auto p-8 pr-4">
          <div className="grid w-full max-w-none grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredCampaigns.map((campaign) => (
                <article
                  key={campaign.id}
                  className="flex min-h-0 min-w-0 w-full flex-col rounded-xl border bg-white p-6 transition-shadow hover:shadow-sm"
                  style={{ borderColor: CARD_BORDER }}
                >
                  {/* Status pill — Figma: #E6F4EA bg, #1E8E3E text, 12px semibold (not extrabold) */}
                  <div className="mb-3 flex w-full justify-end">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold leading-none ${
                        campaign.status === "Draft"
                          ? "bg-gray-100 text-gray-700"
                          : campaign.status === "Closed"
                            ? "bg-[#1a1a6e] text-white"
                            : ""
                      }`}
                      style={
                        campaign.status === "Active"
                          ? { backgroundColor: ACTIVE_BADGE_BG, color: ACTIVE_BADGE_TEXT }
                          : undefined
                      }
                    >
                      {campaign.status}
                    </span>
                  </div>

                  {/* Title — ~20px (text-xl), bold navy; clear separation under badge row */}
                  <h2
                    className="mb-2 min-w-0 text-xl font-bold leading-snug tracking-tight"
                    style={{ color: NAVY_SOFT }}
                  >
                    {campaign.name}
                  </h2>

                  {/* Subtitle — 16px regular, #6B7280; 8px under title */}
                  <p
                    className="mb-6 text-base font-normal leading-snug"
                    style={{ color: CARD_SUBTITLE }}
                  >
                    {campaign.product}
                  </p>

                  {/* Stats — icon vertically centered with text block; Opt‑Ins uses hyphen so it never splits opt/ins */}
                  <div
                    className="mb-4 grid min-w-0 grid-cols-2 gap-x-6 sm:gap-x-7"
                    style={{ color: CARD_STAT }}
                  >
                    <div className="flex min-w-0 items-center gap-2">
                      <Users
                        size={16}
                        className="shrink-0"
                        strokeWidth={1.75}
                        style={{ color: CARD_STAT }}
                      />
                      <div className="min-w-0 leading-[1.15] hyphens-none">
                        <p className="text-[15px] font-medium tabular-nums">{campaign.optIns}</p>
                        <p className="text-[15px] font-medium whitespace-nowrap">
                          Opt&#8209;Ins
                        </p>
                      </div>
                    </div>
                    <div className="flex min-w-0 items-center gap-2">
                      <Video
                        size={16}
                        className="shrink-0"
                        strokeWidth={1.75}
                        style={{ color: CARD_STAT }}
                      />
                      <div className="min-w-0 leading-[1.15] hyphens-none">
                        <p className="text-[15px] font-medium whitespace-nowrap">
                          {campaign.videos} Videos
                        </p>
                        <p className="text-[15px] font-medium whitespace-nowrap">
                          Submitted
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Date — 14px regular, #9CA3AF; ~16px above divider */}
                  <p
                    className="mb-0 text-sm font-normal leading-snug"
                    style={{ color: CARD_DATE }}
                  >
                    {campaign.dates}
                  </p>

                  {/* Divider + footer — ~20px pt; links semibold, ~32px gap, left group */}
                  <div className="mt-5 border-t border-gray-200 pt-5">
                    <div className="flex flex-wrap items-center gap-8">
                      <Link
                        href={`/brand/campaigns/${campaign.id}`}
                        className="text-sm font-semibold transition-colors hover:opacity-80"
                        style={{ color: NAVY_SOFT }}
                      >
                        View
                      </Link>
                      <Link
                        href={`/brand/campaigns/${campaign.id}/participation`}
                        className="text-sm font-semibold transition-opacity hover:opacity-85"
                        style={{ color: PINK_ACTION }}
                      >
                        Participation
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>

        {/* Global Stats Right Panel — Figma: white card, #E8ECF4 border, 16px radius, soft shadow */}
        <aside className="hidden w-[228px] shrink-0 flex-col gap-[14px] overflow-y-auto py-8 pr-3 xl:flex">
          <div
            className="flex flex-col rounded-[16px] border bg-white px-5 pb-5 pt-[22px]"
            style={{
              borderColor: STAT_CARD_BORDER,
              boxShadow: STAT_CARD_SHADOW,
            }}
          >
            <div className="mb-4 flex items-center justify-between">
              <Users size={22} strokeWidth={1.75} style={{ color: STAT_ICON_MUTED }} />
              <TrendingUp size={16} strokeWidth={2} style={{ color: STAT_TREND_GREEN }} />
            </div>
            <p
              className="mb-2 text-[32px] font-bold leading-none tracking-tight"
              style={{ color: STAT_NUMBER_COLOR }}
            >
              105
            </p>
            <p
              className="text-[13px] font-normal leading-snug"
              style={{ color: STAT_LABEL_COLOR }}
            >
              Total Opt-Ins
            </p>
          </div>

          <div
            className="flex flex-col rounded-[16px] border bg-white px-5 pb-5 pt-[22px]"
            style={{
              borderColor: STAT_CARD_BORDER,
              boxShadow: STAT_CARD_SHADOW,
            }}
          >
            <div className="mb-4 flex items-center justify-between">
              <Video size={22} strokeWidth={1.75} style={{ color: STAT_ICON_MUTED }} />
              <TrendingUp size={16} strokeWidth={2} style={{ color: STAT_TREND_GREEN }} />
            </div>
            <p
              className="mb-2 text-[32px] font-bold leading-none tracking-tight"
              style={{ color: STAT_NUMBER_COLOR }}
            >
              53
            </p>
            <p
              className="text-[13px] font-normal leading-snug"
              style={{ color: STAT_LABEL_COLOR }}
            >
              Videos Submitted
            </p>
          </div>

          <div
            className="flex flex-col rounded-[16px] border bg-white px-5 pb-5 pt-[22px]"
            style={{
              borderColor: STAT_CARD_BORDER,
              boxShadow: STAT_CARD_SHADOW,
            }}
          >
            <div className="mb-4 flex items-center justify-between">
              <Megaphone size={22} strokeWidth={1.75} style={{ color: STAT_ICON_MUTED }} />
              <TrendingUp size={16} strokeWidth={2} style={{ color: STAT_TREND_GREEN }} />
            </div>
            <p
              className="mb-2 text-[32px] font-bold leading-none tracking-tight"
              style={{ color: STAT_NUMBER_COLOR }}
            >
              3
            </p>
            <p
              className="text-[13px] font-normal leading-snug"
              style={{ color: STAT_LABEL_COLOR }}
            >
              Active Campaigns
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
