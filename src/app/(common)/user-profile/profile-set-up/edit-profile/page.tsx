"use client";

import EditAccreditedprofile from "@/components/UserProfile/EditAccreditedprofile";
import EditProfile from "@/components/UserProfile/EditProfile";
import { useGetMeQuery } from "@/redux/api/auth";
import React from "react";

export default function EditPage() {
  const { data } = useGetMeQuery("");
  return (
    <div className="w-full">
      {data?.data?.role === "USER_PROFILE" ? (
        <EditProfile />
      ) : (
        <EditAccreditedprofile />
      )}
    </div>
  );
}
