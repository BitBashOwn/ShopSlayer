// app/components/MyCampaignsCard.tsx
export default function MyCampaignsCard() {
  return (
    <div className="bg-white rounded-xl p-4 mt-4 shadow-sm">
      
      <h3 className="text-sm font-semibold text-[#2D1B69]">
        My Campaigns
      </h3>

      <div className="flex gap-2 mt-3 text-xs">
        <span className="bg-pink-100 text-pink-600 px-2 py-1 rounded-full">
          2 Active
        </span>
        <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full">
          1 Submitted
        </span>
        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
          1 Completed
        </span>
      </div>

      <button className="mt-4 w-full bg-[#FF4D8D] text-white py-3 rounded-lg text-sm font-medium cursor-pointer">
        View My Campaigns →
      </button>
    </div>
  );
}