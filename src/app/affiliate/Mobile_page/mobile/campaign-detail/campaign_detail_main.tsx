"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLeft, CalendarDays, ClipboardList, Gift, Share2, ShieldCheck } from "lucide-react";

const terms = [
  "Commission: 14% via TikTok Shop affiliate link",
  "Videos required: Minimum 1 video posted during campaign dates",
  "Prize pool: Raffle entry for all participants who submit a video.",
];

export default function CampaignDetailMain() {
  const router = useRouter();
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f8fc]">
      <div className="mx-auto max-w-[1220px] lg:px-6 lg:py-8">
        <div className="lg:grid lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-8">
          <aside className="hidden lg:flex lg:flex-col lg:rounded-[28px] lg:bg-[#24145f] lg:px-6 lg:py-7 lg:text-white lg:shadow-[0_24px_80px_rgba(36,20,95,0.22)]">
            <p className="text-xl font-semibold">ShopSlayer</p>
            <p className="mt-1 text-sm text-white/65">Campaign Detail</p>

            <div className="mt-10 rounded-3xl bg-white/10 p-5">
              <p className="text-sm text-white/70">Quick Summary</p>
              <p className="mt-3 text-3xl font-semibold">GlowLab Serum</p>
              <p className="mt-3 text-sm leading-6 text-white/75">
                Commission campaign with open-plan onboarding and a raffle-based prize pool.
              </p>
            </div>

            <div className="mt-6 space-y-3 text-sm text-white/85">
              <div className="rounded-2xl bg-white/10 px-4 py-3">14% commission</div>
              <div className="rounded-2xl bg-white/5 px-4 py-3">Campaign ends Mar 31</div>
              <div className="rounded-2xl bg-white/5 px-4 py-3">Open plan signup</div>
            </div>
          </aside>

          <main className="lg:rounded-[32px] lg:border lg:border-white/70 lg:bg-white lg:shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
            <div className="border-b border-[#eceff5] bg-white px-4 py-4 lg:rounded-t-[32px] lg:px-8 lg:py-6">
              <div className="flex items-center justify-between">
                <Link
                  href="/affiliate/Mobile_page/mobile"
                  className="flex items-center gap-2 text-[#2D1B69] transition-colors hover:text-[#E83A7A]"
                >
                  <ArrowLeft className="h-5 w-5" />
                  <span className="hidden text-sm font-medium lg:inline">Back</span>
                </Link>

                <h1 className="text-xl font-semibold text-[#20145f] lg:text-2xl">
                  Campaign Detail
                </h1>

                <button
                  type="button"
                  className="rounded-full p-2 text-[#2D1B69] transition-colors hover:bg-[#f4f1fb]"
                >
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="space-y-4 px-3 py-4 lg:grid lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-8 lg:space-y-0 lg:px-8 lg:py-8">
              <section className="space-y-4">
                <div className="rounded-2xl border border-[#dfe3ee] bg-white p-4 shadow-sm lg:p-6 lg:shadow-none">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5b61f6] text-sm font-semibold text-white">
                      GL
                    </div>
                    <div>
                      <p className="text-xs text-[#667085] lg:text-sm">GlowLab Co.</p>
                    </div>
                  </div>

                  <h2 className="mt-3 text-[26px] font-semibold leading-tight text-[#1f1b67] lg:text-[32px]">
                    GlowLab Serum
                  </h2>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs text-blue-600">
                      Beauty
                    </span>
                    <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs text-green-600">
                      Open Plan
                    </span>
                  </div>

                  <div className="mt-4 flex items-center gap-2 border-t border-[#eef1f6] pt-4 text-sm text-[#667085]">
                    <CalendarDays className="h-4 w-4" />
                    <span>Mar 10 - Mar 31, 2026</span>
                  </div>
                </div>

                <div className="rounded-2xl bg-white p-4 shadow-sm lg:border lg:border-[#eef1f6] lg:p-6 lg:shadow-none">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 border-b border-[#eef1f6] pb-4">
                      <span className="pt-0.5 text-lg text-[#ff4d8d]">$</span>
                      <p className="text-base font-medium text-[#ff2f67]">
                        Earn 14% commission via TikTok Shop
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <Gift className="mt-0.5 h-5 w-5 text-[#00a86b]" />
                      <p className="text-base font-medium text-[#06835f]">
                        Prize Pool Bonus - iPad, Apple Watch raffle among all participants
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-white p-4 shadow-sm lg:border lg:border-[#eef1f6] lg:p-6 lg:shadow-none">
                  <h3 className="text-xl font-semibold text-[#20145f]">About This Campaign</h3>
                  <p className="mt-3 text-[15px] leading-7 text-[#344054]">
                    GlowLab Serum is a bestselling vitamin C formula designed for TikTok Shop affiliates.
                    Create content your way with clear conversion hooks, open-plan onboarding, and no
                    script requirement before approval.
                  </p>
                </div>
              </section>

              <aside className="space-y-4">
                <div className="rounded-2xl bg-white p-4 shadow-sm lg:border lg:border-[#20145f] lg:p-6 lg:shadow-none">
                  <h3 className="text-xl font-semibold text-[#20145f]">Your Content Brief</h3>
                  <div className="mt-4 rounded-2xl border border-[#20145f] bg-[#fbfbff] px-4 py-8 text-center">
                    <ClipboardList className="mx-auto h-10 w-10 text-[#20145f]" />
                    <p className="mt-3 text-base font-semibold text-[#20145f]">
                      Unlock your brief after opt in.
                    </p>
                    <p className="mt-2 text-sm text-[#98a2b3]">
                      Key messaging points, target audience, and content format suggestions appear here.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl bg-white p-4 shadow-sm lg:border lg:border-[#20145f] lg:p-6 lg:shadow-none">
                  <div className="flex items-center gap-3">
                    <ClipboardList className="h-5 w-5 text-[#20145f]" />
                    <h3 className="text-xl font-semibold text-[#20145f]">Campaign Terms</h3>
                  </div>

                  <div className="mt-5 space-y-4">
                    {terms.map((term) => (
                      <div key={term} className="flex items-start gap-3">
                        <ShieldCheck className="mt-0.5 h-5 w-5 text-[#22c55e]" />
                        <p className="text-sm leading-6 text-[#344054]">{term}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-[#dfe3ee] pt-4">
                    <label className="flex items-start gap-3 text-sm text-[#344054]">
                      <input
                        type="checkbox"
                        checked={agreedToTerms}
                        onChange={(event) => setAgreedToTerms(event.target.checked)}
                        className="mt-1 h-4 w-4 rounded border-[#98a2b3] accent-[#E83A7A]"
                      />
                      <span>I agree to these campaign terms</span>
                    </label>
                  </div>
                </div>

                <div className="rounded-2xl bg-white p-4 shadow-sm lg:border lg:border-[#eef1f6] lg:p-6 lg:shadow-none">
                  <button
                    type="button"
                    disabled={!agreedToTerms}
                    onClick={() => {
                      if (agreedToTerms) {
                        router.push("/affiliate/Mobile_page/mobile/campaign-confirmation");
                      }
                    }}
                    className={`w-full rounded-full px-4 py-4 text-base font-semibold text-white transition-colors ${
                      agreedToTerms
                        ? "cursor-pointer bg-[#E83A7A] hover:bg-[#d92f6d]"
                        : "cursor-not-allowed bg-[#dfe3ea]"
                    }`}
                  >
                    Opt In on TikTok -&gt;
                  </button>
                  <p className="mt-3 text-center text-xs leading-5 text-[#98a2b3]">
                    You&apos;ll be redirected to GlowLab Co.&apos;s TikTok Shop affiliate page. No product
                    samples are guaranteed on open plan campaigns.
                  </p>
                </div>
              </aside>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
