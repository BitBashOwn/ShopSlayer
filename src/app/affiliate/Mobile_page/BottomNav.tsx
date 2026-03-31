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
    <div className="fixed bottom-0 left-0 w-full border-t bg-white py-2 text-xs lg:hidden">
      <div className="flex justify-around">
      
      {/* Home */}
        <div className="flex cursor-pointer flex-col items-center text-pink-500">
          <Home className="h-5 w-5" />
          <span>Home</span>
        </div>

      {/* Campaigns */}
        <div className="flex cursor-pointer flex-col items-center text-gray-500">
          <FileText className="h-5 w-5" />
          <span>Campaigns</span>
        </div>

      {/* My Campaigns */}
        <div className="flex cursor-pointer flex-col items-center text-gray-500">
          <Folder className="h-5 w-5" />
          <span>My Campaigns</span>
        </div>

      {/* Submissions */}
        <div className="flex cursor-pointer flex-col items-center text-gray-500">
          <Upload className="h-5 w-5" />
          <span>Submissions</span>
        </div>

      {/* Profile */}
        <div className="flex cursor-pointer flex-col items-center text-gray-500">
          <User className="h-5 w-5" />
          <span>Profile</span>
        </div>
      </div>
    </div>
  );
}
