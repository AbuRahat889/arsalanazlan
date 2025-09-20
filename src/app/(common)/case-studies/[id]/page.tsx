import CaseStudies from "@/components/Accreditation/CaseStudies";
import CaseStudiesDetails from "@/components/CaseStudies/CaseStudiesDetails";
import Banner from "@/components/ui/Banner";
import React from "react";

export default function page() {
  return (
    <div>
      <Banner
        title="CFE Certification - "
        colorTitle="CPD Member Case Study"
        discription="Discover world-class training providers that have earned our rigorous accreditation standards. Search by specialty, location, or accreditation level."
      />
      <CaseStudiesDetails />
      <div className="pt-10">
        <CaseStudies />
      </div>
    </div>
  );
}
