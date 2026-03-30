"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, ArrowRight, Zap, CheckCircle2, BarChart3 } from "lucide-react";

export default function BrandLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      {/* Left Side - Dark Navy */}
      <div className="md:w-[45%] bg-[#2D1B69] flex flex-col justify-between p-8 lg:p-16 text-white min-h-[40vh] md:min-h-screen">
        <div>
          <h1 className="text-2xl font-bold mb-16">ShopSlayer</h1>
          
          <div className="max-w-md">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Good to have you back.
            </h2>
            <p className="text-gray-300 text-lg mb-12">
              Your campaigns, affiliates, and performance data are waiting.
            </p>

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
      </div>

      {/* Right Side - White */}
      <div className="md:w-[55%] flex flex-col justify-center p-8 lg:p-16 relative w-full">
        {/* Top Right Link */}
        <div className="hidden md:block absolute top-8 right-8 lg:top-12 lg:right-16 text-sm text-gray-500 font-medium">
          Don't have an account?{" "}
          <Link href="/login-signup/brand/signup" className="text-accent hover:text-opacity-80 transition-colors">
            Sign Up
          </Link>
        </div>

        {/* Mobile Top Link */}
        <div className="md:hidden text-center mb-8 text-sm text-gray-500 font-medium">
          Don't have an account?{" "}
          <Link href="/brand/signup" className="text-accent hover:text-opacity-80 transition-colors">
            Sign Up
          </Link>
        </div>

        <div className="max-w-md text-gray-500 w-full mx-auto md:mx-0 xl:mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-2">
            Log in to your brand account
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Manage campaigns and track affiliate performance.
          </p>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
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

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-primary">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
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
              <div className="flex justify-end pt-1">
                <Link
                  href="/brand/forgot-password"
                  className="text-sm font-medium text-accent hover:text-opacity-80 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full flex items-center justify-center py-4 px-4 border border-transparent rounded-full shadow-sm text-base font-medium text-white transition-colors
                  ${
                    isFormValid
                      ? "bg-primary hover:bg-opacity-90 cursor-pointer"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }
                `}
              >
                Log In <ArrowRight className="ml-2" size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
