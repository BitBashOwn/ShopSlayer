import AdminShell from "../components/AdminShell";
import CampaignManagementMain from "../admin_dashboard/campaign_management_main";

export default function AdminCampaignsPage() {
  return (
    <AdminShell>
      <CampaignManagementMain />
    </AdminShell>
  );
}
