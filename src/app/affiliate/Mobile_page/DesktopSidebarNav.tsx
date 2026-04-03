"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import { ReactNode } from "react";
import { affiliateNavItems } from "./affiliateNavItems";

type DesktopSidebarNavProps = {
  sectionLabel: string;
  children?: ReactNode;
  footer?: ReactNode;
};

export default function DesktopSidebarNav({
  sectionLabel,
  children,
  footer,
}: DesktopSidebarNavProps) {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex lg:flex-col lg:rounded-[28px] lg:bg-[#24145f] lg:px-6 lg:py-7 lg:text-white lg:shadow-[0_24px_80px_rgba(36,20,95,0.22)]">
      <div>
        <p className="text-xl font-semibold tracking-tight">ShopSlayer</p>
        <p className="mt-1 text-sm text-white/65">{sectionLabel}</p>
      </div>

      <nav className="mt-8 space-y-3">
        {affiliateNavItems.map(({ label, href, icon: Icon, paths }) => {
          const active = paths.includes(pathname);

          return (
            <Link
              key={label}
              href={href}
              className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 ${
                active
                  ? "bg-white/16 text-white shadow-[0_10px_30px_rgba(12,8,38,0.2)]"
                  : "bg-white/6 text-white/82 hover:bg-white/12 hover:text-white"
              }`}
            >
              <Icon className={`h-4 w-4 ${active ? "text-white" : "text-white/70"}`} />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      {children ? <div className="mt-8">{children}</div> : null}

      <div className="mt-auto pt-8">
        {footer ? <div>{footer}</div> : null}

        <div className="border-t border-white/10 pt-5">
          <p className="text-[11px] text-white/60">Logged in as</p>
          <p className="mt-1 text-[13px] font-bold text-white">Affiliate</p>
          <Link
            href="/"
            className="mt-4 flex cursor-pointer items-center gap-2 text-[13px] font-medium text-white/80 transition-colors hover:text-white"
          >
            <LogOut className="h-4 w-4" />
            <span>Log Out</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
