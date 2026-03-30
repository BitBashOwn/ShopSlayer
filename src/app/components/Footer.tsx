import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a6e] text-white px-6 lg:px-16 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Left — Logo */}
        <div>
          <h2 className="text-lg font-bold">ShopSlayer</h2>
        </div>

        {/* Center — Links */}
        <div className="flex flex-col gap-2 text-sm text-gray-300">
          <Link href="#" className="hover:text-white transition-colors">About</Link>
          <Link href="/brand/signup" className="hover:text-white transition-colors">For Brands</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
          <Link href="#" className="hover:text-white transition-colors">Contact</Link>
        </div>

        {/* Right — Copyright */}
        <div className="text-sm text-gray-400">
          © 2026 ShopSlayer by Huskee Digital
        </div>
      </div>
    </footer>
  );
}
