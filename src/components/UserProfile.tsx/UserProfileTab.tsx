"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SettingsNavbar() {
  const path = usePathname();

  const navigation = [
    {
      label: "Personal Info",
      route: "/user-profile/personal-info",
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
      label: "Profile Set Up",
      route: "/user-profile/profile-set-up",
      activeFor: [
        "/user-profile/change-password",
        "/user-profile/edit-profile",
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
      label: "Notifications",
      route: "/user-profile/notification",
    },
  ];

  return (
    <div className="h-96 w-full md:w-80 p-6 rounded-xl border border-borderColor">
      <ul className="ml-1">
        {navigation.map((item) => {
          const isActive =
            path === item.route || item.activeFor?.includes(path);

          return (
            <li key={item.route}>
              <Link
                href={item.route}
                className={`flex items-center gap-3 px-4 py-4 text-lg font-medium mb-2 rounded-md transition-colors text-[#131923] ${
                  isActive
                    ? "bg-[#ed900c]"
                    : "text-[#30373D] hover:bg-[#f5e3c8]"
                }`}
              >
                {item.icon && <span className="text-xl">{item.icon}</span>}
                <span className="text-sm">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
