"use client";

import Link from "next/link";
import { ArrowLeft, User, Video, Clock, Search, ChevronDown, ExternalLink } from "lucide-react";

export default function ParticipationView() {
  const tableData = [
    { handle: "@sarahcreates", niche: "Beauty & Lifestyle", date: "Mar 11, 2026", status: "Video Submitted", videoLink: "tiktok.com/sarahcreates/v...", color: "emerald" },
    { handle: "@techwithtom", niche: "Tech & Gadgets", date: "Mar 12, 2026", status: "Pending Submission", videoLink: "", color: "amber" },
    { handle: "@glowguru", niche: "Skincare", date: "Mar 13, 2026", status: "Video Submitted", videoLink: "tiktok.com/glowguru/vide...", color: "emerald" },
    { handle: "@dailywithdan", niche: "Lifestyle", date: "Mar 14, 2026", status: "Pending Submission", videoLink: "", color: "amber" },
    { handle: "@beautybynia", niche: "Beauty", date: "Mar 15, 2026", status: "Video Submitted", videoLink: "tiktok.com/beautybynia/vi...", color: "emerald" },
    { handle: "@fitandfresh", niche: "Lifestyle", date: "Mar 16, 2026", status: "Pending Submission", videoLink: "", color: "amber" },
    { handle: "@moodboardmeg", niche: "Fashion", date: "Mar 17, 2026", status: "Video Submitted", videoLink: "tiktok.com/moodboardme...", color: "emerald" },
    { handle: "@techreviewkai", niche: "Tech", date: "Mar 18, 2026", status: "Pending Submission", videoLink: "", color: "amber" },
  ];

  return (
    <div className="flex flex-col h-full bg-white relative">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-8 py-5 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-2">
          <Link
            href="/brand/campaigns/glowlab-serum"
            className="text-gray-400 hover:text-[#1a1a6e] transition-colors font-medium text-sm mr-2"
          >
            Campaigns
          </Link>
          <span className="text-gray-300">/</span>
          <Link
            href="/brand/campaigns/glowlab-serum"
            className="text-gray-400 hover:text-[#1a1a6e] transition-colors font-medium text-sm mx-2"
          >
            GlowLab Serum Campaign
          </Link>
          <span className="text-gray-300">/</span>
          <h1 className="text-base font-bold text-[#1a1a6e] ml-2">Participation</h1>
        </div>
      </div>

      <div className="overflow-y-auto">
        <div className="p-8 pb-32">
          {/* Top Stats Bar */}
          <div className="flex justify-center gap-20 mb-10 w-full bg-[#f4f5f9] rounded-2xl py-8 px-8">
            {/* Affiliates Opted In */}
            <div className="flex items-center gap-5">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: "#1e1b4b" }}
              >
                <User size={24} className="text-white" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-[32px] font-bold text-[#1e1b4b] leading-none mb-1">34</div>
                <div className="text-[14px] text-[#5e6a82] font-medium leading-tight">Affiliates Opted In</div>
              </div>
            </div>

            {/* Videos Submitted */}
            <div className="flex items-center gap-5">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: "#e23a5b" }}
              >
                <Video size={24} className="text-white" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-[32px] font-bold text-[#1e1b4b] leading-none mb-1">18</div>
                <div className="text-[14px] text-[#5e6a82] font-medium leading-tight">Videos Submitted</div>
              </div>
            </div>

            {/* Days Remaining */}
            <div className="flex items-center gap-5">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: "#697284" }}
              >
                <Clock size={24} className="text-white" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-[32px] font-bold text-[#1e1b4b] leading-none mb-1">6</div>
                <div className="text-[14px] text-[#5e6a82] font-medium leading-tight">Days Remaining</div>
              </div>
            </div>
          </div>


          {/* Controls */}
          <div className="flex justify-between items-center mb-6">
            <div className="relative w-[360px]">
              <Search size={18} className="absolute left-4 top-3.5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by TikTok handle or niche..."
                className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#1a1a6e] text-sm text-gray-900"
              />
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <select className="appearance-none pl-4 pr-10 py-3 rounded-lg border border-gray-200 text-sm font-medium text-[#1a1a6e] focus:outline-none focus:border-[#1a1a6e] bg-white cursor-pointer w-28">
                  <option value="all">All</option>
                  <option value="submitted">Submitted</option>
                  <option value="pending">Pending</option>
                </select>
                <ChevronDown size={16} className="absolute right-4 top-3.5 text-gray-400 pointer-events-none" />
              </div>

              <div className="relative">
                <select className="appearance-none pl-4 pr-10 py-3 rounded-lg border border-gray-200 text-sm font-medium text-[#1a1a6e] focus:outline-none focus:border-[#1a1a6e] bg-white cursor-pointer select-none">
                  <option value="date">Opt-In Date</option>
                  <option value="handle">Handle</option>
                  <option value="niche">Niche</option>
                </select>
                <ChevronDown size={16} className="absolute right-4 top-3.5 text-gray-400 pointer-events-none" />
              </div>

              <div className="text-sm text-gray-400 font-medium ml-2">
                Showing 34 affiliates
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white border top-2 border-gray-100 rounded-xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <th className="px-6 py-4 text-xs font-bold text-[#1a1a6e] uppercase">TikTok Handle</th>
                    <th className="px-6 py-4 text-xs font-bold text-[#1a1a6e] uppercase">Content Niche</th>
                    <th className="px-6 py-4 text-xs font-bold text-[#1a1a6e] uppercase">Opt-In Date</th>
                    <th className="px-6 py-4 text-xs font-bold text-[#1a1a6e] uppercase">Status</th>
                    <th className="px-6 py-4 text-xs font-bold text-[#1a1a6e] uppercase">Video Submission</th>
                    <th className="px-6 py-4 text-xs font-bold text-[#1a1a6e] uppercase text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {tableData.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-5 text-sm font-bold text-[#1a1a6e]">{row.handle}</td>
                      <td className="px-6 py-5 text-sm font-medium text-gray-600">{row.niche}</td>
                      <td className="px-6 py-5 text-sm font-medium text-gray-500">{row.date}</td>
                      <td className="px-6 py-5">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${row.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                          }`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        {row.videoLink ? (
                          <div className="flex items-center gap-1.5 text-sm font-medium text-gray-400 group cursor-pointer">
                            <span className="group-hover:text-gray-600 transition-colors">{row.videoLink}</span>
                            <ExternalLink size={14} className="group-hover:text-gray-600 transition-colors" />
                          </div>
                        ) : (
                          <span className="text-gray-300 font-bold">—</span>
                        )}
                      </td>
                      <td className="px-6 py-5 text-right">
                        {row.videoLink ? (
                          <button className="text-sm font-bold text-[#e8445a] hover:opacity-80 transition-opacity">
                            View Video
                          </button>
                        ) : (
                          <span className="text-gray-300 font-bold pr-6">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Footer */}
            <div className="border-t border-gray-100 px-6 py-4 flex items-center justify-between text-sm">
              <div className="flex items-center gap-1">
                <button className="text-gray-400 font-medium px-2 py-1 flex items-center hover:text-gray-600 mr-2 disabled:opacity-50">
                  ← Previous
                </button>
                {[1, 2, 3, 4, 5].map(page => (
                  <button
                    key={page}
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${page === 1
                      ? 'bg-[#1a1a6e] text-white'
                      : 'text-gray-500 hover:bg-gray-100'
                      }`}
                  >
                    {page}
                  </button>
                ))}
                <button className="text-gray-500 font-medium px-2 py-1 flex items-center hover:text-gray-800 ml-2">
                  Next →
                </button>
              </div>
              <div className="text-gray-400 font-medium text-sm">
                34 affiliates across 5 pages
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
