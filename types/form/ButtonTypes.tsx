import { ReactNode } from "react";

export interface ButtonProps {
  type: "button" | "submit";
  children: ReactNode;
  styleType: "error" | "success" | "outlined" | "initial";
  disabled?: boolean;
  isLink?: boolean;
  linkHref?: string;
  additionalStyles?: string;
  onClick?: () => void;
}
