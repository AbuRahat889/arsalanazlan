"use client";

import React from "react";
import Heading from "../ui/heading";
import { motion } from "framer-motion";
import { EmployerTrainingInfo } from "@/constants/caseStudiesData";

export default function EmployerTraining() {
  return (
    <div className="py-14 container mx-auto px-5 xl:px-0">
      <Heading
        title="Why Accredit Your Employer Training?"
        subtitle="Professional accreditation elevates your training programs and demonstrates commitment to excellence"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
      >
        {EmployerTrainingInfo.map((item, index) => (
          <div
            key={index}
            className="p-6 flex flex-col items-center justify-center shadow-security-card-shadow rounded-lg"
          >
            <div className="bg-[#293650] rounded-lg flex items-center justify-center size-14">
              {item.iconType}
            </div>
            <p className="text-lg text-textColor font-semibold leading-[120%] mt-6">
              {item.title}
            </p>
            <p className="text-sm text-secondaryColor font-normal leading-7 mt-3">
              {item.description}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
