import React from "react";
import Heading from "../ui/heading";
import CertificationSearchBar from "./CertificationSearchBar";
import DirectoryCard from "./DirectoryCard";
import { DirectoryCardInfo } from "@/constants/DirectoryCardInfo";
import { MovingButton } from "../ui/moving-border";
import Link from "next/link";

export default function ProfessionalDirectory() {
  return (
    <div className="py-14 px-5 xl:px-0 bg-[#f9fafb]">
      <div className=" container mx-auto">
        <Heading
          title="Professional Directory"
          subtitle="Browse certified professionals and accredited training providers in our public directory."
        />

        <CertificationSearchBar />
        <div className="mb-5">
          {DirectoryCardInfo.map((card, index) => (
            <DirectoryCard
              key={index}
              name={card.name}
              role={card.role}
              level={card.level}
              status={card.status}
              country={card.country}
              date={card.date}
            />
          ))}
          <div className="flex justify-center items-center pt-6">
            <MovingButton
              href="/case-studies"
              borderRadius="1.75rem"
              className=" text-sm rounded-full text-primaryColor px-2 py-2 md:text-base font-normal "
            >
              <Link href={"/case-studies"}>View All</Link>
            </MovingButton>
          </div>
        </div>
      </div>
      {/* <DirectoryCard /> */}
    </div>
  );
}
