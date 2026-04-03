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
      className="fixed top-0 left-0 z-40 flex min-h-[100vh] h-[100vh] flex-col"
      style={{
        width: "256px",
        height: "100vh",
        minHeight: "100vh",
        backgroundColor: "#1E1B6E",
      }}
    >
      {/* Logo */}
      <div className="px-6 pt-8 pb-6">
        <span className="text-white font-bold text-2xl tracking-tight">ShopSlayer</span>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 space-y-2 px-4">
        {navItems.map(({ label, href, icon: Icon }) => {
          const active = isActive(href, label);

          return (
            <Link
              key={label}
              href={href}
              className={`flex items-center gap-3 rounded-lg py-[10px] px-4 text-[15px] font-medium text-white transition-all ${
                active
                  ? "border-l-4 border-[#F43F5E] bg-[#3D3A8C]"
                  : "border-l-4 border-transparent hover:bg-white/5"
              }`}
            >
              <Icon size={20} strokeWidth={2} className="shrink-0 text-white opacity-100" />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Brand Footer */}
      <div className="mt-auto border-t border-white/5 px-6 py-6">
        <div className="flex items-center gap-3">
          <div
            className="flex shrink-0 items-center justify-center text-white"
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              backgroundColor: "#E879A0",
              fontSize: 14,
              fontWeight: 700,
            }}
          >
            GL
          </div>
          <div className="flex flex-col">
            <p className="text-[14px] font-semibold leading-tight text-white">GlowLab Co.</p>
            <button
              type="button"
              onClick={() => router.push("/brand/login")}
              className="mt-0.5 flex items-center gap-1.5 text-[12px] font-medium transition-opacity hover:opacity-90"
              style={{ color: "rgba(255, 255, 255, 0.5)" }}
            >
              <LogOut size={14} strokeWidth={2} className="shrink-0 opacity-100" style={{ color: "rgba(255, 255, 255, 0.5)" }} />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
