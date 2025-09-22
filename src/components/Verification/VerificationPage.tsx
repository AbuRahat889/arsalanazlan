import React from "react";
import Heading from "../ui/heading";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export default function Verification() {
  return (
    <div className="py-14 container mx-auto px-5 xl:px-0">
      <Heading
        title="Verify a Certificate"
        subtitle="Enter a certificate ID or scan a QR code to instantly verify authenticity."
      />

      <div className="max-w-xl p-6 mx-auto shadow-[0_0_4px_0_rgba(116,116,116,0.25)] rounded-md mt-10">
        <div className="text-center ">
          <h1 className="text-2xl text-textColor font-semibold leading-6 ">
            Certificate Lookup
          </h1>
          <p className="text-base font-normal text-secondaryColor leading-5 mt-2">
            All certificates are blockchain-verified for instant authentication
          </p>
        </div>

        <div className="py-6">
          <label
            htmlFor="certificateId"
            className="block mb-1 text-sm font-medium text-gray-700 "
          >
            Certificate ID
          </label>
          <input
            id="certificateId"
            type="text"
            placeholder="e.g. CPD-ADV-2025-1234"
            className={cn(
              "w-full px-3 py-3 border border-borderColor  rounded-xl text-[#999] text-base font-medium outline-none"
            )}
          />
        </div>

        <div className="text-center">
          <Button variant={"default"} className="w-full py-6 mb-3">
            Verify Certificate
          </Button>
          <p className="text-base font-normal text-secondaryColor leading-5 mt-2">
            Can&apos;t find your certificate? Contact us for assistance.
          </p>
        </div>
      </div>
    </div>
  );
}
