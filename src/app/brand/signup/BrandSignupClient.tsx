"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Eye,
  EyeOff,
  ArrowRight,
  Zap,
  CheckCircle2,
  BarChart3,
  Quote,
  Link as LinkIcon,
} from "lucide-react";

export default function BrandSignupClient() {
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [tiktokUrl, setTiktokUrl] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const isFormValid =
    companyName.trim() !== "" &&
    contactName.trim() !== "" &&
    email.trim() !== "" &&
    tiktokUrl.trim() !== "" &&
    password.trim() !== "" &&
    confirmPassword.trim() !== "" &&
    password === confirmPassword &&
    agreed;

  return (
    <div className="flex min-h-screen flex-col bg-white md:flex-row">
      <div className="flex min-h-[40vh] flex-col justify-between bg-[#1a1a6e] p-8 text-white md:min-h-screen md:w-[45%] lg:p-16">
        <div>
          <h1 className="mb-16 text-2xl font-bold">ShopSlayer</h1>
          <div className="mb-12 max-w-md">
            <h2 className="mb-8 text-4xl font-bold leading-tight lg:text-5xl">
              Reach thousands of TikTok creators
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Zap className="mt-1 mr-4 shrink-0 text-[#e8445a]" size={24} />
                <p className="text-lg">Post campaigns in minutes — no agency needed.</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="mt-1 mr-4 shrink-0 text-[#e8445a]" size={24} />
                <p className="text-lg">Only pay for the plan, not per creator.</p>
              </div>
              <div className="flex items-start">
                <BarChart3 className="mt-1 mr-4 shrink-0 text-[#e8445a]" size={24} />
                <p className="text-lg">Track performance with real-time reporting.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white/10 p-6">
          <Quote className="mb-4 text-[#e8445a]" size={32} />
          <p className="mb-4 text-lg font-medium leading-relaxed">
            &quot;ShopSlayer gave us 80 video submissions in our first campaign. Game
            changer.&quot;
          </p>
          <p className="font-medium text-gray-300">— GlowLab Co.</p>
        </div>
      </div>

      <div className="relative flex flex-col justify-center overflow-y-auto p-8 md:w-[55%] lg:p-16">
        <div className="absolute top-10 right-10 hidden text-sm text-gray-500 md:block">
          Already have an account?{" "}
          <Link href="/brand/login" className="text-[#e8445a] hover:opacity-80">
            Log In
          </Link>
        </div>
        <div className="mb-8 text-center text-sm text-gray-500 md:hidden">
          Already have an account?{" "}
          <Link href="/brand/login" className="text-[#e8445a]">
            Log In
          </Link>
        </div>

        <div className="mx-auto w-full max-w-md py-8">
          <h2 className="mb-2 text-3xl font-bold text-[#1a1a6e]">Create your brand account</h2>
          <p className="mb-8 text-gray-500">Start posting campaigns and connecting with TikTok affiliates.</p>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-[#1a1a6e]">Company Name</label>
              <input
                type="text"
                placeholder="e.g., GlowLab Co."
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all focus:outline-none focus:ring-2 focus:ring-[#1a1a6e]"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-[#1a1a6e]">Contact Name</label>
              <input
                type="text"
                placeholder="Your full name"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all focus:outline-none focus:ring-2 focus:ring-[#1a1a6e]"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-[#1a1a6e]">Work Email</label>
              <input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all focus:outline-none focus:ring-2 focus:ring-[#1a1a6e]"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-[#1a1a6e]">TikTok Shop URL</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <LinkIcon className="text-gray-400" size={18} />
                </div>
                <input
                  type="text"
                  placeholder="https://shop.tiktok.com/..."
                  value={tiktokUrl}
                  onChange={(e) => setTiktokUrl(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 py-3 pr-4 pl-11 text-gray-900 placeholder-gray-400 transition-all focus:outline-none focus:ring-2 focus:ring-[#1a1a6e]"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-[#1a1a6e]">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 pr-12 text-gray-900 placeholder-gray-400 transition-all focus:outline-none focus:ring-2 focus:ring-[#1a1a6e]"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-[#1a1a6e]">Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Re-enter your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 pr-12 text-gray-900 placeholder-gray-400 transition-all focus:outline-none focus:ring-2 focus:ring-[#1a1a6e]"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600"
                  onClick={() => setShowConfirm(!showConfirm)}
                >
                  {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <div className="flex items-center pt-2">
              <input
                id="terms"
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="h-5 w-5 rounded border-gray-300"
              />
              <label htmlFor="terms" className="ml-3 text-sm text-gray-700">
                I agree to ShopSlayer&apos;s{" "}
                <a href="#" className="text-[#e8445a] underline">
                  Terms & Conditions
                </a>
                .
              </label>
            </div>
            <button
              type="submit"
              disabled={!isFormValid}
              className={`flex w-full items-center justify-center rounded-full py-4 text-base font-medium text-white transition-colors ${
                isFormValid
                  ? "cursor-pointer bg-[#1a1a6e] hover:opacity-90"
                  : "cursor-not-allowed bg-gray-200 text-gray-500"
              }`}
            >
              Create Brand Account <ArrowRight className="ml-2" size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
