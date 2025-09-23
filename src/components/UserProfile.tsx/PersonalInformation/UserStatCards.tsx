"use client";

import { MediaButton } from "@/components/ui/icon";
import { workshops } from "@/constants/activityInfo";
import { Calendar, CheckCircle, Clock, FileText } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

export default function UserStatCards() {
  return (
    <div>
      {/* statCards */}
      <div className="flex flex-wrap gap-6">
        {/* CPD Hours */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-3 bg-[#f8f8f8] p-5 rounded-lg border border-[#E4E4E4] w-80"
        >
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
            <div className="relative bg-[#f5e3c8] w-full h-[15px] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "70%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute dark:bg-slate-700 top-0 left-0 bg-primaryColor h-full rounded-full"
              />
            </div>
          </div>
          <p className="text-sm text-secondaryColor font-medium leading-5">
            12 hours remaining
          </p>
        </motion.div>

        {/* Application Status */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-3 bg-[#f8f8f8] p-5 rounded-lg border border-[#E4E4E4] w-80"
        >
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
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="w-32 border-2 border-[#E4E4E4] rounded-lg text-secondaryColor flex items-center justify-center"
            >
              <p>In Progress</p>
            </motion.div>
          </div>
          <p className="text-sm text-secondaryColor font-medium leading-5">
            Created 11/15/2024
          </p>
        </motion.div>

        {/* Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-3 bg-[#f8f8f8] p-5 rounded-lg border border-[#E4E4E4] w-80"
        >
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
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-24 bg-primaryColor rounded-lg text-textColor flex items-center justify-center"
            >
              <p>ACPD</p>
            </motion.div>
          </div>
          <p className="text-sm text-secondaryColor font-medium leading-5">
            Expires 12/15/2025
          </p>
        </motion.div>
      </div>

      {/* Add Button */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="space-y-3 bg-[#f8f8f8] p-5 rounded-lg border border-[#E4E4E4] w-80 mt-6"
      >
        <div className="flex items-center justify-between">
          <p className="text-base font-semibold text-textColor leading-5">
            Quick Actions
          </p>
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full p-5 bg-primaryColor rounded-lg text-textColor font-semibold flex items-center justify-center cursor-pointer"
        >
          <p>Add New Log Activity</p>
        </motion.div>
      </motion.div>

      {/* Activity Log */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-[#f8f8f8] p-5 rounded-lg border-2 border-[#E4E4E4] mt-6"
      >
        <div>
          <p className="text-lg text-textColor font-medium">Activities</p>
          <p className="text-base text-secondaryColor font-normal leading-5">
            Your latest CPD activities and their status
          </p>
        </div>

        {/* activity card */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="mt-6 space-y-6"
        >
          {workshops.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
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
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
