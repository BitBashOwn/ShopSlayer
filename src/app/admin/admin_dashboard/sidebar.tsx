import { BarChart3, Megaphone, Settings, Users, UserSquare2 } from "lucide-react";

const navItems = [
  { label: "Overview", icon: BarChart3, active: false },
  { label: "Campaigns", icon: Megaphone, active: true },
  { label: "Users - Brands", icon: UserSquare2, active: false },
  { label: "Users - Affiliates", icon: Users, active: false },
  { label: "Settings", icon: Settings, active: false },
];

export default function Sidebar() {
  return (
    <aside className="sticky top-0 flex h-screen w-64 flex-col justify-between bg-[#24145f] text-white">
      <div className="px-5 py-5">
        <div className="mb-10">
          <h1 className="text-[15px] font-semibold tracking-tight">ShopSlayer</h1>
          <p className="mt-1 text-[11px] text-white/70">Admin Panel</p>
        </div>

        <nav className="space-y-2">
          {navItems.map(({ label, icon: Icon, active }) => (
            <div
              key={label}
              className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                active
                  ? "bg-[#3a2787] text-white shadow-[inset_3px_0_0_0_#ff4b8b]"
                  : "text-white/90 hover:bg-white/5"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span>{label}</span>
            </div>
          ))}
        </nav>
      </div>

      <div className="border-t border-white/10 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2d8cff] text-sm font-semibold">
            H
          </div>
          <div>
            <p className="text-[11px] text-white/60">Logged in as</p>
            <p className="text-xs font-semibold text-white">Huskee Digital Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
