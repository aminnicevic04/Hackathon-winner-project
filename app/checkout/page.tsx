"use client";

import { CheckoutForm, CourseCheckout } from "@/Componentse/checkout";
import ProtectedRoutes from "@/Componentse/shared/auth/ProtectedRoutes";
import Button from "@/Componentse/shared/form/Button";
import { StudentContext } from "@/context/StudentContext";
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const router = useRouter();
  const [isDisabled, setisDisabled] = useState(false);
  const { studentData, purchaseCourseBuy } = useContext(StudentContext);

  if (studentData?.cart?.items?.length <= 0) {
    router.push("/cart");
  }

  return (
    <section className="py-20 px-40 flex gap-12 items-stretch justify-center mt-36">
      <div className="basis-1/2">
        <h1 className="text-white headingTitle">Checkout</h1>
        <h1 className="text-white text-xl font-bold mt-2">Payment Details</h1>
        <CheckoutForm setisDisabled={setisDisabled} />
      </div>
      <div className="basis-1/3 flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h1 className="text-white headingTitle">Summary</h1>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-white headingTitle flex justify-between">
            Total <span>${studentData?.cart?.totalAmount}</span>
          </h1>
          <Button
            type="button"
            styleType="initial"
            disabled={isDisabled}
            onClick={purchaseCourseBuy}
          >
            Complete Checkout
          </Button>
        </div>
        <div>
          <h1 className="text-white headingTitle">Order Details</h1>
          {studentData?.cart?.items.map((cartItem) => (
            <CourseCheckout
              key={cartItem._id}
              title={cartItem.title}
              price={cartItem.price}
              image={cartItem.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProtectedRoutes(CheckoutPage, ["student"]);
