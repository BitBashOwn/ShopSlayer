"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function AdminForgotPassword() {
  const [email, setEmail] = useState("");

  const isFormValid = email.trim() !== "";

  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">ShopSlayer</h1>
        <p className="text-white/70 text-sm">
          Admin Panel · Huskee Digital Internal
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 sm:p-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-primary mb-2">
            Reset your password
          </h2>
          <p className="text-sm text-gray-500">
            Enter your email and we'll send you a reset link.
          </p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2 text-left">
            <label className="block text-sm font-semibold text-primary">
              Work Email
            </label>
            <input
              type="email"
              placeholder="admin@huskeedigital.com"
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

        <div className="mt-8 text-center border-t border-gray-100 pt-6">
          <Link
            href="/admin/login"
            className="inline-flex items-center text-gray-500 hover:text-gray-800 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="mr-2" size={16} /> Back to login
          </Link>
        </div>
      </div>
    </div>
  );
}
