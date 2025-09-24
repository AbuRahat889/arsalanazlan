"use client";

import { FormInput } from "@/components/ui/Input";
import { Locations } from "@/constants/dropdownInfo";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { CustomDropdown } from "../ui/dropdown";
import UploadMedia from "../ui/UploadMedia";

type FormValues = {
  caseStudyTitle: string;
  authorContributor: string;
  organizationName: string;
  objectives: string;
  methodology: string;
  keyFindings: string;
  impactBenefits: string;
  challengesSolutions: string;
  conclusion: string;
  professionalSector: string;

  webSite?: string;
  linkedInProfile?: string;
  facebookProfile?: string;
  twitterProfile?: string;
};

export default function CreateCaseStudies() {
  const [selectedLocation, setSelectedLocation] = useState<string | undefined>(
    undefined
  );

  const methods = useForm<FormValues>({
    defaultValues: {
      caseStudyTitle: "",
      authorContributor: "",
      organizationName: "",
      objectives: "",
      methodology: "",
      keyFindings: "",
      impactBenefits: "",
      challengesSolutions: "",
      conclusion: "",
      professionalSector: "",
      webSite: "",
      linkedInProfile: "",
      facebookProfile: "",
      twitterProfile: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
  };

  return (
    <div>
      <div>
        <p className="text-xl md:Ptext-3xl text-textColor font-bold leading-8 mb-2">
          Submit New Case Studies for Accreditation
        </p>
      </div>

      <div className="p-3 md:p-6 border border-[#E4E4E4] rounded-lg w-full mt-6">
        <div className="flex items-center gap-3 cursor-pointer">
          <p className="text-textColor text-base font-semibold leading-normal">
            Case Studies Information
          </p>
        </div>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="space-y-5 mt-6 w-full"
          >
            <div className="flex flex-col md:flex-row items-center gap-6 w-full">
              <FormInput<FormValues>
                name="caseStudyTitle"
                label="Case Study Title"
                placeholder="Enter full title of your case study"
              />
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6 w-full">
              <div className="w-full">
                <label
                  htmlFor="categorySector"
                  className="block mb-1 text-sm font-medium text-gray-700"
                >
                  Category / Sector
                </label>
                <CustomDropdown
                  options={Locations}
                  value={selectedLocation}
                  onChange={setSelectedLocation}
                  placeholder="Select here"
                  className="w-full bg-white"
                />
              </div>
              <FormInput<FormValues>
                name="authorContributor"
                label="Author / Contributor name"
                placeholder="Enter name of the author/contributor"
              />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 w-full">
              <FormInput<FormValues>
                name="organizationName"
                label="Organization / Institution Name"
                placeholder="Add up to Organization Name"
              />
              <FormInput<FormValues>
                name="objectives"
                label="Objectives purpose Of Case Studies"
                placeholder="Enter the objectives of the case study"
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

            <div className="flex flex-col md:flex-row items-center gap-6 w-full">
              <FormInput<FormValues>
                name="methodology"
                label="Methodology / Approach"
                placeholder="Enter the methodology or approach used"
              />
              <FormInput<FormValues>
                name="keyFindings"
                label="Key Findings / Outcomes"
                placeholder="Enter the key findings or outcomes"
              />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 w-full">
              <FormInput<FormValues>
                name="impactBenefits"
                label="Impact / Benefits"
                placeholder="Enter the impact or benefits"
              />
              <FormInput<FormValues>
                name="challengesSolutions"
                label="Challenges & Solutions"
                placeholder="Enter the challenges and solutions"
              />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 w-full">
              <FormInput<FormValues>
                name="conclusion"
                label="Conclusion / Recommendations"
                placeholder="Enter the conclusion or recommendations"
              />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 w-full">
              <FormInput<FormValues>
                name="professionalSector"
                label="Relevant Professional Sector"
                placeholder="Enter the relevant professional sector"
              />
              <FormInput<FormValues>
                name="webSite"
                label="web site (optional)"
                placeholder="Enter the web site link"
              />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 w-full">
              <FormInput<FormValues>
                name="facebookProfile"
                label="Facebook Profile (optional)"
                placeholder="Enter the applied Facebook profile link"
              />
              <FormInput<FormValues>
                name="linkedInProfile"
                label="LinkedIn Profile (optional)"
                placeholder="Enter the LinkedIn profile link"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <FormInput<FormValues>
                name="twitterProfile"
                label="Twitter Profile (optional)"
                placeholder="Enter the applied Twitter profile link"
              />
            </div>
            <div className="flex flex-col md:flex-row items-start gap-6 w-full">
              <div className="w-full">
                <label
                  htmlFor="categorySector"
                  className="block mb-1 text-sm font-medium text-gray-700"
                >
                  Upload Supporting Documents (PDF. Word, etc.) Optional
                </label>
                <UploadMedia name={"document"} />
              </div>
              <div className="w-full">
                <label
                  htmlFor="categorySector"
                  className="block mb-1 text-sm font-medium text-gray-700"
                >
                  Upload Images (JPG, PNG)
                </label>
                <UploadMedia name={"image"} />
              </div>
            </div>

            <button
              type="submit"
              className="mt-4 w-full px-4 py-2 bg-primaryColor text-white rounded"
            >
              Submit Now
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
