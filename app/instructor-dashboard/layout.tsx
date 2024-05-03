"use client";
import { InstructorNav } from "@/Componentse/instructor";
import { InstructorContext } from "@/context/InstructorContext";
import { Metadata } from "next";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";

export default function InstructorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { currentStep } = useContext(InstructorContext);
  const path = usePathname();
  const isCreating = path === "/instructor-dashboard/new-course";

  return (
    <section>
      <InstructorNav />
      {isCreating && (
        <div
          className={`bg-purple-700 h-2 transition-all ${
            (currentStep === 0 && "w-[25%]") ||
            (currentStep === 1 && "w-[50%]") ||
            (currentStep === 2 && "w-[75%]") ||
            (currentStep === 3 && "w-full")
          }`}
        ></div>
      )}
      {children}
    </section>
  );
}
