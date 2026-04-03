"use client";

import { useMemo, useState } from "react";
import BottomNav from "../../BottomNav";
import DesktopSidebarNav from "../../DesktopSidebarNav";
import ExploreTabs from "../../ExploreTabs";
import MobileCampaignCard from "../../MobileCampaignCard";

const campaigns = [
  {
    brand: "GlowLab",
    subtitle: "Beauty brand collaboration",
    title: "GlowLab Serum",
    earning: "$ Earn 14% via TikTok Shop",
    category: "Beauty",
    plan: "Open Plan",
    type: "Beauty",
    colorClass: "bg-pink-400",
  },
  {
    brand: "Bloom Beauty",
    subtitle: "Lifestyle beauty drop",
    title: "Bloom Lip Butter",
    earning: "$ Earn 9% via TikTok Shop",
    category: "Beauty",
    plan: "Open Plan",
    type: "Beauty",
    colorClass: "bg-rose-300",
  },
  {
    brand: "NovaTech",
    subtitle: "Tech gadget promotion",
    title: "NovaBuds Pro",
    earning: "$ Earn 16% via TikTok Shop",
    category: "Tech",
    plan: "Open Plan",
    type: "Tech",
    colorClass: "bg-indigo-500",
  },
  {
    brand: "LumenDesk",
    subtitle: "Desk creator gear",
    title: "LumenDesk Ring Light",
    earning: "$ Earn 10% via TikTok Shop",
    category: "Tech",
    plan: "Open Plan",
    type: "Tech",
    colorClass: "bg-amber-400",
  },
  {
    brand: "DailyAura",
    subtitle: "Wellness lifestyle brief",
    title: "DailyAura Morning Kit",
    earning: "$ Earn 12% via TikTok Shop",
    category: "Lifestyle",
    plan: "Open Plan",
    type: "Lifestyle",
    colorClass: "bg-emerald-400",
  },
  {
    brand: "CasaLoop",
    subtitle: "Home lifestyle activation",
    title: "CasaLoop Decor Bundle",
    earning: "$ Earn 8% via TikTok Shop",
    category: "Lifestyle",
    plan: "Open Plan",
    type: "Lifestyle",
    colorClass: "bg-cyan-400",
  },
];

export default function CampaignsMain() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredCampaigns = useMemo(() => {
    if (activeTab === "All") {
      return campaigns;
    }

    return campaigns.filter((campaign) => campaign.type === activeTab);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#F5F6FA] pb-20 lg:pb-0">
      <div className="mx-auto max-w-[1280px] lg:grid lg:min-h-screen lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-8 lg:px-6 lg:py-8">
        <DesktopSidebarNav sectionLabel="Affiliate">
          <div className="rounded-3xl bg-white/10 p-5">
            <p className="text-sm text-white/70">Campaign Library</p>
            <p className="mt-3 text-4xl font-semibold">{campaigns.length}</p>
            <p className="mt-2 text-sm text-white/75">Browse available creator campaigns</p>
          </div>
        </DesktopSidebarNav>

        <main className="min-h-screen bg-white lg:min-h-0 lg:rounded-[32px] lg:border lg:border-white/70 lg:shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
          <div className="border-b border-[#eceff5] px-4 py-4 lg:rounded-t-[32px] lg:px-8 lg:py-6">
            <h1 className="text-[28px] font-semibold text-[#20145f]">Campaigns</h1>
            <p className="mt-2 text-sm text-[#667085]">
              Browse all live campaigns and open the ones you want to review.
            </p>
          </div>

          <div className="px-4 py-5 lg:px-8 lg:py-8">
            <ExploreTabs activeTab={activeTab} onTabChange={setActiveTab} />

            <div className="mt-4 space-y-4 lg:mt-6 lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
              {filteredCampaigns.map((campaign) => (
                <MobileCampaignCard
                  key={campaign.title}
                  brand={campaign.brand}
                  subtitle={campaign.subtitle}
                  title={campaign.title}
                  earning={campaign.earning}
                  category={campaign.category}
                  plan={campaign.plan}
                  colorClass={campaign.colorClass}
                />
              ))}
            </div>
          </div>
        </main>
      </div>

      <BottomNav />
    </div>
  );
}
