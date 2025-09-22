"use client";
import { TeamMembers } from "@/constants/Values";
import { motion } from "framer-motion";
import Heading from "../ui/heading";

export default function Leadership() {
  return (
    <div className="container mx-auto px-5 xl:px-0 py-16">
      <Heading
        title="Leadership Team"
        subtitle="Led by recognized experts in education, quality assurance, and professional development."
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
      >
        {TeamMembers.map((item, index) => (
          <div
            key={index}
            className="p-6 flex flex-col items-center justify-center shadow-security-card-shadow rounded-lg space-y-3"
          >
            <div className="bg-[#293650] rounded-lg flex items-center justify-center size-14">
              {item.iconType}
            </div>
            <h1 className="text-lg text-textColor font-semibold leading-[120%]">
              {item.name}
            </h1>
            <div className="bg-[#f8fafc] px-3 py-1 rounded-full">
              <p>{item.role}</p>
            </div>
            <p className="text-lg text-textColor font-semibold leading-[120%] ">
              {item.extra}
            </p>
            <p className="text-sm text-center text-secondaryColor font-normal leading-7">
              {item.description}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
