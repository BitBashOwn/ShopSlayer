import Link from "next/link";

export default function HowItWorks() {
  return (
    <section className="bg-[#EDEEF4] px-6 lg:px-16 py-16 text-center">
      <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">How It Works</h2>
      <p className="text-sm text-gray-500 mb-12">Start earning in three simple steps.</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {/* Step 1 */}
        <div className="bg-white rounded-2xl p-8 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-[#1a1a6e] text-white flex items-center justify-center text-lg font-bold mb-4">
            1
          </div>
          <h3 className="font-semibold text-[#1A1A1A] mb-2">Browse Campaigns</h3>
          <p className="text-xs text-gray-500">Find campaigns that match your content niche.</p>
        </div>

        {/* Step 2 */}
        <div className="bg-white rounded-2xl p-8 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-[#1a1a6e] text-white flex items-center justify-center text-lg font-bold mb-4">
            2
          </div>
          <h3 className="font-semibold text-[#1A1A1A] mb-2">Opt In & Create</h3>
          <p className="text-xs text-gray-500">Opt in with one tap on TikTok Shop, get your brief, and post your video your way.</p>
        </div>

        {/* Step 3 */}
        <div className="bg-white rounded-2xl p-8 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-[#1a1a6e] text-white flex items-center justify-center text-lg font-bold mb-4">
            3
          </div>
          <h3 className="font-semibold text-[#1A1A1A] mb-2">Earn & Win</h3>
          <p className="text-xs text-gray-500">Earn commission via TikTok Shop plus enter the brand&apos;s prize pool raffle.</p>
        </div>
      </div>
    </section>
  );
}
