"use client";

import Heading from "@/components/ui/heading";
import TestimonialTab from "./TestimonialTab";

export default function Testimonial() {
  return (
    <div className="bg-[#1e2d48] py-10 md:py-16 ">
      <Heading
        title="Testimonial"
        subtitle="Discover how CPD Certification and Accreditation have transformed careers and training programs worldwide"
        titleColor="text-white"
        subtitleColor="text-[#e8e8e9]"
      />
      <div className="mt-7 container mx-auto">
        <TestimonialTab />
      </div>
    </div>
  );
}
