const steps = [
  {
    id: 1,
    title: "Browse Campaigns",
    desc: "Find campaigns that match your content niche.",
  },
  {
    id: 2,
    title: "Opt In & Create",
    desc: "Opt in with one tap on TikTok Shop, get your brief, and post your video your way.",
  },
  {
    id: 3,
    title: "Earn & Win",
    desc: "Earn commission via TikTok Shop plus enter the brand's prize pool raffle.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#e3e3e7] px-6 lg:px-16 py-16 text-center">
      
      {/* Heading */}
      <h2 className="text-[22px] font-semibold text-[#1A1A1A]">
        How It Works
      </h2>

      <p className="text-[13px] text-gray-500 mt-2 mb-10">
        Start earning in three simple steps.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-200 "
          >
            
            {/* Number Circle */}
            <div className="w-12 h-12 rounded-full bg-[#2D1B69] text-white flex items-center justify-center font-semibold mb-5">
              {step.id}
            </div>

            {/* Title */}
            <h3 className="text-[14px] font-semibold text-[#1A1A1A]">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-[12px] text-gray-500 mt-2 max-w-[220px]">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}