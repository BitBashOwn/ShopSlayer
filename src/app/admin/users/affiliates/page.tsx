import AdminShell from "../../components/AdminShell";
import UserManagementMain from "../user-management-main";

export default function AdminUsersAffiliatesPage() {
  return (
    <AdminShell>
      <UserManagementMain activeTab="affiliates" />
    </AdminShell>
  );
}
