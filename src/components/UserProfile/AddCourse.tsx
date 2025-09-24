"use client";

import { FormInput } from "@/components/ui/Input";
import { Locations, TimeZone } from "@/constants/dropdownInfo";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { CustomDropdown } from "../ui/dropdown";
import { Badge } from "../ui/badge";

type FormValues = {
  courseTitle: string;
  specialties: string;
  webSite?: string;
  linkedInProfile?: string;
  facebookProfile?: string;
  twitterProfile?: string;
  learnersTrained: string;
};

export default function AddCourse() {
  const [selectedLocation, setSelectedLocation] = useState<string | undefined>(
    undefined
  );
  const [timeZone, setTimeZone] = React.useState<string | undefined>(undefined);

  const methods = useForm<FormValues>({
    defaultValues: {
      courseTitle: "",
      specialties: "",
      webSite: "",
      linkedInProfile: "",
      facebookProfile: "",
      twitterProfile: "",
      learnersTrained: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
  };

  return (
    <div>
      <div>
        <p className="text-xl md:Ptext-3xl text-textColor font-bold leading-8 mb-2">
          Submit New Training for Accreditation
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-base text-secondaryColor leading-5">
            Complete the form below to apply for{" "}
          </p>
          <Badge variant={"outline"}>SCPD</Badge>
          <Badge variant={"outline"}>FCPD</Badge>
          <Badge variant={"outline"}>ACPD</Badge>
          <p className="text-base text-secondaryColor leading-5">
            accreditation for this training programme.
          </p>
        </div>
      </div>

      <div className="p-3 md:p-6 border border-[#E4E4E4] rounded-lg w-full mt-6">
        <div className="flex items-center gap-3 cursor-pointer">
          <p className="text-textColor text-base font-semibold leading-normal">
            Course Information
          </p>
        </div>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="space-y-5 mt-6 w-full"
          >
            <div className="flex flex-col md:flex-row items-center gap-6 w-full">
              <FormInput<FormValues>
                name="courseTitle"
                label="Course Title"
                placeholder="Enter full title of your traning program"
              />
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6 w-full">
              <div className="w-full">
                <label
                  htmlFor="location"
                  className="block mb-1 text-sm font-medium text-gray-700"
                >
                  Location
                </label>
                <CustomDropdown
                  options={Locations}
                  value={selectedLocation}
                  onChange={setSelectedLocation}
                  placeholder="Locations"
                  className="w-full bg-white"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="accreditationLevel"
                  className="block mb-1 text-sm font-medium text-gray-700"
                >
                  Accreditation Level
                </label>
                <CustomDropdown
                  options={TimeZone}
                  value={timeZone}
                  onChange={setTimeZone}
                  placeholder="Select here"
                  className="w-full bg-white"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 w-full">
              <FormInput<FormValues>
                name="specialties"
                label="Specialties"
                placeholder="Add up to Specialties to help people discover your project "
              />
              <FormInput<FormValues>
                name="webSite"
                label="web site (optional)"
                placeholder="Enter the applied web site link"
              />
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6 w-full">
              <FormInput<FormValues>
                name="linkedInProfile"
                label="LinkedIn Profile (optional)"
                placeholder="Enter the applied LinkedIn profile link"
              />
              <FormInput<FormValues>
                name="facebookProfile"
                label="Facebook Profile (optional)"
                placeholder="Enter the applied Facebook profile link"
              />
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6 w-full">
              <FormInput<FormValues>
                name="twitterProfile"
                label="Twitter Profile (optional)"
                placeholder="Enter the applied Twitter profile link"
              />
              <FormInput<FormValues>
                name="learnersTrained"
                label="learners trained"
                placeholder="Enter the number of learners trained"
              />
            </div>

            <div>
              <label htmlFor="">Purpose of the Training</label>
              <textarea
                className="w-full px-3 py-3  rounded-xl text-[#999] text-base font-medium outline-none border-2 border-[#CBD5E1]"
                placeholder="Describe the main objectives and goals of this training programme..."
                rows={5}
              />
            </div>

            <button
              type="submit"
              className="mt-4 w-full px-4 py-2 bg-primaryColor text-white rounded"
            >
              Add Course
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
