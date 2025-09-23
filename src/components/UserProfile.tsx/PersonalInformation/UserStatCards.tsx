"use client";

import { MediaButton } from "@/components/ui/icon";
import { workshops } from "@/constants/activityInfo";
import { Calendar, CheckCircle, Clock, FileText } from "lucide-react";
import React from "react";

export default function UserStatCards() {
  return (
    <div>
      {/* statCards */}
      <div className="flex flex-wrap gap-6">
        {/* cpd hours  */}
        <div className="space-y-3 bg-[#f8f8f8] p-5 rounded-lg border border-[#E4E4E4] w-80 ">
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
        <div className="space-y-3 bg-[#f8f8f8] p-5 rounded-lg border border-[#E4E4E4] w-80 ">
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
            <div className="w-32 border-2 border-[#E4E4E4] rounded-lg text-secondaryColor flex items-center justify-center">
              <p>In Progress</p>
            </div>
          </div>
          <p className="text-sm text-secondaryColor font-medium leading-5">
            Created 11/15/2024
          </p>
        </div>
        {/* Subscription */}
        <div className="space-y-3 bg-[#f8f8f8] p-5 rounded-lg border border-[#E4E4E4] w-80 ">
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

      {/* add button  */}
      <div className="space-y-3 bg-[#f8f8f8] p-5 rounded-lg border border-[#E4E4E4] w-80 mt-6 ">
        <div className="flex items-center justify-between">
          <p className="text-base font-semibold text-textColor leading-5">
            Quick Actions
          </p>
        </div>
        <div className="w-full p-5 bg-primaryColor rounded-lg text-textColor font-semibold flex items-center justify-center cursor-pointer">
          <p>Add New Log Activity</p>
        </div>
      </div>

      {/* Activity Log */}
      <div className="bg-[#f8f8f8] p-5 rounded-lg border-2 border-[#E4E4E4] mt-6 ">
        <div>
          <p className="text-lg text-textColor font-medium">Activities</p>
          <p className="text-base text-secondaryColor font-normal leading-5">
            Your latest CPD activities and their status
          </p>
        </div>
        {/* activity card  */}

        <div className="mt-6 space-y-6">
          {workshops.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-border rounded-lg p-5"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <p className="text-lg font-semibold text-card-foreground mb-1">
                    {item.title}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {item.organization}
                  </p>
                </div>
                <div
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium
                ${
                  item.statusColor === "green"
                    ? "bg-green-50 text-green-700"
                    : item.statusColor === "yellow"
                    ? "bg-yellow-50 text-yellow-700"
                    : "bg-red-50 text-red-700"
                }`}
                >
                  <CheckCircle className="w-4 h-4" />
                  {item.status}
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex items-center gap-6 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {item.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>
                <div className="bg-muted px-2 py-1 rounded text-xs">
                  {item.type}
                </div>
              </div>

              {/* Description */}
              <p className="text-card-foreground mb-4 leading-relaxed">
                {item.description}
              </p>

              {/* Attachments */}
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <FileText className="w-4 h-4" />
                {item.attachments} evidence files attached
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
