import MobileHeader from "../MobileHeader";
import MyCampaignsCard from "../MyCampaignsCard";
import ExploreTabs from "../ExploreTabs";
import MobileCampaignCard from "../MobileCampaignCard";
import BottomNav from "../BottomNav";

export default function MobileMain() {
  return (
    <div className="min-h-screen bg-[#F5F6FA] pb-20 lg:pb-0">
      <div className="mx-auto max-w-[1280px] lg:grid lg:min-h-screen lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-8 lg:px-6 lg:py-8">
        <aside className="hidden lg:flex lg:flex-col lg:rounded-[28px] lg:bg-[#24145f] lg:px-6 lg:py-7 lg:text-white lg:shadow-[0_24px_80px_rgba(36,20,95,0.22)]">
          <div>
            <p className="text-xl font-semibold tracking-tight">ShopSlayer</p>
            <p className="mt-1 text-sm text-white/65">Affiliate Mobile View</p>
          </div>

          <div className="mt-10 rounded-3xl bg-white/10 p-5">
            <p className="text-sm text-white/70">Campaign Snapshot</p>
            <p className="mt-3 text-4xl font-semibold">23</p>
            <p className="mt-2 text-sm text-white/75">Available campaigns today</p>
          </div>

          <div className="mt-6 space-y-3 text-sm text-white/85">
            <div className="rounded-2xl bg-white/10 px-4 py-3">Fast browse</div>
            <div className="rounded-2xl bg-white/5 px-4 py-3">Quick submissions</div>
            <div className="rounded-2xl bg-white/5 px-4 py-3">Rewards overview</div>
          </div>

          <div className="mt-auto rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-white/45">Preview</p>
            <p className="mt-3 text-lg font-semibold">Desktop-only shell</p>
            <p className="mt-2 text-sm leading-6 text-white/70">
              The phone layout still stays the same on mobile screens.
            </p>
          </div>
        </aside>

        <main className="lg:overflow-hidden lg:rounded-[32px] lg:border lg:border-white/70 lg:bg-white lg:shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
          <div className="lg:flex lg:h-full lg:flex-col">
            <MobileHeader />

            <div className="px-4 lg:flex-1 lg:overflow-y-auto lg:px-8 lg:pb-8">
              <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-8">
                <section>
                  <ExploreTabs />

                  <div className="mt-4 space-y-4 lg:mt-6 lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
                    <MobileCampaignCard />
                    <MobileCampaignCard />
                    <MobileCampaignCard />
                    <MobileCampaignCard />
                  </div>
                </section>

                <aside className="mt-4 lg:mt-0">
                  <MyCampaignsCard />
                </aside>
              </div>
            </div>
          </div>
        </main>
      </div>

      <BottomNav />
    </div>
  );
}
