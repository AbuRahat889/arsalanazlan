"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MediaButton } from "../ui/icon";

export default function SettingsNavbar() {
  const path = usePathname();

  const navigation = [
    {
      label: "Personal Info",
      route: "/user-profile/personal-info",
      activeFor: ["/user-profile/add-log"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
        >
          <path
            d="M18.4166 13.333V6.66634L13.8333 2.08301H7.16659L2.58325 6.66634V13.333L7.16659 17.9163H13.8333L18.4166 13.333Z"
            stroke="black"
            strokeWidth="1.25"
            strokeLinecap="square"
          />
          <path
            d="M10.5 13.333V9.58301"
            stroke="black"
            strokeWidth="1.25"
            strokeLinecap="square"
          />
          <path
            d="M10.5 6.6763V6.66797"
            stroke="black"
            strokeWidth="1.25"
            strokeLinecap="square"
          />
        </svg>
      ),
    },
    {
      label: "Dashboard",
      route: "/user-profile/dashboard",
      activeFor: ["/user-profile/add-log"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
        >
          <path
            d="M8 2.5H3.83333C3.3731 2.5 3 2.8731 3 3.33333V9.16667C3 9.6269 3.3731 10 3.83333 10H8C8.46024 10 8.83333 9.6269 8.83333 9.16667V3.33333C8.83333 2.8731 8.46024 2.5 8 2.5Z"
            stroke="#0F172A"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.167 2.5H13.0003C12.5401 2.5 12.167 2.8731 12.167 3.33333V5.83333C12.167 6.29357 12.5401 6.66667 13.0003 6.66667H17.167C17.6272 6.66667 18.0003 6.29357 18.0003 5.83333V3.33333C18.0003 2.8731 17.6272 2.5 17.167 2.5Z"
            stroke="#0F172A"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.167 10H13.0003C12.5401 10 12.167 10.3731 12.167 10.8333V16.6667C12.167 17.1269 12.5401 17.5 13.0003 17.5H17.167C17.6272 17.5 18.0003 17.1269 18.0003 16.6667V10.8333C18.0003 10.3731 17.6272 10 17.167 10Z"
            stroke="#0F172A"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 13.334H3.83333C3.3731 13.334 3 13.7071 3 14.1673V16.6673C3 17.1276 3.3731 17.5007 3.83333 17.5007H8C8.46024 17.5007 8.83333 17.1276 8.83333 16.6673V14.1673C8.83333 13.7071 8.46024 13.334 8 13.334Z"
            stroke="#0F172A"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Profile",
      route: "/user-profile/profile-set-up",
      activeFor: [
        "/user-profile/profile-set-up/change-password",
        "/user-profile/profile-set-up/edit-profile",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
        >
          <path
            d="M10.6341 9.05866C10.5508 9.05033 10.4508 9.05033 10.3591 9.05866C8.37578 8.99199 6.80078 7.36699 6.80078 5.36699C6.80078 3.32533 8.45078 1.66699 10.5008 1.66699C12.5424 1.66699 14.2008 3.32533 14.2008 5.36699C14.1924 7.36699 12.6174 8.99199 10.6341 9.05866Z"
            stroke="#131923"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.46758 12.133C4.45091 13.483 4.45091 15.683 6.46758 17.0247C8.75924 18.558 12.5176 18.558 14.8092 17.0247C16.8259 15.6747 16.8259 13.4747 14.8092 12.133C12.5259 10.608 8.76758 10.608 6.46758 12.133Z"
            stroke="#131923"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Course",
      route: "/user-profile/course",
      activeFor: ["/user-profile/course/add-course"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
        >
          <path
            d="M17.1673 6.87435V14.9993C17.1673 17.4993 15.6756 18.3327 13.834 18.3327H7.16732C5.32565 18.3327 3.83398 17.4993 3.83398 14.9993V6.87435C3.83398 4.16602 5.32565 3.54102 7.16732 3.54102C7.16732 4.05768 7.37563 4.52435 7.71729 4.86601C8.05896 5.20768 8.52565 5.41602 9.04232 5.41602H11.959C12.9923 5.41602 13.834 4.57435 13.834 3.54102C15.6756 3.54102 17.1673 4.16602 17.1673 6.87435Z"
            stroke="#0C0D0C"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.8327 3.54102C13.8327 4.57435 12.991 5.41602 11.9577 5.41602H9.04102C8.52435 5.41602 8.05766 5.20768 7.71599 4.86601C7.37433 4.52435 7.16602 4.05768 7.16602 3.54102C7.16602 2.50768 8.00768 1.66602 9.04102 1.66602H11.9577C12.4743 1.66602 12.941 1.87435 13.2827 2.21602C13.6244 2.55769 13.8327 3.02435 13.8327 3.54102Z"
            stroke="#0C0D0C"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.16602 10.834H10.4993"
            stroke="#0C0D0C"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.16602 14.166H13.8327"
            stroke="#0C0D0C"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Case Studies",
      route: "/user-profile/case-studies",
      activeFor: ["/user-profile/case-studies/create-case-studies"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
        >
          <path
            d="M11.334 17.355V18.3327H12.3118C12.6529 18.3327 12.8235 18.3327 12.9769 18.2692C13.1302 18.2056 13.2509 18.085 13.4921 17.8438L17.5117 13.8238C17.7393 13.5963 17.8531 13.4826 17.9139 13.3599C18.0296 13.1264 18.0296 12.8523 17.9139 12.6188C17.8531 12.4961 17.7393 12.3823 17.5117 12.1548C17.2842 11.9273 17.1705 11.8136 17.0477 11.7528C16.8142 11.6371 16.5401 11.6371 16.3066 11.7528C16.1838 11.8136 16.0701 11.9273 15.8426 12.1548L11.8229 16.1748C11.5817 16.416 11.4611 16.5366 11.3975 16.6899C11.334 16.8433 11.334 17.0138 11.334 17.355Z"
            stroke="black"
            strokeWidth="1.25"
            strokeLinejoin="round"
          />
          <path
            d="M16.3333 9.16602C16.3333 9.16602 16.3333 7.85818 16.2065 7.5519C16.0796 7.24562 15.8387 7.00476 15.357 6.52304L11.4099 2.57592C10.9942 2.16018 10.7863 1.95231 10.5287 1.82914C10.4752 1.80352 10.4203 1.78078 10.3643 1.76102C10.0951 1.66602 9.80117 1.66602 9.21317 1.66602C6.50902 1.66602 5.15692 1.66602 4.24111 2.40441C4.05609 2.55358 3.88757 2.72211 3.73839 2.90712C3 3.82294 3 5.17503 3 7.87922V11.666C3 14.8087 3 16.3801 3.97631 17.3563C4.86222 18.2423 6.23808 18.3243 8.83333 18.3319M10.5 2.08268V2.49935C10.5 4.85637 10.5 6.03488 11.2323 6.76712C11.9645 7.49935 13.143 7.49935 15.5 7.49935H15.9167"
            stroke="black"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },

    {
      label: "My Certification",
      route: "/user-profile/my-certification",
      activeFor: ["/user-profile/my-certification/certificate-details"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
        >
          <path
            d="M17.1673 6.87533V15.0003C17.1673 17.5003 15.6756 18.3337 13.834 18.3337H7.16732C5.32565 18.3337 3.83398 17.5003 3.83398 15.0003V6.87533C3.83398 4.16699 5.32565 3.54199 7.16732 3.54199C7.16732 4.05866 7.37563 4.52532 7.71729 4.86699C8.05896 5.20866 8.52565 5.41699 9.04232 5.41699H11.959C12.9923 5.41699 13.834 4.57533 13.834 3.54199C15.6756 3.54199 17.1673 4.16699 17.1673 6.87533Z"
            stroke="#0C0D0C"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.8327 3.54199C13.8327 4.57533 12.991 5.41699 11.9577 5.41699H9.04102C8.52435 5.41699 8.05766 5.20866 7.71599 4.86699C7.37433 4.52532 7.16602 4.05866 7.16602 3.54199C7.16602 2.50866 8.00768 1.66699 9.04102 1.66699H11.9577C12.4743 1.66699 12.941 1.87533 13.2827 2.217C13.6244 2.55866 13.8327 3.02533 13.8327 3.54199Z"
            stroke="#0C0D0C"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.16602 10.833H10.4993"
            stroke="#0C0D0C"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.16602 14.167H13.8327"
            stroke="#0C0D0C"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "My Plans",
      route: "/user-profile/my-plans",

      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
        >
          <path
            d="M10.5 12.5H10.5083"
            stroke="black"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.5 18.333H15.5"
            stroke="black"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
          <path
            d="M2.16699 5.00033L5.08366 15.8337H15.917L18.8337 5.00033L14.2503 8.33366L10.5003 1.66699L6.75033 8.33366L2.16699 5.00033Z"
            stroke="black"
            strokeWidth="1.25"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="h-auto md:h-[520px] w-full md:w-80 p-6 rounded-xl border border-borderColor">
      <ul className="ml-1">
        {navigation.map((item) => {
          const isActive =
            path === item.route || item.activeFor?.includes(path);

          return (
            <li key={item.route}>
              <Link
                href={item.route}
                className={`flex items-center gap-3 px-4 py-4 text-lg font-medium mb-2 rounded-md transition-all duration-300 ease-in-out text-[#131923] ${
                  isActive
                    ? "bg-[#ed900c]"
                    : "text-[#30373D] hover:bg-[#f5e3c8] hover:scale-105 "
                }`}
              >
                {item.icon && <span className="text-xl">{item.icon}</span>}
                <span className="text-sm">{item.label}</span>
              </Link>
            </li>
          );
        })}

        <div
          className={`flex items-center gap-3 px-4 py-4 text-lg font-medium mb-2 rounded-md `}
        >
          <MediaButton type="logout" />
          <span className="text-sm text-red-500">Logout</span>
        </div>
      </ul>
    </div>
  );
}
