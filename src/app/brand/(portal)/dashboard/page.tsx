"use client";

import Link from "next/link";
import { useState } from "react";
import { Users, Video, Megaphone, TrendingUp, Plus } from "lucide-react";

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
    <div className="flex flex-col h-full bg-[#f8f9fc]">
      {/* Top Header */}
      <div className="bg-white border-b border-gray-100 px-8 py-5 flex items-center justify-between z-20 shadow-sm shrink-0">
        <h1 className="text-2xl font-bold text-[#1a1a6e]">Campaign Manager</h1>
        <Link
          href="/brand/campaigns/create"
          className="bg-[#e8445a] hover:bg-[#d63d52] text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-all flex items-center gap-2 shadow-sm"
        >
          <Plus size={18} strokeWidth={3} />
          Create Campaign
        </Link>
      </div>

      {/* Tabs Row */}
      <div className="px-8 bg-white flex items-center gap-8 border-b border-gray-100 shrink-0">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`py-4 flex items-center gap-2 text-sm font-bold transition-all relative ${activeTab === tab.name
              ? "text-[#e8445a]"
              : "text-gray-400 hover:text-gray-600"
              }`}
          >
            {tab.name}
            <span
              className={`text-[10px] px-2 py-0.5 rounded-full flex items-center justify-center font-bold ${activeTab === tab.name
                ? "bg-[#e8445a]/10 text-[#e8445a]"
                : "bg-gray-100 text-gray-500"
                }`}
            >
              {tab.count}
            </span>
            {activeTab === tab.name && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#e8445a] rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 gap-8 overflow-hidden">
        {/* Campaign Inventory Grid */}
        <div className="flex-1 overflow-y-auto p-8 pr-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCampaigns.map((campaign) => (
              <div
                key={campaign.id}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                {/* Badge top right inside card */}
                <span
                  className={`absolute top-4 right-4 text-[10px] font-bold px-3 py-1 rounded-full ${campaign.status === "Active"
                    ? "bg-emerald-50 text-emerald-600"
                    : campaign.status === "Draft"
                      ? "bg-gray-100 text-gray-400"
                      : "bg-[#1a1a6e] text-white"
                    }`}
                >
                  {campaign.status}
                </span>

                <h3 className="font-bold text-[#1a1a6e] text-lg leading-snug mb-0.5 pr-14">
                  {campaign.name}
                </h3>
                <p className="text-gray-400 text-sm font-medium mb-6">{campaign.product}</p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#1a1a6e]">
                    <Users size={16} className="text-gray-300" />
                    <span>{campaign.optIns} Opt-Ins</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-[#1a1a6e]">
                    <Video size={16} className="text-gray-300" />
                    <span>{campaign.videos} Videos Submitted</span>
                  </div>
                </div>

                <p className="text-[11px] text-gray-300 font-bold mb-8">
                  {campaign.dates}
                </p>

                <div className="flex items-center gap-6 pt-5 border-t border-gray-100 text-sm font-bold">
                  <Link
                    href={`/brand/campaigns/${campaign.id}`}
                    className="text-[#1a1a6e] hover:text-[#e8445a] transition-colors"
                  >
                    View
                  </Link>
                  <Link
                    href={`/brand/campaigns/${campaign.id}/participation`}
                    className="text-[#e8445a] hover:opacity-80 transition-opacity"
                  >
                    Participation
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Stats Right Panel */}
        <div className="w-[280px] shrink-0 space-y-5 hidden xl:block overflow-y-auto py-8 pr-8">
          <div className="bg-white border border-gray-200 rounded-xl p-7 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center">
                <Users size={22} className="text-gray-400" />
              </div>
              <TrendingUp size={18} className="text-emerald-500" />
            </div>
            <div className="text-4xl font-bold text-[#1a1a6e] mb-1">105</div>
            <div className="text-sm font-bold text-gray-400">Total Opt-Ins</div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-7 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center">
                <Video size={22} className="text-gray-400" />
              </div>
              <TrendingUp size={18} className="text-emerald-500" />
            </div>
            <div className="text-4xl font-bold text-[#1a1a6e] mb-1">53</div>
            <div className="text-sm font-bold text-gray-400">Videos Submitted</div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-7 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center">
                <Megaphone size={22} className="text-gray-400" />
              </div>
              <TrendingUp size={18} className="text-emerald-500" />
            </div>
            <div className="text-4xl font-bold text-[#1a1a6e] mb-1">3</div>
            <div className="text-sm font-bold text-gray-400">Active Campaigns</div>
          </div>
        </div>
      </div>
    </div>
  );
}
