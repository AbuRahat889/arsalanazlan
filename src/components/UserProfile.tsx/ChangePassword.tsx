"use client";

import { Eye, EyeOff, MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ChangePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isFocused, setIsFocused] = useState({
    oldPassword: false,
    password: false,
    confirmPassword: false,
  });

  const passwordValue = watch("password");
  const confirmPasswordValue = watch("confirmPassword");
  const oldPasswordValue = watch("oldPassword");

  const onSubmit = async (data: any) => {
    console.log(data);
    // try {
    //   const res = await loginFN(data);
    //   if (res?.data?.success) {

    //     toast.success("login successfully!");
    //     router.push("/");
    //   } else {
    //     const errorMessage =
    //       (res?.error &&
    //         "data" in res.error &&
    //         (res.error.data as any)?.message) ||
    //       (res?.error &&
    //         "message" in res.error &&
    //         (res.error as any).message) ||
    //       "An error occurred";
    //     toast.error(errorMessage);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div className="p-3 md:p-6 border border-[#E4E4E4] rounded-lg w-full">
      <div className="flex items-center gap-3 cursor-pointer">
        <MoveLeft onClick={() => router.back()} />
        <h1 className="text-textColor text-2xl font-semibold leading-normal">
          Security
        </h1>
      </div>
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full pt-6 space-y-6">
        {/* Password */}
        <div className="relative">
          <label
            htmlFor="password"
            className={`absolute left-3 px-1 transition-all bg-white text-base ${
              isFocused.oldPassword || oldPasswordValue
                ? "-top-3  text-[#acb5bb] px-8"
                : "top-3 text-gray-400"
            }`}
          >
            Old Password
          </label>
          <div className="w-full flex items-center justify-between border-2 border-[#dce4e8] rounded-[10px] p-3 outline-none">
            <input
              id="oldPassword"
              type={showPassword ? "text" : "password"}
              {...register("oldPassword", {
                required: "old Password is required",
              })}
              onFocus={() =>
                setIsFocused((prev) => ({ ...prev, oldPassword: true }))
              }
              onBlur={() =>
                setIsFocused((prev) => ({ ...prev, oldPassword: false }))
              }
              className=" text-[#747474] w-full outline-none"
            />
            <div
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </div>
          </div>

          {errors.oldPassword && (
            <p className="text-red-500 text-sm mt-2">
              {errors.oldPassword.message as string}
            </p>
          )}
        </div>
        <div className="relative">
          <label
            htmlFor="password"
            className={`absolute left-3 px-1 transition-all bg-white text-base ${
              isFocused.password || passwordValue
                ? "-top-3  text-[#acb5bb] px-8"
                : "top-3 text-gray-400"
            }`}
          >
            New Password
          </label>
          <div className="w-full flex items-center justify-between border-2 border-[#dce4e8] rounded-[10px] p-3 outline-none">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "password is required",
              })}
              onFocus={() =>
                setIsFocused((prev) => ({ ...prev, password: true }))
              }
              onBlur={() =>
                setIsFocused((prev) => ({ ...prev, password: false }))
              }
              className=" text-[#747474] w-full outline-none"
            />
            <div
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </div>
          </div>

          {errors.password && (
            <p className="text-red-500 text-sm mt-2">
              {errors.password.message as string}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <label
            htmlFor="confirmPassword"
            className={`absolute left-3 px-1 transition-all bg-white text-base ${
              isFocused.confirmPassword || confirmPasswordValue
                ? "-top-3  text-[#acb5bb] px-8"
                : "top-3 text-gray-400"
            }`}
          >
            Confirm Password
          </label>
          <div className="w-full flex items-center justify-between border-2 border-[#dce4e8] rounded-[10px] p-3 outline-none">
            <input
              id="confirmPassword"
              type={showPassword ? "text" : "password"}
              {...register("confirmPassword", {
                required: "confirm password is required",
                validate: (value) =>
                  value === passwordValue || "Passwords do not match",
              })}
              onFocus={() =>
                setIsFocused((prev) => ({
                  ...prev,
                  confirmPassword: true,
                }))
              }
              onBlur={() =>
                setIsFocused((prev) => ({
                  ...prev,
                  confirmPassword: false,
                }))
              }
              className=" text-[#747474] w-full outline-none"
            />
            <div
              onClick={() => setShowPassword((prev) => !prev)}
              className=" text-gray-500 cursor-pointer"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </div>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message as string}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-48 mt-6 font-bold text-base py-3 rounded-lg bg-primaryColor text-white"
        >
          Change Password
        </button>
      </form>
    </div>
  );
}
