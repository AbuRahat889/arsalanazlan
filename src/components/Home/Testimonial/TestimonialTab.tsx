"use client";

import { useEffect, useState } from "react";
import SwiperSlider from "./SwiperSlider";
import confetti from "canvas-confetti";

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

  useEffect(() => {
    if (activeTab === 2) {
      // fire confetti when switched to Yearly
      confetti({
        particleCount: 550,
        spread: 150,
        origin: { x: 0.5, y: 0.5 },
        colors: [
          "hsl(var(--primary))",
          "hsl(var(--accent))",
          "hsl(var(--secondary))",
          "hsl(var(--muted))",
          "#f1a63d",
        ],
        ticks: 400,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 40,
        shapes: ["square", "circle", "star"],
      });
    }
  }, [activeTab]);

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
