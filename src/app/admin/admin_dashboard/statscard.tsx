type Props = {
  title: string;
  value: number;
  color: string;
};

export default function StatsCard({ title, value, color }: Props) {
  return (
    <div className="rounded-xl border border-[#dfe3ee] bg-white px-5 py-5 shadow-[0_1px_2px_rgba(17,24,39,0.03)]">
      <div className="flex items-center gap-2 text-[13px] text-[#6d7692]">
        <span className={`h-2 w-2 rounded-full ${color}`} />
        <span>{title}</span>
      </div>
      <p className="mt-4 text-[30px] font-bold leading-none text-[#1e1b68]">{value}</p>
    </div>
  );
}
