type Campaign = {
  name: string;
  brand: string;
  category: string;
  status: "Live" | "Pending Review" | "Taken Down";
  optIns: number;
  submitted: number;
  dateRange: string;
  actions: string[];
};

const campaigns: Campaign[] = [
  {
    name: "GlowLab Serum Campaign",
    brand: "GlowLab Co.",
    category: "Beauty",
    status: "Live",
    optIns: 34,
    submitted: 18,
    dateRange: "Mar 10-31",
    actions: ["View", "Pending", "Take Down"],
  },
  {
    name: "NovaBuds Pro Launch",
    brand: "NovaBuds",
    category: "Tech",
    status: "Live",
    optIns: 22,
    submitted: 11,
    dateRange: "Mar 15-Apr 5",
    actions: ["View", "Pending", "Take Down"],
  },
  {
    name: "Bloom Lip Butter Q2",
    brand: "Bloom Beauty",
    category: "Beauty",
    status: "Pending Review",
    optIns: 0,
    submitted: 0,
    dateRange: "Apr 1-20",
    actions: ["Approve", "Take Down"],
  },
  {
    name: "SnapCam Mini Push",
    brand: "SnapTech",
    category: "Gadgets",
    status: "Pending Review",
    optIns: 0,
    submitted: 0,
    dateRange: "Apr 3-15",
    actions: ["Approve", "Take Down"],
  },
  {
    name: "ChargeMate Spring",
    brand: "ChargeMate",
    category: "Tech",
    status: "Live",
    optIns: 8,
    submitted: 3,
    dateRange: "Mar 20-Apr 10",
    actions: ["View", "Pending", "Take Down"],
  },
  {
    name: "PureGlow Vitamin C",
    brand: "PureGlow",
    category: "Skincare",
    status: "Live",
    optIns: 41,
    submitted: 27,
    dateRange: "Feb 28-Mar 25",
    actions: ["View", "Pending", "Take Down"],
  },
  {
    name: "Vintage Threads Collab",
    brand: "Vintage Threads",
    category: "Fashion",
    status: "Taken Down",
    optIns: 5,
    submitted: 2,
    dateRange: "Mar 1-15",
    actions: ["Restore"],
  },
];

const statusStyles: Record<Campaign["status"], string> = {
  Live: "bg-[#e8fff0] text-[#19a44a]",
  "Pending Review": "bg-[#fff3d6] text-[#d48806]",
  "Taken Down": "bg-[#ffe8ec] text-[#eb5a74]",
};

const actionStyles: Record<string, string> = {
  View: "text-[#1e1b68]",
  Pending: "text-[#d48806]",
  Approve: "text-[#19a44a]",
  "Take Down": "text-[#f04452]",
  Restore: "text-[#f08aa3]",
};

export default function CampaignTable() {
  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-[#dfe3ee] bg-white shadow-[0_1px_2px_rgba(17,24,39,0.03)]">
      <table className="w-full min-w-[980px] text-left">
        <thead className="bg-[#fafbfe] text-[11px] font-semibold text-[#5d6785]">
          <tr className="border-b border-[#e9edf5]">
            <th className="px-4 py-4">Campaign Name</th>
            <th className="px-4 py-4">Brand</th>
            <th className="px-4 py-4">Category</th>
            <th className="px-4 py-4">Status</th>
            <th className="px-4 py-4">Opt-Ins</th>
            <th className="px-4 py-4">Submitted</th>
            <th className="px-4 py-4">Date Range</th>
            <th className="px-4 py-4">Actions</th>
          </tr>
        </thead>
        <tbody className="text-[12px] text-[#5d6785]">
          {campaigns.map((campaign) => (
            <tr key={campaign.name} className="border-b border-[#eef1f7] last:border-b-0">
              <td className="px-4 py-4 font-medium text-[#1e1b68]">{campaign.name}</td>
              <td className="px-4 py-4">{campaign.brand}</td>
              <td className="px-4 py-4">{campaign.category}</td>
              <td className="px-4 py-4">
                <span className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${statusStyles[campaign.status]}`}>
                  {campaign.status}
                </span>
              </td>
              <td className="px-4 py-4 text-[#2f3552]">{campaign.optIns}</td>
              <td className="px-4 py-4 text-[#2f3552]">{campaign.submitted}</td>
              <td className="px-4 py-4">{campaign.dateRange}</td>
              <td className="px-4 py-4">
                <div className="flex flex-wrap items-center gap-3 text-[11px] font-medium">
                  {campaign.actions.map((action) => (
                    <span key={action} className={`cursor-pointer hover:underline ${actionStyles[action]}`}>
                      {action}
                    </span>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
