import { InputProps } from "@/types/form/InputTypes";
import React from "react";

const Input: React.FC<InputProps> = ({
  type,
  error,
  helperText,
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  id,
  extraType,
  defaultValue,
}) => {
  if (type === "textarea") {
    return (
      <div className="flex gap-2 flex-col">
        <label
          htmlFor={id}
          className={`text-white font-bold ${error && "text-red-600"}`}
        >
          {label}
        </label>
        <textarea
          className={`p-4 rounded-md w-full hover:border-black bg-[#1b1b1b] text-white ${
            error && "border-red-600"
          }`}
          id={id}
          onChange={
            onChange as (e: React.ChangeEvent<HTMLTextAreaElement>) => void
          }
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
          required
          rows={3}
          defaultValue={defaultValue}
        />
        {error && <p className="text-red-600">{helperText}</p>}
      </div>
    );
  } else {
    return (
      <div className="flex gap-2 flex-col">
        <label
          htmlFor={id}
          className={`text-white font-bold ${error && "text-red-600"}`}
        >
          {label}
        </label>
        <input
          className={`p-4 rounded-md bg-[#1b1b1b] text-white ${
            error && "border-red-600"
          }`}
          type={extraType}
          id={id}
          onChange={
            onChange as (e: React.ChangeEvent<HTMLInputElement>) => void
          }
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
          defaultValue={defaultValue}
          required
        />
        {error && <p className="text-red-600">{helperText}</p>}
      </div>
    );
  }
};

export default Input;
