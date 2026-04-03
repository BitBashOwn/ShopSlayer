"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  readStoredAffiliateProfile,
  type AffiliateProfile,
} from "./affiliateProfileStorage";

export default function MobileHeader() {
  const [profile] = useState<AffiliateProfile>(() => readStoredAffiliateProfile());

  const initials = useMemo(() => {
    const parts = profile.fullName.trim().split(/\s+/).filter(Boolean);
    return parts.slice(0, 2).map((part) => part[0]?.toUpperCase() ?? "").join("") || "SC";
  }, [profile.fullName]);

  return (
    <div className="px-4 pt-4 lg:border-b lg:border-[#eef1f6] lg:px-8 lg:pt-8 lg:pb-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[#2D1B69] text-base font-semibold lg:text-[28px] lg:leading-none">
            ShopSlayer
          </h1>
          <p className="hidden lg:mt-2 lg:block lg:text-sm lg:text-[#667085]">
            Find campaigns, track progress, and manage submissions.
          </p>
        </div>
        <Link
          href="/affiliate/Mobile_page/mobile/profile"
          className="relative flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#d0d5dd] text-sm font-semibold text-white transition-transform hover:scale-[1.03] lg:h-12 lg:w-12 lg:text-base"
        >
          {profile.avatarUrl ? (
            <Image
              src={profile.avatarUrl}
              alt={profile.fullName}
              fill
              sizes="48px"
              className="object-cover"
            />
          ) : (
            initials
          )}
        </Link>
      </div>

      <div className="mt-4 lg:mt-8 lg:flex lg:items-end lg:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-[#2D1B69] lg:text-[32px]">
            Hey {profile.fullName.split(" ")[0]} <span aria-hidden="true">👋</span>
          </h2>
          <p className="text-sm text-gray-500 lg:mt-2 lg:text-base">
            23 campaigns available
          </p>
        </div>
      </div>
    </div>
  );
}
