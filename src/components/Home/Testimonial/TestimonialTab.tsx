"use client";

import { useState } from "react";
import SwiperSlider from "./SwiperSlider";

const Testimonial = () => {
  const [activeTab, setActiveTab] = useState(1);
  const items = [
    {
      key: "1",
      label: "Individuals",
      children: <SwiperSlider />,
    },
    {
      key: "2",
      label: "Accreditation",
      children: <SwiperSlider />,
    },
  ];

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row items-center md:items-center justify-center gap-5 py-5 container mx-auto">
        {/* Tabs */}
        <ul className="flex items-center  relative bg-white dark:bg-slate-800 rounded-full p-2">
          {/* Animated background */}
          <div
            className={`absolute h-[85%] w-[133px] bg-primaryColor rounded-full transition-all duration-500`}
            style={{
              transform:
                activeTab === 1 ? "translateX(0px)" : "translateX(141px)",
            }}
          ></div>

          {items.map((item, index) => (
            <li
              key={index}
              className={`${
                item.key === activeTab.toString()
                  ? "text-white"
                  : "text-secondaryColor"
              } px-6 py-2 z-10 transition duration-300 cursor-pointer truncate`}
              onClick={() => setActiveTab(Number(item.key))}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Active tab content */}
      <div className="text-center overflow-auto">
        {items.find((item) => item.key === activeTab.toString())?.children}
      </div>
    </>
  );
};

export default Testimonial;
