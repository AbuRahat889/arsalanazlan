"use client";

import React from "react";
import UserStatCards from "./UserStatCards";
import ProviderStatCards from "./ProviderStatCards";
import { useGetMeQuery } from "@/redux/api/auth";

export default function PersonalInfoPage() {
  const { data } = useGetMeQuery("");

  return (
    <div>
      {data?.data?.role === "USER_PROFILE" ? (
        <UserStatCards />
      ) : (
        <ProviderStatCards />
      )}
    </div>
  );
}
