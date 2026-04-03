"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, ArrowRight, AtSign, Check, X } from "lucide-react";

export default function AffiliateSignup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [tiktok, setTiktok] = useState("");
  const [password, setPassword] = useState("");
  const [niche, setNiche] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isFormValid =
    fullName.trim() !== "" && email.trim() !== "" && tiktok.trim() !== "" &&
    password.trim() !== "" && niche.trim() !== "" && agreed;

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-md text-center mb-8">
        <h1 className="text-xl font-bold text-[#1a1a6e] mb-4">ShopSlayer</h1>
        <hr className="w-full border-gray-200" />
      </div>

      <div className="w-full max-w-md flex flex-col">
        <h2 className="text-3xl font-bold text-[#1a1a6e] mb-2">Join ShopSlayer</h2>
        <p className="text-gray-500 mb-8">Connect with brands, get briefs, earn commission.</p>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1.5">
            <label className="block text-sm font-semibold text-[#1a1a6e]">Full Name</label>
            <input type="text" placeholder="Enter your full name" value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a1a6e] transition-all" />
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-semibold text-[#1a1a6e]">Email Address</label>
            <input type="email" placeholder="your@email.com" value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a1a6e] transition-all" />
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-semibold text-[#1a1a6e]">TikTok Handle</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <AtSign className="text-gray-400" size={18} />
              </div>
              <input type="text" placeholder="@yourhandle" value={tiktok}
                onChange={(e) => setTiktok(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a1a6e] transition-all" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-semibold text-[#1a1a6e]">Password</label>
            <div className="relative">
              <input type={showPassword ? "text" : "password"} placeholder="Create a password" value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a1a6e] transition-all pr-12" />
              <button type="button" className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-semibold text-[#1a1a6e]">Content Niche</label>
            <select value={niche} onChange={(e) => setNiche(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#1a1a6e] transition-all">
              <option value="" disabled>Select your niche</option>
              <option value="beauty">Beauty & Makeup</option>
              <option value="fashion">Fashion & Style</option>
              <option value="tech">Tech & Gadgets</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="fitness">Fitness & Health</option>
            </select>
          </div>

          <div className="flex items-center gap-[10px] pt-2">
            <input
              id="affiliate-signup-terms"
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="sr-only"
            />
            <label
              htmlFor="affiliate-signup-terms"
              className={`flex h-[18px] w-[18px] shrink-0 cursor-pointer items-center justify-center rounded border-[1.5px] transition-colors focus-within:ring-2 focus-within:ring-[#1E1B4B] focus-within:ring-offset-2 ${
                agreed
                  ? "border-[#1E1B4B] bg-[#1E1B4B]"
                  : "border-[#D1D5DB] bg-white"
              }`}
            >
              {agreed ? <Check className="text-white" size={12} strokeWidth={3} /> : null}
            </label>
            <span className="text-left text-[14px] text-[#374151]">
              I agree to ShopSlayer&apos;s{" "}
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="cursor-pointer font-normal text-[#F43F5E] underline decoration-[#F43F5E] transition-colors hover:text-[#E11D48]"
              >
                Terms & Conditions
              </button>
              .
            </span>
          </div>

          <button type="submit" disabled={!isFormValid}
            className={`w-full flex items-center justify-center py-4 rounded-full text-base font-medium text-white transition-colors ${
              isFormValid ? "bg-[#1a1a6e] hover:opacity-90 cursor-pointer" : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}>
            Create Account <ArrowRight className="ml-2" size={18} />
          </button>
        </form>

        <div className="mt-8 text-center space-y-4">
          <p className="text-gray-500 text-sm">
            Already have an account?{" "}
            <Link href="/affiliate/login" className="text-[#e8445a] font-medium hover:opacity-80">Log In</Link>
          </p>
          <p className="text-xs text-gray-400">Free to join · No approval required · 500+ campaigns available</p>
        </div>
      </div>

      {showModal ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          role="presentation"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setShowModal(false);
          }}
        >
          <div
            className="relative w-full max-w-[540px] overflow-y-auto rounded-2xl bg-white p-7 shadow-xl"
            style={{ maxHeight: "70vh", boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.12)" }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="terms-modal-title"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <h2 id="terms-modal-title" className="text-xl font-bold text-[#1E1B4B]">
                Terms & Conditions
              </h2>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="-mr-1 -mt-1 shrink-0 rounded-lg p-1 text-[#6B7280] transition-colors hover:bg-gray-100 hover:text-[#374151]"
                aria-label="Close"
              >
                <X size={22} strokeWidth={2} />
              </button>
            </div>

            <div className="space-y-5 text-[14px] leading-[1.7] text-[#374151]">
              <section>
                <h3 className="mb-2 font-bold text-[#1E1B4B]">1. Acceptance of Terms</h3>
                <p>
                  By creating an affiliate account on ShopSlayer, you agree to these Terms & Conditions and our
                  platform policies. If you do not agree, you may not use the service.
                </p>
              </section>
              <section>
                <h3 className="mb-2 font-bold text-[#1E1B4B]">2. Affiliate Responsibilities</h3>
                <p>
                  You are responsible for accurate profile information, compliance with TikTok and applicable laws,
                  and honest promotion of brand campaigns you join. Misleading claims or unauthorized use of brand
                  assets is prohibited.
                </p>
              </section>
              <section>
                <h3 className="mb-2 font-bold text-[#1E1B4B]">3. Commission & Payments</h3>
                <p>
                  Commissions and payment schedules are defined per campaign and brand agreement. ShopSlayer may
                  facilitate tracking; final payout terms are between you and the brand unless otherwise stated in
                  writing.
                </p>
              </section>
              <section>
                <h3 className="mb-2 font-bold text-[#1E1B4B]">4. Content Guidelines</h3>
                <p>
                  Content must follow TikTok Shop rules, FTC disclosure requirements for sponsored content, and each
                  campaign brief. Prohibited content includes harassment, illegal activity, and misrepresentation.
                </p>
              </section>
              <section>
                <h3 className="mb-2 font-bold text-[#1E1B4B]">5. Termination</h3>
                <p>
                  We may suspend or terminate accounts that violate these terms. You may stop using ShopSlayer at any
                  time; certain obligations may survive termination as described in campaign-specific agreements.
                </p>
              </section>
            </div>

            <div className="mt-8 flex flex-wrap justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="rounded-lg border border-[#E5E7EB] px-5 py-2.5 text-[#6B7280] transition-colors hover:bg-gray-50"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={() => {
                  setAgreed(true);
                  setShowModal(false);
                }}
                className="rounded-lg bg-[#1E1B4B] px-5 py-2.5 font-semibold text-white transition-colors hover:bg-[#2D2A7A]"
              >
                I Agree
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
