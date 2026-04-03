"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { CalendarDays, FolderOpen } from "lucide-react";
import BottomNav from "../../BottomNav";
import DesktopSidebarNav from "../../DesktopSidebarNav";
import { getVideoSubmissionHref, mobileCampaigns } from "../../mobileCampaignData";

type TabKey = "All" | "In Progress" | "Completed";

export default function MyCampaignsMain() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabKey>("All");

  const tabCounts = useMemo(
    () => ({
      All: mobileCampaigns.length,
      "In Progress": mobileCampaigns.filter((campaign) => campaign.filter === "In Progress").length,
      Completed: mobileCampaigns.filter((campaign) => campaign.filter === "Completed").length,
    }),
    [],
  );

  const visibleCampaigns = useMemo(() => {
    if (activeTab === "All") {
      return mobileCampaigns;
    }

    return mobileCampaigns.filter((campaign) => campaign.filter === activeTab);
  }, [activeTab]);

  const tabs: { label: TabKey; count: number }[] = [
    { label: "All", count: tabCounts.All },
    { label: "In Progress", count: tabCounts["In Progress"] },
    { label: "Completed", count: tabCounts.Completed },
  ];

  return (
    <div className="min-h-screen bg-[#f7f8fc] pb-20 lg:pb-0">
      <div className="mx-auto max-w-[1280px] lg:px-6 lg:py-8">
        <div className="lg:grid lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-8">
          <DesktopSidebarNav sectionLabel="My Campaigns">
            <div className="rounded-3xl bg-white/10 p-5">
              <p className="text-sm text-white/70">Current count</p>
              <p className="mt-3 text-4xl font-semibold">{tabCounts["In Progress"]}</p>
              <p className="mt-2 text-sm text-white/75">Active campaigns in your workspace</p>
            </div>
          </DesktopSidebarNav>

          <main className="min-h-screen bg-white lg:min-h-0 lg:rounded-[32px] lg:border lg:border-white/70 lg:shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
            <div className="border-b border-[#eceff5] px-4 py-4 lg:rounded-t-[32px] lg:px-8 lg:py-6">
              <div className="flex items-baseline gap-2">
                <h1 className="text-[28px] font-semibold text-[#20145f]">My Campaigns</h1>
                <span className="text-sm text-[#667085]">{tabCounts["In Progress"]} active</span>
              </div>

              <div className="mt-5 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:pb-0">
                {tabs.map((tab) => (
                  <button
                    key={tab.label}
                    type="button"
                    onClick={() => setActiveTab(tab.label)}
                    className={`relative whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      activeTab === tab.label
                        ? "bg-[#2D1B69] text-white"
                        : "bg-[#f2f4f7] text-[#667085]"
                    } lg:rounded-full`}
                  >
                    {tab.label} ({tab.count})
                    {activeTab === tab.label ? (
                      <span className="absolute -bottom-[10px] left-1/2 h-[3px] w-10 -translate-x-1/2 rounded-full bg-[#2D1B69] lg:hidden" />
                    ) : null}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4 px-4 py-5 lg:px-8 lg:py-8">
              {visibleCampaigns.map((campaign) => (
                <div
                  key={campaign.name}
                  className="overflow-hidden rounded-2xl border border-[#e7eaf2] bg-white shadow-sm"
                >
                  <div className="flex">
                    <div className={`w-1 ${campaign.accent}`} />
                    <div className="flex-1 p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <div
                            className={`flex h-10 w-10 items-center justify-center rounded-xl text-xs font-semibold text-white ${campaign.initialsBg}`}
                          >
                            {campaign.initials}
                          </div>
                          <div>
                            <h2 className="text-lg font-semibold leading-tight text-[#20145f]">
                              {campaign.name}
                            </h2>
                            <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-[#667085]">
                              <span>{campaign.brand}</span>
                              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-[#98a2b3]">
                                {campaign.niche}
                              </span>
                            </div>
                          </div>
                        </div>

                        <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${campaign.badge}`}>
                          {campaign.status}
                        </span>
                      </div>

                      <div className="mt-3 flex items-center gap-2 text-sm text-[#667085]">
                        <CalendarDays className="h-4 w-4" />
                        <span>{campaign.dates}</span>
                      </div>

                      <div className="mt-4 flex gap-3">
                        <Link
                          href={
                            campaign.filter === "Completed"
                              ? "/affiliate/Mobile_page/mobile/campaign-detail?view=summary&returnTo=my-campaigns"
                              : campaign.briefHref
                          }
                          className="flex-1 rounded-xl border border-[#20145f] px-4 py-3 text-center text-sm font-semibold text-[#20145f]"
                        >
                          {campaign.filter === "Completed" ? "View Summary" : "View Brief"}
                        </Link>

                        {campaign.filter === "In Progress" ? (
                          <button
                            type="button"
                            onClick={() => router.push(getVideoSubmissionHref(campaign.id))}
                            className="flex-1 rounded-xl bg-[#E83A7A] px-4 py-3 text-sm font-semibold text-white"
                          >
                            Submit Video 
                          </button>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {visibleCampaigns.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-[#d0d5dd] bg-[#fbfbfd] px-6 py-10">
                  <div className="text-center">
                    <FolderOpen className="mx-auto h-8 w-8 text-[#98a2b3]" />
                    <p className="mt-3 text-sm text-[#667085]">
                      No campaigns match this tab yet.
                    </p>
                  </div>
                </div>
              ) : null}

              <div className="hidden lg:flex lg:items-center lg:justify-center lg:rounded-2xl lg:border lg:border-dashed lg:border-[#d0d5dd] lg:bg-[#fbfbfd] lg:px-6 lg:py-10">
                <div className="text-center">
                  <FolderOpen className="mx-auto h-8 w-8 text-[#98a2b3]" />
                  <p className="mt-3 text-sm text-[#667085]">More campaign states can be linked here later.</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
