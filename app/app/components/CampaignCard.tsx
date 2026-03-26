type Props = {
  title: string;
  brand: string;
  earning: string;
  category: string;
  locked?: boolean;
};

export default function CampaignCard({
  title,
  brand,
  earning,
  category,
  locked,
}: Props) {
  if (locked) {
    return (
      <div className="bg-white border border-gray-200 rounded-2xl p-6 h-[210px] flex flex-col items-center justify-center text-center transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
        
        <div className="w-12 h-12 rounded-full bg-[#2D1B69] text-white flex items-center justify-center text-lg mb-3">
          🔒
        </div>

        <p className="text-[14px] font-semibold text-gray-800">
          Join to view this campaign
        </p>

        <p className="text-[12px] text-gray-500 mt-1 mb-4">
          Create a free account to opt in
        </p>

        <button className="bg-[#FF4D8D] text-white text-[12px] px-4 py-2 rounded-lg font-medium hover:bg-[#e8437f] transition">
          Get Started →
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 h-[210px] flex flex-col justify-between transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:border-gray-300">
      
      {/* Brand */}
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-md bg-gradient-to-br from-green-400 to-green-600" />
        <p className="text-[12px] text-gray-500">{brand}</p>
      </div>

      {/* Title */}
      <h3 className="text-[13px] font-semibold text-gray-900 leading-snug mt-2">
        {title}
      </h3>

      {/* Earnings */}
      <div className="mt-2 space-y-[2px]">
        <p className="text-[12px] text-[#FF4D8D] font-medium">
          🪙 {earning}
        </p>
        <p className="text-[12px] text-green-600">
          🎁 + Prize Pool Bonus
        </p>
      </div>

      {/* Tags */}
      <div className="flex justify-between items-center mt-3">
        <span className="text-[10px] px-2 py-[3px] rounded-full bg-blue-50 text-blue-600">
          {category}
        </span>

        <span className="text-[10px] px-2 py-[3px] rounded-full bg-green-50 text-green-600">
          Open Plan
        </span>
      </div>
    </div>
  );
}