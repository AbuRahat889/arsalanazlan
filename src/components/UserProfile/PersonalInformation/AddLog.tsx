"use client";

import { Calendar } from "@/components/ui/calendar";
import { CustomDropdown } from "@/components/ui/dropdown";
import { FormInput } from "@/components/ui/Input";
import { ActivityType } from "@/constants/dropdownInfo";
import { ChevronDownIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { MediaButton } from "@/components/ui/icon";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import UploadMedia from "@/components/ui/UploadMedia";
import { useCreateUsersLogsMutation } from "@/redux/api/usersApi";
import { toast } from "sonner";
import Loader from "@/components/ui/Loader";

type FormValues = {
  title: string;
  organization: string;
  CPDHours: string;
  description: string;
  learningOutcomes: string;
  activityType: string;
  date: Date | undefined;
  documents: File[] | undefined;
};

export default function AddLog() {
  const [selectProfession, setSelectProfession] = useState<string | undefined>(
    undefined
  );

  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const router = useRouter();
  const methods = useForm<FormValues>({
    defaultValues: {
      title: "",
      organization: "",
      CPDHours: "",
      description: "",
      learningOutcomes: "",
      activityType: "",
      date: undefined,
      documents: undefined,
    },
  });

  // create activity log
  const [createLogFN, { isLoading }] = useCreateUsersLogsMutation(); // useCreateUsersLogsMutation();
  const onSubmit = async (data: FormValues) => {
    const formData = new FormData();

    try {
      const exampleData = {
        title: data.title,
        organization: data.organization,
        activityCategory: selectProfession,
        CPDHours: data.CPDHours,
        description: data.description,
        learningOutcomes: data.learningOutcomes,
        activityDate: date,
      };
      formData.append("data", JSON.stringify(exampleData));

      if (data.documents) {
        data.documents.forEach((file) => {
          formData.append("documents", file);
        });
      }

      const res = await createLogFN(formData).unwrap();
      console.log(res);
      if (res?.success) {
        toast.success("Log created successfully!");
        router.back();
      }
    } catch (error) {
      toast.error(
        (error as string) || "Failed to create log. Please try again."
      );
    }
  };

  return (
    <div className="p-3 md:p-6 border border-[#E4E4E4] rounded-lg w-full">
      <div className="flex items-center gap-3 cursor-pointer">
        <div onClick={() => router.back()}>
          <MediaButton type="back" />
        </div>

        <h1 className="text-textColor text-xl md:text-2xl font-semibold leading-normal">
          Log New CPD Activity
        </h1>
      </div>
      <p>Record a new continuing professional development activity</p>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="space-y-5 mt-6 w-full"
        >
          {/* Activity Information */}
          <div className="w-full bg-[#f8f8f8] p-6 border border-[#E4E4E4] rounded-lg space-y-6">
            <div className="">
              <p className="text-base md:text-xl text-textColor font-semibold leading-5 mb-2">
                Activity Information
              </p>
              <p className="text-sm md:text-base text-secondaryColor">
                Provide basic details about your CPD activity
              </p>
            </div>
            <FormInput<FormValues>
              name="title"
              label="Activity Title *"
              placeholder="e.g., Advanced Project Management Workshop"
              className="bg-[#f8f8f8]"
            />

            <div className="flex flex-col md:flex-row items-center gap-6 w-full">
              <FormInput<FormValues>
                name="organization"
                label="Provider/Organization *"
                placeholder="e.g., PMI Institute"
                className="bg-[#f8f8f8]"
              />
              <FormInput<FormValues>
                name="CPDHours"
                label="CPD Hours *"
                type="number"
                placeholder="e.g., 5 hours"
                className="bg-[#f8f8f8]"
              />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 w-full">
              <div className="w-full">
                <label
                  htmlFor="location"
                  className="block mb-1 text-sm font-medium text-gray-700"
                >
                  Activity Type *
                </label>
                <CustomDropdown
                  options={ActivityType}
                  value={selectProfession}
                  onChange={setSelectProfession}
                  placeholder="Select here"
                  className="w-full bg-[#f8f8f8]"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="date"
                  className="block mb-1 text-sm font-medium text-gray-700"
                >
                  Activity Date *
                </label>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <button
                      id="date"
                      className="w-48 justify-between font-normal bg-[#f8f8f8] flex items-center border border-borderColor rounded-md p-2"
                    >
                      {date ? date.toLocaleDateString() : "Select date"}
                      <ChevronDownIcon />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto overflow-hidden p-0 bg-[#f8f8f8]"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={date}
                      captionLayout="dropdown"
                      onSelect={(date) => {
                        setDate(date);
                        setOpen(false);
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
          {/* Activity Details */}
          <div className="w-full bg-[#f8f8f8] p-6 border border-[#E4E4E4] rounded-lg space-y-6">
            <div className="">
              <p className="text-base md:text-xl text-textColor font-semibold leading-5 mb-2">
                Activity Details
              </p>
              <p className="text-sm md:text-base text-secondaryColor">
                Provide comprehensive information about the learning experience
              </p>
            </div>
            <div>
              <label htmlFor="">Activity Description *</label>
              <textarea
                className="w-full px-3 py-3  rounded-xl text-[#999] text-base font-medium outline-none border-2 border-[#CBD5E1] bg-[#f8f8f8]"
                placeholder="Describe the content, topics covered, and key takeaways from this activity..."
                rows={4}
                {...methods.register("description", { required: true })}
              />
              <p className="text-sm text-[#555555] font-normal leading-normal">
                Provide a detailed description of what the activity covered and
                what you learned.
              </p>
            </div>
            <div>
              <label htmlFor="" className="">
                Learning Outcomes *
              </label>
              <textarea
                className="w-full px-3 py-3  rounded-xl text-[#999] text-base font-medium outline-none border-2 border-[#CBD5E1] bg-[#f8f8f8]"
                placeholder="What did you learn? How will you apply this knowledge in your professional practice?"
                rows={4}
                {...methods.register("learningOutcomes", { required: true })}
              />
            </div>
          </div>
          {/*  Supporting Evidence */}
          <div className="w-full bg-[#f8f8f8] p-6 border border-[#E4E4E4] rounded-lg space-y-6">
            <div className="">
              <p className="text-base md:text-xl text-textColor font-semibold leading-5 mb-2">
                Supporting Evidence
              </p>
              <p className="text-sm md:text-base text-secondaryColor">
                Upload certificates, attendance records, or other supporting
                documents (PDF, JPG, PNG, DOC - Max 10MB each)
              </p>
            </div>

            <div className="py-5">
              <UploadMedia name={"documents"} />
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-primaryColor text-white rounded w-full"
          >
            {isLoading ? <Loader /> : "Save Activity"}
          </button>
        </form>
      </FormProvider>
    </div>
  );
}
