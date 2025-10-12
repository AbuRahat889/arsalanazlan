import React from "react";

export default function SidebarSkletone() {
  return (
    <div className="h-auto md:h-[520px] w-full md:w-80 p-6 rounded-xl border border-borderColor animate-pulse">
      <ul className="ml-1">
        {/* Repeat for each menu item */}
        {[...Array(5)].map((_, i) => (
          <li key={i}>
            <div className="flex items-center gap-3 px-4 py-4 mb-2 rounded-md">
              {/* Icon placeholder */}
              <div className="h-5 w-5 bg-gray-300 rounded-md" />
              {/* Text placeholder */}
              <div className="h-4 w-24 bg-gray-300 rounded-md" />
            </div>
          </li>
        ))}

        {/* Logout placeholder */}
        <div className="flex items-center gap-3 px-4 py-4 text-lg font-medium mb-2 rounded-md">
          <div className="h-5 w-5 bg-gray-300 rounded-md" />
          <div className="h-4 w-20 bg-gray-300 rounded-md" />
        </div>
      </ul>
    </div>
  );
}
