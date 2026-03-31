// app/components/ExploreTabs.tsx
export default function ExploreTabs() {
  return (
    <div className="mt-6">
      
      <h3 className="text-sm font-semibold text-[#2D1B69]">
        Explore
      </h3>

      <p className="text-xs text-gray-500 mb-3">
        23 campaigns available
      </p>

      <div className="flex gap-2 overflow-x-auto">
        <button className="bg-[#2D1B69] text-white px-4 py-1 rounded-full text-xs">
          All
        </button>
        <button className="bg-gray-100 px-4 py-1 rounded-full text-xs">
          Beauty
        </button>
        <button className="bg-gray-100 px-4 py-1 rounded-full text-xs">
          Tech
        </button>
        <button className="bg-gray-100 px-4 py-1 rounded-full text-xs">
          Lifestyle
        </button>
      </div>
    </div>
  );
}