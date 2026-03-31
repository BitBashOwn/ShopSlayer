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

export default function ReportingCharts() {
  return (
    <>
      {/* Line Chart */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold text-[#1a1a6e] mb-1">Opt-In Activity</h2>
        <p className="text-sm text-gray-500 mb-6">Daily opt-ins over the campaign period</p>

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
                contentStyle={{
                  borderRadius: "10px",
                  border: "none",
                  boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
                }}
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

      {/* Donut chart inside the Affiliate Niches card - we inject it here since we need CSR */}
      <div className="hidden" id="donut-chart-inner">
        <div style={{ height: 220 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={85}
                paddingAngle={2}
                dataKey="value"
                stroke="none"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  borderRadius: "8px",
                  border: "none",
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
