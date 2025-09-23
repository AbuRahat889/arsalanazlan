"use client";

import { MediaButton } from "@/components/ui/icon";
import React from "react";

export default function UserStatCards() {
  return (
    <div>
      {/* statCards */}
      <div className="flex flex-wrap gap-6">
        {/* cpd hours  */}
        <div className="space-y-3 bg-[#f8f8f8] p-5 rounded-lg border border-borderColor w-80 ">
          <div className="flex items-center justify-between">
            <p className="text-sm text-secondaryColor font-medium leading-5">
              CPD Hours
            </p>
            <MediaButton type="clock" />
          </div>
          <div className="space-y-3">
            <p className="text-3xl text-textColor font-medium leading-5">
              28/40
            </p>
            <div className="relative bg-[#f5e3c8] w-full h-[15px] rounded-full">
              <div
                className="absolute dark:bg-slate-700 top-0 left-0 bg-primaryColor h-full rounded-full"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>
          <p className="text-sm text-secondaryColor font-medium leading-5">
            12 hours remaining
          </p>
        </div>
        {/* Application Status */}
        <div className="space-y-3 bg-[#f8f8f8] p-5 rounded-lg border border-borderColor w-80 ">
          <div className="flex items-center justify-between">
            <p className="text-sm text-secondaryColor font-medium leading-5">
              Application Status
            </p>
            <MediaButton type="file" />
          </div>
          <div className="space-y-3">
            <p className="text-3xl text-textColor font-medium leading-5">
              Draft
            </p>
            <div className="w-32 border-2 border-borderColor rounded-lg text-secondaryColor flex items-center justify-center">
              <p>In Progress</p>
            </div>
          </div>
          <p className="text-sm text-secondaryColor font-medium leading-5">
            Created 11/15/2024
          </p>
        </div>
        {/* Subscription */}
        <div className="space-y-3 bg-[#f8f8f8] p-5 rounded-lg border border-borderColor w-80 ">
          <div className="flex items-center justify-between">
            <p className="text-sm text-secondaryColor font-medium leading-5">
              Subscription
            </p>
            <MediaButton type="growth2" />
          </div>
          <div className="space-y-3">
            <p className="text-3xl text-textColor font-medium leading-5">
              Active
            </p>
            <div className="w-24 bg-primaryColor rounded-lg text-textColor flex items-center justify-center">
              <p>ACPD</p>
            </div>
          </div>
          <p className="text-sm text-secondaryColor font-medium leading-5">
            Expires 12/15/2025
          </p>
        </div>
      </div>

      <div className="space-y-3 bg-[#f8f8f8] p-5 rounded-lg border border-borderColor w-80 mt-6 ">
        <div className="flex items-center justify-between">
          <p className="text-base font-semibold text-textColor leading-5">
            Quick Actions
          </p>
        </div>

        <div className="w-full p-5 bg-primaryColor rounded-lg text-textColor font-semibold flex items-center justify-center cursor-pointer">
          <p>Add New Log Activity</p>
        </div>
      </div>
    </div>
  );
}
