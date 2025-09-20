"use client";

import { caseStudiesData } from "@/constants/caseStudiesData";
import Link from "next/link";
import CaseStudiesCard from "../CaseStudies/CaseStudiesCard";
import { HoverEffect } from "../ui/card-hover-effect";
import Heading from "../ui/heading";
import { MovingButton } from "../ui/moving-border";

export default function CaseStudies() {
  return (
    <div className="bg-[#fef4e7] p-5 md:p-9 rounded-xl container mx-auto">
      <Heading title="CPD Provider Case Studies" />
      <HoverEffect
        items={caseStudiesData}
        renderItem={(caseStudy) => <CaseStudiesCard caseStudy={caseStudy} />}
      />

      <div className="flex justify-center items-center pt-6">
        <MovingButton
          href="/case-studies"
          borderRadius="1.75rem"
          className=" text-sm rounded-full text-primaryColor px-2 py-2 md:text-base font-normal "
        >
          <Link href={"/case-studies"}>View All</Link>
        </MovingButton>
      </div>
    </div>
  );
}
