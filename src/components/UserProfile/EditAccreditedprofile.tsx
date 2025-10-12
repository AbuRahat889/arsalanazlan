"use client";

import { FormInput } from "@/components/ui/Input";
import { Locations } from "@/constants/dropdownInfo";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { CustomDropdown } from "../ui/dropdown";
import UploadMedia from "../ui/UploadMedia";

type FormValues = {
  organizationName: string;
  contactPerson: string;
  email: string;
  websiteUrl: string;
  phone: string;
  location: string;
  profileImage: File | null;
};

export default function EditAccreditedprofile() {
  const [selectedLocation, setSelectedLocation] = useState<string | undefined>(
    undefined
  );
  const pathName = usePathname();

  const methods = useForm<FormValues>({
    defaultValues: {
      organizationName: "",
      contactPerson: "",
      email: "",
      websiteUrl: "",
      phone: "",
      location: "",
      profileImage: null,
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="p-3 md:p-6 shadow-md rounded-lg ">
      {pathName === "/complete-profile" && (
        <div className="">
          <h1 className="text-textColor text-2xl font-semibold leading-normal">
            Organisation Details
          </h1>
        </div>
      )}
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="space-y-5 mt-6 w-full "
        >
          <div className="flex flex-col md:flex-row items-center gap-6 w-full">
            <FormInput<FormValues>
              name="organizationName"
              label="Organization Name"
              placeholder="Your Training Company Ltd"
            />
            <FormInput<FormValues>
              name="contactPerson"
              label="Contact Person"
              placeholder="John Smith"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6 w-full">
            <FormInput<FormValues>
              name="email"
              label="Email Address"
              placeholder="john@company.com"
            />

            <FormInput<FormValues>
              name="websiteUrl"
              label="Website"
              placeholder="Write here"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 w-full">
            <FormInput<FormValues>
              name="phone"
              label="Phone Number *"
              placeholder="Write here"
            />

            <div className="w-full">
              <label
                htmlFor="location"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Country *
              </label>
              <CustomDropdown
                options={Locations}
                value={selectedLocation}
                onChange={setSelectedLocation}
                placeholder="Country"
                className="w-full bg-white"
              />
            </div>
          </div>
          <UploadMedia
            name={"profileImage"}
            label={"Organization Logo (Optional)"}
          />
          <div>
            <label htmlFor="">Additional Notes</label>
            <textarea
              className="w-full px-3 py-3  rounded-xl text-[#999] text-base font-medium outline-none border-2 border-[#CBD5E1]"
              placeholder="Any additional information you'd like to share..."
            />
          </div>

          <button
            type="submit"
            className="mt-4 px-4 py-2 w-full bg-primaryColor text-white rounded"
          >
            Go to Next Step
          </button>
        </form>
      </FormProvider>

      <p className="block mb-1 text-sm font-medium text-textColor mt-4 max-w-2xl mx-auto text-center">
        After payment, you&apos;ll receive access to your dashboard where you
        can complete your accreditation applications.
      </p>
    </div>
  );
}
