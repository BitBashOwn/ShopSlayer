import MobileHeader from "../MobileHeader";
import MyCampaignsCard from "../MyCampaignsCard";
import ExploreTabs from "../ExploreTabs";
import MobileCampaignCard from "../MobileCampaignCard";
import BottomNav from "../BottomNav";

export default function MobileMain() {
  return (
    <div className="min-h-screen bg-[#F5F6FA] pb-20">
      <MobileHeader />

      <div className="px-4">
        <MyCampaignsCard />
        <ExploreTabs />

        <div className="mt-4 space-y-4">
          <MobileCampaignCard />
          <MobileCampaignCard />
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
