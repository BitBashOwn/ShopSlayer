const tabs = ["All", "Beauty", "Tech", "Lifestyle"];

export default function ExploreTabs() {
  return (
    <div className="mt-6 lg:mt-8">
      <div className="lg:flex lg:items-end lg:justify-between">
        <div>
          <h3 className="text-sm font-semibold text-[#2D1B69] lg:text-xl">
            Explore
          </h3>

          <p className="mb-3 text-xs text-gray-500 lg:mb-0 lg:mt-2 lg:text-sm">
            23 campaigns available
          </p>
        </div>

        <p className="hidden lg:block lg:text-sm lg:text-[#98a2b3]">
          Curated for beauty, tech, and lifestyle creators
        </p>
      </div>

      <div className="flex gap-2 overflow-x-auto lg:mt-5 lg:flex-wrap">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            className={`cursor-pointer rounded-full px-4 py-1 text-xs transition-colors hover:opacity-90 lg:px-5 lg:py-2 lg:text-sm ${
              index === 0
                ? "bg-[#2D1B69] text-white"
                : "bg-gray-100 text-[#344054] hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
