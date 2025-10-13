"use client";

import Image from "next/image";
import { MediaButton } from "../ui/icon";
import profileImage from "@/assets/profile.jpg";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CertificateProps } from "@/Types/Certificate";

type Props = {
  certificate: CertificateProps;
};

export default function DirectoryCard({ certificate }: Props) {

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
            {certificate?.fullName}
          </h3>
          <p className="text-sm text-secondaryColor font-normal leading-5 truncate line-clamp-1">
            {certificate?.user?.userProfile?.professionalSector}
          </p>
        </div>
      </div>

      {/* Right section with badges and info */}
      <div className="flex items-center justify-evenly gap-6 w-full">
        {/* Level badge */}
        <div
          className={cn(
            "px-3 py-1 text-white text-sm rounded-full",
            certificate?.certificationLevel === "FELLOW"
              ? "bg-[#2b883c]"
              : certificate?.certificationLevel === "ADVANCED"
              ? "bg-[#1f2c47]"
              : certificate?.certificationLevel === "STANDARD"
              ? "bg-[#f1a63d]"
              : ""
          )}
        >
          {certificate?.certificationLevel}
        </div>

        {/* Country info */}
        <div className="flex items-center gap-2 text-gray-600">
          <MediaButton type="network" />
          <span className="text-sm">
            {certificate?.user?.userProfile?.country}
          </span>
        </div>

        {/* Date info */}
        <div className="flex items-center gap-2 text-gray-600">
          <MediaButton type="calender" />
          <span className="text-sm">
            {certificate.createdAt
              ? new Date(certificate.createdAt).toLocaleDateString("en-US", {
                  month: "2-digit",
                  day: "2-digit",
                  year: "numeric",
                })
              : "No date"}
          </span>
        </div>

        {/* Status badge */}
        <span className="px-3 py-1 bg-slate-800 text-white text-sm rounded-full">
          {certificate?.status}
        </span>
      </div>
    </motion.div>
  );
}
