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



  return (
    <div className="flex flex-col h-full bg-[#fafafa]">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-8 py-5 flex items-center justify-between shadow-sm z-10 shrink-0">
        <div className="flex items-center gap-3">
          <Link
            href="/brand/dashboard"
            className="text-gray-400 hover:text-[#1a1a6e] transition-colors flex items-center gap-2 text-sm font-medium mr-1"
          >
            <ArrowLeft size={16} />
            <span>Campaigns</span>
          </Link>
          <span className="text-gray-300">/</span>
          <h1 className="text-base font-bold text-[#1a1a6e]">{campaign.name}</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-5 py-2 rounded-md font-medium text-sm text-gray-500 hover:text-[#1a1a6e] border border-gray-200 hover:border-gray-300 transition-colors bg-white shadow-sm">
            Edit Campaign
          </button>
          <button className="px-5 py-2 font-medium text-sm text-[#e8445a] hover:bg-[#e8445a]/5 rounded-md transition-colors">
            Close Campaign
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 overflow-y-auto">
          <div className="p-8 max-w-6xl mx-auto w-full">
            {/* Top Summary Banner */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-6 flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-[#1a1a6e] mb-2">{campaign.name}</h1>
                <p className="text-gray-500 text-base mb-4">{campaign.product}</p>
                <div className="flex gap-2 mb-6">
                  <span className="bg-emerald-50 text-emerald-600 text-xs font-bold px-3 py-1 rounded-full">{("Active").toUpperCase()}</span>
                  <span className="bg-gray-100 text-gray-500 text-xs font-bold px-3 py-1 rounded-full">{("Beauty").toUpperCase()}</span>
                  <span className="bg-emerald-50 text-emerald-600 text-xs font-bold px-3 py-1 rounded-full">{("Open Plan").toUpperCase()}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                  <CalendarIcon size={16} />
                  {campaign.dates}
                </div>
              </div>

              {/* Stat Cards */}
              <div className="flex gap-4">
                <div className="bg-pink-50/50 rounded-xl p-6 w-[140px] border border-pink-100/50 justify-between flex flex-col">
                  <User size={20} className="text-pink-400 mb-2" />
                  <div>
                    <div className="text-3xl font-bold text-[#1a1a6e]">{campaign.optIns}</div>
                    <div className="text-xs text-gray-500 font-medium">Opt-Ins</div>
                  </div>
                </div>
                <div className="bg-emerald-50/50 rounded-xl p-6 w-[150px] border border-emerald-100/50 justify-between flex flex-col">
                  <Video size={20} className="text-emerald-500 mb-2" />
                  <div>
                    <div className="text-3xl font-bold text-[#1a1a6e]">{campaign.videos}</div>
                    <div className="text-xs text-gray-500 font-medium whitespace-nowrap">Videos Submitted</div>
                  </div>
                </div>
                <div className="bg-amber-50/50 rounded-xl p-6 w-[140px] border border-amber-100/50 justify-between flex flex-col">
                  <Clock size={20} className="text-amber-500 mb-2" />
                  <div>
                    <div className="text-3xl font-bold text-[#1a1a6e]">{campaign.daysRemaining}</div>
                    <div className="text-xs text-gray-500 font-medium">Days Remaining</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              {/* Left Column Data */}
              <div className="flex-1 space-y-6">

                {/* Affiliate Terms */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                  <h2 className="text-xl font-bold text-[#1a1a6e] mb-8">Affiliate Terms</h2>

                  <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-lg bg-pink-50 flex items-center justify-center shrink-0">
                        <DollarSign size={20} className="text-pink-400" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-[#1a1a6e]">Commission Rate</h3>
                        <p className="text-gray-500 text-sm mt-0.5">{campaign.commission}</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                        <Video size={20} className="text-emerald-500" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-[#1a1a6e]">Videos Required</h3>
                        <p className="text-gray-500 text-sm mt-0.5">{campaign.minVideos}</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center shrink-0">
                        <Gift size={20} className="text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-[#1a1a6e]">Prize Pool</h3>
                        <p className="text-gray-500 text-sm mt-0.5">{campaign.prizePool}</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                        <span className="font-bold text-blue-500 text-lg">d</span>
                      </div>
                      <div className="w-full">
                        <h3 className="text-sm font-bold text-[#1a1a6e]">Opt-In URL</h3>
                        <div className="text-gray-500 text-sm mt-0.5 flex items-center justify-between bg-gray-50 px-3 py-2 rounded-md border border-gray-100 w-full mt-2">
                          <span className="truncate pr-4">{campaign.url}</span>
                          <button className="text-[#e8445a] hover:opacity-80 shrink-0">
                            <Copy size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Brief */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                  <h2 className="text-xl font-bold text-[#1a1a6e] mb-8">Content Brief</h2>

                  <div className="mb-8 border-b border-gray-100 pb-8">
                    <h3 className="text-sm font-bold text-[#1a1a6e] mb-3">Product Overview</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      GlowLab Serum is a premium vitamin-enriched skincare solution designed to boost radiance and improve skin texture. Perfect for morning and evening routines, it absorbs quickly and delivers visible results within 2 weeks.
                    </p>
                  </div>

                  <div className="mb-8 border-b border-gray-100 pb-8">
                    <h3 className="text-sm font-bold text-[#1a1a6e] mb-4">Suggested Hooks</h3>
                    <div className="space-y-3">
                      {[
                        "Wake up with glass skin using this 30-second routine",
                        "The serum that gave me my glow back in 2 weeks",
                        "POV: You finally found a serum that actually works"
                      ].map((hook, i) => (
                        <div key={i} className="bg-pink-50/30 border border-pink-100 rounded-lg p-4 flex gap-3 text-sm font-medium text-[#1a1a6e] shadow-sm">
                          <Zap size={18} className="text-[#e8445a] shrink-0 mt-0.5" />
                          {hook}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8 border-b border-gray-100 pb-8">
                    <h3 className="text-sm font-bold text-[#1a1a6e] mb-4">Key Angles</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Morning routine", "Before & After", "Ingredient focus", "Glass skin", "Get ready with me"].map(angle => (
                        <span key={angle} className="bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full text-xs font-semibold shrink-0">
                          {angle}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[#1a1a6e] mb-4">Content Guidelines</h3>
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <div className="flex items-center gap-2 text-emerald-600 font-bold mb-4">
                          <CheckCircle2 size={18} />
                          Do
                        </div>
                        <ul className="space-y-3">
                          {[
                            "Show the product packaging clearly",
                            "Demonstrate application technique",
                            "Share genuine before/after results",
                            "Mention the vitamin-enriched formula"
                          ].map((item, i) => (
                            <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-emerald-500 shrink-0 mt-2"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-[#e8445a] font-bold mb-4">
                          <XCircle size={18} />
                          Don&apos;t
                        </div>
                        <ul className="space-y-3">
                          {[
                            "Don't make medical claims",
                            "Avoid harsh lighting that distorts skin tone",
                            "Don't compare to competitor products",
                            "No stock footage or reposted content"
                          ].map((item, i) => (
                            <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-[#e8445a] shrink-0 mt-2"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div> {/* end scrollable left */}

        {/* Right Fixed Panel */}
        <div className="w-[420px] shrink-0 overflow-y-auto border-l border-gray-100 bg-white p-8">
          <div className="bg-white rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-[#1a1a6e]/10 p-8 text-center relative overflow-hidden">
            <h2 className="text-lg font-bold text-[#1a1a6e] mb-6">Participation Summary</h2>
            <div className="text-6xl font-bold text-[#1a1a6e] mb-1">34</div>
            <div className="text-gray-500 text-sm font-medium mb-8">affiliates opted in</div>
            <div className="w-full bg-gray-200 h-2.5 rounded-full mb-3 overflow-hidden flex">
              <div className="bg-[#e8445a] h-full rounded-full" style={{ width: '53%' }}></div>
            </div>
            <div className="flex justify-between text-xs font-semibold mb-8">
              <span className="text-emerald-500">18 videos submitted</span>
              <span className="text-gray-400">16 still to submit</span>
            </div>
            <Link
              href={`/brand/campaigns/glowlab-serum/participation`}
              className="flex justify-center items-center w-full py-3.5 bg-[#e8445a] hover:bg-[#d63d52] text-white rounded-md font-bold text-sm transition-colors mb-4 shadow-[0_4px_14px_0_rgba(232,68,90,0.39)]"
            >
              View All Participants →
            </Link>
            <div className="text-xs text-gray-400 font-medium">
              Campaign closes Mar 31, 2026
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
