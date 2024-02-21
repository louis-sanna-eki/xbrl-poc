import React, { useState, useMemo, useRef } from "react";
import cikEntityPairs from "../data/cik_entity_pairs.json";

const options: { value: string; label: string }[] = [];
for (const [cik, name] of cikEntityPairs) {
  options.push({ value: cik, label: name } as any);
}

export function Search({ value, setValue }: any) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Filter options based on search term
  const filteredOptions = useMemo(() => {
    if (!searchTerm.trim()) return [];
    return options.filter(({ label }) =>
      label.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 50); // Limit the number of displayed options for performance
  }, [searchTerm]);

  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      <input
        type="text"
        placeholder="Search for a company..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setIsDropdownVisible(true);
        }}
        onFocus={() => setIsDropdownVisible(true)}
        onBlur={() => {
          // Delay hiding dropdown to allow click event to register on options
          setTimeout(() => setIsDropdownVisible(false), 200);
        }}
        className="p-2 border border-gray-300 rounded-md w-full"
      />
      {isDropdownVisible && filteredOptions.length > 0 && (
        <ul className="absolute z-10 max-h-60 overflow-auto mt-1 w-full border border-gray-200 rounded-md bg-white shadow-md top-full">
          {filteredOptions.map(({ value, label }) => (
            <li
              key={value}
              onClick={() => {
                setValue(value); // Assuming setValue is meant to set the selected value
                setSearchTerm(label); // Show the selected label in input
                setIsDropdownVisible(false);
              }}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
