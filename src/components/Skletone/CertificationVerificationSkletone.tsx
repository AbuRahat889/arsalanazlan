import React from "react";

export default function CertificationVerificationSkletone() {
  return (
    <div className="">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="max-w-7xl w-full mx-auto flex items-center gap-10 px-6 py-4 rounded-lg shadow-none lg:shadow-security-card-shadow mb-6 border-b lg:border-none"
        >
          {/* Left section skeleton */}
          <div className="flex items-center gap-4 w-72">
            {/* Avatar skeleton */}
            <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />

            {/* Name and job skeleton */}
            <div className="flex flex-col gap-2">
              <div className="h-4 w-32 bg-gray-200 rounded-md animate-pulse" />
              <div className="h-3 w-24 bg-gray-200 rounded-md animate-pulse" />
            </div>
          </div>

          {/* Right section skeleton */}
          <div className="flex items-center justify-evenly gap-6 w-full">
            {/* Level badge skeleton */}
            <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse" />

            {/* Country skeleton */}
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 bg-gray-200 rounded-full animate-pulse" />
              <div className="h-3 w-16 bg-gray-200 rounded-md animate-pulse" />
            </div>

            {/* Date skeleton */}
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 bg-gray-200 rounded-full animate-pulse" />
              <div className="h-3 w-20 bg-gray-200 rounded-md animate-pulse" />
            </div>

            {/* Status skeleton */}
            <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  );
}
