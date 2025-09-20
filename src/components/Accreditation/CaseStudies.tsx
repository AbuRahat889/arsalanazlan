import { caseStudiesData } from "@/constants/caseStudiesData";
import React from "react";
import Heading from "../ui/heading";
import Image from "next/image";
import PlaceholderImage from "@/assets/placeholder.webp";

interface CaseStudyCardProps {
  title: string;
  date: string;
  bgGradient: string;
  decorativeElements: string;
  image?: string | "";
}

export default function CaseStudies() {
  return (
    <div className="bg-[#fef4e7] p-5 md:p-9 rounded-xl container mx-auto">
      <Heading title="CPD Provider Case Studies" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {caseStudiesData.map((caseStudy: CaseStudyCardProps, index: number) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            {/* Header */}
            <div className="px-4 py-3 ">
              <div className="flex justify-between items-center text-xs text-gray-500 uppercase tracking-wide">
                <span className="font-medium">Provider Case Studies</span>
                <span>{caseStudy?.date}</span>
              </div>
            </div>

            {/* Card Content */}

            <div className={`h-44 px-4`}>
              {/* Decorative Elements */}
              <Image
                src={caseStudy?.image || PlaceholderImage}
                alt="decorative"
                height={200}
                width={200}
                className="w-full h-full"
              />
            </div>

            {/* Title */}
            <div className="p-4">
              <p className="text-sm font-medium text-gray-900 leading-tight">
                {caseStudy?.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
