import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4">
      <h1 className="text-lg font-bold text-white">ShopSlayer</h1>

      <div className="flex items-center gap-3">
        <Link
          href="/brand/signup"
          className="inline-flex min-h-[40px] items-center rounded-[10px] border-2 border-white px-4 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          For Brands →
        </Link>

        <Link href="/affiliate/login" className="text-sm text-white">
          Sign In
        </Link>
      </div>
    </nav>
  );
}
