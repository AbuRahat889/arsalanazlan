"use client";

import Image from "next/image";
import logo from "@/assets/logo.svg";
import profileImage from "@/assets/profile.jpg";
import { useGetMeQuery } from "@/redux/api/auth";

export default function Navbar() {
  const { data } = useGetMeQuery("");
  return (
    <nav className={`h-24 flex px-2 md:px-5  bg-white w-full`}>
      <div className="flex justify-between w-[95%] mx-auto">
        <div className="hidden md:flex items-center gap-3 ">
          <Image
            src={logo}
            alt="Logo"
            className="object-contain h-20"
            priority
          />
        </div>
        <div></div>

        <div className=" flex items-center gap-2">
          <Image
            src={data?.data?.profileImage || profileImage}
            alt="profile image"
            className="h-16 w-16 rounded-full"
            priority
          />
          <div>
            <h1>
              {data?.data?.firstName} {data?.data?.lastName}{" "}
            </h1>
            <h1>{data?.data?.email}</h1>
          </div>
        </div>
      </div>
    </nav>
  );
}
