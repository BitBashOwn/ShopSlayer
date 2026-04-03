"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, CalendarDays, CheckCircle2, CircleAlert, Link2, Video } from "lucide-react";
import BottomNav from "../../BottomNav";
import DesktopSidebarNav from "../../DesktopSidebarNav";
import { mobileCampaigns } from "../../mobileCampaignData";
import { readStoredSubmissions, upsertStoredSubmission } from "../../submissionStorage";

function formatTimestamp(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

function isValidTikTokUrl(value: string) {
  return /^https?:\/\/(www\.)?(tiktok\.com|vm\.tiktok\.com)\//i.test(value.trim());
}

export default function VideoSubmissionMain() {
  const searchParams = useSearchParams();
  const campaignId = searchParams.get("campaign");
  const isEditMode = searchParams.get("edit") === "1";

  const campaign = useMemo(() => {
    return (
      mobileCampaigns.find((item) => item.id === campaignId) ??
      mobileCampaigns.find((item) => item.filter === "In Progress") ??
      mobileCampaigns[0]
    );
  }, [campaignId]);

  const existingSubmission = useMemo(
    () => readStoredSubmissions().find((item) => item.campaignId === campaign.id),
    [campaign.id],
  );

  const [videoUrl, setVideoUrl] = useState(() => {
    if (isEditMode && existingSubmission) {
      return existingSubmission.videoUrl;
    }

    return "";
  });
  const [submittedUrl, setSubmittedUrl] = useState(
    () =>
      existingSubmission?.videoUrl ??
      (campaign.status === "Video Submitted"
        ? "https://www.tiktok.com/@creator/video/7483921000000000000"
        : ""),
  );
  const [submittedAt, setSubmittedAt] = useState(
    () =>
      existingSubmission?.submittedAt ??
      (campaign.status === "Video Submitted" ? "Mar 18, 2026, 2:45 PM" : ""),
  );
  const [error, setError] = useState("");

  const isSubmitted = submittedUrl !== "" && !isEditMode;
  const canSubmit = videoUrl.trim() !== "" && isValidTikTokUrl(videoUrl);

  const handleSubmit = () => {
    if (!videoUrl.trim()) {
      setError("Paste your TikTok video URL to continue.");
      return;
    }

    if (!isValidTikTokUrl(videoUrl)) {
      setError("Enter a valid TikTok video URL.");
      return;
    }

    setError("");
    const nextTimestamp = formatTimestamp(new Date());
    const nextUrl = videoUrl.trim();

    setSubmittedUrl(nextUrl);
    setSubmittedAt(nextTimestamp);
    upsertStoredSubmission({
      campaignId: campaign.id,
      videoUrl: nextUrl,
      submittedAt: nextTimestamp,
    });
    setVideoUrl("");
  };

  return (
    <div className="min-h-screen bg-[#f7f8fc] pb-20 lg:pb-0">
      <div className="mx-auto max-w-[1280px] lg:px-6 lg:py-8">
        <div className="lg:grid lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-8">
          <DesktopSidebarNav sectionLabel="Video Submission">
            <div className="rounded-3xl bg-white/10 p-5">
              <p className="text-sm text-white/70">Current campaign</p>
              <p className="mt-3 text-3xl font-semibold">{campaign.name}</p>
              <p className="mt-3 text-sm leading-6 text-white/75">
                {isEditMode
                  ? "Update the TikTok video URL for this campaign. Your latest edit will appear in the submissions tab."
                  : "Submit one TikTok video URL for this campaign. Once submitted, the current UI locks the active submission."}
              </p>
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

                <h1 className="text-xl font-semibold text-[#20145f] lg:text-2xl">
                  Video Submission
                </h1>

                <div className="w-5 lg:w-12" />
              </div>
            </div>

            <div className="mx-auto max-w-[720px] px-4 py-6 lg:px-8 lg:py-10">
              <div className="rounded-2xl border border-[#e7eaf2] bg-white p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl text-sm font-semibold text-white ${campaign.initialsBg}`}
                  >
                    {campaign.initials}
                  </div>
                  <div>
                    <p className="text-sm text-[#667085]">{campaign.brand}</p>
                    <h2 className="mt-1 text-xl font-semibold text-[#20145f]">{campaign.name}</h2>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-[#667085]">
                        {campaign.niche}
                      </span>
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-[#667085]">
                        {campaign.dates}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-[#e7eaf2] bg-white p-5 shadow-sm lg:p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fff0f6] text-[#E83A7A]">
                    <Video className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#20145f]">
                      {isEditMode ? "Edit your TikTok video" : "Submit your TikTok video"}
                    </h3>
                    <p className="text-sm text-[#667085]">
                      {isEditMode
                        ? "Update the saved TikTok video URL for this campaign."
                        : "Paste one TikTok video URL for this campaign."}
                    </p>
                  </div>
                </div>

                {!isSubmitted ? (
                  <div className="mt-6">
                    <label
                      htmlFor="video-url"
                      className="block text-sm font-medium text-[#344054]"
                    >
                      TikTok video URL
                    </label>
                    <div className="mt-2 flex items-center gap-3 rounded-2xl border border-[#d0d5dd] px-4 py-3 focus-within:border-[#20145f]">
                      <Link2 className="h-5 w-5 text-[#98a2b3]" />
                      <input
                        id="video-url"
                        type="url"
                        value={videoUrl}
                        onChange={(event) => {
                          setVideoUrl(event.target.value);
                          if (error) {
                            setError("");
                          }
                        }}
                        placeholder="https://www.tiktok.com/@yourhandle/video/1234567890"
                        className="w-full border-0 p-0 text-sm text-[#20145f] placeholder:text-[#98a2b3] focus:outline-none focus:ring-0"
                      />
                    </div>

                    {error ? (
                      <div className="mt-3 flex items-center gap-2 text-sm text-[#d92f6d]">
                        <CircleAlert className="h-4 w-4" />
                        <span>{error}</span>
                      </div>
                    ) : (
                      <p className="mt-3 text-sm text-[#98a2b3]">
                        {isEditMode
                          ? "Saving changes here will update the submission card in the submissions tab."
                          : "One active submission per campaign is supported in this version."}
                      </p>
                    )}

                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={!canSubmit}
                      className={`mt-6 w-full rounded-xl px-4 py-4 text-base font-semibold text-white transition-colors ${
                        canSubmit
                          ? "bg-[#E83A7A] hover:bg-[#d92f6d]"
                          : "cursor-not-allowed bg-[#dfe3ea]"
                      }`}
                    >
                      {isEditMode ? "Update Submission" : "Submit"}
                    </button>
                  </div>
                ) : (
                  <div className="mt-6 overflow-hidden rounded-2xl border border-[#e7eaf2] bg-white shadow-sm">
                    <div className="flex">
                      <div className={`w-1 ${campaign.accent}`} />
                      <div className="flex-1 p-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-3">
                            <div
                              className={`flex h-10 w-10 items-center justify-center rounded-xl text-xs font-semibold text-white ${campaign.initialsBg}`}
                            >
                              {campaign.initials}
                            </div>
                            <div>
                              <h2 className="text-lg font-semibold leading-tight text-[#20145f]">
                                {campaign.name}
                              </h2>
                              <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-[#667085]">
                                <span>{campaign.brand}</span>
                                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-[#98a2b3]">
                                  {campaign.niche}
                                </span>
                              </div>
                            </div>
                          </div>

                          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                            Completed
                          </span>
                        </div>

                        <div className="mt-3 flex items-center gap-2 text-sm text-[#667085]">
                          <CheckCircle2 className="h-4 w-4 text-[#18B67C]" />
                          <span>Video received.</span>
                        </div>

                        <div className="mt-3 flex items-center gap-2 text-sm text-[#667085]">
                          <CalendarDays className="h-4 w-4" />
                          <span>{submittedAt}</span>
                        </div>

                        <p className="mt-3 break-all text-sm text-[#20145f]">{submittedUrl}</p>

                        <Link
                          href={`/affiliate/Mobile_page/mobile/video-submission?campaign=${campaign.id}&edit=1`}
                          className="mt-4 block rounded-xl border border-[#20145f] px-4 py-3 text-center text-sm font-semibold text-[#20145f]"
                        >
                          Edit
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
