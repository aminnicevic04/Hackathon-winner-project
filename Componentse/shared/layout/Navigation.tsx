"use client";
import Button from "../form/Button";
import { StudentContext } from "@/context/StudentContext";
import { useAuth } from "@/hooks/useAuth";
import { createGraphicIcon, getAuthData } from "@/utils/helpers";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const Navigation: React.FC = () => {
  const { studentData } = useContext(StudentContext);

  const { logout } = useAuth();
  const authData = getAuthData();

  const isInstructor = authData?.typeAuth === "instructor";
  const isStudent = authData?.typeAuth === "student";

  return (
    <header className="p-4 shadow-md flex backdrop-blur-lg justify-between items-center fixed top-0 z-20 bg-transparent w-full border-b border-purple-600">
      <div className="w-fit">
        <Link href="/">
          <Image
            src="/assets/images/learnify.png"
            alt="logo"
            width={200}
            height={200}
          />
        </Link>
      </div>
      {isStudent && (
        <div className="flex gap-6 align-middle">
          <Link
            href="/student/courses"
            className="text-purple-400 transition-all hover:text-purple-600 font-bold"
          >
            Courses
          </Link>
          <Link
            href="/student/my-courses"
            className="text-purple-400 transition-all hover:text-purple-600 font-bold"
          >
            My Courses
          </Link>
        </div>
      )}
      {isInstructor && (
        <Link
          href="/instructor-dashboard"
          className="text-purple-400 transition-all hover:text-purple-600 font-bold"
        >
          Dashboard
        </Link>
      )}
      {!authData?.authToken && (
        <div className="flex gap-6 align-middle">
          <Link href="/" className="text-gray-400 font-light">
            Home
          </Link>
          <Link href="/" className="text-gray-400 font-light">
            About us
          </Link>
          <Link href="/" className="text-gray-400 font-light">
            Testimonials
          </Link>
          <Link href="/" className="text-gray-400 font-light">
            Contact us
          </Link>
        </div>
      )}
      <div className="flex gap-6 items-center">
        {isStudent && (
          <Link href="/cart" className="relative">
            <ShoppingBag color="#fff" />
            <span className="w-6 h-6 bg-yellow-400 absolute rounded-full bottom-[18px] left-4 text-white font-bold text-sm text-center">
              <span className="relative top-[2.4px]">
                {studentData?.cart?.items.length}
              </span>
            </span>
          </Link>
        )}
        {authData?.authToken && (
          <Button
            styleType="initial"
            type="button"
            disabled={false}
            isLink={false}
            onClick={logout}
            additionalStyles="bg-purple-600 transition-all hover:bg-purple-700"
          >
            Logout
          </Button>
        )}
        {!authData?.authToken && (
          <Button
            styleType="initial"
            type="button"
            disabled={false}
            isLink={true}
            linkHref="login"
            additionalStyles="bg-purple-600 transition-all hover:bg-purple-700"
          >
            Sign In
          </Button>
        )}
        {!authData?.authToken && (
          <Button
            disabled={false}
            styleType="initial"
            type="button"
            isLink={true}
            linkHref="register"
            additionalStyles="bg-purple-600 transition-all hover:bg-purple-700"
          >
            Sign Up
          </Button>
        )}
      </div>
    </header>
  );
};

export default Navigation;
