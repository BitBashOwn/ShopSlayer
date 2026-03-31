// app/components/MobileCampaignCard.tsx
export default function MobileCampaignCard() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-pink-400 rounded-lg" />
        <p className="text-xs text-gray-500">GlowLab</p>
      </div>

      <h3 className="mt-2 text-sm font-semibold text-[#2D1B69]">
        GlowLab Serum
      </h3>

      <div className="flex justify-between mt-2 text-xs">
        <p className="text-pink-500">
          $ Earn 14% via TikTok Shop
        </p>
        <p className="text-green-600">
          + Prize Pool Bonus 🎁
        </p>
      </div>

      <div className="flex justify-between mt-3">
        <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">
          Beauty
        </span>

        <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs">
          Open Plan
        </span>
      </div>
    </div>
  );
}