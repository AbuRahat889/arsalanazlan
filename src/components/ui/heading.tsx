'use client'

import React from "react";
import { motion } from "framer-motion";
import ScrollFloat from "./Scrolling";

interface HeadingProps {
  title?: string;
  subtitle?: string;
  subtitleColor?: string;
  titleColor?: string;
}

export default function Heading({
  title,
  subtitle,
  subtitleColor,
  titleColor,
}: HeadingProps) {
  return (
    <div>
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
        textClassName={`text-2xl font-semibold ${
          titleColor ? titleColor : "text-textColor"
        } leading-8 text-center`}
      >
        {title}
      </ScrollFloat>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className={`${
          subtitleColor ? subtitleColor : "text-secondaryColor"
        }  mt-3 md:mt-6 text-sm md:text-lg text-center max-w-2xl mx-auto`}
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
