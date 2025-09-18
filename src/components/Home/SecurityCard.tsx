"use client";

import React from "react";
import { MediaButton } from "../ui/icon";
import { motion } from "framer-motion";
import ScrollFloat from "../ui/Scrolling";

export default function SecurityCard() {
  const securityItems = [
    {
      title: "ISO 9001 Certified",
      description: "Quality Management",
      iconType: <MediaButton type="certified" />,
    },
    {
      title: "Blockchain Verified",
      description: "Tamper-Proof Records",
      iconType: <MediaButton type="verified" />,
    },
    {
      title: "LinkedIn Partner",
      description: "Skills Verification",
      iconType: <MediaButton type="partner" />,
    },
    {
      title: "Independently Audited",
      description: "Third-Party Validation",
      iconType: <MediaButton type="audited" />,
    },
  ];
  return (
    <div className="py-14 container mx-auto px-5 xl:px-0">
      <div>
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
          textClassName="text-2xl font-semibold text-textColor leading-8 text-center"
        >
          {/* <h1 className="text-2xl font-semibold text-textColor leading-8 text-center">
           TRUSTED STANDARDS AND SECURITY 
          </h1> */}
          Trusted Standards and Security
        </ScrollFloat>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
        >
          {securityItems.map((item, index) => (
            <div
              key={index}
              className="p-6 flex flex-col items-center justify-center shadow-security-card-shadow rounded-lg"
            >
              <div className="bg-[#293650] rounded-lg p-3 size-14">
                {item.iconType}
              </div>
              <h1 className="text-lg text-textColor font-semibold leading-[120%] mt-6">
                {item.title}
              </h1>
              <p className="text-sm text-secondaryColor font-normal leading-7 mt-3">
                {item.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
