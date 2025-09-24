"use client";

import { caseStudiesData } from "@/constants/caseStudiesData";
import { motion } from "framer-motion";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import CaseStudiesCard from "../CaseStudies/CaseStudiesCard";
import { HoverEffect } from "../ui/card-hover-effect";

export default function CaseStudies() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full border border-[#E4E4E4] px-6 py-10 rounded-lg"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-between items-center mb-8"
        >
          <h1 className="text-base md:text-2xl font-semibold text-gray-900">
            Case Studies Management
          </h1>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={"/user-profile/add-course?type=add"}
              className="bg-orange-500 hover:bg-orange-600 text-xs md:text-sm text-textColor px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <PlusIcon className="text-primary h-5 w-5" />
              Add new Case Studies
            </Link>
          </motion.div>
        </motion.div>

        <HoverEffect
          items={caseStudiesData}
          renderItem={(caseStudy) => <CaseStudiesCard caseStudy={caseStudy} />}
        />
      </motion.div>
    </div>
  );
}
