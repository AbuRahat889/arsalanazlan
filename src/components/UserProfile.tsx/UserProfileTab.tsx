"use client";

import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import React from "react";
import { usePathname } from "next/navigation";

export default function SettingsNavbar() {
  const path = usePathname();

  const navigation = [
    {
      label: "Personal Info",
      route: "/user-profile/personal-info",
    },
    {
      label: "Account",
      route: "/user-profile/accounts",
    },
    {
      label: "Notificaitions",
      route: "/user-profile/notification",
    },
  ];
  return (
    <div className="border border-borderColor rounded-xl">
      <div className="">
        <div className="h-96 w-full md:w-80 p-6 rounded-xl">
          <ul className="ml-1">
            {navigation?.map((item) => (
              <li key={item.route}>
                <Link
                  href={item.route}
                  className={`flex items-center justify-between gap-3 px-4 py-4 text-lg mb-2 rounded-md transition-colors ${
                    path === item.route
                      ? "bg-primaryColor text-white"
                      : "text-[#30373D]  hover:bg-primaryColor hover:text-white"
                  }`}
                >
                  <span className="text-sm">{item.label}</span>
                  <span className="text-xl">
                    <MdArrowForwardIos />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
