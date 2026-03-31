"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";
import { Video, Clock, AlertTriangle, MoveUpRight, Calendar, ChevronDown, CircleDot } from "lucide-react";

const lineData = [
  { name: "Mar 10", pv: 2 },
  { name: "Mar 11", pv: 3 },
  { name: "Mar 12", pv: 4 },
  { name: "Mar 13", pv: 5 },
  { name: "Mar 14", pv: 7 },
  { name: "Mar 15", pv: 9 },
  { name: "Mar 16", pv: 10 },
  { name: "Mar 17", pv: 11 },
  { name: "Mar 18", pv: 12 },
  { name: "Mar 19", pv: 11 },
  { name: "Mar 20", pv: 10 },
  { name: "Mar 21", pv: 9 },
  { name: "Mar 22", pv: 8 },
  { name: "Mar 23", pv: 7 },
  { name: "Mar 24", pv: 6 },
  { name: "Mar 25", pv: 5 },
];

const pieData = [
  { name: "Beauty", value: 44, color: "#e8445a" },
  { name: "Lifestyle", value: 24, color: "#8b5cf6" },
  { name: "Tech", value: 18, color: "#3b82f6" },
  { name: "Fashion", value: 9, color: "#f59e0b" },
  { name: "Other", value: 5, color: "#64748b" },
];

