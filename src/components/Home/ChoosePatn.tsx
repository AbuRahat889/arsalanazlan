"use client";

import React from "react";
import ScrollFloat from "../ui/Scrolling";
import { motion } from "framer-motion";
import { MediaButton } from "../ui/icon";
import { Button } from "../ui/button";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";
import path1 from "@/assets/Path1.png";
import path2 from "@/assets/Path2.png";

export default function ChoosePatn() {
  return (
    <div className="bg-[#f9fafb] py-16 px-5 xl:px-0">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
        textClassName="text-2xl font-semibold text-textColor leading-8 text-center"
      >
        Choose Your Path to Excellence
      </ScrollFloat>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-secondaryColor  mt-3 md:mt-6 text-sm md:text-lg text-center max-w-2xl mx-auto"
      >
        Each level is designed to recognize different stages of professional
        development and expertise.
      </motion.p>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-10 ">
          {/* First Grid - Animate from Left */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="p-4 md:p-6 shadow-security-card-shadow rounded-lg"
          >
            <div className="flex items-center gap-3">
              <div className="bg-[#293650] rounded-lg flex items-center justify-center size-14">
                <MediaButton type="men" />
              </div>
              <h1 className="text-base md:text-xl text-textColor font-semibold leading-[120%]">
                Individual Professionals
              </h1>
            </div>
            <p className="text-sm md:text-base text-secondaryColor font-normal leading-7 py-3">
              Elevate your career with globally recognized professional
              certification
            </p>
            <ul className="space-y-2">
              <li className="flex items-start md:items-center gap-2">
                <MediaButton type="check" />
                <span className="text-sm md:text-base text-secondaryColor font-normal leading-[160%]">
                  Standard, Advanced & Fellow levels
                </span>
              </li>
              <li className="flex items-start md:items-center gap-2">
                <MediaButton type="check" />
                <span className="text-sm md:text-base text-secondaryColor font-normal leading-[160%]">
                  Blockchain-verified certificates
                </span>
              </li>
              <li className="flex items-start md:items-center gap-2">
                <MediaButton type="check" />
                <span className="text-sm md:text-base text-secondaryColor font-normal leading-[160%]">
                  Global professional recognition
                </span>
              </li>
              <li className="flex items-start md:items-center gap-2">
                <MediaButton type="check" />
                <span className="text-sm md:text-base text-secondaryColor font-normal leading-[160%]">
                  Career advancement opportunities
                </span>
              </li>
            </ul>

            <Button
              variant={"default"}
              className="w-full flex items-start md:items-center gap-2 mt-6"
            >
              Start Your Certification
              <GoArrowRight />
            </Button>
          </motion.div>

          {/* Second Grid - Animate from Right */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-[200px] md:h-[388px] overflow-hidden rounded-xl"
          >
            <Image
              src={path1}
              alt="path1"
              height={500}
              width={500}
              className="w-full h-full shadow-security-card-shadow hover:scale-125 transition-transform object-cover duration-1000 ease-in-out"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-10 ">
          {/* First Grid - Animate from Left */}

          {/* Second Grid - Animate from Right */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-[200px] md:h-[388px] overflow-hidden rounded-xl"
          >
            <Image
              src={path2}
              alt="path1"
              height={500}
              width={500}
              className="w-full h-full shadow-security-card-shadow hover:scale-125 transition-transform object-cover duration-1000 ease-in-out"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="p-4 md:p-6 shadow-security-card-shadow rounded-lg"
          >
            <div className="flex items-center gap-3">
              <div className="bg-[#293650] flex items-center justify-center rounded-lg size-10 md:size-14">
                <MediaButton type="provider" />
              </div>
              <h1 className="text-base md:text-xl text-textColor font-semibold leading-[120%]">
                Individual Professionals
              </h1>
            </div>
            <p className="text-sm md:text-base text-secondaryColor font-normal leading-7 py-3">
              Elevate your career with globally recognized professional
              certification
            </p>
            <ul className="space-y-2">
              <li className="flex items-start md:items-center gap-2">
                <MediaButton type="check" />
                <span className="text-sm md:text-base text-secondaryColor font-normal leading-[160%]">
                  Standard, Advanced & Fellow levels
                </span>
              </li>
              <li className="flex items-start md:items-center gap-2">
                <MediaButton type="check" />
                <span className="text-base text-secondaryColor font-normal leading-[160%]">
                  Blockchain-verified certificates
                </span>
              </li>
              <li className="flex items-start md:items-center gap-2">
                <MediaButton type="check" />
                <span className="text-base text-secondaryColor font-normal leading-[160%]">
                  Global professional recognition
                </span>
              </li>
              <li className="flex items-start md:items-center gap-2">
                <MediaButton type="check" />
                <span className="text-base text-secondaryColor font-normal leading-[160%]">
                  Career advancement opportunities
                </span>
              </li>
            </ul>

            <Button
              variant={"default"}
              className="w-full flex items-start md:items-center gap-2 mt-6"
            >
              Start Your Certification
              <GoArrowRight />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
