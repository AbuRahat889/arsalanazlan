"use client";

import { motion } from "framer-motion";

export function MyPlansCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.12)" }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-lg  border border-gray-200 p-8"
    >
      {/* Header */}
      <div className="flex flex-col-reverse md:flex-row gap-5 items-start md:items-center justify-between mb-5">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            type: "spring",
            stiffness: 100,
          }}
          className="text-2xl font-semibold text-textColor"
        >
          My Plans
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-2"
        >
          Renew Plans
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.button>
      </div>

      {/* Plan Information */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="space-y-6"
      >
        {[
          {
            label: "Current plan :",
            value: "Standard Certification (Monthly)",
          },
          { label: "Name :", value: "Mahadi Hasan" },
          { label: "Invoice no. :", value: "1224021248132" },
          {
            label: "Next Billing Date :",
            value: "25 Jun, 2025",
            icon: (
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="18"
                  rx="2"
                  ry="2"
                  strokeWidth={2}
                />
                <line x1="16" y1="2" x2="16" y2="6" strokeWidth={2} />
                <line x1="8" y1="2" x2="8" y2="6" strokeWidth={2} />
                <line x1="3" y1="10" x2="21" y2="10" strokeWidth={2} />
              </svg>
            ),
          },
          {
            label: "Current Status :",
            value: (
              <span className="relative text-green-600 font-medium">
                <motion.span
                  className="absolute -inset-1 rounded-full bg-green-200 opacity-30"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                />
                Active
              </span>
            ),
            icon: (
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            ),
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, x: -20, y: 10 },
              visible: { opacity: 1, x: 0, y: 0 },
            }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            className={`flex flex-col md:flex-row items-start gap-3 ${
              index === 0 ? "border-b pb-5" : ""
            }`}
          >
            <div className="flex items-center gap-2 min-w-[140px]">
              {item.icon && item.icon}
              <span className="text-gray-700 font-medium">{item.label}</span>
            </div>
            <span className="text-gray-600">{item.value}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
