"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

export default function AffiliateLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-md text-center mb-8">
        <h1 className="text-xl font-bold text-[#1a1a6e] mb-4">ShopSlayer</h1>
        <hr className="w-full border-gray-200" />
      </div>

      <div className="w-full max-w-md flex flex-col pt-8">
        <h2 className="text-3xl font-bold text-[#1a1a6e] mb-2">Welcome back</h2>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Log in to browse campaigns and track your progress.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-[#1a1a6e]">Email Address</label>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a1a6e] transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-[#1a1a6e]">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a1a6e] transition-all pr-12"
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
              <Link href="/affiliate/forgot-password" className="text-sm font-medium text-[#e8445a] hover:opacity-80">
                Forgot password?
              </Link>
            </div>
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full flex items-center justify-center py-4 rounded-full text-base font-medium text-white transition-colors ${
              isFormValid ? "bg-[#1a1a6e] hover:opacity-90 cursor-pointer" : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Log In <ArrowRight className="ml-2" size={18} />
          </button>
        </form>

        <div className="mt-8 text-center space-y-3">
          <p className="text-gray-500 text-sm">
            Don&apos;t have an account yet?{" "}
            <Link href="/affiliate/signup" className="text-[#e8445a] font-medium hover:opacity-80">
              Join ShopSlayer
            </Link>
          </p>
          <p className="text-gray-400 text-sm">
            <Link href="/role-select" className="hover:text-gray-600 transition-colors">
              ← Switch role
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
