// components/ApplicationProcess.tsx
import { MoveRight } from "lucide-react";
import {
  FaFileAlt,
  FaUpload,
  FaCheckCircle,
  FaClipboardCheck,
} from "react-icons/fa";
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
            <div key={step.id} className="flex flex-col items-center relative">
              {/* Icon Circle */}
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mb-4">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-gray-900">{step.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mt-2">{step.description}</p>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-0 right-[-20%] ">
                  {/* Step Number */}
                  <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm ">
                    {step.id}
                  </div>
                  <MoveRight className=" size-20 " />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
