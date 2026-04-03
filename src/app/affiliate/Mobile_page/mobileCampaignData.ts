export type CampaignStatus = "Active" | "Video Submitted" | "Completed";
export type CampaignFilter = "In Progress" | "Completed";

export type MobileCampaign = {
  id: string;
  initials: string;
  name: string;
  brand: string;
  niche: string;
  dates: string;
  status: CampaignStatus;
  accent: string;
  badge: string;
  initialsBg: string;
  filter: CampaignFilter;
  briefHref: string;
};

export const mobileCampaigns: MobileCampaign[] = [
  {
    id: "glowlab-serum",
    initials: "GL",
    name: "GlowLab Serum",
    brand: "GlowLab Co.",
    niche: "Beauty",
    dates: "Mar 10-31",
    status: "Active",
    accent: "bg-[#ff4d8d]",
    badge: "bg-green-100 text-green-600",
    initialsBg: "bg-[#625df5]",
    filter: "In Progress",
    briefHref: "/affiliate/Mobile_page/mobile/content-brief",
  },
  {
    id: "novabuds-pro-earphones",
    initials: "NT",
    name: "NovaBuds Pro Earphones",
    brand: "NovaTech",
    niche: "Tech",
    dates: "Mar 15-Apr 5",
    status: "Video Submitted",
    accent: "bg-[#f59e0b]",
    badge: "bg-yellow-100 text-yellow-700",
    initialsBg: "bg-[#7c5cff]",
    filter: "In Progress",
    briefHref: "/affiliate/Mobile_page/mobile/content-brief",
  },
  {
    id: "bloom-lip-butter",
    initials: "BB",
    name: "Bloom Lip Butter",
    brand: "Bloom Beauty",
    niche: "Beauty",
    dates: "Mar 20-Apr 10",
    status: "Active",
    accent: "bg-[#ff4d8d]",
    badge: "bg-green-100 text-green-600",
    initialsBg: "bg-[#ec4899]",
    filter: "In Progress",
    briefHref: "/affiliate/Mobile_page/mobile/content-brief",
  },
  {
    id: "snapcam-mini",
    initials: "SV",
    name: "SnapCam Mini",
    brand: "SnapVision",
    niche: "Tech",
    dates: "Apr 1-Apr 12",
    status: "Active",
    accent: "bg-[#ff4d8d]",
    badge: "bg-green-100 text-green-600",
    initialsBg: "bg-[#14b8a6]",
    filter: "In Progress",
    briefHref: "/affiliate/Mobile_page/mobile/content-brief",
  },
  {
    id: "lumendesk-ring-light",
    initials: "LD",
    name: "LumenDesk Ring Light",
    brand: "LumenDesk Co.",
    niche: "Gadgets",
    dates: "Feb 1-28",
    status: "Completed",
    accent: "bg-[#10b981]",
    badge: "bg-slate-100 text-slate-600",
    initialsBg: "bg-[#f59e0b]",
    filter: "Completed",
    briefHref: "/affiliate/Mobile_page/mobile/campaign-detail",
  },
];

export function getVideoSubmissionHref(campaignId: string) {
  return `/affiliate/Mobile_page/mobile/video-submission?campaign=${campaignId}`;
}

export function getVideoSubmissionEditHref(campaignId: string) {
  return `/affiliate/Mobile_page/mobile/video-submission?campaign=${campaignId}&edit=1`;
}
