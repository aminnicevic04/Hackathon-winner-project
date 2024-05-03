import Image from "next/image";
import React from "react";

const CourseCheckout = ({
  image,
  title,
  price,
}: {
  image: string;
  title: string;
  price: number;
}) => {
  return (
    <div className="mt-6 flex items-center justify-between">
      <Image src={image} alt={title} width={100} height={100} />
      <h1 className="text-white font-bold text-md">{title}</h1>
      <p className="text-white font-bold">${price}</p>
    </div>
  );
};

export default CourseCheckout;
