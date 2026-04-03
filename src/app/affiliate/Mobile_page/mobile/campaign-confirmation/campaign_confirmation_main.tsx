"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Check, CirclePlay, ClipboardList, Gift } from "lucide-react";
import BottomNav from "../../BottomNav";
import DesktopSidebarNav from "../../DesktopSidebarNav";

const nextSteps = [
  { icon: ClipboardList, label: "Get Your Brief" },
  { icon: CirclePlay, label: "Post Your Video" },
  { icon: Gift, label: "Enter Prize Pool" },
];

export default function CampaignConfirmationMain() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#f7f8fc] pb-20 lg:pb-0">
      <div className="mx-auto max-w-[1280px] lg:px-6 lg:py-8">
        <div className="lg:grid lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-8">
          <DesktopSidebarNav sectionLabel="Opt-in Confirmation">
            <div className="rounded-3xl bg-white/10 p-5">
              <p className="text-sm text-white/70">Next milestone</p>
              <p className="mt-3 text-3xl font-semibold">Create your brief</p>
              <p className="mt-3 text-sm leading-6 text-white/75">
                Your campaign is unlocked. Follow the next steps to start posting.
              </p>
            </div>
          </DesktopSidebarNav>

          <main className="min-h-screen bg-white lg:min-h-0 lg:rounded-[32px] lg:border lg:border-white/70 lg:shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
            <div className="border-b border-[#eceff5] px-4 py-4 text-center lg:flex lg:items-center lg:justify-between lg:rounded-t-[32px] lg:px-8 lg:py-6">
              <Link
                href="/affiliate/Mobile_page/mobile/campaign-detail"
                className="hidden items-center gap-2 text-[#2D1B69] transition-colors hover:text-[#E83A7A] lg:flex"
              >
                <ArrowLeft className="h-5 w-5" />
                <span className="text-sm font-medium">Back to campaign</span>
              </Link>
              <p className="text-xl font-semibold text-[#20145f]">ShopSlayer</p>
              <div className="hidden lg:block lg:w-[148px]" />
            </div>

            <div className="mx-auto max-w-[560px] px-4 py-8 text-center lg:px-6 lg:py-12">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#ffe3ef]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#E83A7A] bg-white text-[#E83A7A]">
                  <Check className="h-6 w-6" />
                </div>
              </div>

              <h1 className="mt-6 text-[30px] font-semibold leading-tight text-[#20145f]">
                Welcome back, Sarah!
              </h1>
              <p className="mt-3 text-base leading-7 text-[#667085]">
                Just one last step - confirm you&apos;ve opted in on TikTok Shop below.
              </p>

              <div className="mt-8 rounded-2xl border border-[#20145f] bg-white p-4 text-left shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#5b61f6] text-sm font-semibold text-white">
                    GL
                  </div>
                  <div>
                    <p className="text-base font-semibold text-[#20145f]">GlowLab Serum</p>
                    <p className="text-sm text-[#667085]">GlowLab Co.</p>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs text-green-600">
                    Open Plan
                  </span>
                  <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs text-blue-600">
                    Beauty
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => router.push("/affiliate/Mobile_page/mobile/my-campaigns")}
                className="mt-6 w-full rounded-xl bg-[#E83A7A] px-4 py-4 text-base font-semibold text-white transition-colors hover:bg-[#d92f6d]"
              >
                {"\u2713"} I&apos;ve Opted In on TikTok
              </button>
              <p className="mt-3 text-sm leading-6 text-[#98a2b3]">
                Tapping confirms your participation and unlocks your content brief.
              </p>

              <div className="mt-8 rounded-2xl bg-[#fbfbfe] p-5 text-left">
                <h2 className="text-lg font-semibold text-[#20145f]">What happens next</h2>
                <div className="mt-5 space-y-4">
                  {nextSteps.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#20145f] text-[#20145f]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-base text-[#20145f]">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-8 text-sm text-[#667085]">
                Didn&apos;t opt in?{" "}
                <Link
                  href="/affiliate/Mobile_page/mobile/campaign-detail"
                  className="font-medium text-[#20145f] underline"
                >
                  Go back to the campaign.
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
