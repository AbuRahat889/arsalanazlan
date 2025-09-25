"use client";

import logo from "@/assets/logo.svg";
import profileImage from "@/assets/profile.jpg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ✅ usePathname
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MediaButton } from "../ui/icon";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const pathname = usePathname(); // ✅ current route

  const menuItems = [
    {
      label: "Certification",
      href: "/certification",
      activeFor: ["/certification/price"],
    },
    {
      label: "Accreditation",
      href: "/accreditation",
      activeFor: ["/course-price", "/case-studies"],
    },
    {
      label: "Verification",
      href: "/verification",
      activeFor: ["/professional-directory"],
    },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact-us" },
  ];

  return (
    <div className="w-full bg-white border-b">
      <nav className="flex items-center justify-between container mx-auto py-4 px-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            height={55}
            width={55}
            className="w-[55px]"
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="items-center gap-6 text-[1rem] text-[#424242] md:flex hidden">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`relative cursor-pointer capitalize transition-all duration-300 
                before:absolute before:bottom-[-2px] before:left-0 before:h-[2px] before:rounded-full before:transition-all before:duration-300
                ${
                  pathname === item.href || item.activeFor?.includes(pathname)
                    ? "text-primaryColor before:w-full before:bg-primaryColor"
                    : "hover:text-primaryColor before:w-0 hover:before:w-full before:bg-primaryColor"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className=" flex items-center gap-8">
          <div className="">
            <MediaButton type="notification" />
          </div>
          <Link
            href={"/user-profile/personal-info"}
            className="bg-primaryColor rounded-full p-[1px]"
          >
            <Image
              src={profileImage}
              alt="Logo"
              className="h-12 w-12 rounded-full "
              priority
            />
          </Link>
        </div>
        {/* Action Buttons + Mobile Menu Toggle */}
        {/* <div className="items-center gap-3 flex">
          <Link href="/auth/login">
            <MovingButton
              borderRadius="1.75rem"
              className=" text-sm rounded-full text-primaryColor px-2 py-2 md:text-base font-normal "
            >
              {" "}
              Log in
            </MovingButton>
          </Link>
          <Button
            href="/auth/sign-up"
            variant="default"
            className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize hover:text-primaryColor transition-all duration-300 sm:flex hidden"
          >
            {" "}
            Register
          </Button>

          <CiMenuFries
            className="text-[1.8rem] text-[#424242] cursor-pointer md:hidden flex"
            onClick={() => setMobileSidebarOpen(true)}
          />
        </div> */}
        <CiMenuFries
          className="text-[1.8rem] text-[#424242] cursor-pointer md:hidden flex"
          onClick={() => setMobileSidebarOpen(true)}
        />
        {/* Mobile Sidebar (Drawer) */}
        <aside
          className={`fixed top-0 right-0 h-full bg-white dark:bg-slate-700 shadow-lg transform transition-transform duration-300 ease-in-out 
          ${mobileSidebarOpen ? "translate-x-0" : "translate-x-full"} 
          w-3/4 sm:w-1/2 z-[99999] p-6`}
        >
          {/* Close button */}
          <button
            onClick={() => setMobileSidebarOpen(false)}
            className="text-red-600 dark:text-[#abc2d3] hover:text-primaryColor transition py-5"
          >
            <IoMdClose className="size-5"/>
          </button>

          {/* Mobile Links */}
          <ul className="flex flex-col gap-4 text-[1rem] text-gray-600 dark:text-[#abc2d3]">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileSidebarOpen(false)} // close on click
                  className={`relative cursor-pointer capitalize transition-all duration-300 
                  before:absolute before:bottom-[-2px] before:left-0 before:h-[2px] before:rounded-full before:transition-all before:duration-300
                  ${
                    pathname === item.href || item.activeFor?.includes(pathname)
                      ? "text-primaryColor before:w-full before:bg-primaryColor"
                      : "hover:text-primaryColor before:w-0 hover:before:w-full before:bg-primaryColor"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </nav>
    </div>
  );
};

export default Navbar;
