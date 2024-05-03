"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../Parallax UI/3d-card";
import Link from "next/link";

export function ThreeDCardDemo({
  slika,
  imeProfesora,
  brojKurseva,
  deskripcija,
  twitter,
}: {
  slika: any;
  imeProfesora: string;
  brojKurseva?: number;
  deskripcija: string;
  twitter: string;
}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-stone-200 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={slika}
            height="1000"
            width="1000"
            className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl bg-contain"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-2xl mt-8 font-bold text-neutral-600 dark:text-white"
        >
          {imeProfesora}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {deskripcija}
        </CardItem>
        <div className="flex justify-between items-center mt-4">
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Number of courses:{" "}
            <span className="font-extrabold text-lg">{brojKurseva}</span>
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href={`https://twitter.com/${twitter}`}
            target="__blank"
            className="px-4 py-2 rounded-xl text-sm font-normal dark:text-white"
          >
            Contact →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
