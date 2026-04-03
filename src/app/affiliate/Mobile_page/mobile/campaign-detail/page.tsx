import { Suspense } from "react";
import CampaignDetailMain from "./campaign_detail_main";

export default function CampaignDetailPage() {
  return (
    <Suspense fallback={null}>
      <CampaignDetailMain />
    </Suspense>
  );
}
