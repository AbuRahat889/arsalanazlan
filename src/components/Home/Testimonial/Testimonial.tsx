"use client";

import React from "react";

import { motion } from "framer-motion";
import ScrollFloat from "@/components/ui/Scrolling";
import TestimonialTab from "./TestimonialTab";

export default function Testimonial() {
  return (
    <div className="bg-[#1e2d48] py-10 md:py-16 ">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
        textClassName="text-2xl font-semibold text-white leading-8 text-center px-5 xl:px-0"
      >
        Frequently Asked Questions
      </ScrollFloat>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-[#e8e8e9] mt-0 md:mt-6 text-sm md:text-lg text-center max-w-2xl mx-auto px-5 xl:px-0"
      >
        Our certification and accreditation programs deliver measurable value
        for professionals and organizations worldwide.
      </motion.p>

      <div className="mt-7 container mx-auto">
        <TestimonialTab />
      </div>
    </div>
  );
}
