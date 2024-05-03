import { ButtonProps } from "@/types/form/ButtonTypes";
import Link from "next/link";
import React from "react";

const Button: React.FC<ButtonProps> = ({
  styleType,
  type,
  children,
  disabled,
  isLink,
  linkHref,
  additionalStyles,
  onClick,
}) => {
  if (isLink) {
    return (
      <Link href={`/${linkHref}`}>
        <button
          disabled={disabled}
          type={type}
          className={`
         py-2 px-6 w-full rounded-full shadow-sm text-white
         font-bold hover:bg-[#4540e1ea] transition-all ${additionalStyles}
         ${disabled && "disabled:opacity-40 cursor-not-allowed"}
         ${styleType === "error" && "bg-red-600"}
         ${styleType === "success" && "bg-green-600"}
         ${
           styleType === "outlined" && "bg-gray-200 text-black hover:text-white"
         }
         ${styleType === "initial" && "bg-[#4540e1]"}
        `}
        >
          {children}
        </button>
      </Link>
    );
  } else {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        type={type}
        className={`
         py-2 px-6 w-full rounded-lg shadow-sm text-white
         font-bold hover:bg-[#4540e1ea] transition-all ${additionalStyles}
         ${disabled && "disabled:opacity-40 cursor-not-allowed"}
         ${styleType === "error" && "bg-red-600"}
         ${styleType === "success" && "bg-green-600"}
         ${styleType === "outlined" && "bg-transparent border"}
         ${styleType === "initial" && "bg-[#4540e1]"}
        `}
      >
        {children}
      </button>
    );
  }
};

export default Button;
