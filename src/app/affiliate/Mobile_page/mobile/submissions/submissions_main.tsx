"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowLeft, CalendarDays, UploadCloud } from "lucide-react";
import BottomNav from "../../BottomNav";
import DesktopSidebarNav from "../../DesktopSidebarNav";
import { mobileCampaigns } from "../../mobileCampaignData";
import { readStoredSubmissions, type StoredSubmission } from "../../submissionStorage";

type SubmissionView = StoredSubmission & {
  campaignName: string;
  brand: string;
  initials: string;
  initialsBg: string;
  niche: string;
  accent: string;
};

const seededSubmission: StoredSubmission = {
  campaignId: "novabuds-pro-earphones",
  videoUrl: "https://www.tiktok.com/@creator/video/7483921000000000000",
  submittedAt: "Mar 18, 2026, 2:45 PM",
};

export default function SubmissionsMain() {
  const [submissions] = useState<StoredSubmission[]>(() => {
    const stored = readStoredSubmissions();
    return [
      ...stored,
      ...[seededSubmission].filter(
        (seed) => !stored.some((item) => item.campaignId === seed.campaignId),
      ),
    ];
  });

  const mappedSubmissions = useMemo<SubmissionView[]>(() => {
    return submissions
      .map((submission) => {
        const campaign = mobileCampaigns.find((item) => item.id === submission.campaignId);
        if (!campaign) {
          return null;
        }

        return {
          ...submission,
          campaignName: campaign.name,
          brand: campaign.brand,
          initials: campaign.initials,
          initialsBg: campaign.initialsBg,
          niche: campaign.niche,
          accent: campaign.accent,
        };
      })
      .filter((item): item is SubmissionView => item !== null);
  }, [submissions]);

  return (
    <div className="min-h-screen bg-[#f7f8fc] pb-20 lg:pb-0">
      <div className="mx-auto max-w-[1280px] lg:px-6 lg:py-8">
        <div className="lg:grid lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-8">
          <DesktopSidebarNav sectionLabel="Submissions">
            <div className="rounded-3xl bg-white/10 p-5">
              <p className="text-sm text-white/70">Submission summary</p>
              <p className="mt-3 text-4xl font-semibold">{mappedSubmissions.length}</p>
              <p className="mt-2 text-sm text-white/75">Submitted TikTok videos in your workspace</p>
            </div>
          </DesktopSidebarNav>

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

                <h1 className="text-xl font-semibold text-[#20145f] lg:text-2xl">Submissions</h1>

                <div className="w-5 lg:w-12" />
              </div>
            </div>

            <div className="space-y-4 px-4 py-5 lg:px-8 lg:py-8">
              {mappedSubmissions.length > 0 ? (
                mappedSubmissions.map((submission) => (
                  <div
                    key={submission.campaignId}
                    className="overflow-hidden rounded-2xl border border-[#e7eaf2] bg-white shadow-sm"
                  >
                    <div className="flex">
                      <div className={`w-1 ${submission.accent}`} />
                      <div className="flex-1 p-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-3">
                            <div
                              className={`flex h-10 w-10 items-center justify-center rounded-xl text-xs font-semibold text-white ${submission.initialsBg}`}
                            >
                              {submission.initials}
                            </div>
                            <div>
                              <h2 className="text-lg font-semibold leading-tight text-[#20145f]">
                                {submission.campaignName}
                              </h2>
                              <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-[#667085]">
                                <span>{submission.brand}</span>
                                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-[#98a2b3]">
                                  {submission.niche}
                                </span>
                              </div>
                            </div>
                          </div>

                          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                            Completed
                          </span>
                        </div>

                        <div className="mt-3 flex items-center gap-2 text-sm text-[#667085]">
                          <CalendarDays className="h-4 w-4" />
                          <span>{submission.submittedAt}</span>
                        </div>

                        <Link
                          href="/affiliate/Mobile_page/mobile/campaign-detail?view=summary&returnTo=submissions"
                          className="mt-4 block rounded-xl border border-[#20145f] px-4 py-3 text-center text-sm font-semibold text-[#20145f]"
                        >
                          View Summary
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="rounded-2xl border border-dashed border-[#d0d5dd] bg-[#fbfbfd] px-6 py-12 text-center">
                  <UploadCloud className="mx-auto h-8 w-8 text-[#98a2b3]" />
                  <p className="mt-4 text-base font-medium text-[#20145f]">No submissions yet</p>
                  <p className="mt-2 text-sm text-[#667085]">
                    Submit a TikTok video from My Campaigns and it will appear here.
                  </p>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
