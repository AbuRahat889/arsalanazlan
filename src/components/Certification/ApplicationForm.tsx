"use client";

import { FormInput } from "@/components/ui/Input";
import { CourseType, Locations } from "@/constants/dropdownInfo";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { CustomDropdown } from "../ui/dropdown";
import UploadMedia from "../ui/UploadMedia";

type FormValues = {
  fullName: string;
  jobTitle: string;
  certificationLevel: string;
  cpdHours: number;
  email: string;
  phone: string;
  country: string;
  profileImage: string;
  additionalNotes: string;
};

export default function ApplicationForm() {
  const [selectedLocation, setSelectedLocation] = useState<string | undefined>(
    undefined
  );
  const [selectedType, setSelectedType] = useState("All Types");

  const methods = useForm<FormValues>({
    defaultValues: {
      fullName: "",
      jobTitle: "",
      certificationLevel: "",
      cpdHours: 0,
      email: "",
      phone: "",
      country: "",
      profileImage: "",
      additionalNotes: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="space-y-5 mt-6 w-full p-3 md:p-6 shadow-md rounded-lg max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 w-full">
            <FormInput<FormValues>
              name="fullName"
              label="Full Name *"
              placeholder="Write here"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6 w-full">
            <FormInput<FormValues>
              name="jobTitle"
              label="Current Role / Job Title *"
              placeholder="Write here"
            />

            <div className="w-full">
              <label
                htmlFor="location"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Certification Level *
              </label>
              <CustomDropdown
                options={CourseType}
                value={selectedType}
                onChange={setSelectedType}
                placeholder="Select here"
                className="w-full bg-white"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6 w-full">
            <FormInput<FormValues>
              name="cpdHours"
              label="CPD Hours Completed *"
              placeholder="Write here"
            />
            <FormInput<FormValues>
              name="email"
              label="Email *"
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
            label={"Upload Evidence Documents *"}
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
            className="mt-4 px-4 py-2 bg-primaryColor text-white rounded"
          >
            Submit Application
          </button>
        </form>
      </FormProvider>

      <div className="bg-[#eff6ff] border border-[#BFDBFE] py-4 px-6 rounded-xl mt-7" >
        <p className="block mb-1 text-sm font-medium text-[#1E40AF]">
          Need Help?
        </p>
        <p className="block mb-1 text-sm font-medium text-[#1E40AF]">
          If you have questions about the application process or need
          assistance, please contact our support team at
          certifications@cpdawards.org.uk or call +1 (555) 123-4567.
        </p>
      </div>
    </div>
  );
}
