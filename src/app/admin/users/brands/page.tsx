import AdminShell from "../../components/AdminShell";
import UserManagementMain from "../user-management-main";

export default function AdminUsersBrandsPage() {
  return (
    <AdminShell>
      <UserManagementMain activeTab="brands" />
    </AdminShell>
  );
}
