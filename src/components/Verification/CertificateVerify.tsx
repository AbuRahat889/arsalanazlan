"use client";

import { useGetAllVerifiedCertificatQuery } from "@/redux/api/certificateApi";
import Link from "next/link";
import Heading from "../ui/heading";
import { MovingButton } from "../ui/moving-border";
import DirectoryCard from "./DirectoryCard";
import { CertificateProps } from "@/Types/Certificate";

export default function CertificateVerify() {
  const { data, isLoading } = useGetAllVerifiedCertificatQuery({
    page: 1,
    limit: 5,
  });
  const certificates = data?.data?.data || [];

  if (isLoading) {
    return <CertificateVerify />;
  }
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
              {certificates?.map((card: CertificateProps, index: number) => (
                <DirectoryCard key={index} certificate={card} />
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
