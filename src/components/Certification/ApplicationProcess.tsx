// components/ApplicationProcess.tsx
"use client";

import { MoveRight } from "lucide-react";
import {
  FaFileAlt,
  FaUpload,
  FaCheckCircle,
  FaClipboardCheck,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Heading from "../ui/heading";

const steps = [
  {
    id: "01",
    icon: <FaFileAlt className="text-white text-xl" />,
    title: "Apply",
    description:
      "Submit your application with evidence of CPD activities and professional experience.",
  },
  {
    id: "02",
    icon: <FaUpload className="text-white text-xl" />,
    title: "Upload Evidence",
    description:
      "Provide supporting documentation and evidence of your continuing professional development.",
  },
  {
    id: "03",
    icon: <FaClipboardCheck className="text-white text-xl" />,
    title: "Verification",
    description:
      "Our assessors review your application and evidence against our rigorous standards.",
  },
  {
    id: "04",
    icon: <FaCheckCircle className="text-white text-xl" />,
    title: "Decision",
    description:
      "Receive your certification decision and access to your blockchain-verified certificate.",
  },
];

export default function ApplicationProcess() {
  return (
    <section className="bg-[#f9fafb] py-14 mb-16">
      <div className="container mx-auto px-6 text-center">
        <Heading
          title="Simple Application Process"
          subtitle="Our streamlined process makes it easy to apply and track your
          certification journey."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-16 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="flex flex-col items-center relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Icon Circle */}
              <motion.div
                className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {step.icon}
              </motion.div>

              {/* Title */}
              <h3 className="font-semibold text-gray-900">{step.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mt-2">{step.description}</p>

              {/* Connecting Line + Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-0 right-[-20%]">
                  {/* Step Number */}
                  <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm">
                    {step.id}
                  </div>

                  {/* Arrow Animation */}
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                  >
                    <MoveRight className="size-20 text-gray-400" />
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
