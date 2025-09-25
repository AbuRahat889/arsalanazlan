import ApplicationProcess from "@/components/Certification/ApplicationProcess";
import CertificateHelp from "@/components/Certification/CertificateHelp";
import Pricing from "@/components/Certification/Pricing";
import Banner from "@/components/ui/Banner";
import React from "react";

export default function page() {
  return (
    <div>
      <Banner
        title="Professional"
        colorTitle="Certification"
        discription="Advance your career with globally recognized certification across Standard, Advanced, and Fellow Levels"
        button="Apply Now"
        buttonLink="certification/price"
      />
      <Pricing />
      <ApplicationProcess />
      <CertificateHelp />
    </div>
  );
}
