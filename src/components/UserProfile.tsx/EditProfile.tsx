"use client";

import { FormInput } from "@/components/ui/Input";
import { MoveLeft } from "lucide-react";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { CustomDropdown } from "../ui/dropdown";
import {
  Locations,
  ProfessionalSector,
  TimeZone,
} from "@/constants/dropdownInfo";

type FormValues = {
  firstName: string;
  lastName: string;
  jobTitle: string;
  location: string;
};

export default function EditProfile() {
  const [selectedLocation, setSelectedLocation] = React.useState<
    string | undefined
  >(undefined);
  const [timeZone, setTimeZone] = React.useState<string | undefined>(undefined);
  const [selectProfession, setSelectProfession] = React.useState<
    string | undefined
  >(undefined);
  const [selectSpecialization, setSelectSpecialization] = React.useState<
    string | undefined
  >(undefined);

  const methods = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="p-3 md:p-6 border border-[#E4E4E4] rounded-lg w-full">
      <div className="flex items-center gap-3 cursor-pointer">
        <MoveLeft />
        <h1 className="text-textColor text-2xl font-semibold leading-normal">
          Edit Profile Set Up
        </h1>
      </div>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="space-y-5 mt-6 w-full"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 w-full">
            <FormInput<FormValues>
              name="firstName"
              label="First Name"
              placeholder="Write here"
            />
            <FormInput<FormValues>
              name="lastName"
              label="Last Name"
              placeholder="Write here"
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
                htmlFor="location"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Time Zone
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
            <div className="w-full">
              <label
                htmlFor="location"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Professional Sector
              </label>
              <CustomDropdown
                options={ProfessionalSector}
                value={selectProfession}
                onChange={setSelectProfession}
                placeholder="Select here"
                className="w-full bg-white"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="location"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Specialization
              </label>
              <CustomDropdown
                options={ProfessionalSector}
                value={selectSpecialization}
                onChange={setSelectSpecialization}
                placeholder="Select here"
                className="w-full bg-white"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6 w-full">
            <FormInput<FormValues>
              name="jobTitle"
              label="Job Title/ Custom Profession"
              placeholder="Write here"
            />
            <FormInput<FormValues>
              name="location"
              label="Location"
              placeholder="Write here"
            />
          </div>
          <div>
            <label htmlFor="">Professional Summary (Optional)</label>
            <textarea
              className="w-full px-3 py-3  rounded-xl text-[#999] text-base font-medium outline-none border-2 border-[#CBD5E1]"
              placeholder="Write here"
            />
          </div>

          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-primaryColor text-white rounded"
          >
            Save Changes
          </button>
        </form>
      </FormProvider>
    </div>
  );
}
