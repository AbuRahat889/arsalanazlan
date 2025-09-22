import { DirectoryCardInfo } from "@/constants/DirectoryCardInfo";
import Link from "next/link";
import Heading from "../ui/heading";
import { MovingButton } from "../ui/moving-border";
import DirectoryCard from "./DirectoryCard";

export default function CertificateVerify() {
  return (
    <div>
      <div className="py-14 px-5 xl:px-0 bg-[#f9fafb]">
        <div className="container mx-auto">
          <Heading
            title="Professional Directory"
            subtitle="Browse certified professionals and accredited training providers in our public directory."
          />
          <div className="mt-10 ">
            <div className="overflow-x-auto w-full">
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
            </div>
            <div className="flex justify-center items-center pt-6">
              <MovingButton
                borderRadius="1.75rem"
                className=" text-sm rounded-full text-primaryColor px-2 py-2 md:text-base font-normal "
              >
                <Link href={"/professional-directory"}>View All</Link>
              </MovingButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
