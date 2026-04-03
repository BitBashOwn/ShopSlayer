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

        <p className="mt-4 text-[20px] font-semibold leading-tight text-[#2D1B69]">
          Join to view this campaign
        </p>

        <p className="mt-2 text-[13px] text-[#667085]">
          Create a free account to opt in
        </p>

        <Link href="/affiliate/signup" className="mt-5">
          <span className="inline-flex rounded-xl bg-[#FF4D8D] px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-[#e8437f]">
            Get Started →
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
          className="h-6 w-6 rounded-lg"
          style={{ backgroundColor: accentColor }}
          aria-hidden="true"
        />
        <p className="text-[11px] text-[#98A2B3]">{brand}</p>
      </div>

      <h3 className="mt-5 text-[14px] font-semibold leading-snug text-[#2D1B69]">
        {title}
      </h3>

      <div className="mt-4 space-y-2">
        <p className="flex items-center gap-2 text-[13px] font-medium text-[#FF4D8D]">
          <WalletCards className="h-4 w-4 text-[#f4b400]" />
          <span>{earning}</span>
        </p>
        <p className="flex items-center gap-2 text-[13px] font-medium text-[#18B67C]">
          <Gift className="h-4 w-4 text-[#ff9f1c]" />
          <span>+ Prize Pool Bonus</span>
        </p>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <span className="rounded-full bg-[#eef3ff] px-2.5 py-1 text-[10px] text-[#5b78f6]">
          {category}
        </span>

        <span className="rounded-full bg-[#edfdf4] px-2.5 py-1 text-[10px] text-[#15a05d]">
          {planLabel}
        </span>
      </div>
    </Link>
  );
}
