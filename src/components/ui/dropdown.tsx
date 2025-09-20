"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface DropdownOption {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  options: DropdownOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  label?: string;
}

export function CustomDropdown({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  className,
  label,
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || "");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (!isOpen) return;

      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (optionValue: string) => {
    setSelectedValue(optionValue);
    setIsOpen(false);
    onChange?.(optionValue);
  };

  const selectedOption = options.find(
    (option) => option.value === selectedValue
  );

  return (
    <div className={cn("relative", className)} ref={dropdownRef}>
      <label
        htmlFor="description"
        className="text-sm font-medium text-textColor"
      >
        {label}
      </label>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full flex items-center justify-between px-4 py-2 text-left border border-gray-200 rounded-lg "
        )}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="block truncate text-secondaryColor text-wrap">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <div className="">
          <svg
            className={cn(
              "w-4 h-4 text-textColor transition-transform duration-200",
              isOpen && "rotate-180"
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-[9999] w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
          <ul
            className="py-1 max-h-60 overflow-auto"
            role="listbox"
            aria-label="Options"
          >
            {options.map((option) => (
              <li key={option.value}>
                <button
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  className={cn(
                    "w-full px-4 py-3 text-left text-gray-900 hover:bg-primaryColor hover:text-white transition-colors duration-150",
                    selectedValue === option.value &&
                      "bg-primaryColor text-white"
                  )}
                  role="option"
                  aria-selected={selectedValue === option.value}
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
// const [selectedBrand, setSelectedBrand] = useState("");

// const timeTypes = [
//   { value: "Year", label: "Year" },
//   { value: "Month", label: "Month" },
//   { value: "Week", label: "Week" },
// ];

{
  /* <CustomDropdown
  options={carBrands}
  value={selectedBrand}
  onChange={setSelectedBrand}
  placeholder="Select a car brand"
/> */
}
