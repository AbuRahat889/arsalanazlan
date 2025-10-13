"use client";

import { useGetAllVerifiedCertificatQuery } from "@/redux/api/certificateApi";
import Heading from "../ui/heading";
import CertificationSearchBar from "./CertificationSearchBar";
import DirectoryCard from "./DirectoryCard";
import { CertificateProps } from "@/Types/Certificate";
import Pagination from "../ui/Pagination";
import { useState } from "react";
import Image from "next/image";
import NoData from "@/assets/NoData.gif";
import CertificationVerificationSkletone from "../Skletone/CertificationVerificationSkletone";

export default function ProfessionalDirectory() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useState<Record<string, any>>({});
  const { data, isLoading } = useGetAllVerifiedCertificatQuery({
    page: currentPage,
    limit: 15,
    ...searchParams,
  });
  const certificates = data?.data?.data || [];
  const totalPages = data?.data?.meta?.totalPages || 1;

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="py-14 px-5 xl:px-0">
      <div className="container mx-auto">
        <Heading
          title="Professional Directory"
          subtitle="Browse certified professionals and accredited training providers in our public directory."
        />

        <CertificationSearchBar setSearchParams={setSearchParams} />
        <div className="mb-5 overflow-x-auto">
          {isLoading ? (
            <CertificationVerificationSkletone />
          ) : certificates?.length == 0 ? (
            <div className="flex justify-center items-center">
              <Image
                src={NoData}
                alt="Loading animation"
                width={400}
                height={400}
                unoptimized
              />
            </div>
          ) : (
            certificates?.map((card: CertificateProps, index: number) => (
              <DirectoryCard key={index} certificate={card} />
            ))
          )}
        </div>

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        )}
      </div>
    </div>
  );
}
