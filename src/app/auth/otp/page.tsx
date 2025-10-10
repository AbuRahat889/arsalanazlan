"use client";

import image from "@/assets/loginImage.png";
import Loader from "@/components/ui/Loader";
import {
  useUsersVerifyOtpMutation,
  useUsersVerifyOtpResendMutation,
} from "@/redux/api/auth";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { toast } from "sonner";

const ForgotPassword = () => {
  const router = useRouter();
  const { handleSubmit } = useForm(); // ✅ FIXED

  const params = useSearchParams();
  const purpose = params.get("purpose");
  const email = params.get("email");

  const [autoOtp, setAutoOtp] = useState("");
  const navigationInputs = useRef<any[]>([]);

  const length = 6;

  const onChange = (value: string) => {
    setAutoOtp(value);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    const newOtp = [
      ...navigationInputs.current.map((input) => input?.value || ""),
    ];

    // Ensure only a single digit is entered per box
    if (/^[0-9]$/.test(value) && value.length === 1) {
      newOtp[index] = value;
      onChange(newOtp.join(""));

      if (index < length - 1) {
        navigationInputs.current[index + 1]?.focus();
      }
    } else if (value === "") {
      newOtp[index] = "";
      onChange(newOtp.join(""));
    } else {
      e.target.value = value.slice(0, 1);
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData("text")
      .replace(/[^0-9]/g, "")
      .slice(0, length);
    const newOtp = [
      ...navigationInputs.current.map((input) => input?.value || ""),
    ];

    for (let i = 0; i < pastedData.length && i < length; i++) {
      newOtp[i] = pastedData[i];
      if (navigationInputs.current[i]) {
        navigationInputs.current[i].value = pastedData[i];
      }
    }
    onChange(newOtp.join(""));

    const focusIndex = Math.min(pastedData.length, length - 1);
    navigationInputs.current[focusIndex]?.focus();
  };

  const handleKeydown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (
      e.key === "Backspace" &&
      !navigationInputs.current[index]?.value &&
      index > 0
    ) {
      navigationInputs.current[index - 1]?.focus();
    }
  };

  const [verifyOtpFN, { isLoading }] = useUsersVerifyOtpMutation();

  const onSubmit = async () => {
    try {
      const verificationInfo = {
        email: email,
        code: autoOtp,
        purpose: purpose,
      };
      const res = await verifyOtpFN(verificationInfo);
      if (res?.data?.success) {
        localStorage.setItem(
          "resetPasswordToken",
          res?.data?.data?.resetPasswordToken
        );

        toast.success(res?.data?.message || "Account verified successfully");
        if (purpose === "PASSWORD_RESET") {
          router.push("/auth/new-password");
        } else {
          router.push("/auth/login");
        }
      } else {
        const errorMessage =
          (res?.error &&
            "data" in res.error &&
            (res.error.data as any)?.message) ||
          (res?.error &&
            "message" in res.error &&
            (res.error as any).message) ||
          "An error occurred";
        toast.error(errorMessage);
      }
    } catch (error) {
      toast.error(
        error ? String(error) : "An error occurred. Please try again."
      );
    }
  };

  //handle resend otp
  const [resendOtpFN, { isLoading: isResending }] =
    useUsersVerifyOtpResendMutation();
  const handleResendOtp = async () => {
    try {
      const resendInfo = {
        email: email,
        purpose: purpose,
      };
      const res = await resendOtpFN(resendInfo);
      if (res?.data?.success) {
        toast.success("OTP resent successfully!");
      } else {
        toast.error("Failed to resend OTP. Please try again.");
      }
    } catch (error) {
      toast.error(
        error ? String(error) : "An error occurred. Please try again."
      );
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full ">
      {/* Left Section */}
      <div className="hidden md:block w-full ">
        <Image
          src={image}
          alt="Fishing Trip"
          className="h-full w-full lg:h-[100vh] object-fill"
          height={600}
          width={600}
        />
      </div>

      {/* Right Section */}
      <div className="w-full h-screen flex items-center justify-center px-5 lg:px-0 ">
        <div className="w-[576px] mx-auto shadow-custom-shadow rounded-3xl px-5 lg:px-9 py-12">
          <div
            onClick={() => router.back()}
            className="flex items-center gap-1 cursor-pointer"
          >
            <HiArrowNarrowLeft />
            <p>back</p>
          </div>
          <div className="text-start flex flex-col items-center justify-between ">
            <div>
              <h2 className="text-2xl md:text-4xl text-textColor font-semibold leading-[110%] w-full text-center mb-4">
                Enter Code
              </h2>

              <p className="text-sm md:text-lg text-secondaryColor font-normal leading-[150%] text-center mb-6">
                We’ve sent a code to {email}
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full pt-5 space-y-4"
            >
              <div className="flex justify-center gap-3">
                {Array.from({ length }).map((_, index) => (
                  <div
                    key={index}
                    className="border-2 border-[#222222] rounded-md h-16 w-16  flex items-center justify-center"
                  >
                    <input
                      ref={(el) => {
                        navigationInputs.current[index] = el;
                      }}
                      //   inputMode="numeric"
                      className="w-3 outline-none "
                      placeholder="0"
                      onWheel={(e) => (e.target as HTMLInputElement).blur()}
                      onChange={(e) => handleInputChange(e, index)}
                      onKeyDown={(e) => handleKeydown(e, index)}
                      onPaste={(e) => handlePaste(e)}
                      //   type="number"
                    />
                  </div>
                ))}
              </div>
              <p className="text-textColor text-base font-normal leading-6 mt-6 text-center">
                Didn’t get a code?{" "}
                <span
                  onClick={handleResendOtp}
                  className="hover:text-primaryColor font-bold hover:underline transition-colors duration-300 ease-in-out cursor-pointer "
                >
                  {isResending ? "Resending..." : "Click to resend"}
                </span>
              </p>

              <button
                type="submit"
                className="w-full mt-6 font-bold text-base py-3 rounded-lg bg-primaryColor text-white"
              >
                {isLoading ? <Loader /> : "Verify account"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
