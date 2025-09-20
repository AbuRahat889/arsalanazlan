"use client";
import React from "react";
import StripePayment from "../ui/paymentForm";
import { useSearchParams } from "next/navigation";

export default function PaymentDetails() {
  const params = useSearchParams();
  const plan = params.get("plan");
  const price = params.get("price");
  return (
    <div className="container mx-auto py-16 px-5 xl:px-0">
      <div className="grid grid-cols-1 md:grid-cols-9 gap-5 md:gap-10">
        <div className="col-span-4">
          <h1 className="text-xl md:text-2xl text-textColor font-semibold leading-[120%] mb-6">
            Billing Details
          </h1>
          <div className="p-6 border border-borderColor rounded-lg">
            <div className="border border-primaryColor p-2 w-24 rounded-full">
              <p className="bg-primaryColor flex items-center justify-center py-1 rounded-full text-sm font-bold text-textColor leading-normal">
                {plan}
              </p>
            </div>
            <div className="flex items-center justify-between border-b py-4">
              <p className="text-base font-bold leading-5 text-textColor">
                Standard Certification{" "}
                <span className="font-medium text-secondaryColor">
                  (Monthly)
                </span>
              </p>
              <p className="text-base font-bold leading-5 text-textColor">
                ${price}
              </p>
            </div>
            <div className="flex items-center justify-between pt-4">
              <p className="text-base font-bold leading-5 text-textColor">
                Total Amount
              </p>
              <p className="text-base font-bold leading-5 text-textColor">
                ${price}
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-5">
          <h1 className="text-lg md:text-2xl text-textColor font-semibold leading-[120%] mb-6">
            Payment Information
          </h1>
          <StripePayment />
        </div>
      </div>
    </div>
  );
}
