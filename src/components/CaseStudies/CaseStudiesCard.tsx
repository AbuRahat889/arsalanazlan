"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import PlaceholderImage from "@/assets/placeholder.webp";
import Link from "next/link";
import { EllipsisVertical, SquarePen, Trash2 } from "lucide-react";
import { usePathname } from "next/navigation";

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
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const path = usePathname();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        <div className="p-4 flex items-start justify-between">
          <Link
            href={`/case-studies/${caseStudy?.id}`}
            className="text-sm font-medium text-gray-900 leading-tight cursor-pointer hover:underline"
          >
            {caseStudy?.title}
          </Link>
          {path === "/user-profile/case-studies" && (
            <div className="relative" ref={dropdownRef}>
              {/* Toggle Button */}
              <EllipsisVertical
                className="size-5 cursor-pointer"
                onClick={() => setOpen((prev) => !prev)}
              />

              {/* Dropdown */}
              {open && (
                <div className="absolute -top-16 right-5 mt-2  gap-3 bg-white shadow-md rounded-lg p-2 z-10">
                  <Link
                    href={`/user-profile/case-studies/create-case-studies?type=edit&id=${caseStudy.id}`}
                    className="flex  gap-1 items-center p-2 rounded-md hover:bg-gray-300 cursor-pointer"
                  >
                    <SquarePen className="size-4" />
                    <span>Edit</span>
                  </Link>
                  <button
                    className=" p-2 rounded-md flex items-center gap-1 hover:bg-gray-300  cursor-pointer"
                    onClick={() => console.log("Delete", caseStudy.id)}
                  >
                    <Trash2 className="size-4 text-primaryColor" />
                    <span>Delete</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
