"use client";

import CaseStudiesCard from "@/components/CaseStudies/CaseStudiesCard";
import Banner from "@/components/ui/Banner";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Heading from "@/components/ui/heading";
import { caseStudiesData } from "@/constants/caseStudiesData";
import React from "react";

export default function page() {
  return (
    <div>
      <Banner
        title="CPD Member"
        colorTitle="Case Study"
        discription="Discover world-class training providers that have earned our rigorous accreditation standards. Search by specialty, location, or accreditation level."
      />
      <div className="container mx-auto py-16 px-5 xl:px-0">
        <div className="mb-10">
          <Heading title="CPD Provider Case Studies" />
        </div>
        <HoverEffect
          items={caseStudiesData}
          renderItem={(caseStudy) => <CaseStudiesCard caseStudy={caseStudy} />}
        />
      </div>
    </div>
  );
}
