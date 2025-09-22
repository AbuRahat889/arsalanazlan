"use client";

import Image from "next/image";
import { MediaButton } from "../ui/icon";
import profileImage from "@/assets/profile.jpg";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  name: string;
  role: string;
  level: string;
  country: string;
  date: string;
  status: string;
};

export default function DirectoryCard({
  name,
  role,
  level,
  country,
  date,
  status,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className="max-w-7xl w-full mx-auto flex items-center gap-10 px-6 py-4 rounded-lg shadow-none lg:shadow-security-card-shadow mb-6 border-b lg:border-none"
    >
      {/* Left section with avatar and user info */}
      <div className="flex items-center gap-4 w-72">
        {/* Avatar */}
        <div className="w-10 h-10 bg-[#fdf4e7] rounded-full flex items-center justify-center overflow-hidden">
          <Image
            src={profileImage}
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        {/* User info */}
        <div>
          <h3 className="text-base text-textColor font-medium leading-6">
            {name}
          </h3>
          <p className="text-sm text-secondaryColor font-normal leading-5">
            {role}
          </p>
        </div>
      </div>

      {/* Right section with badges and info */}
      <div className="flex items-center justify-evenly gap-6 w-full">
        {/* Level badge */}
        <div
          className={cn(
            "px-3 py-1 text-white text-sm rounded-full",
            level === "FCPD"
              ? "bg-[#2b883c]"
              : level === "ACPD"
              ? "bg-[#1f2c47]"
              : "bg-[#f1a63d]"
          )}
        >
          {level}
        </div>

        {/* Country info */}
        <div className="flex items-center gap-2 text-gray-600">
          <MediaButton type="network" />
          <span className="text-sm">{country}</span>
        </div>

        {/* Date info */}
        <div className="flex items-center gap-2 text-gray-600">
          <MediaButton type="calender" />
          <span className="text-sm">{date}</span>
        </div>

        {/* Status badge */}
        <span className="px-3 py-1 bg-slate-800 text-white text-sm rounded-full">
          {status}
        </span>
      </div>
    </motion.div>
  );
}
