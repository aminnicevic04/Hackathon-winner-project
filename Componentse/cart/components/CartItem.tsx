"use client";
import React, { useContext } from "react";
import { CartItemProps } from "@/types/cart/CartTypes";
import { createGraphicIcon } from "@/utils/helpers";
import Image from "next/image";
import { usePostHttp } from "@/hooks/usePostHttp";
import { StudentContext } from "@/context/StudentContext";
import { Languages } from "lucide-react";

const CartItem: React.FC<CartItemProps> = ({
  _id,
  image,
  title,
  duration,
  skillLevel,
  sections,
  language,
  price,
}) => {
  const { sendRequest, isLoading, message } = usePostHttp();
  const { studentData } = useContext(StudentContext);

  async function removeFromCart() {
    await sendRequest("POST", `/api/courses/${_id}/${studentData?._id}/cart`);
  }

  // async function moveToWishList() {
  //   await sendRequest(
  //     "POST",
  //     `/api/courses/${_id}/${studentData?._id}/move-to-favorites`
  //   );
  // }

  return (
    <div className="flex justify-between gap-2 shadow-md mt-2" id={_id}>
      <div className="flex gap-4">
        <Image src={image} alt={title} width={200} height={200} />
        <div className="flex flex-col justify-between gap-6 p-2">
          <div>
            <h1 className="text-white text-2xl font-bold">{title}</h1>
          </div>
          <div className="flex items-center gap-2">
            <Languages color="#fff" />{" "}
            <h2 className="text-white ">
              Language: <strong>{language}</strong>
            </h2>
          </div>
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-gray-400">{duration}h</h2>
            <h2 className="text-gray-400">{sections.length} lectures</h2>
            <h2 className="text-gray-400">{skillLevel}</h2>
          </div>
        </div>
      </div>
      <div className="flex gap-4 pr-6 pt-4">
        <div>
          <h2 className="text-red-700 cursor-pointer" onClick={removeFromCart}>
            Remove
          </h2>
          {/* <h2
            className="text-yellow-400 cursor-pointer"
            onClick={moveToWishList}
          >
            Move to wishlist
          </h2> */}
          {isLoading && <p>Loading..</p>}
          {message && <p>{message}</p>}
        </div>
        <div className="flex flex-col items-end">
          <h1 className="headingTitle">${price}</h1>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
