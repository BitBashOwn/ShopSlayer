import Link from "next/dist/client/link";
import router from "next/dist/shared/lib/router/router";

// app/components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4">
      <h1 className="text-white font-bold text-lg">ShopSlayer</h1>

      <div className="flex items-center gap-3">
        <Link href="/login-signup/brand/signup">
        <button className="border border-white text-white px-4 py-1 rounded-full text-sm cursor-pointer">
          For Brands →
        </button>
        </Link>
        <Link href="/login-signup/affiliate/login">
        <button className="text-white text-sm cursor-pointer">
          Sign In
        </button>
        </Link>
      </div>
    </nav>
  );
}