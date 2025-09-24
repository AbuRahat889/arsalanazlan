"use client";

import React from "react";
import Heading from "../ui/heading";
import Link from "next/link";
import { MediaButton } from "../ui/icon";
import { motion } from "framer-motion";

export default function CertificateHelp() {
  return (
    <div className="py-14  px-5 xl:px-0 bg-[#f9fafb]">
      <div className="container mx-auto">
        <div className="max-w-xl mx-auto">
          <Heading
            title="Need Help With Certification?"
            subtitle="Our experts are ready to answer your questions and guide you every step of the way."
          />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center flex-col md:flex-row gap-3 justify-center md:gap-6 mt-3 md:mt-6"
        >
          <Link
            href={"/contact-us"}
            className="bg-primaryColor px-3 md:px-5 py-2 md:py-3 border border-primaryColor rounded-lg flex items-center gap-2 text-base group text-textColor"
          >
            Contact Us
            <MediaButton type="arrowRight" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
