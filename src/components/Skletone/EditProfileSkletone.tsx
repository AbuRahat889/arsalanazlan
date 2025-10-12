"use client";
import React from "react";

export default function ProfileFormSkeleton() {
  return (
    <div className="p-3 md:p-6 border border-[#E4E4E4] rounded-lg w-full animate-pulse">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 bg-gray-300 rounded-full" />
        <div className="h-6 w-48 bg-gray-300 rounded" />
      </div>

      {/* Profile Image */}
      <div className="flex justify-start py-5">
        <div className="relative">
          <div className="w-24 h-24 bg-gray-300 rounded-full border-2 border-gray-200" />
          <div className="absolute bottom-1 left-16 w-8 h-8 bg-gray-300 rounded-full" />
        </div>
      </div>

      {/* Form Fields */}
      <div className="space-y-6">
        {/* First + Last Name */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full h-10 bg-gray-300 rounded" />
          <div className="w-full h-10 bg-gray-300 rounded" />
        </div>

        {/* Country + Timezone */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full h-10 bg-gray-300 rounded" />
          <div className="w-full h-10 bg-gray-300 rounded" />
        </div>

        {/* Professional Sector + Specialization */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full h-10 bg-gray-300 rounded" />
          <div className="w-full h-10 bg-gray-300 rounded" />
        </div>

        {/* Job Title + Location */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full h-10 bg-gray-300 rounded" />
          <div className="w-full h-10 bg-gray-300 rounded" />
        </div>

        {/* Professional Summary */}
        <div>
          <div className="h-24 bg-gray-300 rounded" />
        </div>

        {/* Button */}
        <div className="w-full h-10 bg-gray-300 rounded" />
      </div>
    </div>
  );
}
