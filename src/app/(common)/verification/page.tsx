import Banner from "@/components/ui/Banner";
import ProfessionalDirectory from "@/components/Verification/ProfessionalDirectory";
import Verification from "@/components/Verification/VerificationPage";
import React from "react";

export default function page() {
  return (
    <div >
      <Banner
        title="Certificate"
        colorTitle="Verification"
        discription="Instantly verify the authenticity of CPD Awards certificates using our secure blockchain-powered verification system."
      />
      <Verification />
      <ProfessionalDirectory />
    </div>
  );
}
