"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  Megaphone,
  Settings,
  Users,
  Building2,
  LogOut,
} from "lucide-react";

/** Figma sidebar background */
const SIDEBAR_BG = "#19145E";
/** Active item — solid indigo/purple (no gradient) */
const ACTIVE_ITEM_BG = "#35287A";
/** Pink accent bar — Figma hot magenta */
const ACCENT_PINK = "#E91E63";

const navItems = [
  { href: "/admin/overview", label: "Overview", icon: LayoutGrid },
  { href: "/admin/campaigns", label: "Campaigns", icon: Megaphone },
  { href: "/admin/users/brands", label: "Users — Brands", icon: Building2 },
  { href: "/admin/users/affiliates", label: "Users — Affiliates", icon: Users },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="fixed inset-y-0 left-0 z-40 flex w-[260px] flex-col justify-between text-white"
      style={{ backgroundColor: SIDEBAR_BG }}
    >
      <div className="px-5 pt-8 pb-6">
        <div className="mb-10">
          <h1 className="text-[17px] font-bold leading-tight text-white">
            ShopSlayer Admin
          </h1>
          <p
            className="mt-1.5 text-[13px] font-normal"
            style={{ color: "#9B94C8" }}
          >
            Huskee Digital
          </p>
        </div>

        <nav className="flex flex-col gap-1.5">
          {navItems.map(({ href, label, icon: Icon }) => {
            const active =
              pathname === href ||
              (href === "/admin/campaigns" &&
                pathname === "/admin/admin_dashboard") ||
              (href.startsWith("/admin/users") && pathname.startsWith(href)) ||
              (href === "/admin/settings" && pathname === href);

            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 rounded-2xl py-3 pl-4 pr-3 text-[14px] font-semibold transition-colors ${
                  active
                    ? "border-l-[3px] text-white shadow-sm"
                    : "border-l-[5px] border-l-transparent text-white hover:bg-white/[0.08]"
                }`}
                style={
                  active
                    ? {
                        backgroundColor: ACTIVE_ITEM_BG,
                        borderLeftColor: ACCENT_PINK,
                      }
                    : undefined
                }
              >
                <Icon className="h-[18px] w-[18px] shrink-0 text-white" strokeWidth={1.85} />
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="border-t border-white/[0.08] px-5 py-5">
        <p
          className="text-[11px] font-normal"
          style={{ color: "#A8A3D4" }}
        >
          Logged in as
        </p>
        <p className="mt-0.5 text-[13px] font-bold text-white">
          Huskee Digital Admin
        </p>
        <Link
          href="/admin/login"
          className="mt-4 flex items-center gap-2 text-[13px] font-medium transition-colors hover:text-white"
          style={{ color: "#C8C2E8" }}
        >
          <LogOut className="h-4 w-4" strokeWidth={1.75} />
          Log Out
        </Link>
      </div>
    </aside>
  );
}
