import Image from "next/image";
import React from "react";
import PlaceholderImage from "@/assets/placeholder.webp";
import Link from "next/link";
import { SquarePen, Trash2 } from "lucide-react";

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
          {
            <div className="flex items-center gap-3">
              <Link
                href={`/user-profile/add-course?type=edit&id=${caseStudy.id}`}
                className="bg-[#e8e8e9] p-2 rounded-full hover:bg-gray-300 cursor-pointer"
              >
                <SquarePen className="size-4" />
              </Link>
              <div className="bg-[#e8e8e9] p-2 rounded-full hover:bg-gray-300 cursor-pointer">
                <Trash2 className="size-4 text-primaryColor" />
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
}
