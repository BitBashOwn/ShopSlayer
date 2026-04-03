"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { affiliateNavItems } from "./affiliateNavItems";

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 z-40 w-full border-t bg-white py-2 text-xs lg:hidden">
      <div className="flex justify-around">
        {affiliateNavItems.map(({ label, href, icon: Icon, paths }) => {
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
