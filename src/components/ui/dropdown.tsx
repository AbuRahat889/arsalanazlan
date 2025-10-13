"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface DropdownOption {
  value: string;
  label: string;
  children?: DropdownOption[]; // submenu support
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
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setOpenSubmenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (optionValue: string) => {
    setSelectedValue(optionValue);
    setIsOpen(false);
    setOpenSubmenu(null);
    onChange?.(optionValue);
  };

  // Recursive function to find label by value (for submenu items)
  const findOptionLabel = (
    options: DropdownOption[],
    value: string
  ): string | undefined => {
    for (const option of options) {
      if (option.value === value) return option.label;
      if (option.children) {
        const childLabel = findOptionLabel(option.children, value);
        if (childLabel) return childLabel;
      }
    }
    return undefined;
  };

  return (
    <div className={cn("relative", className)} ref={dropdownRef}>
      {label && (
        <label className="text-sm font-medium text-textColor">{label}</label>
      )}

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full flex items-center justify-between px-4 py-2 text-left border border-[#CBD5E1] rounded-lg"
        )}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="block truncate text-secondaryColor">
          {selectedValue
            ? findOptionLabel(options, selectedValue)
            : placeholder}
        </span>
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
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-[9999] w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
          <ul className="py-1 max-h-60 overflow-auto" role="listbox">
            {options.map((option) => (
              <li key={option.value} className="relative">
                <button
                  type="button"
                  onClick={() => {
                    if (option.children) {
                      setOpenSubmenu(
                        openSubmenu === option.value ? null : option.value
                      );
                    } else {
                      handleSelect(option.value);
                    }
                  }}
                  className={cn(
                    "w-full px-4 py-3 flex items-center justify-between text-left text-gray-900 hover:bg-primaryColor hover:text-white transition-colors duration-150",
                    selectedValue === option.value &&
                      !option.children &&
                      "bg-primaryColor text-white"
                  )}
                >
                  <span>{option.label}</span>
                  {option.children && (
                    <svg
                      className={cn(
                        "w-4 h-4 ml-2 text-gray-500 transition-all duration-150 ease-in-out",
                        openSubmenu === option.value &&
                          "rotate-180 text-primaryColor"
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
                  )}
                </button>

                {/* Submenu inside dropdown */}
                {option.children && openSubmenu === option.value && (
                  <ul className="pl-6 bg-[#f5e3c8]">
                    {option.children.map((child) => (
                      <li key={child.value}>
                        <button
                          type="button"
                          onClick={() => handleSelect(child.value)}
                          className={cn(
                            "w-full px-4 py-2 text-left text-gray-900 hover:bg-primaryColor hover:text-white transition-colors duration-150",
                            selectedValue === child.value &&
                              "bg-primaryColor text-white"
                          )}
                        >
                          {child.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
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
