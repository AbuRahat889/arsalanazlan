import ContactForm from "@/components/ContactUs/ContactForm";
import ContactInfo from "@/components/ContactUs/ContactInfo";
import Banner from "@/components/ui/Banner";
import React from "react";

export default function page() {
  return (
    <div>
      <Banner
        title="Contact"
        colorTitle="Us"
        discription="Have Questions? Let's Connect"
      />
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12  ">
        <div className="col-span-5 mb-5 lg:mb-0">
          <ContactInfo />
        </div>
        <div className="col-span-7">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
