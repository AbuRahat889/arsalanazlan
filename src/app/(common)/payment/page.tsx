import PaymentDetails from "@/components/Payment/PaymentDetails";
import Banner from "@/components/ui/Banner";
import React from "react";

export default function page() {
  return (
    <div>
      <Banner
        title="Payment"
        colorTitle="Details"
        discription="Securely complete your booking with our easy payment options."
      />
      <PaymentDetails />
    </div>
  );
}
