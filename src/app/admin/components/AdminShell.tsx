import type { ReactNode } from "react";
import AdminSidebar from "./AdminSidebar";

export default function AdminShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      <AdminSidebar />
      <div className="min-h-screen min-w-0 ml-[260px]">{children}</div>
    </div>
  );
}
