"use client";

import { Flag, ShieldAlert } from "lucide-react";

type UserTab = "brands" | "affiliates";

type UserRow = {
  name: string;
  joinDate: string;
  campaignCount: number;
  status: "Active" | "Pending Review" | "Suspended";
};

const brands: UserRow[] = [
  { name: "GlowLab Co.", joinDate: "Mar 04, 2026", campaignCount: 4, status: "Active" },
  { name: "NovaBuds", joinDate: "Mar 09, 2026", campaignCount: 2, status: "Active" },
  { name: "Bloom Beauty", joinDate: "Mar 12, 2026", campaignCount: 1, status: "Pending Review" },
  { name: "SnapTech", joinDate: "Mar 18, 2026", campaignCount: 1, status: "Pending Review" },
  { name: "Vintage Threads", joinDate: "Feb 27, 2026", campaignCount: 3, status: "Suspended" },
];

const affiliates: UserRow[] = [
  { name: "@sarahcreates", joinDate: "Mar 05, 2026", campaignCount: 6, status: "Active" },
  { name: "@techwithtom", joinDate: "Mar 07, 2026", campaignCount: 4, status: "Active" },
  { name: "@dailymika", joinDate: "Mar 11, 2026", campaignCount: 2, status: "Pending Review" },
  { name: "@snaplifestyle", joinDate: "Mar 14, 2026", campaignCount: 3, status: "Active" },
  { name: "@trendvault", joinDate: "Feb 25, 2026", campaignCount: 1, status: "Suspended" },
];

const statusStyles: Record<UserRow["status"], string> = {
  Active: "bg-[#e8fff0] text-[#19a44a]",
  "Pending Review": "bg-[#fff3d6] text-[#d48806]",
  Suspended: "bg-[#ffe8ec] text-[#eb5a74]",
};

type UserManagementMainProps = {
  activeTab: UserTab;
};

export default function UserManagementMain({ activeTab }: UserManagementMainProps) {
  const rows = activeTab === "brands" ? brands : affiliates;

  return (
    <main className="min-h-screen overflow-y-auto">
      <div className="border-b border-[#dde3ee] bg-white px-6 py-6">
        <h1 className="text-[28px] font-bold leading-tight text-[#1C1259]">
          User Management
        </h1>
        <p className="mt-2 text-[14px] text-[#667085]">
          Review account activity, monitor status, and take action on brands and affiliates.
        </p>
      </div>

      <div className="px-6 py-6">
        <div className="overflow-hidden rounded-xl border border-[#dfe3ee] bg-white shadow-[0_1px_2px_rgba(17,24,39,0.03)]">
          <table className="w-full min-w-[860px] text-left">
            <thead className="bg-[#fafbfe] text-[13px] font-semibold text-[#5d6785]">
              <tr className="border-b border-[#e9edf5]">
                <th className="px-4 py-4">Name</th>
                <th className="px-4 py-4">Join Date</th>
                <th className="px-4 py-4">Campaign Count</th>
                <th className="px-4 py-4">Status</th>
                <th className="px-4 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="text-[14px] text-[#5d6785]">
              {rows.map((row) => (
                <tr key={row.name} className="border-b border-[#eef1f7] last:border-b-0">
                  <td className="px-4 py-4 font-medium text-[#1e1b68]">{row.name}</td>
                  <td className="px-4 py-4">{row.joinDate}</td>
                  <td className="px-4 py-4 text-[#2f3552]">{row.campaignCount}</td>
                  <td className="px-4 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-medium ${statusStyles[row.status]}`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-wrap items-center gap-4 text-[13px] font-medium">
                      <button
                        type="button"
                        className="inline-flex cursor-pointer items-center gap-1 text-[#d48806] hover:underline"
                      >
                        <ShieldAlert className="h-4 w-4" />
                        Suspend
                      </button>
                      <button
                        type="button"
                        className="inline-flex cursor-pointer items-center gap-1 text-[#f04452] hover:underline"
                      >
                        <Flag className="h-4 w-4" />
                        Flag Account
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
