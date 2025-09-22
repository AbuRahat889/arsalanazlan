import React from "react";
import Heading from "../ui/heading";
import { Timeline } from "../ui/timeline";
import Image from "next/image";
import blockChain from "@/assets/Path1.png";
import mission from "@/assets/mission.png";
import vission from "@/assets/vission.png";
import iamge2 from "@/assets/Path2.png";
import image1 from "@/assets/loginImage.png";

export default function Journey() {
  const data = [
    {
      title: "2020",
      content: (
        <div>
          <p className="mb-8 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
            Founded with mission to standardize CPD
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={image1}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-custom-shadow  md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <p className="mb-8 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
            ISO 9001 certification achieved
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={mission}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-custom-shadow  md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="mb-8 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
            10,000th professional certified
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={vission}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-custom-shadow  md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="mb-8 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
            Blockchain verification launched
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={iamge2}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-custom-shadow  md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
            10,000th professional certified
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={blockChain}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-custom-shadow  md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="mb-8 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
            Global recognition in countries
          </p>
        </div>
      ),
    },
  ];
  return (
    <div>
      <Heading
        title="Our Journey"
        subtitle="Key milestones in our mission to advance professional excellence globally."
      />
      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
    </div>
  );
}
