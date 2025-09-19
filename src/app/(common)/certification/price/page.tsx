"use client";

import CertificationLevel from "@/components/Certification/CertificationLevel";
import PricingDetails from "@/components/Certification/PricingDetails";
import Heading from "@/components/ui/heading";
import { plans } from "@/constants/pricingInfo";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RxArrowLeft } from "react-icons/rx";

export default function Page() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(plans[0].id);
  const router = useRouter();

  const priceDetails = plans.find((plan) => plan.id === selectedPlan);

  return (
    <div className="py-14 container mx-auto px-5 xl:px-0">
      <div className="flex items-center gap-2 px-28">
        <div onClick={() => router.back()}>
          <RxArrowLeft className="cursor-pointer size-5" />
        </div>
        <p className="text-secondaryColor text-base font-normal leading-normal">
          Back to Professional Certification
        </p>
      </div>
      <Heading
        title="Choose Your CPD Plan"
        subtitle="Select the certification level and billing cycle that works best for you."
      />
      <CertificationLevel
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
      />
      <Heading title="Choose Billing Cycle" />
      <PricingDetails priceDetails={priceDetails} />
    </div>
  );
}
