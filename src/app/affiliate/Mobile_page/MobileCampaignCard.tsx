import Link from "next/link";

type MobileCampaignCardProps = {
  brand: string;
  subtitle: string;
  title: string;
  earning: string;
  category: string;
  plan: string;
  colorClass: string;
};

export default function MobileCampaignCard({
  brand,
  subtitle,
  title,
  earning,
  category,
  plan,
  colorClass,
}: MobileCampaignCardProps) {
  return (
    <Link
      href="/affiliate/Mobile_page/mobile/campaign-detail"
      className="block rounded-xl bg-white p-4 shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md lg:rounded-[24px] lg:border lg:border-[#eef1f6] lg:p-5 lg:shadow-none"
    >
      <div className="flex items-center gap-3">
        <div className={`h-10 w-10 rounded-lg lg:h-12 lg:w-12 ${colorClass}`} />
        <div>
          <p className="text-xs text-gray-500 lg:text-sm">{brand}</p>
          <p className="mt-1 hidden text-sm text-[#98a2b3] lg:block">{subtitle}</p>
        </div>
      </div>

      <h3 className="mt-2 text-sm font-semibold text-[#2D1B69] lg:mt-4 lg:text-lg">
        {title}
      </h3>

      <div className="mt-2 flex justify-between gap-3 text-xs lg:flex-col lg:items-start lg:text-sm">
        <p className="text-pink-500">{earning}</p>
        <p className="flex items-center gap-1 text-green-600">+ Prize Pool Bonus</p>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-600 lg:px-3 lg:py-1.5">
          {category}
        </span>

        <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-600 lg:px-3 lg:py-1.5">
          {plan}
        </span>
      </div>
    </Link>
  );
}
