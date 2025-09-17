"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
}

export function SearchBar({ searchValue, onSearchChange }: SearchBarProps) {
  return (
    <div className="flex flex-col md:flex-row  w-full items-center justify-end gap-4 mt-3 md:mt-0">
      {/* Search Input */}
      <div className="border-2 bg-white border-[#F3F4F6] rounded-full px-3 py-2 flex items-center justify-between w-full ">
        <Search className="text-[#64748b]" />
        <input
          type="text"
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search here"
          className="text-[#636F85] text-base leading-normal outline-none w-full pr-2"
        />
      </div>
    </div>
  );
}
