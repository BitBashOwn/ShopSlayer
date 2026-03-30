"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

export default function AffiliateLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Top Header */}
      <div className="w-full max-w-md text-center mb-8">
        <h1 className="text-xl font-bold text-primary mb-4">ShopSlayer</h1>
        <hr className="w-full border-gray-200" />
      </div>

      <div className="w-full max-w-md flex flex-col pt-8">
        <h2 className="text-3xl font-bold text-primary mb-2">Welcome back</h2>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Log in to browse campaigns and track your progress.
        </p>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-primary">
              Email Address
            </label>
            <input
              type="email"
              placeholder="your@email.com"
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
                href="/affiliate/forgot-password"
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

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Don't have an account yet?{" "}
            <Link
              href="/affiliate/signup"
              className="text-accent font-medium hover:text-opacity-80 transition-colors"
            >
              Join ShopSlayer
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
