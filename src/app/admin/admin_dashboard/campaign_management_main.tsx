"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import StatsCard from "./statscard";
import CampaignTable from "./campaigntable";

const statusOptions = ["All Statuses", "Live", "Pending Review", "Taken Down"];

export default function CampaignManagementMain() {
  const [selectedStatus, setSelectedStatus] = useState("All Statuses");
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (statusRef.current && !statusRef.current.contains(event.target as Node)) {
        setIsStatusOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <main className="h-screen overflow-y-auto">
      <div className="border-b border-[#dde3ee] bg-white px-6 py-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <h1 className="text-[28px] font-bold leading-tight text-[#1C1259]">
            Campaign Management
          </h1>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex h-10 items-center rounded-lg border border-[#cfd6e4] bg-white px-3 transition-colors focus-within:border-[#E83A7A] sm:w-[270px]">
              <Search className="mr-2 h-4 w-4 text-[#98a2b3]" />
              <input
                type="text"
                placeholder="Search campaigns or brands..."
                className="w-full bg-transparent text-[15px] text-[#344054] outline-none placeholder:text-[#98a2b3]"
              />
            </div>

            <div className="relative" ref={statusRef}>
              <button
                type="button"
                onClick={() => setIsStatusOpen((open) => !open)}
                className={`flex h-11 min-w-[170px] items-center justify-between rounded-full border bg-white px-4 text-[15px] font-medium text-[#111827] shadow-[0_1px_2px_rgba(17,24,39,0.04)] transition-colors ${
                  isStatusOpen
                    ? "border-[#E83A7A]"
                    : "border-[#cfd6e4] hover:border-[#b9c3d4]"
                }`}
              >
                <span>{selectedStatus}</span>
                <ChevronDown
                  className={`h-4 w-4 text-[#667085] transition-transform ${
                    isStatusOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isStatusOpen ? (
                <div className="absolute right-0 top-[calc(100%+8px)] z-20 min-w-[190px] overflow-hidden rounded-2xl border border-[#e3e7ef] bg-white py-2 shadow-[0_18px_40px_rgba(36,20,95,0.14)]">
                  {statusOptions.map((option) => {
                    const isSelected = option === selectedStatus;

                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => {
                          setSelectedStatus(option);
                          setIsStatusOpen(false);
                        }}
                        className={`flex w-full items-center px-4 py-2.5 text-left text-[15px] transition-colors ${
                          isSelected
                            ? "bg-[#fff0f6] font-semibold text-[#E83A7A]"
                            : "text-[#344054] hover:bg-[#fff4f8] hover:text-[#E83A7A]"
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <StatsCard title="Total Campaigns" value={24} color="bg-[#98a2b3]" />
          <StatsCard title="Live Now" value={9} color="bg-[#19c15f]" />
          <StatsCard title="Pending Review" value={3} color="bg-[#f5a623]" />
          <StatsCard title="Taken Down" value={1} color="bg-[#f04452]" />
        </div>

        <div className="mt-6 overflow-x-auto">
          <CampaignTable />
        </div>
      </div>
    </main>
  );
}
