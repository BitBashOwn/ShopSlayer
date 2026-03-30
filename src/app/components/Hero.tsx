import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center px-6 py-16 sm:py-24">
      
      {/* Badge */}
      <span className="bg-pink-500 text-white text-xs px-3 py-1 rounded-full mb-6">
        TIKTOK AFFILIATE MARKETPLACE
      </span>

      {/* Heading */}
      <h1 className="text-white font-bold text-3xl sm:text-5xl max-w-2xl leading-tight">
        Find campaigns. Create content.{" "}
        <span className="text-pink-500">Get paid.</span>
      </h1>

      {/* Description */}
      <p className="text-gray-300 mt-15 max-w-xl text-sm sm:text-base">
        Browse open brand campaigns, opt in with one tap, and earn commission —
        no invite, no approval needed.
      </p>

      {/* Button */}
      <Link href="/affiliate/signup">
        <button className="mt-8 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg cursor-pointer">
          Get Started →
        </button>
      </Link>
    </section>
  );
}