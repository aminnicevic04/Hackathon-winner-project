"use client";

import dynamic from "next/dynamic";

const Navigation = dynamic(
  () => import("@/Componentse/shared/layout/Navigation"),
  { ssr: false }
);

import "./globals.css";
import { usePathname } from "next/navigation";
import { InstructorProvider } from "@/context/InstructorContext";
import { getAuthData } from "@/utils/helpers";
import { StudentProvider } from "@/context/StudentContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isInstructorPathname =
    pathname === "/instructor-dashboard" ||
    pathname === "/instructor-dashboard/new-course" ||
    pathname === "/instructor-dashboard/new-course/manage";
  const isLoginPathname = pathname === "/register" || pathname === "/login";
  const showBoolean = !isInstructorPathname && !isLoginPathname;
  const authData = getAuthData();

  return (
    <html lang="en">
      <body>
        {authData?.typeAuth === "instructor" ? (
          <InstructorProvider>
            {showBoolean && <Navigation />}
            {children}
          </InstructorProvider>
        ) : (
          <StudentProvider>
            {showBoolean && <Navigation />}
            {children}
          </StudentProvider>
        )}
      </body>
    </html>
  );
}
