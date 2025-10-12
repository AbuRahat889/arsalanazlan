"use client";
import React from "react";

export default function ProfileSetupSkeleton() {
  return (
    <div className="p-3 md:p-6 w-full space-y-8">
      {/* Profile Setup Card */}
      <div className="w-full border border-[#E4E4E4] px-6 py-10 rounded-lg animate-pulse">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="h-6 w-40 bg-gray-300 rounded" />
          <div className="h-8 w-28 bg-gray-300 rounded" />
        </div>

        {/* Profile Photo */}
        <div className="mb-8">
          <div className="w-24 h-24 rounded-full bg-gray-300 border-2 border-gray-200" />
          <div className="h-5 w-32 bg-gray-300 rounded mt-4" />
        </div>

        {/* Profile Info */}
        <div className="flex flex-col md:flex-row items-start gap-10 mb-10">
          {/* Left Info */}
          <div className="space-y-4 w-full">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-gray-300 rounded" />
              <div className="h-4 w-32 bg-gray-300 rounded" />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-gray-300 rounded" />
              <div className="h-4 w-40 bg-gray-300 rounded" />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-gray-300 rounded" />
              <div className="h-4 w-28 bg-gray-300 rounded" />
            </div>
          </div>

          {/* Right Info */}
          <div className="space-y-4 w-full">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-gray-300 rounded" />
              <div className="h-4 w-36 bg-gray-300 rounded" />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-gray-300 rounded" />
              <div className="h-4 w-48 bg-gray-300 rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Security Section */}
      <div className="border border-[#E4E4E4] p-6 rounded-lg w-full animate-pulse">
        <div className="h-6 w-40 bg-gray-300 rounded mb-6" />
        <div className="h-12 w-full bg-gray-300 rounded" />
      </div>
    </div>
  );
}
