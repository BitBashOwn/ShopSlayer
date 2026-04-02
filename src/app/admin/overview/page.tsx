import AdminShell from "../components/AdminShell";
import PlatformOverviewClient from "./platform-overview-client";

export default function AdminOverviewPage() {
  return (
    <AdminShell>
      <PlatformOverviewClient />
    </AdminShell>
  );
}
