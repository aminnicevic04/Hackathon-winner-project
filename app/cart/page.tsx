"use client";

import { CartDetails, CartList } from "@/Componentse/cart";
import ProtectedRoutes from "@/Componentse/shared/auth/ProtectedRoutes";
import { StudentContext } from "@/context/StudentContext";
import useSwr from "swr";
import { ClipLoader } from "react-spinners";
import React, { useContext } from "react";

const CartPage = () => {
  const { studentData, filterData } = useContext(StudentContext);
  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json());
  const { data: coursesData } = useSwr("/api/courses", fetcher);

  if (!studentData) {
    <div className="loader_wrapper">
      <ClipLoader />
    </div>;
  }

  return (
    <section className="p-6 px-40 flex flex-col gap-2 items-stretch justify-center mt-36">
      <div className="mt-6">
        <h1 className="text-white headingTitle">Shopping Cart</h1>
        <p className="text-gray-400 mt-4">
          {studentData?.cart?.items?.length} Course in Cart
        </p>
      </div>
      <hr />
      <div className="flex items-stretch justify-center gap-2">
        <CartList cartCourses={studentData?.cart?.items} />
        <CartDetails totalAmount={studentData?.cart?.totalAmount} />
      </div>
    </section>
  );
};

export default ProtectedRoutes(CartPage, ["student"]);
