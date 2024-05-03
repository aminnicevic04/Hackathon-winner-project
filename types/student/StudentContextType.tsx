import { SetStateAction } from "react";
import { CartItemProps } from "../cart/CartTypes";
import { CourseCardProps } from "../courses/CourseInfoTypes";

export interface StudentContextType {
  studentData: {
    _id: string;
    cart: {
      items: CartItemProps[];
      totalAmount: number;
    };
    favorites: CourseCardProps[];
    courses: CourseCardProps[];
    first_name: string;
    last_name: string;
  };
  filterData: {
    category: string;
    skillLevel: string;
    language: string;
    duration: string;
  };
  setFilterData: React.Dispatch<SetStateAction<any>>;
  addToFavorites: (id: string) => void;
  purchaseCourseBuy: () => void;
  //   toggleCart: () => void;
  //   addToFavorites: () => void;
}
