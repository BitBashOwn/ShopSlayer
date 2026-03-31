"use client";

import {
  Home,
  FileText,
  Folder,
  Upload,
  User,
} from "lucide-react";

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t flex justify-around py-2 text-xs">
      
      {/* Home */}
      <div className="flex flex-col items-center text-pink-500 cursor-pointer">
        <Home className="w-5 h-5" />
        <span>Home</span>
      </div>

      {/* Campaigns */}
      <div className="flex flex-col items-center text-gray-500 cursor-pointer">
        <FileText className="w-5 h-5" />
        <span>Campaigns</span>
      </div>

      {/* My Campaigns */}
      <div className="flex flex-col items-center text-gray-500 cursor-pointer">
        <Folder className="w-5 h-5" />
        <span>My Campaigns</span>
      </div>

      {/* Submissions */}
      <div className="flex flex-col items-center text-gray-500 cursor-pointer">
        <Upload className="w-5 h-5" />
        <span>Submissions</span>
      </div>

      {/* Profile */}
      <div className="flex flex-col items-center text-gray-500 cursor-pointer">
        <User className="w-5 h-5" />
        <span>Profile</span>
      </div>

    </div>
  );
}