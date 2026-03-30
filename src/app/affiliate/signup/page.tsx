"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, ArrowRight, AtSign } from "lucide-react";

export default function AffiliateSignup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [tiktok, setTiktok] = useState("");
  const [password, setPassword] = useState("");
  const [niche, setNiche] = useState("");
  const [agreed, setAgreed] = useState(false);
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

          <div className="flex items-center pt-2">
            <input id="terms" type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)}
              className="h-5 w-5 text-[#1a1a6e] border-gray-300 rounded" />
            <label htmlFor="terms" className="ml-3 text-sm text-gray-700">
              I agree to ShopSlayer&apos;s{" "}
              <a href="#" className="text-[#e8445a] underline">Terms & Conditions</a>.
            </label>
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
    </div>
  );
}
