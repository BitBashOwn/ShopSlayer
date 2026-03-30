import CampaignCard from "./CampaignCard";

export default function CampaignSection() {
  return (
    <section className="bg-[#F5F6FA] px-6 lg:px-16 py-14">
      
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-[22px] font-semibold text-[#1A1A1A]">
          Browse Campaigns
        </h2>
        <p className="text-[13px] text-gray-500 mt-1">
          Explore what's live right now — join free to opt in.
        </p>
      </div>

      {/* CATEGORY 1 */}
      <div className="mb-10">
        
        <div className="flex justify-between items-center mb-4">
          <p className="text-[13px] font-semibold text-[#1A1A1A]">
            ✦ Beauty & Skincare
          </p>

          <button className="text-[12px] text-[#FF4D8D] hover:underline cursor-pointer">
            See all →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <CampaignCard
            brand="GlowLab Co."
            title="GlowLab Vitamin C Serum"
            earning="Earn 14% via TikTok Shop"
            category="Beauty"
          />
          <CampaignCard
            brand="Lumière"
            title="Lumière Face Mist"
            earning="Earn 11% via TikTok Shop"
            category="Beauty"
          />
          <CampaignCard locked title="" brand="" earning="" category="" />
          <CampaignCard
            brand="Bloom Beauty"
            title="Bloom Lip Butter"
            earning="Earn 9% via TikTok Shop"
            category="Beauty"
          />
        </div>
      </div>

      {/* CATEGORY 2 */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <p className="text-[13px] font-semibold text-[#1A1A1A]">
            ✦ Tech & Gadgets
          </p>

          <button className="text-[12px] text-[#FF4D8D] hover:underline cursor-pointer">
            See all →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <CampaignCard
            brand="NovaBuds"
            title="NovaBuds Pro Earphones"
            earning="Earn 16% via TikTok Shop"
            category="Tech"
          />
          <CampaignCard
            brand="ChargeMate"
            title="ChargeMate 3-in-1 Hub"
            earning="Earn 12% via TikTok Shop"
            category="Tech"
          />
          <CampaignCard
            brand="LumenDesk"
            title="LumenDesk Ring Light"
            earning="Earn 10% via TikTok Shop"
            category="Gadgets"
          />
          <CampaignCard
            brand="SnapTech"
            title="SnapCam Mini"
            earning="Earn 15% via TikTok Shop"
            category="Gadgets"
          />
        </div>
      </div>
    </section>
  );
}