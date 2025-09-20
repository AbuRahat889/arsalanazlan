import Image from "next/image";
import React from "react";
import PlaceholderImage from "@/assets/placeholder.webp";
import Link from "next/link";

interface CaseStudy {
  id: number;
  title: string;
  image: string;
  date: string;
}

export default function CaseStudiesCard({
  caseStudy,
}: {
  caseStudy: CaseStudy;
}) {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {/* Header */}
        <div className="px-4 py-3 ">
          <div className="flex justify-between items-center text-xs text-gray-500 uppercase tracking-wide">
            <span className="font-medium">Provider Case Studies</span>
            <span>{caseStudy?.date}</span>
          </div>
        </div>

        {/* Card Content */}

        <div className={`h-44 px-4`}>
          {/* Decorative Elements */}
          <Image
            src={caseStudy?.image || PlaceholderImage}
            alt="decorative"
            height={200}
            width={200}
            className="w-full h-full"
          />
        </div>

        {/* Title */}
        <div className="p-4">
          <Link
            href={`/case-studies/${caseStudy?.id}`}
            className="text-sm font-medium text-gray-900 leading-tight cursor-pointer hover:underline"
          >
            {caseStudy?.title}
          </Link>
        </div>
      </div>
    </div>
  );
}
