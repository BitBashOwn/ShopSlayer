"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Zap, CheckCircle2, BarChart3 } from "lucide-react";

export default function BrandForgotPassword() {
  const [email, setEmail] = useState("");
  const isFormValid = email.trim() !== "";

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      <div className="md:w-[45%] bg-[#1a1a6e] flex flex-col justify-between p-8 lg:p-16 text-white min-h-[40vh] md:min-h-screen">
        <div>
          <h1 className="text-2xl font-bold mb-16">ShopSlayer</h1>
          <div className="max-w-md">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">Good to have you back.</h2>
            <p className="text-gray-300 text-lg mb-12">Your campaigns, affiliates, and performance data are waiting.</p>
            <div className="space-y-6">
              <div className="flex items-start"><Zap className="text-[#e8445a] mt-1 mr-4 shrink-0" size={24} /><p className="text-lg">Post campaigns in minutes — no agency needed.</p></div>
              <div className="flex items-start"><CheckCircle2 className="text-[#e8445a] mt-1 mr-4 shrink-0" size={24} /><p className="text-lg">Only pay for the plan, not per creator.</p></div>
              <div className="flex items-start"><BarChart3 className="text-[#e8445a] mt-1 mr-4 shrink-0" size={24} /><p className="text-lg">Track performance with real-time reporting.</p></div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-[55%] flex flex-col justify-center p-8 lg:p-16 relative">
        <div className="hidden md:block absolute top-10 right-10 text-sm text-gray-500">
          Remember your password?{" "}
          <Link href="/brand/login" className="text-[#e8445a] hover:opacity-80">Log In</Link>
        </div>

        <div className="max-w-md w-full mx-auto">
          <h2 className="text-3xl font-bold text-[#1a1a6e] mb-2">Reset your password</h2>
          <p className="text-gray-500 mb-8">Enter your email and we&apos;ll send you a reset link.</p>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-[#1a1a6e]">Work Email</label>
              <input type="email" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a1a6e] transition-all" />
            </div>
            <button type="submit" disabled={!isFormValid}
              className={`w-full flex items-center justify-center py-4 rounded-full text-base font-medium text-white transition-colors ${
                isFormValid ? "bg-[#1a1a6e] hover:opacity-90 cursor-pointer" : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}>
              Send reset link <ArrowRight className="ml-2" size={18} />
            </button>
          </form>

          <div className="mt-8">
            <Link href="/brand/login" className="inline-flex items-center text-gray-500 hover:text-gray-800 text-sm font-medium">
              <ArrowLeft className="mr-2" size={16} /> Back to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
