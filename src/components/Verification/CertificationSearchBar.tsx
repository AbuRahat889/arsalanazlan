"use client";

import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CustomDropdown } from "../ui/dropdown";
import {
  CourseType,
  Locations,
  ProfessionalSector,
} from "@/constants/dropdownInfo";

export default function CertificationSearchBar({ setSearchParams }: any) {
  const [searchTerm, setSearchTerm] = useState("");
  const [certificationLevel, setCertificationLevel] = useState<
    string | undefined
  >(undefined);
  const [professionalSector, setProfessionalSector] = useState<
    string | undefined
  >(undefined);
  const [country, setCountry] = useState<string | undefined>(undefined);
  const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);

  useEffect(() => {
    setSearchParams({
      searchTerm,
      certificationLevel,
      professionalSector,
      country,
    });
  }, [
    searchTerm,
    certificationLevel,
    professionalSector,
    country,
    setSearchParams,
  ]);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
        {/* Search Input */}
        <div className="flex items-center gap-2 bg-[#f8f8f8] border border-borderColor px-4 py-2 rounded-lg ">
          <CiSearch className="size-7" />

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name"
            className="w-full text-gray-700 placeholder-gray-400 bg-transparent border-none outline-none"
          />
        </div>

        {/* All Types Dropdown */}
        <CustomDropdown
          options={CourseType}
          value={certificationLevel}
          onChange={setCertificationLevel}
          placeholder="Certification Level"
          className="w-full bg-[#f8f8f8]"
        />
        <CustomDropdown
          options={ProfessionalSector}
          value={professionalSector}
          onChange={setProfessionalSector}
          placeholder="Sector"
          className="w-full bg-[#f8f8f8]"
        />
        {/* Locations Dropdown */}
        <CustomDropdown
          options={Locations}
          value={country}
          onChange={setCountry}
          placeholder="Locations"
          className="w-full bg-[#f8f8f8]"
        />
        
      </div>
    

      {/* Click outside to close dropdowns */}
      {(isTypeDropdownOpen || isLocationDropdownOpen) && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => {
            setIsTypeDropdownOpen(false);
            setIsLocationDropdownOpen(false);
          }}
        />
      )}
    </div>
  );
}
