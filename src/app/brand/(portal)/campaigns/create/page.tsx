"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLeft, Zap } from "lucide-react";

export default function CreateCampaign() {
  const router = useRouter();
  const [campaignName, setCampaignName] = useState("");
  const [productName, setProductName] = useState("");

  const handleAction = () => {
    // Just mock saving/publishing and route back to dashboard
    router.push("/brand/dashboard");
  };

  return (
    <div className="flex h-full flex-col bg-[#fbfbfd]">
      <div className="z-20 flex shrink-0 items-center justify-between border-b border-[#e7e7ee] bg-white px-8 py-4">
        <div className="flex items-center gap-4">
          <Link
            href="/brand/dashboard"
            className="text-[#76778f] transition-colors hover:text-[#1a1a6e]"
          >
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-2xl font-bold leading-tight text-[#1a1a4b]">Create Campaign</h1>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleAction}
            className="rounded-[10px] border border-[#1a1a6e] bg-white px-6 py-2.5 text-sm font-semibold text-[#1a1a6e]"
          >
            Save Draft
          </button>
          <button
            onClick={handleAction}
            className="flex items-center gap-2 rounded-[10px] bg-[#ec3f82] px-6 py-2.5 text-sm font-semibold text-white"
          >
            Publish Campaign <span>→</span>
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="mx-auto max-w-[980px]">
            <section className="space-y-5">
              <SectionTitle title="Campaign Basics" />

            <div className="space-y-2">
              <label className="block text-[15px] font-semibold text-[#2f3154]">Campaign Name</label>
              <input
                type="text"
                placeholder="e.g., GlowLab Spring Beauty Campaign"
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
                className="h-12 w-full rounded-[10px] border border-[#d8d8e4] px-4 text-sm font-medium text-[#1a1a6e] outline-none placeholder:text-sm placeholder:font-medium placeholder:text-[#b6b7c8]"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[15px] font-semibold text-[#2f3154]">Product Name</label>
              <input
                type="text"
                placeholder="e.g., Vitamin C Glow Serum"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="h-12 w-full rounded-[10px] border border-[#d8d8e4] px-4 text-sm font-medium text-[#1a1a6e] outline-none placeholder:text-sm placeholder:font-medium placeholder:text-[#b6b7c8]"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[15px] font-semibold text-[#2f3154]">Product Description</label>
              <textarea
                placeholder="brief descriotion of your product..."
                rows={3}
                className="w-full resize-none rounded-[10px] border border-[#d8d8e4] px-4 py-3 text-sm font-medium text-[#1a1a6e] outline-none placeholder:text-sm placeholder:font-medium placeholder:text-[#b6b7c8]"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-[#2f3154]">Content Category</label>
              <select className="h-12 w-full rounded-[10px] border border-[#d8d8e4] bg-white px-4 text-sm font-medium text-[#1a1a6e] outline-none">
                <option value="">Select a category</option>
                <option value="beauty">Beauty</option>
                <option value="lifestyle">Lifestyle</option>
                <option value="tech">Tech</option>
                <option value="fashion">Fashion</option>
                <option value="food">Food</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-[#2f3154]">Campaign Start Date</label>
                <input
                  type="date"
                  className="h-12 w-full rounded-[10px] border border-[#d8d8e4] px-4 text-sm font-medium text-[#1a1a6e] outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-[#2f3154]">Campaign End Date</label>
                <input
                  type="date"
                  className="h-12 w-full rounded-[10px] border border-[#d8d8e4] px-4 text-sm font-medium text-[#1a1a6e] outline-none"
                />
              </div>
            </div>
            </section>

            <section className="mt-8 space-y-5">
              <SectionTitle title="Affiliate Terms" />
            <div className="space-y-2">
              <label className="block text-[15px] font-semibold text-[#2f3154]">Commission Rate %</label>
              <div className="relative">
                <input
                  type="number"
                  placeholder="e.g., 15"
                  className="h-12 w-full rounded-[10px] border border-[#d8d8e4] px-4 pr-10 text-sm font-medium text-[#1a1a6e] outline-none placeholder:text-sm placeholder:font-medium placeholder:text-[#b6b7c8]"
                />
                <span className="absolute right-4 top-3.5 text-xs font-bold text-[#999ab2]">%</span>
              </div>
              <p className="text-xs text-[#9496ad]">This is what affiliates earn via TikTok Shop - paid directly by TikTok.</p>
            </div>

            <div className="space-y-2">
              <label className="block text-[15px] font-semibold text-[#2f3154]">Minimum Videos Required</label>
              <input
                type="number"
                placeholder="e.g., 3"
                className="h-12 w-full rounded-[10px] border border-[#d8d8e4] px-4 text-sm font-medium text-[#1a1a6e] outline-none placeholder:text-sm placeholder:font-medium placeholder:text-[#b6b7c8]"
              />
              <p className="text-xs text-[#9496ad]">Minimum number of videos an affiliate must post to qualify for prize pool entry.</p>
            </div>

            <div className="space-y-2">
              <label className="block text-[15px] font-semibold text-[#2f3154]">TikTok Shop Affiliate URL</label>
              <div className="relative">
                <div className="absolute left-4 top-3 text-[16px] font-bold text-[#4b4d73]">♪</div>
                <input
                  type="url"
                  placeholder="https://shop.tiktok.com/..."
                  className="h-12 w-full rounded-[10px] border border-[#d8d8e4] pl-10 pr-4 text-sm font-medium text-[#1a1a6e] outline-none placeholder:text-sm placeholder:font-medium placeholder:text-[#b6b7c8]"
                />
              </div>
              <p className="text-xs text-[#9496ad]">Affiliates will be redirected here to opt in.</p>
            </div>
            </section>

            <section className="mt-8 space-y-5">
              <SectionTitle title="Prize Pool" />
            <div className="space-y-2">
              <label className="block text-[15px] font-semibold text-[#2f3154]">Prize Pool Description</label>
              <textarea
                placeholder="Describe the prizes -- e.g. iPad, Apple Watch, camera. One raffle entry per qualifying video submitted."
                rows={3}
                className="w-full resize-none rounded-[10px] border border-[#d8d8e4] px-4 py-3 text-sm font-medium text-[#1a1a6e] outline-none placeholder:text-sm placeholder:font-medium placeholder:text-[#b6b7c8]"
              />
              <p className="text-xs text-[#9496ad]">Prize pool details are shown to affiliates on the campaign detail page.</p>
            </div>
            </section>

            <section className="mt-8 space-y-5">
              <SectionTitle title="Content Brief" />
            <div className="space-y-2">
              <label className="block text-[15px] font-semibold text-[#2f3154]">Product Overview</label>
              <textarea
                placeholder="Detailed overview of the product for affiliates..."
                rows={3}
                className="w-full resize-none rounded-[10px] border border-[#d8d8e4] px-4 py-3 text-sm font-medium text-[#1a1a6e] outline-none placeholder:text-sm placeholder:font-medium placeholder:text-[#b6b7c8]"
              />
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-[15px] font-semibold text-[#2f3154]">Suggested Hook 1</label>
                <div className="relative">
                  <Zap size={15} className="absolute left-4 top-3.5 text-[#ec3f82]" />
                  <input
                    type="text"
                    placeholder="Enter a suggested hook..."
                    className="h-12 w-full rounded-[10px] border border-[#d8d8e4] pl-10 pr-4 text-sm font-medium text-[#1a1a6e] outline-none placeholder:text-sm placeholder:font-medium placeholder:text-[#b6b7c8]"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-[15px] font-semibold text-[#2f3154]">Suggested Hook 2</label>
                <div className="relative">
                  <Zap size={15} className="absolute left-4 top-3.5 text-[#ec3f82]" />
                  <input
                    type="text"
                    placeholder="Enter a suggested hook..."
                    className="h-12 w-full rounded-[10px] border border-[#d8d8e4] pl-10 pr-4 text-sm font-medium text-[#1a1a6e] outline-none placeholder:text-sm placeholder:font-medium placeholder:text-[#b6b7c8]"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-[15px] font-semibold text-[#2f3154]">Suggested Hook 3</label>
                <div className="relative">
                  <Zap size={15} className="absolute left-4 top-3.5 text-[#ec3f82]" />
                  <input
                    type="text"
                    placeholder="Enter a suggested hook..."
                    className="h-12 w-full rounded-[10px] border border-[#d8d8e4] pl-10 pr-4 text-sm font-medium text-[#1a1a6e] outline-none placeholder:text-sm placeholder:font-medium placeholder:text-[#b6b7c8]"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-[15px] font-semibold text-[#2f3154]">Key Angles</label>
              <textarea
                placeholder="e.g. Morning routine, Before & After, Ingredient focus..."
                rows={3}
                className="w-full resize-none rounded-[10px] border border-[#d8d8e4] px-4 py-3 text-sm font-medium text-[#1a1a6e] outline-none placeholder:text-sm placeholder:font-medium placeholder:text-[#b6b7c8]"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[15px] font-semibold text-[#2f3154]">Content Guidelines Do&apos;s</label>
              <textarea
                placeholder="What affiliates should do..."
                rows={3}
                className="w-full resize-none rounded-[10px] border border-[#d8d8e4] px-4 py-3 text-sm font-medium text-[#1a1a6e] outline-none placeholder:text-sm placeholder:font-medium placeholder:text-[#b6b7c8]"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[15px] font-semibold text-[#2f3154]">Content Guidelines Don&apos;ts</label>
              <textarea
                placeholder="What affiliates should avoid..."
                rows={3}
                className="w-full resize-none rounded-[10px] border border-[#d8d8e4] px-4 py-3 text-sm font-medium text-[#1a1a6e] outline-none placeholder:text-sm placeholder:font-medium placeholder:text-[#b6b7c8]"
              />
            </div>
            </section>

            <section className="mt-8 space-y-5 pb-28">
              <SectionTitle title="Campaign Type" />
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-[12px] border border-[#1a1a6e] bg-white p-4">
                  <div className="absolute right-4 top-4 flex h-4 w-4 items-center justify-center rounded-full border border-[#ec3f82] bg-white">
                    <div className="h-2 w-2 rounded-full bg-[#ec3f82]" />
                  </div>
                  <span className="mb-3 inline-block rounded-full bg-[#e7f8eb] px-3 py-1 text-[11px] font-bold text-[#3aa35f]">Active</span>
                  <h3 className="mb-1 text-base font-bold leading-snug text-[#1a1a4b]">Open Plan</h3>
                  <p className="max-w-[320px] text-sm leading-snug text-gray-600">Any affiliate can browse and opt in. No invite required.</p>
                </div>

                <div className="rounded-[12px] border border-[#ececf2] bg-[#fafafd] p-4 opacity-60">
                  <span className="mb-3 inline-block rounded-full bg-[#ececf2] px-3 py-1 text-[11px] font-bold text-[#9fa0b2]">Coming Soon</span>
                  <h3 className="mb-1 text-base font-bold leading-snug text-gray-400">Targeted Plan</h3>
                  <p className="max-w-[320px] text-sm leading-snug text-gray-400">Invite specific affiliates directly. Coming soon.</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="w-[380px] shrink-0 border-l border-[#e7e7ee] bg-[#fbfbfd] px-6 py-6">
          <div className="sticky top-6">
            <h2 className="mb-4 text-lg font-bold leading-tight text-[#1a1a4b]">Campaign Preview</h2>
            <div className="mb-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="mb-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#ec3f82] text-base font-bold text-white">
                ?
              </div>
              <h3 className="mb-1 text-base font-bold leading-snug text-[#1a1a4b]">
                {campaignName || "Campaign Name"}
              </h3>
              <p className="mb-4 border-b border-gray-100 pb-4 text-sm font-normal leading-snug text-gray-500">
                {productName || "Product Name"}
              </p>
              <div className="flex">
                <span className="rounded-full bg-[#dcfce7] px-3 py-1 text-xs font-bold text-[#15803d]">
                  Open Plan
                </span>
              </div>
            </div>
            <p className="text-sm font-normal leading-relaxed text-gray-500">
              This is how your campaign will appear to affiliates in the directory.
            </p>
          </div>
        </div>
      </div>

      <div className="z-20 flex shrink-0 items-center justify-between border-t border-[#e7e7ee] bg-white px-6 py-3">
        <button
          onClick={handleAction}
          className="text-sm font-medium text-[#7f8097]"
        >
          Discard Changes
        </button>
        <div className="flex gap-3">
          <button
            onClick={handleAction}
            className="rounded-[10px] border border-[#1a1a6e] bg-white px-6 py-2.5 text-sm font-semibold text-[#1a1a6e]"
          >
            Save Draft
          </button>
          <button
            onClick={handleAction}
            className="rounded-[10px] bg-[#ec3f82] px-6 py-2.5 text-sm font-semibold text-white"
          >
            Publish Campaign →
          </button>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="mb-1 flex items-center gap-4 border-b border-[#e8e8f0] pb-3">
      <h2 className="text-lg font-bold leading-tight text-[#1a1a4b]">{title}</h2>
      <div className="h-px flex-1 bg-[#ececf3]" />
    </div>
  );
}
