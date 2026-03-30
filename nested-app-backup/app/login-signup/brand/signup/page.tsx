"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, ArrowRight, Zap, CheckCircle2, BarChart3, Quote, Link as LinkIcon } from "lucide-react";

export default function BrandSignup() {
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [tiktokUrl, setTiktokUrl] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      {/* Left Side - Dark Navy */}
      <div className="md:w-[45%] bg-[#2D1B69] flex flex-col justify-between p-8 lg:p-16 text-white min-h-[40vh] md:min-h-screen">
        <div>
          <h1 className="text-2xl font-bold mb-16">ShopSlayer</h1>
          
          <div className="max-w-md mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">
              Reach thousands of TikTok creators
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <Zap className="text-accent mt-1 mr-4 shrink-0" size={24} />
                <p className="text-lg">
                  Post campaigns in minutes — no agency needed.
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="text-accent mt-1 mr-4 shrink-0" size={24} />
                <p className="text-lg">
                  Only pay for the plan, not per creator.
                </p>
              </div>
              <div className="flex items-start">
                <BarChart3 className="text-accent mt-1 mr-4 shrink-0" size={24} />
                <p className="text-lg">
                  Track performance with real-time reporting.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
          <Quote className="text-accent mb-4" size={32} />
          <p className="text-lg font-medium mb-4 leading-relaxed">
            "ShopSlayer gave us 80 video submissions in our first campaign. Game changer."
          </p>
          <p className="text-gray-300 font-medium">— GlowLab Co.</p>
        </div>
      </div>

      {/* Right Side - White */}
      <div className="md:w-[55%] flex flex-col justify-center p-8 lg:p-16 relative w-full lg:overflow-y-auto">
        {/* Top Right Link */}
        <div className="hidden md:block absolute top-8 right-8 lg:top-12 lg:right-16 text-sm text-gray-500 font-medium">
          Already have an account?{" "}
          <Link href="/login-signup/brand/login" className="text-accent hover:text-opacity-80 transition-colors">
            Log In
          </Link>
        </div>

        {/* Mobile Top Link */}
        <div className="md:hidden text-center mb-8 text-sm text-gray-500 font-medium">
          Already have an account?{" "}
          <Link href="/brand/login" className="text-accent hover:text-opacity-80 transition-colors">
            Log In
          </Link>
        </div>

        <div className="max-w-md text-gray-500 w-full mx-auto md:mx-0 xl:mx-auto pt-8 pb-8">
          <h2 className="text-3xl font-bold text-primary mb-2">
            Create your brand account
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Start posting campaigns and connecting with TikTok affiliates.
          </p>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-primary">
                Company Name
              </label>
              <input
                type="text"
                placeholder="e.g., GlowLab Co."
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-primary">
                Contact Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-primary">
                Work Email
              </label>
              <input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-primary">
                TikTok Shop URL
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <LinkIcon className="text-gray-400" size={18} />
                </div>
                <input
                  type="text"
                  placeholder="https://shop.tiktok.com/..."
                  value={tiktokUrl}
                  onChange={(e) => setTiktokUrl(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-primary">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all pr-12"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-primary">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Re-enter your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all pr-12"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center pt-2">
              <input
                id="terms"
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="h-5 w-5 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <label htmlFor="terms" className="ml-3 block text-sm text-gray-700">
                I agree to ShopSlayer's{" "}
                <a href="#" className="text-accent underline hover:text-opacity-80">
                  Terms & Conditions
                </a>
                .
              </label>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full flex items-center justify-center py-4 px-4 border border-transparent rounded-full shadow-sm text-base font-medium text-white transition-colors
                  ${
                    isFormValid
                      ? "bg-primary hover:bg-opacity-90 cursor-pointer"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  }
                `}
              >
                Create Brand Account <ArrowRight className="ml-2" size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
