import Banner from "@/components/ui/Banner";
import ProfessionalDirectory from "@/components/Verification/ProfessionalDirectory";
import React from "react";

export default function page() {
  return (
    <div>
      <Banner
        title="Professional"
        colorTitle="Directory"
        discription="Securely complete your booking with our easy payment options."
      />
      <ProfessionalDirectory />
    </div>
  );
}
