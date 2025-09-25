"use client";
import React from "react";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

// Parent container variant for staggered children
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // delay between child animations
    },
  },
};

// Child element animation (fade + slide up)
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      //   ease: "easeOut", // ✅ type-safe
      ease: [0.42, 0, 0.58, 1] as any, // ✅ with cubic-bezier
    },
  },
};
export default function CaseStudiesDetails() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        variants={container}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="border-b border-border bg-white"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-200 rounded-md flex items-center justify-center">
              <Image src={logo} alt="Logo" className="object-contain w-6 h-6" />
            </div>
            <span className="text-xs sm:text-sm text-muted-foreground">
              Trauma-Informed Care Training Manual
            </span>
          </div>
          <div className="text-left sm:text-right">
            <div className="font-bold text-lg sm:text-xl tracking-wider">
              AGAPE
            </div>
            <div className="text-[10px] sm:text-xs text-muted-foreground">
              TRAINING INSTITUTE
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-16">
        {/* Introduction Section */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-8 items-start mb-8">
            <motion.div variants={fadeInUp} animate="active" className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-balance">
                Introduction
              </h1>
              <motion.p
                variants={fadeInUp}
                className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base"
              >
                Trauma and adverse childhood experiences (ACEs) have profound
                impacts on individuals across their lifespan. Research
                consistently shows that trauma affects brain development,
                emotional regulation, and the ability to form healthy
                relationships. Understanding trauma-informed care principles is
                essential for professionals working with vulnerable populations,
                as it provides a framework for creating safe, supportive
                environments that promote healing and resilience.
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="text-muted-foreground leading-relaxed text-sm sm:text-base"
              >
                This comprehensive guide explores the PACE model and its
                practical applications in trauma-informed care settings,
                offering evidence-based strategies for building therapeutic
                relationships and supporting recovery.
              </motion.p>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              variants={fadeInUp}
              className="w-full lg:w-64 flex-shrink-0"
            >
              <div className="bg-gray-100 rounded-lg p-4 h-40 sm:h-48 flex items-center justify-center">
                <Image
                  src={logo}
                  alt="Logo"
                  className="object-contain h-full w-auto"
                />
              </div>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-sm mb-2">Quick Guide</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Phoenix-Kaw Care Consultancy Ltd is a health and social care
                  training and consultancy organisation dedicated to improving
                  standards of care across the sector. We provide interactive,
                  affordable training and compliance-focused audits tailored to
                  staff working in children’s homes and…
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-3 bg-primaryColor text-white px-3 sm:px-4 py-2 rounded text-xs sm:text-sm font-medium hover:bg-orange-600 transition-colors"
                >
                  <Link href={`/accreditation/${1}`}>View Profile</Link>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Example Content Section */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-xl sm:text-2xl font-bold mb-6 text-balance"
          >
            Understanding Attachment and Trauma
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base"
          >
            Attachment theory provides a crucial foundation for understanding
            how early relationships shape our capacity for connection throughout
            life. When children experience trauma, particularly relational
            trauma, their attachment systems can become disrupted, leading to
            difficulties in trusting others and regulating emotions.
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base"
          >
            Trauma-informed care recognizes that many behavioral challenges stem
            from adaptive responses to overwhelming experiences. Rather than
            asking What&apos;s wrong with you?, trauma-informed approaches ask{" "}
            <strong>What happened to you?</strong> This shift in perspective
            opens the door to healing and growth.
          </motion.p>
        </motion.section>

        {/* References */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="border-t border-border pt-8"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-lg sm:text-xl font-bold mb-6"
          >
            References
          </motion.h2>
          <div className="space-y-3 text-xs sm:text-sm text-muted-foreground">
            <motion.p variants={fadeInUp}>
              Hughes, D. A. (2009).{" "}
              <em>
                Attachment-focused parenting: Effective strategies to care for
                children
              </em>
              . W. W. Norton & Company.
            </motion.p>
            <motion.p variants={fadeInUp}>
              van der Kolk, B. A. (2014).{" "}
              <em>
                The body keeps the score: Brain, mind, and body in the healing
                of trauma
              </em>
              . Penguin Books.
            </motion.p>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
