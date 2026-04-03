import CampaignCard from "./CampaignCard";

type CampaignItem = {
  title: string;
  brand: string;
  earning: string;
  category: string;
  accentColor?: string;
  planLabel?: string;
  locked?: boolean;
};

type CampaignGroup = {
  title: string;
  items: CampaignItem[];
};

const campaignGroups: CampaignGroup[] = [
  {
    title: "Beauty & Skincare",
    items: [
      {
        brand: "GlowLab Co.",
        title: "GlowLab Vitamin C Serum",
        earning: "Earn 14% via TikTok Shop",
        category: "Beauty",
        accentColor: "#22c3b5",
      },
      {
        brand: "Lumiere",
        title: "Lumiere Face Mist",
        earning: "Earn 11% via TikTok Shop",
        category: "Beauty",
        accentColor: "#8b5cf6",
      },
      {
        brand: "",
        title: "",
        earning: "",
        category: "",
        locked: true,
      },
      {
        brand: "Bloom Beauty",
        title: "Bloom Lip Butter",
        earning: "Earn 9% via TikTok Shop",
        category: "Beauty",
        accentColor: "#f08bb8",
      },
    ],
  },
  {
    title: "Tech & Gadgets",
    items: [
      {
        brand: "NovaBuds",
        title: "NovaBuds Pro Earphones",
        earning: "Earn 16% via TikTok Shop",
        category: "Tech",
        accentColor: "#2D1B69",
      },
      {
        brand: "ChargeMate",
        title: "ChargeMate 3-in-1 Hub",
        earning: "Earn 12% via TikTok Shop",
        category: "Tech",
        accentColor: "#16c28b",
      },
      {
        brand: "LumenDesk",
        title: "LumenDesk Ring Light",
        earning: "Earn 10% via TikTok Shop",
        category: "Gadgets",
        accentColor: "#f59e0b",
      },
      {
        brand: "SnapTech",
        title: "SnapCam Mini",
        earning: "Earn 15% via TikTok Shop",
        category: "Gadgets",
        accentColor: "#78d3e6",
      },
    ],
  },
];

export default function CampaignSection() {
  return (
    <section className="bg-[#F5F6FA] px-6 py-14 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10">
          <h2 className="text-[28px] font-semibold text-[#2D1B69] lg:text-[36px]">
            Browse Campaigns
          </h2>
          <p className="mt-2 text-[14px] text-[#667085] lg:text-[15px]">
            Explore what&apos;s live right now - join free to opt in.
          </p>
        </div>

        <div className="space-y-12">
          {campaignGroups.map((group) => (
            <div key={group.title}>
              <div className="mb-5 flex items-center justify-between gap-4">
                <p className="text-[15px] font-semibold text-[#2D1B69] lg:text-[20px]">
                  ✦ {group.title}
                </p>

                <button
                  type="button"
                  className="text-[12px] font-medium text-[#FF4D8D] transition hover:underline"
                >
                  See all →
                </button>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {group.items.map((campaign, index) => (
                  <CampaignCard
                    key={`${group.title}-${index}`}
                    brand={campaign.brand}
                    title={campaign.title}
                    earning={campaign.earning}
                    category={campaign.category}
                    accentColor={campaign.accentColor}
                    planLabel={campaign.planLabel}
                    locked={campaign.locked}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
