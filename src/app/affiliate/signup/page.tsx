"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, ArrowRight, AtSign } from "lucide-react"; // Using AtSign since TikTok icon is unavailable

export default function AffiliateSignup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [tiktok, setTiktok] = useState("");
  const [password, setPassword] = useState("");
  const [niche, setNiche] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isFormValid =
    fullName.trim() !== "" &&
    email.trim() !== "" &&
    tiktok.trim() !== "" &&
    password.trim() !== "" &&
    niche.trim() !== "" &&
    agreed;

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Top Header */}
      <div className="w-full max-w-md text-center mb-8">
        <h1 className="text-xl font-bold text-primary mb-4">ShopSlayer</h1>
        <hr className="w-full border-gray-200" />
      </div>

      <div className="w-full max-w-md flex flex-col">
        <h2 className="text-3xl font-bold text-primary mb-2">Join ShopSlayer</h2>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Connect with brands, get briefs, earn commission.
        </p>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1.5">
            <label className="block text-sm font-semibold text-primary">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>

          <div className="space-y-1.5">
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

          <div className="space-y-1.5">
            <label className="block text-sm font-semibold text-primary">
              TikTok Handle
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <AtSign className="text-gray-400" size={18} />
              </div>
              <input
                type="text"
                placeholder="@yourhandle"
                value={tiktok}
                onChange={(e) => setTiktok(e.target.value)}
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
                placeholder="Create a password"
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
              Content Niche
            </label>
            <select
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none"
              style={{
                backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%239CA3AF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 1rem top 50%",
                backgroundSize: "0.65rem auto",
              }}
            >
              <option value="" disabled className="text-gray-400">
                Select your niche
              </option>
              <option value="beauty">Beauty & Makeup</option>
              <option value="fashion">Fashion & Style</option>
              <option value="tech">Tech & Gadgets</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="fitness">Fitness & Health</option>
            </select>
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
              Create Account <ArrowRight className="ml-2" size={18} />
            </button>
          </div>
        </form>

        <div className="mt-8 text-center space-y-6">
          <p className="text-gray-500 text-sm">
            Already have an account?{" "}
            <Link
              href="/affiliate/login"
              className="text-accent font-medium hover:text-opacity-80 transition-colors"
            >
              Log In
            </Link>
          </p>

          <p className="text-xs text-gray-400">
            Free to join · No approval required · 500+ campaigns available
          </p>
        </div>
      </div>
    </div>
  );
}
