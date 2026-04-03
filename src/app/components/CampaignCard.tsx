import Link from "next/link";
import { Gift, Lock, WalletCards } from "lucide-react";

type Props = {
  title: string;
  brand: string;
  earning: string;
  category: string;
  accentColor?: string;
  planLabel?: string;
  locked?: boolean;
};

export default function CampaignCard({
  title,
  brand,
  earning,
  category,
  accentColor = "#22c3b5",
  planLabel = "Open Plan",
  locked = false,
}: Props) {
  if (locked) {
    return (
      <div className="flex min-h-[210px] flex-col items-center justify-center rounded-2xl border border-[#e4e7ec] bg-white p-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2D1B69] text-white">
          <Lock className="h-5 w-5" />
        </div>

        <p className="mt-4 text-[17px] font-semibold leading-tight text-[#2D1B69] lg:text-[18px]">
          Join to view this campaign
        </p>

        <p className="mt-3 text-[14px] text-[#667085]">
          Create a free account to opt in
        </p>

        <Link href="/affiliate/signup" className="mt-5">
          <span className="inline-flex rounded-xl bg-[#FF4D8D] px-5 py-2.5 text-[15px] font-semibold text-white transition hover:bg-[#e8437f]">
            Get Started -&gt;
          </span>
        </Link>
      </div>
    );
  }

  return (
    <Link
      href="/affiliate/signup"
      className="block min-h-[210px] rounded-2xl border border-[#e4e7ec] bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#d0d5dd] hover:shadow-md"
    >
      <div className="flex items-center gap-2.5">
        <div
          className="h-7 w-7 rounded-lg"
          style={{ backgroundColor: accentColor }}
          aria-hidden="true"
        />
        <p className="text-[16px] text-[#7b828f]">{brand}</p>
      </div>

      <h3 className="mt-5 text-[18px] font-semibold leading-snug text-[#2D1B69]">
        {title}
      </h3>

      <div className="mt-4 space-y-2">
        <p className="flex items-center gap-2 text-[15px] font-medium text-[#FF4D8D]">
          <WalletCards className="h-5 w-5 text-[#f4b400]" />
          <span>{earning}</span>
        </p>
        <p className="flex items-center gap-2 text-[15px] font-medium text-[#18B67C]">
          <Gift className="h-5 w-5 text-[#ff9f1c]" />
          <span>+ Prize Pool Bonus</span>
        </p>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <span className="rounded-full bg-[#eef3ff] px-3 py-1.5 text-[12px] text-[#5b78f6]">
          {category}
        </span>

        <span className="rounded-full bg-[#edfdf4] px-3 py-1.5 text-[12px] text-[#15a05d]">
          {planLabel}
        </span>
      </div>
    </Link>
  );
}
