"use client";

import ApplicationForm from "@/components/Certification/ApplicationForm";
import Heading from "@/components/ui/heading";
import { useRouter } from "next/navigation";
import React from "react";
import { RxArrowLeft } from "react-icons/rx";

export default function Page() {
  const router = useRouter();
  return (
    <div className="py-14 container mx-auto px-5 xl:px-0">
      <div className="flex items-center gap-2 max-w-5xl mx-auto">
        <div onClick={() => router.back()}>
          <RxArrowLeft className="cursor-pointer size-5" />
        </div>
        <p className="text-secondaryColor text-base font-normal leading-normal">
          Back to Certification Levels
        </p>
      </div>
      <Heading
        title="Certification Application"
        subtitle="Submit your application to start your CPD certification journey."
      />
      <ApplicationForm />
    </div>
  );
}
