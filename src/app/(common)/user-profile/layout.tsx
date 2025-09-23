import UserProfileTab from "@/components/UserProfile.tsx/UserProfileTab";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row container mx-auto py-12 px-5 xl:px-0 gap-6">
      <UserProfileTab />
      <div className="w-full">{children} </div>
    </div>
  );
}
