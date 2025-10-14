"use client";

import { FormInput } from "@/components/ui/Input";
import { Locations } from "@/constants/dropdownInfo";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { CustomDropdown } from "../ui/dropdown";
import UploadMedia from "../ui/UploadMedia";
import { MediaButton } from "../ui/icon";
import Image from "next/image";
import { CameraIcon } from "lucide-react";
import porfileImage from "@/assets/profile.jpg";
import {
  useGetUserByIdQuery,
  useUpdateAccreditationProfileMutation,
} from "@/redux/api/usersApi";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import ProfileFormSkeleton from "../Skletone/EditProfileSkletone";

type FormValues = {
  organizationName: string;
  contactPerson: string;
  website: string;
  phoneNumber: string;
  location: string;
  profileImage: File | null;
  description?: string;
};

export default function EditAccreditedprofile() {
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | undefined>(
    undefined
  );
  const pathName = usePathname();
  const router = useRouter();

  const methods = useForm<FormValues>({
    defaultValues: {
      organizationName: "",
      contactPerson: "",
      website: "",
      phoneNumber: "",
      location: "",
      profileImage: null,
      description: "",
    },
  });

  //get user data
  const userInfo = useSelector((state: RootState) => state.auth.user);
  const { data, isLoading: LoadingUser } = useGetUserByIdQuery(userInfo?.id, {
    skip: !userInfo?.id,
  });
  //set default values to the form
  useEffect(() => {
    //Only run when user data is available
    if (data?.data?.profile && pathName !== "/complete-profile") {
      const profile = data.data.profile;

      methods.reset({
        organizationName: profile.organizationName || "",
        contactPerson: profile.contactPerson || "",
        website: profile.website || "",
        phoneNumber: profile.phoneNumber || "",
        location: profile.country || "",
        description: profile.description || "",
      });

      // set other related states
      setSelectedLocation(profile.country || undefined);

      if (data.data.profileImage) {
        setPreview(data.data.profileImage);
      }
    }
  }, [data, pathName, methods]);

  //update accredited profile
  const [updateProfileFN, { isLoading }] =
    useUpdateAccreditationProfileMutation();
  const formData = new FormData();
  const onSubmit = async (data: FormValues) => {
    console.log(data);
    const profileInfo = {
      organizationName: data.organizationName,
      contactPerson: data.contactPerson,
      phoneNumber: data.phoneNumber,
      country: selectedLocation,
      website: data.website,
      description: data.description,
    };
    formData.append("data", JSON.stringify(profileInfo));
    if (data.profileImage) {
      formData.append("profileImage", data.profileImage);
    }
    try {
      const res = await updateProfileFN(formData).unwrap();
      console.log(res);
      if (res?.success) {
        toast.success(res?.message || "Profile updated successfully");
        router.back();
      }
    } catch (error) {
      toast.error((error as string) || "Failed to update profile");
    }
  };

  if (LoadingUser) {
    return <ProfileFormSkeleton />;
  }
  return (
    <div className="p-3 md:p-6 shadow-md rounded-lg ">
      {pathName === "/complete-profile" && (
        <div className="">
          <h1 className="text-textColor text-2xl font-semibold leading-normal">
            Organisation Details
          </h1>
        </div>
      )}
      {pathName !== "/complete-profile" && (
        <div className="flex items-center gap-3 cursor-pointer">
          <div onClick={() => router.back()}>
            <MediaButton type="back" />
          </div>
          <h1 className="text-textColor text-2xl font-semibold leading-normal">
            Provider Profile Setup
          </h1>
        </div>
      )}
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="space-y-5 mt-6 w-full "
        >
          {/* Profile Image Upload */}
          {pathName !== "/complete-profile" && (
            <div className="py-5">
              <Controller
                name="profileImage"
                control={methods.control}
                render={({ field }) => (
                  <>
                    <label
                      htmlFor="profileImage"
                      className="cursor-pointer flex flex-col"
                    >
                      <div className="relative inline-block">
                        <Image
                          src={preview ? preview : porfileImage}
                          alt="Profile Preview"
                          height={100}
                          width={100}
                          className="w-24 h-24 rounded-full object-cover border-2 border-primaryColor"
                        />
                        <div className="absolute bottom-1 left-16 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                          <CameraIcon className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </label>
                    <input
                      id="profileImage"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0] || null;
                        field.onChange(file);
                        if (file) {
                          setPreview(URL.createObjectURL(file));
                        } else {
                          setPreview(null);
                        }
                      }}
                    />
                  </>
                )}
              />
            </div>
          )}

          <div className="flex flex-col md:flex-row items-center gap-6 w-full">
            <FormInput<FormValues>
              name="organizationName"
              label="Organization Name"
              placeholder="Write here"
            />
            <FormInput<FormValues>
              name="contactPerson"
              label="Contact Person"
              placeholder="Write here"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 w-full">
            <FormInput<FormValues>
              name="phoneNumber"
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
          <div className="flex flex-col md:flex-row items-center gap-6 w-full">
            <FormInput<FormValues>
              name="website"
              label="Website URL"
              placeholder="Write here"
            />
          </div>
          {pathName === "/complete-profile" && (
            <UploadMedia
              name={"profileImage"}
              label={"Organization Logo (Optional)"}
            />
          )}

          <div>
            <label htmlFor="">Organization Description</label>
            <textarea
              className="w-full px-3 py-3  rounded-xl text-[#999] text-base font-medium outline-none border-2 border-[#CBD5E1]"
              placeholder="Write here"
              rows={4}
              {...methods.register("description")}
            />
          </div>

          <button
            type="submit"
            className="mt-4 px-4 py-2 w-full bg-primaryColor text-white rounded"
          >
            {isLoading
              ? "Updating..."
              : pathName === "/complete-profile"
              ? "Complete Profile"
              : "Save Changes"}
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
