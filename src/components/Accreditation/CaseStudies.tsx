"use client";

import { caseStudiesData } from "@/constants/caseStudiesData";
import React from "react";
import Heading from "../ui/heading";
import Image from "next/image";
import PlaceholderImage from "@/assets/placeholder.webp";
import { MovingButton } from "../ui/moving-border";
import { HoverEffect } from "../ui/card-hover-effect";

export default function CaseStudies() {
  return (
    <div className="bg-[#fef4e7] p-5 md:p-9 rounded-xl container mx-auto">
      <Heading title="CPD Provider Case Studies" />
      <HoverEffect
        items={caseStudiesData}
        renderItem={(caseStudy) => (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
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
        )}
      />

      <div className="flex justify-center items-center pt-6">
        <MovingButton
          borderRadius="1.75rem"
          className=" text-sm rounded-full text-primaryColor px-2 py-2 md:text-base font-normal "
        >
          View All
        </MovingButton>
      </div>
    </div>
  );
}
