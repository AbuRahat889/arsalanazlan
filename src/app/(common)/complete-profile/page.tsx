"use client";

import Heading from "@/components/ui/heading";
import { MediaButton } from "@/components/ui/icon";
import EditAccreditedprofile from "@/components/UserProfile/EditAccreditedprofile";
import EditProfile from "@/components/UserProfile/EditProfile";
import { useGetMeQuery } from "@/redux/api/auth";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const { data } = useGetMeQuery("");
  return (
    <div className="max-w-5xl mx-auto py-10">
      <div className="flex items-center gap-3 cursor-pointer">
        <div onClick={() => router.back()}>
          <MediaButton type="back" />
        </div>
        <h1 className="text-secondaryColor text-xl font-semibold leading-normal">
          Back to Pricing
        </h1>
      </div>
      <div className="bg-[#fdf4e7] w-16 h-16 flex items-center justify-center rounded-full mb-6 mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
        >
          <path
            d="M20.1814 10.5907C20.1814 7.31248 17.5239 4.65498 14.2457 4.65498C10.9676 4.65498 8.31006 7.31248 8.31006 10.5907C8.31006 13.8688 10.9676 16.5263 14.2457 16.5263C17.5239 16.5263 20.1814 13.8688 20.1814 10.5907Z"
            stroke="#ED900C"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.5554 24.8363C22.5554 20.2468 18.835 16.5263 14.2455 16.5263C9.65604 16.5263 5.93555 20.2468 5.93555 24.8363"
            stroke="#ED900C"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <Heading
        title="Complete Your Profile"
        subtitle="Help us personalize your CPD experience"
      />
      {data?.data?.role === "USER_PROFILE" ? (
        <div className="mt-16">
          <EditProfile />
        </div>
      ) : (
        <div className="mt-16">
          <EditAccreditedprofile />
        </div>
      )}
    </div>
  );
}
