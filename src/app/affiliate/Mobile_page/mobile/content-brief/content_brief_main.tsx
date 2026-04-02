import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BottomNav from "../../BottomNav";

export default function ContentBriefMain() {
  return (
    <div className="min-h-screen bg-[#f7f8fc] pb-20 lg:pb-0">
      <div className="mx-auto max-w-[1180px] lg:px-6 lg:py-8">
        <div className="lg:grid lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-8">
          <aside className="hidden lg:flex lg:flex-col lg:rounded-[28px] lg:bg-[#24145f] lg:px-6 lg:py-7 lg:text-white lg:shadow-[0_24px_80px_rgba(36,20,95,0.22)]">
            <p className="text-xl font-semibold">ShopSlayer</p>
            <p className="mt-1 text-sm text-white/65">Content Brief</p>

            <div className="mt-10 rounded-3xl bg-white/10 p-5">
              <p className="text-sm text-white/70">Status</p>
              <p className="mt-3 text-3xl font-semibold">Coming Soon</p>
              <p className="mt-3 text-sm leading-6 text-white/75">
                This area will show the full campaign brief, creator guidance, and deliverable notes.
              </p>
            </div>
          </aside>

          <main className="min-h-screen bg-white lg:min-h-0 lg:rounded-[32px] lg:border lg:border-white/70 lg:shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
            <div className="border-b border-[#eceff5] bg-white px-4 py-4 lg:rounded-t-[32px] lg:px-8 lg:py-6">
              <div className="flex items-center justify-between">
                <Link
                  href="/affiliate/Mobile_page/mobile/my-campaigns"
                  className="flex items-center gap-2 text-[#20145f] transition-colors hover:text-[#E83A7A]"
                >
                  <ArrowLeft className="h-5 w-5" />
                  <span className="hidden text-sm font-medium lg:inline">Back</span>
                </Link>

                <h1 className="text-xl font-semibold text-[#20145f] lg:text-2xl">
                  Content Brief
                </h1>

                <div className="w-5 lg:w-12" />
              </div>
            </div>

            <div className="flex min-h-[calc(100vh-73px)] items-start justify-center px-4 py-12 text-center lg:min-h-[640px] lg:px-8 lg:py-24">
              <div className="max-w-[620px]">
                <h2 className="text-[30px] font-semibold leading-tight text-[#20145f] lg:text-[42px]">
                  Content Brief (Coming Soon)
                </h2>
                <p className="mt-6 text-lg leading-8 text-[#475467] lg:text-[22px]">
                  This is where affiliates will see their detailed content brief for campaign #1.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
