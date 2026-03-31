"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLeft, CalendarDays, Zap, CheckCircle2 } from "lucide-react";

export default function CreateCampaign() {
  const router = useRouter();
  const [campaignName, setCampaignName] = useState("");
  const [productName, setProductName] = useState("");

  const handleAction = () => {
    // Just mock saving/publishing and route back to dashboard
    router.push("/brand/dashboard");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Header */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-100 px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/brand/dashboard"
            className="text-gray-500 hover:text-[#1a1a6e] transition-colors"
          >
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-xl font-bold text-[#1a1a6e]">Create Campaign</h1>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleAction}
            className="px-5 py-2.5 rounded-md font-medium text-sm text-[#1a1a6e] border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Save Draft
          </button>
          <button
            onClick={handleAction}
            className="px-5 py-2.5 rounded-md font-medium text-sm text-white bg-[#e8445a] hover:bg-[#d63d52] transition-colors flex items-center gap-2"
          >
            Publish Campaign <span>→</span>
          </button>
        </div>
      </div>

      <div className="flex-1 p-8 flex gap-12 max-w-7xl relative pb-24">
        {/* Left Form Column */}
        <div className="flex-1 max-w-2xl space-y-10">
          {/* Campaign Basics */}
          <section className="space-y-6">
            <h2 className="text-lg font-bold text-[#1a1a6e]">Campaign Basics</h2>
            
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-[#1a1a6e]">Campaign Name</label>
              <input
                type="text"
                placeholder="e.g., GlowLab Spring Beauty Campaign"
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-[#1a1a6e] text-sm text-gray-900"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-[#1a1a6e]">Product Name</label>
              <input
                type="text"
                placeholder="e.g., Vitamin C Glow Serum"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-[#1a1a6e] text-sm text-gray-900"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-[#1a1a6e]">Product Description</label>
              <textarea
                placeholder="Brief description of your product..."
                rows={4}
                className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-[#1a1a6e] text-sm text-gray-900 resize-none"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-[#1a1a6e]">Content Category</label>
              <select className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-[#1a1a6e] text-sm text-gray-900 bg-white">
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
                <label className="block text-sm font-semibold text-[#1a1a6e]">Campaign Start Date</label>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-[#1a1a6e] text-sm text-gray-900 uppercase"
                  />
                  <CalendarDays size={18} className="absolute right-3 top-3 text-gray-400 pointer-events-none hidden" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-[#1a1a6e]">Campaign End Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-[#1a1a6e] text-sm text-gray-900 uppercase"
                />
              </div>
            </div>
          </section>

          {/* Affiliate Terms */}
          <section className="space-y-6 pt-6 border-t border-gray-100">
            <h2 className="text-lg font-bold text-[#1a1a6e]">Affiliate Terms</h2>
            
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-[#1a1a6e]">Commission Rate (%)</label>
              <input
                type="number"
                placeholder="e.g., 14"
                className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-[#1a1a6e] text-sm text-gray-900"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-[#1a1a6e]">Minimum Videos Required</label>
              <input
                type="number"
                placeholder="e.g., 3"
                className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-[#1a1a6e] text-sm text-gray-900 mb-1"
              />
              <p className="text-xs text-gray-500">Minimum number of videos an affiliate must post to qualify for prize pool entry.</p>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-[#1a1a6e]">TikTok Shop Affiliate URL</label>
              <div className="relative">
                <div className="absolute left-4 top-3 text-gray-400 font-bold italic text-sm">♪</div>
                <input
                  type="url"
                  placeholder="https://shop.tiktok.com/..."
                  className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-[#1a1a6e] text-sm text-gray-900 mb-1"
                />
              </div>
              <p className="text-xs text-gray-500">Affiliates will be redirected here to opt in.</p>
            </div>
          </section>

          {/* Prize Pool */}
          <section className="space-y-6 pt-6 border-t border-gray-100">
            <h2 className="text-lg font-bold text-[#1a1a6e]">Prize Pool</h2>
            
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-[#1a1a6e]">Prize Pool Description</label>
              <textarea
                placeholder="Describe the prizes — e.g., iPad, Apple Watch, camera. One raffle entry per qualifying video submitted."
                rows={3}
                className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-[#1a1a6e] text-sm text-gray-900 resize-none mb-1"
              />
              <p className="text-xs text-gray-500">Prize pool details are shown to affiliates on the campaign detail page.</p>
            </div>
          </section>

          {/* Content Brief */}
          <section className="space-y-6 pt-6 border-t border-gray-100">
            <h2 className="text-lg font-bold text-[#1a1a6e]">Content Brief</h2>
            
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-[#1a1a6e]">Product Overview</label>
              <textarea
                placeholder="Detailed overview of the product for affiliates..."
                rows={3}
                className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-[#1a1a6e] text-sm text-gray-900 resize-none"
              />
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-[#1a1a6e]">Suggested Hook 1</label>
                <div className="relative">
                  <Zap size={16} className="absolute left-4 top-3.5 text-[#e8445a]" />
                  <input
                    type="text"
                    placeholder="Enter a suggested hook..."
                    className="w-full pl-11 pr-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-[#1a1a6e] text-sm text-gray-900"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-[#1a1a6e]">Suggested Hook 2</label>
                <div className="relative">
                  <Zap size={16} className="absolute left-4 top-3.5 text-[#e8445a]" />
                  <input
                    type="text"
                    placeholder="Enter a suggested hook..."
                    className="w-full pl-11 pr-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-[#1a1a6e] text-sm text-gray-900"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-[#1a1a6e]">Suggested Hook 3</label>
                <div className="relative">
                  <Zap size={16} className="absolute left-4 top-3.5 text-[#e8445a]" />
                  <input
                    type="text"
                    placeholder="Enter a suggested hook..."
                    className="w-full pl-11 pr-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-[#1a1a6e] text-sm text-gray-900"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-[#1a1a6e]">Key Angles</label>
              <textarea
                placeholder="e.g. Morning routine, Before & After, Ingredient focus..."
                rows={3}
                className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-[#1a1a6e] text-sm text-gray-900 resize-none"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-[#1a1a6e]">Content Guidelines Do&apos;s</label>
              <textarea
                placeholder="What affiliates should do..."
                rows={3}
                className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-[#1a1a6e] text-sm text-gray-900 resize-none"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-[#1a1a6e]">Content Guidelines Don&apos;ts</label>
              <textarea
                placeholder="What affiliates should avoid..."
                rows={3}
                className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-[#1a1a6e] text-sm text-gray-900 resize-none"
              />
            </div>
          </section>

          {/* Campaign Type */}
          <section className="space-y-6 pt-6 border-t border-gray-100">
            <h2 className="text-lg font-bold text-[#1a1a6e]">Campaign Type</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="border-2 border-[#1a1a6e] rounded-xl p-5 relative bg-white cursor-pointer shadow-sm">
                <div className="absolute right-4 top-4">
                  <div className="w-4 h-4 rounded-full border-4 border-[#e8445a] bg-white flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a6e]"></div>
                  </div>
                </div>
                <span className="text-emerald-700 bg-emerald-50 text-xs font-bold px-2 py-0.5 rounded-full inline-block mb-3">Active</span>
                <h3 className="font-bold text-[#1a1a6e] mb-2 text-lg">Open Plan</h3>
                <p className="text-sm text-gray-600">Any affiliate can browse and opt in. No invite required.</p>
              </div>

              <div className="border border-gray-200 rounded-xl p-5 relative bg-gray-50 opacity-60">
                <span className="text-gray-500 bg-gray-200 text-xs font-bold px-2 py-0.5 rounded-full inline-block mb-3">Coming Soon</span>
                <h3 className="font-bold text-gray-500 mb-2 text-lg">Targeted Plan</h3>
                <p className="text-sm text-gray-500">Invite specific affiliates directly. Coming soon.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Right Preview Column (Sticky) */}
        <div className="w-[380px] shrink-0">
          <div className="sticky top-24">
            <h2 className="text-lg font-bold text-[#1a1a6e] mb-4">Campaign Preview</h2>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-4">
              <div className="w-12 h-12 bg-[#e8445a]/80 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4 shadow-sm">
                ?
              </div>
              <h3 className="font-bold text-[#1a1a6e] text-xl mb-1 leading-tight">
                {campaignName || "Campaign Name"}
              </h3>
              <p className="text-gray-500 text-sm mb-6 border-b border-gray-100 pb-5">
                {productName || "Product Name"}
              </p>
              <div className="flex">
                <span className="bg-emerald-50 text-emerald-600 text-xs font-bold px-3 py-1 rounded-full border border-emerald-100/50">
                  Open Plan
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-500 font-medium">
              This is how your campaign will appear to affiliates in the directory.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Actions Footer */}
      <div className="sticky bottom-0 bg-white border-t border-gray-200 px-8 py-5 flex items-center justify-between z-30 mt-auto ml-[195px] w-[calc(100%-195px)] fixed left-0 right-0">
        <button
          onClick={handleAction}
          className="text-gray-400 font-medium text-sm hover:text-gray-600 transition-colors"
        >
          Discard Changes
        </button>
        <div className="flex gap-3">
          <button
            onClick={handleAction}
            className="px-6 py-2.5 rounded-md font-medium text-sm text-[#1a1a6e] border border-gray-200 hover:bg-gray-50 transition-colors bg-white shadow-sm"
          >
            Save Draft
          </button>
          <button
            onClick={handleAction}
            className="px-6 py-2.5 rounded-md font-medium text-sm text-white bg-[#e8445a] hover:bg-[#d63d52] transition-colors shadow-sm"
          >
            Publish Campaign →
          </button>
        </div>
      </div>
    </div>
  );
}
