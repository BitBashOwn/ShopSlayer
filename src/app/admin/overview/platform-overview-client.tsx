"use client";

import Link from "next/link";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { AlertTriangle, ArrowRight } from "lucide-react";

const NAVY = "#1C1259";
const PINK = "#E91E63";
const TEAL = "#00BFAE";

const activityData = [
  { day: "Mon", optIns: 42, submissions: 28 },
  { day: "Tue", optIns: 55, submissions: 38 },
  { day: "Wed", optIns: 48, submissions: 45 },
  { day: "Thu", optIns: 62, submissions: 52 },
  { day: "Fri", optIns: 58, submissions: 41 },
  { day: "Sat", optIns: 35, submissions: 22 },
  { day: "Sun", optIns: 44, submissions: 31 },
];

const niches = [
  { name: "Beauty", pct: 42, bar: PINK },
  { name: "Lifestyle", pct: 26, bar: NAVY },
  { name: "Tech", pct: 18, bar: TEAL },
  { name: "Fashion", pct: 9, bar: "#EAB308" },
  { name: "Other", pct: 5, bar: "#CBD5E1" },
];

const topBrands = [
  { brand: "PureGlow", campaigns: 3, optIns: 41, status: "Active" as const },
  { brand: "GlowLab Co.", campaigns: 2, optIns: 34, status: "Active" as const },
  { brand: "NovaBuds", campaigns: 1, optIns: 22, status: "Active" as const },
  { brand: "ChargeMate", campaigns: 1, optIns: 8, status: "Active" as const },
  { brand: "Bloom Beauty", campaigns: 1, optIns: 0, status: "Pending" as const },
];

const attentionItems = [
  {
    title: "Bloom Lip Butter Q2",
    meta: "Bloom Beauty • 2h ago",
  },
  {
    title: "SnapCam Mini Push",
    meta: "SnapTech • 5h ago",
  },
  {
    title: "Lumière Face Mist Relaunch",
    meta: "Lumière Paris • 1d ago",
  },
];

const recentActivity = [
  {
    dotColor: "#EAB308",
    text: "Bloom Lip Butter Q2 submitted for review by Bloom Beauty",
    time: "2 hours ago",
  },
  {
    dotColor: "#22C55E",
    text: "@sarahcreates submitted a video to GlowLab Serum Campaign",
    time: "3 hours ago",
  },
  {
    dotColor: "#E91E63",
    text: "SnapTech joined as a new brand",
    time: "5 hours ago",
  },
  {
    dotColor: "#EAB308",
    text: "SnapCam Mini Push submitted for review by SnapTech",
    time: "5 hours ago",
  },
  {
    dotColor: "#22C55E",
    text: "48 new affiliates joined the platform this week",
    time: "Today",
  },
  {
    dotColor: "#1E40AF",
    text: "NovaBuds Pro Launch approved and set to Live",
    time: "Yesterday",
  },
];

function MetricCard({
  value,
  label,
  sub,
  subTone,
  borderColor,
}: {
  value: string;
  label: string;
  sub: string;
  subTone: "green" | "orange";
  borderColor: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_2px_12px_-4px_rgba(28,18,89,0.08)]">
      {/*
        Figma: straight vertical accent — not border-left on rounded box (that curves with radius).
        Inset strip has square ends; stays clear of the card’s corner radius.
      */}
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-6 left-0 top-6 z-10 w-[4px] rounded-none"
        style={{ backgroundColor: borderColor }}
      />
      <div className="p-6 pl-8">
        <p className="text-[32px] font-bold leading-none tracking-tight" style={{ color: NAVY }}>
          {value}
        </p>
        <p className="mt-2 text-[14px] font-medium text-gray-500">{label}</p>
        <p
          className={`mt-2 text-[13px] font-semibold ${
            subTone === "green" ? "text-emerald-600" : "text-orange-600"
          }`}
        >
          {sub}
        </p>
      </div>
    </div>
  );
}

