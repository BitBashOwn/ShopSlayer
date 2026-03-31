"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutGrid,
  Megaphone,
  Users,
  BarChart2,
  Building2,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { label: "Dashboard", href: "/brand/dashboard", icon: LayoutGrid },
    { label: "Campaigns", href: "/brand/dashboard", icon: Megaphone },
    { label: "Participation", href: "/brand/campaigns/glowlab-serum/participation", icon: Users },
    { label: "Reporting", href: "/brand/reporting", icon: BarChart2 },
    { label: "Brand Profile", href: "/brand/profile", icon: Building2 },
  ];

  const isActive = (href: string, label: string) => {
    if (label === "Dashboard") {
      return pathname === "/brand/dashboard";
    }
    if (label === "Campaigns") {
      return pathname.startsWith("/brand/campaigns") && !pathname.includes("/participation");
    }
    if (label === "Participation") {
      return pathname.includes("/participation");
    }
    if (label === "Reporting") {
      return pathname.startsWith("/brand/reporting");
    }
    if (label === "Brand Profile") {
      return pathname.startsWith("/brand/profile");
    }
    return pathname === href;
  };

  return (
    <div
      className="fixed top-0 left-0 h-screen flex flex-col z-40"
      style={{ width: "240px", backgroundColor: "#1a1a6e" }}
    >
      {/* Logo */}
      <div className="px-6 pt-8 pb-6">
        <span className="text-white font-bold text-2xl tracking-tight">ShopSlayer</span>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 px-4 space-y-2">
        {navItems.map(({ label, href, icon: Icon }) => {
          const active = isActive(href, label);

          if (label === "Brand Profile") {
            return (
              <div
                key={label}
                className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-white/50 cursor-not-allowed"
              >
                <Icon size={20} strokeWidth={2} />
                {label}
              </div>
            );
          }

          return (
            <Link
              key={label}
              href={href}
              className={`flex items-center gap-3 px-4 py-3 text-sm font-semibold transition-all relative ${active
                ? "bg-[#2a2472] text-white rounded-lg shadow-sm"
                : "text-white hover:bg-white/5 rounded-lg"
                }`}
            >
              {active && (
                <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#ff5e7e] to-[#e8445a] rounded-l-lg" />
              )}
              <Icon
                size={20}
                strokeWidth={active ? 2.5 : 2}
                className={active ? "text-white" : "text-white"}
              />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Brand Footer */}
      <div className="px-6 py-6 border-t border-white/5 mt-auto">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
            style={{ backgroundColor: "#ff7494" }}
          >
            GL
          </div>
          <div className="flex flex-col">
            <p className="text-white text-[13px] font-bold leading-tight">GlowLab Co.</p>
            <button
              onClick={() => router.push("/brand/login")}
              className="flex items-center gap-1.5 text-[#888fc4] hover:text-white text-[11px] font-semibold transition-colors mt-0.5"
            >
              <LogOut size={12} strokeWidth={2.5} />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
