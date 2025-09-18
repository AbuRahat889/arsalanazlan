"use client";

import { HoverEffect } from "../ui/card-hover-effect";
import { MediaButton } from "../ui/icon";
import { motion } from "framer-motion";
import ScrollFloat from "../ui/Scrolling";

export function Awards() {
  return (
    <div className="container mx-auto py-16 px-5 xl:px-0">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
        textClassName="text-2xl font-semibold text-textColor leading-8 text-center"
      >
        Why Choose CPD Awards
      </ScrollFloat>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-secondaryColor  mt-3 md:mt-6 text-sm md:text-lg text-center"
      >
        Our certification and accreditation programs deliver measurable value
        for professionals and organizations worldwide.
      </motion.p>

      <div className="mt-11">
        <HoverEffect items={securityItems} />
      </div>
    </div>
  );
}
const securityItems = [
  {
    title: "Global Recognition",
    description:
      "Certificates recognized in 85+ countries with established international partnerships and standards alignment.",
    iconType: <MediaButton type="recognitation" />,
  },
  {
    title: "Quality Assurance",
    description:
      "Rigorous assessment processes with independent audits ensuring the highest professional standards.",
    iconType: <MediaButton type="quality" />,
  },
  {
    title: "Career Growth",
    description:
      "Demonstrable impact on career progression with salary increases averaging 23% within 12 months.",
    iconType: <MediaButton type="growth" />,
  },
  {
    title: "Professional Network",
    description:
      "Join an exclusive community of certified professionals and fellows with opportunities.",
    iconType: <MediaButton type="network" />,
  },
  {
    title: "Blockchain Verification",
    description:
      "Tamper-proof digital certificates with instant verification and lifetime authenticity guarantee.",
    iconType: <MediaButton type="verification" />,
  },
  {
    title: "Employer Trust",
    description:
      "Preferred by leading employers worldwide for validated professional competency and commitment.",
    iconType: <MediaButton type="trust" />,
  },
];
