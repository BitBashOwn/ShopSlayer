import Link from "next/link";

export default function MyCampaignsCard() {
  return (
    <div className="mt-4 rounded-xl bg-white p-4 shadow-sm lg:mt-0 lg:rounded-[28px] lg:border lg:border-[#eef1f6] lg:p-6 lg:shadow-none">
      <h3 className="text-sm font-semibold text-[#2D1B69] lg:text-lg">
        My Campaigns
      </h3>

      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        <span className="rounded-full bg-pink-100 px-2 py-1 text-pink-600 lg:px-3 lg:py-1.5">
          2 Active
        </span>
        <span className="rounded-full bg-yellow-100 px-2 py-1 text-yellow-600 lg:px-3 lg:py-1.5">
          1 Submitted
        </span>
        <span className="rounded-full bg-gray-100 px-2 py-1 text-gray-600 lg:px-3 lg:py-1.5">
          1 Completed
        </span>
      </div>

      <div className="mt-6 hidden lg:block">
        <div className="rounded-3xl bg-[#f7f8fc] p-5">
          <p className="text-sm font-medium text-[#667085]">Current focus</p>
          <p className="mt-2 text-2xl font-semibold text-[#2D1B69]">GlowLab Serum</p>
          <p className="mt-2 text-sm leading-6 text-[#667085]">
            Your next submission window closes in 2 days. Keep momentum going.
          </p>
        </div>
      </div>

      <Link
        href="/affiliate/Mobile_page/mobile/my-campaigns"
        className="mt-4 block w-full rounded-lg bg-[#FF4D8D] py-3 text-center text-sm font-medium text-white lg:mt-6 lg:rounded-full"
      >
        View My Campaigns
      </Link>
    </div>
  );
}
