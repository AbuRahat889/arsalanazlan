"use client";

import { FormInput } from "@/components/ui/Input";
import { CourseType } from "@/constants/dropdownInfo";
import {
  useApplyCertificateThroughActivityMutation,
  useApplyForCertificateMutation,
} from "@/redux/api/certificateApi";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
import { CustomDropdown } from "../ui/dropdown";
import Modal from "../ui/modal";
import UploadMedia from "../ui/UploadMedia";
import ApplicationModal from "./ApplicationModal";

type FormValues = {
  fullName: string;
  jobTitle: string;
  certificationLevel: string;
  CPDHours: number;
  phoneNumber: string;
  documents: File[] | undefined;
  notes: string;
};
type Params = {
  hours?: number;
  setApplicationModal?: (value: boolean) => void;
};

export default function ApplicationForm({
  hours,
  setApplicationModal,
}: Params) {
  const [selectedType, setSelectedType] = useState<string | undefined>(
    undefined
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathName = usePathname();
  const methods = useForm<FormValues>({
    defaultValues: {
      fullName: "",
      jobTitle: "",
      certificationLevel: "",
      CPDHours: 0,
      phoneNumber: "",
      documents: undefined,
      notes: "",
    },
  });

  //set cpd hours if user is applying from personal info page
  useEffect(() => {
    if (pathName === "/user-profile/personal-info") {
      methods.setValue("CPDHours", hours ?? 0);
    }
  }, [hours, methods, pathName]);

  //apply for certificate mutation hook
  const [applyForCertificateFN, { isLoading }] =
    useApplyForCertificateMutation();

  //apply for certificate through activity log mutation hook
  const [applyForLog, { isLoading: isLogLoading }] =
    useApplyCertificateThroughActivityMutation();

  const onSubmit = async (data: FormValues) => {
    const formData = new FormData();
    try {
      const certificateInfo = {
        fullName: data.fullName,
        jobTitle: data.jobTitle,
        certificationLevel: selectedType,
        CPDHours: data.CPDHours,
        phoneNumber: data.phoneNumber,
        notes: data.notes,
      };
      if (pathName === "/user-profile/personal-info") {
        const res = await applyForLog(certificateInfo).unwrap();
        console.log(res, "res log");
        if (res?.success) {
          setApplicationModal?.(false);
          toast.success(
            res?.message || "Certificate application submitted successfully"
          );
          methods.reset();
        }
      } else {
        //certificate application from certification page with document upload
        formData.append("data", JSON.stringify(certificateInfo));
        data.documents?.forEach((file) => formData.append("documents", file));
        const res = await applyForCertificateFN(formData).unwrap();
        if (res?.success) {
          setIsModalOpen(true);
          methods.reset();
        }
      }
    } catch (error) {
      toast.error(error as string);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      {pathName === "/user-profile/personal-info" && (
        <p className="text-xl font-semibold text-secondaryColor text-center">
          Certification Application
        </p>
      )}
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="space-y-5 mt-6 w-full p-3 md:p-6 shadow-md rounded-lg "
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
              name="CPDHours"
              label="CPD Hours Completed *"
              type="number"
              placeholder="Write here"
              readOnly={pathName === "/user-profile/personal-info"}
            />
            <FormInput<FormValues>
              name="phoneNumber"
              label="Phone Number *"
              placeholder="Write here"
            />
          </div>

          {pathName !== "/user-profile/personal-info" && (
            <UploadMedia
              name={"documents"}
              label={"Upload Evidence Documents *"}
            />
          )}
          <div>
            <label htmlFor="">Additional Notes</label>
            <textarea
              className="w-full px-3 py-3  rounded-xl text-[#999] text-base font-medium outline-none border-2 border-[#CBD5E1]"
              placeholder="Any additional information you'd like to share..."
              rows={4}
              {...methods.register("notes")}
            />
          </div>

          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-primaryColor text-white rounded"
          >
            {isLoading || isLogLoading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </FormProvider>

      {pathName !== "/user-profile/personal-info" && (
        <div className="bg-[#eff6ff] border border-[#BFDBFE] py-4 px-6 rounded-xl mt-7">
          <p className="block mb-1 text-sm font-medium text-[#1E40AF]">
            Need Help?
          </p>
          <p className="block mb-1 text-sm font-medium text-[#1E40AF]">
            If you have questions about the application process or need
            assistance, please contact our support team at
            certifications@cpdawards.org.uk or call +1 (555) 123-4567.
          </p>
        </div>
      )}

      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <ApplicationModal setIsModalOpen={setIsModalOpen} />
      </Modal>
    </div>
  );
}
