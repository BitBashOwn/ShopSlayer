"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function AffiliateForgotPassword() {
  const [email, setEmail] = useState("");

  const isFormValid = email.trim() !== "";

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Top Header */}
      <div className="w-full max-w-md text-center mb-8">
        <h1 className="text-xl font-bold text-primary mb-4">ShopSlayer</h1>
        <hr className="w-full border-gray-200" />
      </div>

      <div className="w-full max-w-md flex flex-col pt-8">
        <h2 className="text-3xl font-bold text-primary mb-2">
          Reset your password
        </h2>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Enter your email and we'll send you a reset link.
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
              Send reset link <ArrowRight className="ml-2" size={18} />
            </button>
          </div>
        </form>

        <div className="mt-8 text-center">
          <Link
            href="/login-signup/affiliate/login"
            className="inline-flex items-center text-gray-500 hover:text-gray-800 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="mr-2" size={16} /> Back to login
          </Link>
        </div>
      </div>
    </div>
  );
}
