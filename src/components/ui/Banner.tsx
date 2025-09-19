"use client";

import React from "react";
import { motion } from "framer-motion";
import { MediaButton } from "../ui/icon";
import bgimage from "@/assets/bannerImage.svg";

interface BannerProps {
  colorTitle?: string;
  title?: string;
  subtitle?: string;
  discription?: string;
  button?: string;
}

export default function Banner({
  title,
  colorTitle,
  subtitle,
  discription,
  button,
}: BannerProps) {
  return (
    <div
      style={{ backgroundImage: `url(${bgimage.src})` }}
      className="relative w-full h-screen lg:h-[80vh] flex items-center justify-center flex-col overflow-hidden bg-cover bg-center bg-no-repeat "
    >
      <div className="relative z-50 flex flex-col items-center justify-center w-full h-full text-center container mx-auto px-5 py-10 md:py-0 lg:lg:px-0 text-white">
        {subtitle && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="py-2 px-6 bg-[#3c3e45] rounded-full mb-4 flex items-start md:items-center gap-2"
          >
            <MediaButton type="badge" />
            <p className="text-primaryColor text-xs md:text-sm font-normal leading-normal">
              {subtitle}
            </p>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-2xl lg:text-6xl font-semibold leading-normal lg:leading-[50px]"
        >
          {title} <span className="text-primaryColor">{colorTitle}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-white max-w-[800px] mt-3 md:mt-6 text-sm md:text-lg"
        >
          {discription}
        </motion.p>

        {button && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center flex-col md:flex-row gap-3 justify-center md:gap-6 mt-4 md:mt-12"
          >
            <button className="bg-primaryColor px-3 md:px-5 py-2 md:py-3 border border-primaryColor rounded-lg flex items-center gap-2 text-base group text-textColor">
              Earn Certification
              <MediaButton type="arrowRight" />
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
