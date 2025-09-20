"use client";

import React from "react";
import Heading from "../ui/heading";
import { motion } from "framer-motion";
import { MediaButton } from "../ui/icon";
import Link from "next/link";

export default function WantToListed() {
  return (
    <div className="py-14  px-5 xl:px-0 bg-[#f9fafb]">
      <div className="container mx-auto">
        <Heading
          title="Want to be Listed Here?"
          subtitle="Join our directory of accredited training providers and reach thousands of organizations looking for quality professional development programs."
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center flex-col md:flex-row gap-3 justify-center md:gap-6 mt-3 md:mt-6"
        >
          <Link
            href={"/course-price"}
            className="bg-primaryColor px-3 md:px-5 py-2 md:py-3 border border-primaryColor rounded-lg flex items-center gap-2 text-base group text-textColor"
          >
            Apply for Accreditation
            <MediaButton type="arrowRight" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
