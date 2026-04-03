"use client";

import { useState } from "react";
import AdminShell from "../components/AdminShell";

function Toggle({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-7 w-12 cursor-pointer items-center rounded-full transition-colors ${
        checked ? "bg-[#E91E63]" : "bg-[#d0d5dd]"
      }`}
      aria-pressed={checked}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
          checked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}

function SettingsCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <h2 className="text-[18px] font-bold text-[#1C1259]">{title}</h2>
      <p className="mt-1 text-[13px] leading-relaxed text-gray-500">{description}</p>
      <div className="mt-6 space-y-5">{children}</div>
    </section>
  );
}

function Row({
  label,
  description,
  control,
}: {
  label: string;
  description: string;
  control: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-[#edf0f5] px-4 py-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="max-w-[520px]">
        <p className="text-[14px] font-semibold text-[#1C1259]">{label}</p>
        <p className="mt-1 text-[13px] text-gray-500">{description}</p>
      </div>
      <div className="shrink-0 lg:mr-3">{control}</div>
    </div>
  );
}

export default function AdminSettingsPage() {
  const [approvalMode, setApprovalMode] = useState("Manual Review");
  const [defaultReviewState, setDefaultReviewState] = useState("Pending Review");
  const [requireTakedownConfirm, setRequireTakedownConfirm] = useState(true);

  const [flaggedAction, setFlaggedAction] = useState("Send to manual review");
  const [suspensionThreshold, setSuspensionThreshold] = useState("3 flags");
  const [brandQueuePriority, setBrandQueuePriority] = useState(true);

  const [reportingPanels, setReportingPanels] = useState(true);
  const [reportingCadence, setReportingCadence] = useState("Daily snapshot");

  const [notifyBrandSignups, setNotifyBrandSignups] = useState(true);
  const [notifyPendingCampaigns, setNotifyPendingCampaigns] = useState(true);
  const [notifyFlaggedAccounts, setNotifyFlaggedAccounts] = useState(true);

  const [adminEmail, setAdminEmail] = useState("admin@huskeedigital.com");
  const [sessionTimeout, setSessionTimeout] = useState("30 minutes");

  return (
    <AdminShell>
      <main className="min-h-screen overflow-y-auto px-8 py-8">
        <div className="mb-8">
          <h1 className="text-[28px] font-bold leading-tight text-[#1C1259]">
            Settings
          </h1>
          <p className="mt-2 text-[14px] text-gray-500">
            Configure moderation defaults, reporting behavior, alerts, and admin account preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <SettingsCard
            title="Platform Controls"
            description="Core controls that affect campaign approval and moderation flow across the platform."
          >
            <Row
              label="Campaign approval mode"
              description="Choose how new campaigns move from draft into the review queue."
              control={
                <select
                  value={approvalMode}
                  onChange={(e) => setApprovalMode(e.target.value)}
                  className="cursor-pointer rounded-xl border border-[#d0d5dd] px-4 py-3 pr-10 text-[14px] text-[#1C1259] outline-none"
                >
                  <option>Manual Review</option>
                  <option>Fast-track Review</option>
                  <option>Auto-approve (internal only)</option>
                </select>
              }
            />

            <Row
              label="Default review state"
              description="Set the default campaign state before an admin takes action."
              control={
                <select
                  value={defaultReviewState}
                  onChange={(e) => setDefaultReviewState(e.target.value)}
                  className="cursor-pointer rounded-xl border border-[#d0d5dd] px-4 py-3 pr-10 text-[14px] text-[#1C1259] outline-none"
                >
                  <option>Pending Review</option>
                  <option>Live</option>
                  <option>Taken Down</option>
                </select>
              }
            />

            <Row
              label="Require takedown confirmation"
              description="Show a confirmation step before campaigns are moved into taken down status."
              control={
                <Toggle checked={requireTakedownConfirm} onChange={setRequireTakedownConfirm} />
              }
            />

            <button
              type="button"
              className="cursor-pointer rounded-full bg-[#1C1259] px-5 py-3 text-[14px] font-semibold text-white hover:opacity-90"
            >
              Save Changes
            </button>
          </SettingsCard>

          <SettingsCard
            title="Moderation Defaults"
            description="Set baseline actions for flagged accounts and user review handling."
          >
            <Row
              label="Default action for flagged accounts"
              description="Select what happens when an account receives enough moderation flags."
              control={
                <select
                  value={flaggedAction}
                  onChange={(e) => setFlaggedAction(e.target.value)}
                  className="cursor-pointer rounded-xl border border-[#d0d5dd] px-4 py-3 pr-10 text-[14px] text-[#1C1259] outline-none"
                >
                  <option>Send to manual review</option>
                  <option>Suspend account</option>
                  <option>Flag only</option>
                </select>
              }
            />

            <Row
              label="Affiliate suspension threshold"
              description="Define how many moderation flags should trigger a suspension review."
              control={
                <select
                  value={suspensionThreshold}
                  onChange={(e) => setSuspensionThreshold(e.target.value)}
                  className="cursor-pointer rounded-xl border border-[#d0d5dd] px-4 py-3 pr-10 text-[14px] text-[#1C1259] outline-none"
                >
                  <option>2 flags</option>
                  <option>3 flags</option>
                  <option>5 flags</option>
                </select>
              }
            />

            <Row
              label="Prioritize brand review queue"
              description="Push new brand accounts and pending campaign reviews higher in the moderation queue."
              control={<Toggle checked={brandQueuePriority} onChange={setBrandQueuePriority} />}
            />

            <button
              type="button"
              className="cursor-pointer rounded-full bg-[#1C1259] px-5 py-3 text-[14px] font-semibold text-white hover:opacity-90"
            >
              Save Changes
            </button>
          </SettingsCard>

          <SettingsCard
            title="Reporting & Data Preview"
            description="Control how reporting panels appear across admin and brand reporting screens."
          >
            <div className="rounded-xl border border-[#edf0f5] bg-[#fafbfe] px-4 py-4">
              <p className="text-[13px] font-medium text-gray-500">Reporting source</p>
              <p className="mt-2 text-[15px] font-semibold text-[#1C1259]">
                Placeholder panels active
              </p>
              <p className="mt-1 text-[13px] text-gray-500">
                Estimated engagement and GMV remain in preview mode until the final reporting tool is confirmed.
              </p>
            </div>

            <Row
              label="Show estimated metrics panels"
              description="Display placeholder panels for opt-ins, videos submitted, estimated engagement, and GMV."
              control={<Toggle checked={reportingPanels} onChange={setReportingPanels} />}
            />

            <Row
              label="Reporting refresh cadence"
              description="Choose how often reporting snapshots should refresh in the admin preview."
              control={
                <select
                  value={reportingCadence}
                  onChange={(e) => setReportingCadence(e.target.value)}
                  className="cursor-pointer rounded-xl border border-[#d0d5dd] px-4 py-3 pr-10 text-[14px] text-[#1C1259] outline-none"
                >
                  <option>Hourly snapshot</option>
                  <option>Daily snapshot</option>
                  <option>Manual refresh only</option>
                </select>
              }
            />

            <button
              type="button"
              className="cursor-pointer rounded-full bg-[#1C1259] px-5 py-3 text-[14px] font-semibold text-white hover:opacity-90"
            >
              Save Changes
            </button>
          </SettingsCard>

          <SettingsCard
            title="Notifications"
            description="Choose which admin alerts should be sent to Huskee Digital internal users."
          >
            <Row
              label="New brand signup alerts"
              description="Email admins when a new brand account joins the platform."
              control={<Toggle checked={notifyBrandSignups} onChange={setNotifyBrandSignups} />}
            />

            <Row
              label="Pending campaign review alerts"
              description="Email admins when new campaigns are waiting in the review queue."
              control={<Toggle checked={notifyPendingCampaigns} onChange={setNotifyPendingCampaigns} />}
            />

            <Row
              label="Flagged account alerts"
              description="Email admins when a brand or affiliate is flagged or suspended."
              control={<Toggle checked={notifyFlaggedAccounts} onChange={setNotifyFlaggedAccounts} />}
            />

            <button
              type="button"
              className="cursor-pointer rounded-full bg-[#1C1259] px-5 py-3 text-[14px] font-semibold text-white hover:opacity-90"
            >
              Save Changes
            </button>
          </SettingsCard>

          <SettingsCard
            title="Security & Admin Account"
            description="Manage admin contact details, session behavior, and security readiness."
          >
            <Row
              label="Admin contact email"
              description="Primary email used for system notices and admin review alerts."
              control={
                <input
                  type="email"
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                  className="w-[280px] rounded-xl border border-[#d0d5dd] px-4 py-3 text-[14px] text-[#1C1259] outline-none"
                />
              }
            />

            <Row
              label="Session timeout"
              description="Automatically sign out inactive admins after the selected duration."
              control={
                <select
                  value={sessionTimeout}
                  onChange={(e) => setSessionTimeout(e.target.value)}
                  className="cursor-pointer rounded-xl border border-[#d0d5dd] px-4 py-3 text-[14px] text-[#1C1259] outline-none"
                >
                  <option>15 minutes</option>
                  <option>30 minutes</option>
                  <option>1 hour</option>
                </select>
              }
            />

            <div className="rounded-xl border border-[#ffe7a3] bg-[#fff9e8] px-4 py-4">
              <p className="text-[14px] font-semibold text-[#1C1259]">Two-factor authentication</p>
              <p className="mt-1 text-[13px] text-[#8a6b00]">
                Deferred for a later phase. Keep strong passwords enabled for all Huskee Digital admin accounts.
              </p>
            </div>

            <button
              type="button"
              className="cursor-pointer rounded-full bg-[#1C1259] px-5 py-3 text-[14px] font-semibold text-white hover:opacity-90"
            >
              Save Changes
            </button>
          </SettingsCard>
        </div>
      </main>
    </AdminShell>
  );
}
