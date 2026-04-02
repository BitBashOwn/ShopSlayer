"use client";

import Link from "next/link";
import { useState } from "react";
import { Users, Video, Megaphone, TrendingUp, Plus } from "lucide-react";

/** Softer Figma navy — avoids “black” harsh look vs #1e1b4b */
const NAVY_SOFT = "#1a1a6e";
const CARD_SUBTITLE = "#64748b";
const CARD_DATE = "#94a3b8";
const CARD_STAT = "#1a1a6e";
const CARD_STAT_LABEL = "#5b6078";
const PINK_ACTION = "#e11d48";

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
          className="flex items-center gap-2 rounded-lg bg-[#e8445a] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#d63d52]"
        >
          <Plus size={18} strokeWidth={3} />
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
      <div className="flex flex-1 gap-8 overflow-hidden">
        {/* Campaign Inventory Grid — gap-6 = 24px between cards (Figma) */}
        <div className="min-w-0 flex-1 overflow-y-auto p-8 pr-4">
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredCampaigns.map((campaign) => {
              const nameParts = campaign.name.trim().split(/\s+/);
              const lastWord = nameParts.length > 1 ? nameParts.pop()! : "";
              const nameHead = nameParts.join(" ");

              return (
                <article
                  key={campaign.id}
                  className="flex min-h-[280px] min-w-0 flex-col rounded-2xl border border-gray-200 bg-white px-6 pb-6 pt-9 shadow-[0_2px_12px_-4px_rgba(15,23,42,0.08)] transition-shadow hover:shadow-md"
                >
                  {/* Figma order: status badge row first (top-right), then title below — same on every card */}
                  <div className="mb-2 flex w-full justify-end">
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-bold leading-none ${
                        campaign.status === "Active"
                          ? "bg-[#E6F4EA] text-[#166534]"
                          : campaign.status === "Draft"
                            ? "bg-gray-100 text-gray-700"
                            : "bg-[#1a1a6e] text-white"
                      }`}
                    >
                      {campaign.status}
                    </span>
                  </div>

                  <h2
                    className="mb-1 min-w-0 text-xl font-bold leading-snug tracking-tight sm:text-[20px]"
                    style={{ color: NAVY_SOFT }}
                  >
                    {lastWord ? (
                      <>
                        <span className="whitespace-nowrap">{nameHead}</span>{" "}
                        <span className="inline-block">{lastWord}</span>
                      </>
                    ) : (
                      campaign.name
                    )}
                  </h2>

                  {/* Subtitle — directly under title, small gap (~4px via mb-1 on title) */}
                  <p
                    className="mb-5 text-sm font-normal leading-snug"
                    style={{ color: CARD_SUBTITLE }}
                  >
                    {campaign.product}
                  </p>

                  {/* Stats: number bold navy, label grey below (Figma) */}
                  <div className="mb-5 grid grid-cols-2 gap-x-8 gap-y-2">
                    <div className="flex min-w-0 items-start gap-2">
                      <Users
                        size={18}
                        className="mt-0.5 shrink-0 text-gray-400"
                        strokeWidth={1.75}
                      />
                      <div className="min-w-0 space-y-0.5">
                        <p
                          className="text-[15px] font-bold leading-none tracking-tight"
                          style={{ color: CARD_STAT }}
                        >
                          {campaign.optIns}
                        </p>
                        <p
                          className="text-[13px] font-normal leading-tight"
                          style={{ color: CARD_STAT_LABEL }}
                        >
                          Opt-Ins
                        </p>
                      </div>
                    </div>
                    <div className="flex min-w-0 items-start gap-2">
                      <Video
                        size={18}
                        className="mt-0.5 shrink-0 text-gray-400"
                        strokeWidth={1.75}
                      />
                      <div className="min-w-0 space-y-0.5">
                        <p
                          className="text-[15px] font-bold leading-tight"
                          style={{ color: CARD_STAT }}
                        >
                          {campaign.videos} Videos
                        </p>
                        <p
                          className="text-[13px] font-normal leading-tight"
                          style={{ color: CARD_STAT_LABEL }}
                        >
                          Submitted
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Date — readable grey, 14px; space above divider */}
                  <p
                    className="mb-4 mt-1 text-sm font-normal leading-snug"
                    style={{ color: CARD_DATE }}
                  >
                    {campaign.dates}
                  </p>

                  {/* Footer — Figma: View left, Participation right */}
                  <div className="border-t border-gray-100 pt-5">
                    <div className="flex w-full items-center justify-between gap-4">
                      <Link
                        href={`/brand/campaigns/${campaign.id}`}
                        className="text-sm font-bold transition-colors hover:opacity-80 sm:text-[15px]"
                        style={{ color: NAVY_SOFT }}
                      >
                        View
                      </Link>
                      <Link
                        href={`/brand/campaigns/${campaign.id}/participation`}
                        className="text-sm font-bold transition-opacity hover:opacity-85 sm:text-[15px]"
                        style={{ color: PINK_ACTION }}
                      >
                        Participation
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Global Stats Right Panel — large figure + medium grey label */}
        <aside className="hidden w-[300px] shrink-0 flex-col space-y-6 overflow-y-auto py-8 pr-8 xl:flex">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-start justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50">
                <Users size={22} className="text-gray-400" strokeWidth={1.75} />
              </div>
              <TrendingUp size={18} className="text-emerald-500" strokeWidth={2} />
            </div>
            <p
              className="mb-2 text-5xl font-bold leading-none tracking-tight"
              style={{ color: NAVY_SOFT }}
            >
              105
            </p>
            <p
              className="text-sm font-normal leading-snug"
              style={{ color: CARD_SUBTITLE }}
            >
              Total Opt-Ins
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-start justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50">
                <Video size={22} className="text-gray-400" strokeWidth={1.75} />
              </div>
              <TrendingUp size={18} className="text-emerald-500" strokeWidth={2} />
            </div>
            <p
              className="mb-2 text-5xl font-bold leading-none tracking-tight"
              style={{ color: NAVY_SOFT }}
            >
              53
            </p>
            <p
              className="text-sm font-normal leading-snug"
              style={{ color: CARD_SUBTITLE }}
            >
              Videos Submitted
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-start justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50">
                <Megaphone size={22} className="text-gray-400" strokeWidth={1.75} />
              </div>
              <TrendingUp size={18} className="text-emerald-500" strokeWidth={2} />
            </div>
            <p
              className="mb-2 text-5xl font-bold leading-none tracking-tight"
              style={{ color: NAVY_SOFT }}
            >
              3
            </p>
            <p
              className="text-sm font-normal leading-snug"
              style={{ color: CARD_SUBTITLE }}
            >
              Active Campaigns
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
