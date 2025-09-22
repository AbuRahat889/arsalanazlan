"use client";
import { Certifications } from "@/constants/Values";
import { motion } from "framer-motion";
import Heading from "../ui/heading";

export default function TrustCompliance() {
  return (
    <div className="container mx-auto px-5 xl:px-0 py-16">
      <Heading
        title="Trust And Compliance"
        subtitle="Our certifications and processes are independently verified for quality and security."
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
      >
        {Certifications.map((item, index) => (
          <div
            key={index}
            className="p-6 flex flex-col items-center justify-center shadow-security-card-shadow rounded-lg space-y-3"
          >
            <div className="bg-[#293650] rounded-lg flex items-center justify-center size-14">
              {item.iconType}
            </div>
            <h1 className="text-lg text-textColor font-semibold leading-[120%]">
              {item.title}
            </h1>
            <p className="text-sm text-center text-secondaryColor font-normal leading-7">
              {item.description}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
