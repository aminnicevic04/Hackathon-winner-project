import Button from "@/Componentse/shared/form/Button";
import React from "react";

type CartDetails = {
  totalAmount: number;
};

const CartDetails: React.FC<CartDetails> = ({ totalAmount }) => {
  const isDisabledCheckout = totalAmount <= 0;

  return (
    <div className="flex-grow flex flex-col justify-between gap-4 shadow-md p-4">
      <div className="flex justify-between items-center gap-3">
        <h1 className="text-white font-bold text-2xl">Total:</h1>
        <h1 className="text-white headingTitle">${totalAmount}</h1>
      </div>
      <Button
        isLink={true}
        linkHref="checkout"
        styleType="initial"
        type="button"
        disabled={isDisabledCheckout}
        additionalStyles="rounded-sm"
      >
        Checkout
      </Button>
    </div>
  );
};

export default CartDetails;
