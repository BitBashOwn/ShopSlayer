import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 px-4">
      <div className="w-full max-w-md flex flex-col items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-primary mb-12">ShopSlayer</h1>

        <div className="w-full space-y-4">
          <Link
            href="/affiliate/login"
            className="flex items-center justify-between w-full px-6 py-4 bg-primary text-white rounded-full hover:bg-opacity-90 transition-colors"
          >
            <span className="font-medium text-lg">I'm an Affiliate</span>
            <ArrowRight size={20} />
          </Link>

          <Link
            href="/brand/login"
            className="flex items-center justify-between w-full px-6 py-4 bg-primary text-white rounded-full hover:bg-opacity-90 transition-colors"
          >
            <span className="font-medium text-lg">I'm a Brand</span>
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="mt-12">
          <Link
            href="/admin/login"
            className="text-gray-500 hover:text-gray-800 transition-colors text-sm"
          >
            Admin access
          </Link>
        </div>
      </div>
    </div>
  );
}
