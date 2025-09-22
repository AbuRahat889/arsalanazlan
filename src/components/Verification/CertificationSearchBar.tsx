"use client";

import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CustomDropdown } from "../ui/dropdown";
import { CourseType, Locations } from "@/constants/dropdownInfo";

export default function CertificationSearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedType, setSelectedType] = useState("All Types");

  const [selectedLocation, setSelectedLocation] = useState("Locations");
  const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
        {/* Search Input */}
        <div className="flex items-center gap-2 bg-[#f8f8f8] border border-borderColor px-4 py-2 rounded-lg ">
          <CiSearch className="size-7" />

          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search by name"
            className="w-full text-gray-700 placeholder-gray-400 bg-transparent border-none outline-none"
          />
        </div>

        {/* All Types Dropdown */}
        <CustomDropdown
          options={CourseType}
          value={selectedType}
          onChange={setSelectedType}
          placeholder="Certification Level"
          className="w-full bg-[#f8f8f8]"
        />
        <CustomDropdown
          options={Locations}
          value={selectedLocation}
          onChange={setSelectedLocation}
          placeholder="Sector"
          className="w-full bg-[#f8f8f8]"
        />
        {/* Locations Dropdown */}
        <CustomDropdown
          options={Locations}
          value={selectedLocation}
          onChange={setSelectedLocation}
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
