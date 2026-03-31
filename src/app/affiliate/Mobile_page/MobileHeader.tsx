export default function MobileHeader() {
  return (
    <div className="px-4 pt-4 lg:border-b lg:border-[#eef1f6] lg:px-8 lg:pt-8 lg:pb-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[#2D1B69] text-base font-semibold lg:text-[28px] lg:leading-none">
            ShopSlayer
          </h1>
          <p className="hidden lg:mt-2 lg:block lg:text-sm lg:text-[#667085]">
            Find campaigns, track progress, and manage submissions.
          </p>
        </div>
        <div className="h-10 w-10 rounded-full bg-gray-300 lg:h-12 lg:w-12" />
      </div>

      <div className="mt-4 lg:mt-8 lg:flex lg:items-end lg:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-[#2D1B69] lg:text-[32px]">
            Hey Sarah <span aria-hidden="true">👋</span>
          </h2>
          <p className="text-sm text-gray-500 lg:mt-2 lg:text-base">
            23 campaigns available
          </p>
        </div>

        {/* <div className="hidden lg:flex lg:items-center lg:gap-3">
          <span className="rounded-full bg-[#ffe9f2] px-4 py-2 text-sm font-medium text-[#E83A7A]">
            Mobile Preview
          </span>
        </div> */}
      </div>
    </div>
  );
}