export default function PlatformOverviewClient() {
  return (
    <main className="min-h-screen overflow-y-auto px-8 py-8">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <h1 className="text-[28px] font-bold leading-tight" style={{ color: NAVY }}>
          Platform Overview
        </h1>
        <p className="text-[13px] font-normal text-gray-400">
          Last updated: Mar 25, 2026 · 9:42 AM
        </p>
      </div>

      {/* Top metrics */}
      <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          value="1,284"
          label="Total Affiliates"
          sub="↑ 48 this week"
          subTone="green"
          borderColor={NAVY}
        />
        <MetricCard
          value="37"
          label="Total Brands"
          sub="↑ 3 this week"
          subTone="green"
          borderColor={TEAL}
        />
        <MetricCard
          value="9"
          label="Active Campaigns"
          sub="3 pending review"
          subTone="orange"
          borderColor={PINK}
        />
        <MetricCard
          value="532"
          label="Video Submissions"
          sub="↑ 64 this week"
          subTone="green"
          borderColor="#EAB308"
        />
      </div>

      {/* Chart + Recent activity */}
      <div className="mb-8 grid grid-cols-1 gap-6 xl:grid-cols-[1fr_380px]">
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="text-[18px] font-bold" style={{ color: NAVY }}>
            Platform Activity — Last 7 Days
          </h2>
          <p className="mt-1 text-[13px] leading-relaxed text-gray-500">
            Daily opt-ins (pink) vs video submissions (teal) across all campaigns
          </p>
          <div className="mt-6 h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={activityData}
                margin={{ top: 8, right: 8, left: -8, bottom: 4 }}
                barGap={6}
                barCategoryGap="18%"
              >
                <CartesianGrid
                  strokeDasharray="4 4"
                  stroke="#E5E7EB"
                  horizontal
                  vertical
                />
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748B", fontSize: 12, fontWeight: 500 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748B", fontSize: 12, fontWeight: 500 }}
                  domain={[0, 80]}
                  ticks={[0, 20, 40, 60, 80]}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: 12,
                    border: "1px solid #E5E7EB",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                  }}
                />
                <Bar dataKey="optIns" fill={PINK} name="Opt-Ins" radius={[4, 4, 0, 0]} maxBarSize={36} />
                <Bar
                  dataKey="submissions"
                  fill={TEAL}
                  name="Submissions"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={36}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          {/* Figma: legend = sharp rectangles + label colors (not round Recharts icons) */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-10">
            <div className="flex items-center gap-2.5">
              <span
                className="h-3 w-[18px] shrink-0 rounded-[2px]"
                style={{ backgroundColor: PINK }}
              />
              <span className="text-sm font-semibold" style={{ color: PINK }}>
                Opt-Ins
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <span
                className="h-3 w-[18px] shrink-0 rounded-[2px]"
                style={{ backgroundColor: TEAL }}
              />
              <span className="text-sm font-semibold" style={{ color: TEAL }}>
                Submissions
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm xl:min-h-[480px]">
          <h2 className="text-[18px] font-bold" style={{ color: NAVY }}>
            Recent Activity
          </h2>
          <ul className="mt-5 divide-y divide-gray-100">
            {recentActivity.map((item, i) => (
              <li key={i} className="flex gap-3 py-4 first:pt-0">
                <span
                  className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ backgroundColor: item.dotColor }}
                />
                <div className="min-w-0">
                  <p className="text-[14px] font-medium leading-snug" style={{ color: NAVY }}>
                    {item.text}
                  </p>
                  <p className="mt-1 text-[12px] text-gray-400">{item.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Affiliate niches */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="text-[17px] font-bold" style={{ color: NAVY }}>
            Affiliate Niches
          </h2>
          <p className="mt-1 text-[13px] text-gray-500">
            Breakdown across all 1,284 affiliates
          </p>
          <div className="mt-6 space-y-5">
            {niches.map((n) => (
              <div key={n.name}>
                <div className="mb-1.5 flex justify-between text-[13px] font-semibold">
                  <span style={{ color: NAVY }}>{n.name}</span>
                  <span className="text-gray-500">{n.pct}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{ width: `${n.pct}%`, backgroundColor: n.bar }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top brands */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="text-[17px] font-bold" style={{ color: NAVY }}>
            Top Brands by Opt-Ins
          </h2>
          <p className="mt-1 text-[13px] text-gray-500">This month</p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[280px] text-left text-[13px]">
              <thead>
                <tr className="border-b border-gray-100 text-gray-500">
                  <th className="pb-3 font-medium">Brand</th>
                  <th className="pb-3 font-medium">Campaigns</th>
                  <th className="pb-3 font-medium">Opt-Ins</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {topBrands.map((row) => (
                  <tr key={row.brand} className="text-[#1C1259]">
                    <td className="py-3 font-semibold">{row.brand}</td>
                    <td className="py-3">{row.campaigns}</td>
                    <td className="py-3 font-medium">{row.optIns}</td>
                    <td className="py-3">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                          row.status === "Active"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-amber-50 text-amber-800"
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Needs attention */}
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
          <div className="flex items-center gap-2 bg-amber-50/90 px-5 py-4">
            <AlertTriangle className="h-5 w-5 shrink-0 text-amber-500" strokeWidth={2} />
            <h2 className="text-[17px] font-bold" style={{ color: NAVY }}>
              Needs Your Attention
            </h2>
          </div>
          <div className="divide-y divide-gray-100 px-5">
            {attentionItems.map((item, i) => (
              <div key={i} className="py-5">
                <div className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                  <div className="min-w-0 flex-1">
                    <p className="text-[14px] font-bold" style={{ color: NAVY }}>
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-[12px] text-gray-500">{item.meta}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-4">
                      <button
                        type="button"
                        className="text-[13px] font-bold text-emerald-600 hover:underline"
                      >
                        Approve
                      </button>
                      <button
                        type="button"
                        className="text-[13px] font-bold text-red-600 hover:underline"
                      >
                        Take Down
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-100 px-5 py-4 text-center">
            <Link
              href="/admin/campaigns"
              className="inline-flex items-center gap-1 text-[14px] font-bold text-[#2563EB] hover:underline"
            >
              View All Campaigns
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
