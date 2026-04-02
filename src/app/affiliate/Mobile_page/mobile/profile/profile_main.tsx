"use client";

import { useRouter } from "next/navigation";
import {
  Edit3,
  Hash,
  LogOut,
  Mail,
  Music2,
  Pencil,
  Tag,
} from "lucide-react";
import BottomNav from "../../BottomNav";

const stats = [
  { value: "6", label: "Campaigns", sublabel: "Joined" },
  { value: "4", label: "Active", sublabel: "Now" },
  { value: "3", label: "Videos", sublabel: "Submitted" },
];

const details = [
  {
    icon: Mail,
    label: "Email",
    value: "sarah@email.com",
  },
  {
    icon: Hash,
    label: "TikTok Handle",
    value: "@sarahcreates",
  },
  {
    icon: Tag,
    label: "Content Niche",
    value: "Beauty & Lifestyle",
  },
];

export default function ProfileMain() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#f7f8fc] pb-20 lg:pb-0">
      <div className="mx-auto max-w-[1180px] lg:px-6 lg:py-8">
        <div className="lg:grid lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-8">
          <aside className="hidden lg:flex lg:flex-col lg:rounded-[28px] lg:bg-[#24145f] lg:px-6 lg:py-7 lg:text-white lg:shadow-[0_24px_80px_rgba(36,20,95,0.22)]">
            <p className="text-xl font-semibold">ShopSlayer</p>
            <p className="mt-1 text-sm text-white/65">Affiliate Profile</p>

            <div className="mt-10 rounded-3xl bg-white/10 p-5">
              <p className="text-sm text-white/70">Creator snapshot</p>
              <p className="mt-3 text-3xl font-semibold">Sarah Cruz</p>
              <p className="mt-3 text-sm leading-6 text-white/75">
                Keep your creator details up to date so brands can match you with the right campaigns.
              </p>
            </div>
          </aside>

          <main className="min-h-screen bg-white lg:min-h-0 lg:rounded-[32px] lg:border lg:border-white/70 lg:shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
            <div className="flex items-center justify-between border-b border-[#eceff5] px-4 py-4 lg:rounded-t-[32px] lg:px-8 lg:py-6">
              <h1 className="text-[28px] font-semibold text-[#20145f]">Profile</h1>
              <button
                type="button"
                className="rounded-full p-2 text-[#E83A7A] transition-colors hover:bg-[#fff0f6]"
              >
                <Pencil className="h-5 w-5" />
              </button>
            </div>

            <div className="px-4 py-5 lg:px-8 lg:py-8">
              <div className="mx-auto max-w-[620px]">
                <div className="rounded-[28px] bg-white text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#3b38b8] text-[28px] font-semibold text-white">
                    SC
                  </div>

                  <h2 className="mt-4 text-[32px] font-semibold leading-tight text-[#20145f]">
                    Sarah Cruz
                  </h2>

                  <div className="mt-2 flex items-center justify-center gap-2 text-[#ff3b86]">
                    <Music2 className="h-4 w-4" />
                    <span className="text-sm font-medium">@sarahcreates</span>
                  </div>

                  <div className="mt-4 flex justify-center">
                    <span className="rounded-full bg-[#eef2ff] px-4 py-2 text-sm font-medium text-[#3b38b8]">
                      Beauty & Lifestyle
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {stats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-[#dfe3ee] bg-white px-3 py-4 text-center shadow-sm"
                    >
                      <p className="text-[34px] font-semibold leading-none text-[#20145f]">{item.value}</p>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.02em] text-[#667085]">
                        {item.label}
                      </p>
                      <p className="text-xs text-[#98a2b3]">{item.sublabel}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-3xl border border-[#d7dcea] bg-white p-5 shadow-sm">
                  <h3 className="text-xl font-semibold text-[#20145f]">Account Details</h3>

                  <div className="mt-5 space-y-4">
                    {details.map(({ icon: Icon, label, value }) => (
                      <div
                        key={label}
                        className="flex items-start justify-between gap-3 border-b border-[#eef1f6] pb-4 last:border-b-0 last:pb-0"
                      >
                        <div className="flex items-start gap-3">
                          <div className="pt-0.5 text-[#98a2b3]">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-xs text-[#98a2b3]">{label}</p>
                            <p className="mt-1 text-sm font-medium text-[#20145f]">{value}</p>
                          </div>
                        </div>

                        <button
                          type="button"
                          className="rounded-full p-2 text-[#98a2b3] transition-colors hover:bg-[#f7f8fc] hover:text-[#20145f]"
                        >
                          <Edit3 className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="mt-5 text-center text-sm text-[#98a2b3]">
                  Member since March 2026 - Open Plan Affiliate
                </p>

                <button
                  type="button"
                  onClick={() => router.push("/")}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border border-[#e4e7ec] bg-white px-4 py-3 text-base font-medium text-[#20145f] transition-colors hover:bg-[#f9fafb]"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Log Out</span>
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