export default function ReportingPage() {
  return (
    <div className="flex flex-col h-full bg-[#fafafa]">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-8 py-5 flex items-center justify-between sticky top-0 z-30">
        <h1 className="text-xl font-bold text-[#1a1a6e]">Performance Report</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <select className="appearance-none pl-4 pr-10 py-2.5 rounded-lg border border-gray-200 text-sm font-semibold text-[#1a1a6e] focus:outline-none bg-white cursor-pointer w-64 shadow-sm">
              <option>GlowLab Serum Campaign</option>
              <option>Vitamin C Launch</option>
            </select>
            <ChevronDown size={16} className="absolute right-4 top-3.5 text-gray-400 pointer-events-none" />
          </div>

          <div className="flex items-center gap-2 text-gray-500 font-medium text-sm px-4 py-2.5 bg-white border border-gray-200 rounded-lg shadow-sm">
            <Calendar size={16} />
            Mar 10 – Mar 31, 2026
          </div>
        </div>
      </div>

      <div className="overflow-y-auto flex-1">
        <div className="max-w-7xl w-full">
          {/* Status Bar — full width */}
          <div className="flex justify-between items-center bg-emerald-50/60 border-b border-emerald-100 px-8 py-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600">
              <CircleDot size={14} />
              Campaign Active — closes Mar 31, 2026
            </div>
            <div className="text-gray-400 text-sm font-medium">Data refreshes daily</div>
          </div>

          <div className="p-8">
            {/* Top 4 Stat Cards */}
            <div className="grid grid-cols-4 gap-5 mb-8">
              <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-6">
                <div className="text-4xl font-bold text-[#1a1a6e] mb-1">34</div>
                <div className="text-sm text-gray-500 mb-5">Total Opt-Ins</div>
                <div className="flex items-center text-xs font-semibold text-emerald-500">
                  <MoveUpRight size={14} strokeWidth={2.5} className="mr-1" />
                  8 this week
                </div>
              </div>
              <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-6">
                <div className="text-4xl font-bold text-[#1a1a6e] mb-1">18</div>
                <div className="text-sm text-gray-500 mb-5">Videos Submitted</div>
                <div className="flex items-center text-xs font-semibold text-emerald-500">
                  <MoveUpRight size={14} strokeWidth={2.5} className="mr-1" />
                  5 this week
                </div>
              </div>
              <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-6">
                <div className="text-4xl font-bold text-gray-300 mb-1">—</div>
                <div className="text-sm text-gray-500 mb-5">Est. Engagement</div>
                <div className="text-[11px] font-bold text-amber-700 bg-amber-50 w-fit px-2.5 py-1 rounded-full">
                  Pending — data source TBC
                </div>
              </div>
              <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-6">
                <div className="text-4xl font-bold text-gray-300 mb-1">—</div>
                <div className="text-sm text-gray-500 mb-5">Est. GMV</div>
                <div className="text-[11px] font-bold text-amber-700 bg-amber-50 w-fit px-2.5 py-1 rounded-full">
                  Pending — data source TBC
                </div>
              </div>
            </div>

            {/* Line Chart */}
            <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-6 mb-8">
              <h2 className="text-base font-bold text-[#1a1a6e] mb-0.5">Opt-In Activity</h2>
              <p className="text-sm text-gray-400 mb-6">Daily opt-ins over the campaign period</p>

              <div className="h-[280px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#94a3b8", fontSize: 11, fontWeight: 500 }}
                      dy={8}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#94a3b8", fontSize: 11, fontWeight: 500 }}
                      ticks={[0, 4, 8, 15]}
                      domain={[0, 15]}
                    />
                    <Tooltip
                      cursor={{ stroke: "#e8445a", strokeWidth: 1, strokeDasharray: "4 4" }}
                      contentStyle={{ borderRadius: "10px", border: "none", boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
                    />
                    <Line
                      type="monotone"
                      dataKey="pv"
                      stroke="#e8445a"
                      strokeWidth={2.5}
                      activeDot={{ r: 6, fill: "#e8445a", stroke: "#fff", strokeWidth: 2 }}
                      dot={{ r: 4, fill: "#e8445a", strokeWidth: 0 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Bottom 2-Column Cards */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {/* Video Submissions */}
              <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-6">
                <h2 className="text-base font-bold text-[#1a1a6e] mb-6">Video Submissions</h2>

                <div className="flex justify-between text-sm font-semibold mb-2">
                  <span className="text-gray-500">Submission Progress</span>
                  <span className="text-[#1a1a6e]">53% submitted</span>
                </div>
                <div className="w-full bg-gray-100 h-3 rounded-full mb-8 overflow-hidden">
                  <div className="bg-[#e8445a] h-full rounded-full" style={{ width: "53%" }} />
                </div>

                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                      <Video size={18} className="text-emerald-500" />
                    </div>
                    <div>
                      <div className="font-bold text-[#1a1a6e] text-xl leading-none mb-1">18</div>
                      <div className="text-gray-500 text-sm">videos received</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                      <Clock size={18} className="text-amber-500" />
                    </div>
                    <div>
                      <div className="font-bold text-[#1a1a6e] text-xl leading-none mb-1">16</div>
                      <div className="text-gray-500 text-sm">affiliates yet to submit</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Affiliate Niches Donut */}
              <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-6">
                <h2 className="text-base font-bold text-[#1a1a6e] mb-0.5">Affiliate Niches</h2>
                <p className="text-sm text-gray-400 mb-4">Breakdown of content niches among opted-in affiliates</p>

                <div className="flex items-center h-[200px]">
                  <div className="flex-1 h-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          innerRadius={58}
                          outerRadius={82}
                          paddingAngle={2}
                          dataKey="value"
                          stroke="none"
                        label={({ cx, cy, midAngle, innerRadius, outerRadius, value }) => {
                            if (midAngle === undefined) return null;
                            const RADIAN = Math.PI / 180;
                            const radius = innerRadius + (outerRadius - innerRadius) * 1.35;
                            const x = cx + radius * Math.cos(-midAngle * RADIAN);
                            const y = cy + radius * Math.sin(-midAngle * RADIAN);
                            return (
                              <text x={x} y={y} fill="#374151" textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight={600}>
                                {value}%
                              </text>
                            );
                          }}
                          labelLine={false}
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0/0.1)" }} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="w-[140px] shrink-0 space-y-3">
                    {pieData.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-gray-600">
                        <span className="w-2.5 h-2.5 rounded-full block shrink-0" style={{ backgroundColor: item.color }} />
                        {item.name}
                        <span className="text-gray-400 font-medium">({item.value}%)</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Amber Warning Banner */}
            <div className="bg-amber-50 border border-amber-200/60 rounded-xl p-5 flex items-start gap-4">
              <AlertTriangle size={18} className="text-amber-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-amber-800 font-semibold text-sm mb-1">
                  Engagement and GMV data will be available once the reporting integration is confirmed. Opt-in and submission data above is live.
                </p>
                <p className="text-amber-700 text-sm">
                  Contact your ShopSlayer account manager for reporting setup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
