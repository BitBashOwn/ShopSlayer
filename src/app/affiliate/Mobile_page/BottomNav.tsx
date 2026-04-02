"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Folder, Home, Upload, User } from "lucide-react";

const navItems = [
  {
    label: "Home",
    href: "/affiliate/Mobile_page/mobile",
    icon: Home,
    paths: ["/affiliate/Mobile_page/mobile"],
  },
  {
    label: "Campaigns",
    href: "/affiliate/Mobile_page/mobile",
    icon: FileText,
    paths: ["/affiliate/Mobile_page/mobile/campaign-detail"],
  },
  {
    label: "My Campaigns",
    href: "/affiliate/Mobile_page/mobile/my-campaigns",
    icon: Folder,
    paths: ["/affiliate/Mobile_page/mobile/my-campaigns"],
  },
  {
    label: "Submissions",
    href: "/affiliate/Mobile_page/mobile/my-campaigns",
    icon: Upload,
    paths: ["/affiliate/Mobile_page/mobile/campaign-confirmation"],
  },
  {
    label: "Profile",
    href: "/affiliate/Mobile_page/mobile/profile",
    icon: User,
    paths: ["/affiliate/Mobile_page/mobile/profile"],
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 z-40 w-full border-t bg-white py-2 text-xs lg:hidden">
      <div className="flex justify-around">
        {navItems.map(({ label, href, icon: Icon, paths }) => {
          const active = paths.includes(pathname);

          return (
            <Link
              key={label}
              href={href}
              className={`flex flex-col items-center ${
                active ? "text-pink-500" : "text-gray-500"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
