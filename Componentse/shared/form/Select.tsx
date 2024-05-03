import { OptionProps, SelectProps } from "@/types/form/SelectTypes";
import React from "react";

const Select: React.FC<SelectProps> = ({ options, onChange, value, id }) => {
  return (
    <div>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="px-4 py-4 w-96 cursor-pointer rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#1b1b1b]"
      >
        {options.map((option: OptionProps) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
