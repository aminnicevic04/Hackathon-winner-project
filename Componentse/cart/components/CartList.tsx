import { CartItemProps, CartListProps } from "@/types/cart/CartTypes";
import React from "react";
import CartItem from "./CartItem";

const CartList: React.FC<CartListProps> = ({ cartCourses }) => {
  return (
    <div className="flex-grow basis-1/2">
      {cartCourses?.length === 0 && (
        <p className="font-bold text-center p-2">Cart is empty</p>
      )}
      {cartCourses?.map((course: CartItemProps) => (
        <CartItem
          key={course._id}
          _id={course._id}
          title={course.title}
          image={course.image}
          duration={course.duration}
          instructor={course.instructor}
          language={course.language}
          price={course.price}
          sections={course.sections}
          skillLevel={course.skillLevel}
        />
      ))}
    </div>
  );
};

export default CartList;
