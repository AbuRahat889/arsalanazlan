"use client";

import image from "@/assets/loginImage.png";
import Loader from "@/components/ui/Loader";
import { useUsersLoginMutation } from "@/redux/api/auth";
import { setUser } from "@/redux/slices/authSlice";
import Cookies from "js-cookie";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
const ForgotPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isFocused, setIsFocused] = useState({
    email: false,
    password: false,
  });

  const emailValue = watch("email");
  const passwordValue = watch("password");

  const [loginFN, { isLoading }] = useUsersLoginMutation();

  const onSubmit = async (data: any) => {
    try {
      const res = await loginFN(data);
      console.log(res?.data?.data?.accessToken);
      if (res?.data?.success) {
        Cookies.set("token", res?.data?.data?.accessToken);
        dispatch(
          setUser({
            token: res?.data?.data?.accessToken,
            user: res?.data?.data,
            isAuthenticated: true,
          })
        );
        toast.success(res?.data?.message || "Login successful");
        router.push("/");
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
          <div className="text-start  flex flex-col items-center justify-between ">
            <div>
              <h2 className="text-2xl md:text-4xl text-textColor font-semibold leading-[110%] w-full text-center mb-4">
                Welcome back
              </h2>

              <p className="text-sm md:text-lg text-secondaryColor font-normal leading-[150%] text-center mb-6">
                Welcome back! Continue where you left off and keep building your
                skills.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full pt-6 space-y-6"
            >
              {/* Email */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className={`absolute left-3 px-1 transition-all bg-white text-base ${
                    isFocused.email || emailValue
                      ? "-top-3  text-[#acb5bb] px-8"
                      : "top-3 text-gray-400"
                  }`}
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", { required: "email is required" })}
                  onFocus={() =>
                    setIsFocused((prev) => ({ ...prev, email: true }))
                  }
                  onBlur={() =>
                    setIsFocused((prev) => ({ ...prev, email: false }))
                  }
                  className="w-full border-2 border-[#dce4e8] rounded-[10px] p-3 outline-none text-[#747474]"
                  placeholder=" "
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.email.message as string}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="relative">
                <label
                  htmlFor="password"
                  className={`absolute left-3 px-1 transition-all bg-white text-base ${
                    isFocused.password || passwordValue
                      ? "-top-3  text-[#acb5bb] px-8"
                      : "top-3 text-gray-400"
                  }`}
                >
                  Password
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

              <Link
                href="/auth/forgot-password"
                className="text-sm md:text-base  text-primaryColor hover:underline font-medium my-2"
              >
                Forgot password?
              </Link>

              <button
                type="submit"
                className="w-full mt-6 font-bold text-base py-3 rounded-lg bg-primaryColor text-white"
              >
                {isLoading ? <Loader /> : "Login"}
              </button>
            </form>

            <p className="text-textColor text-base font-normal leading-6 mt-6">
              Don’t have an account?{" "}
              <Link
                href={"/auth/sign-up"}
                className="hover:text-primaryColor hover:underline transition-colors duration-300 ease-in-out"
              >
                Sign up for free
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
