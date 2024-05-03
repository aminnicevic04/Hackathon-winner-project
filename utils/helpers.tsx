import Image from "next/image";
import React, { ReactNode, SetStateAction } from "react";
import { hash, compare } from "bcryptjs";
import jwt from "jsonwebtoken";

export function createGraphicIcon(source: string, alt: string): ReactNode {
  return <Image src={source} alt={alt} width={26} height={26} />;
}

export function addRequirementHandler(
  setStateAction: React.Dispatch<SetStateAction<any>>,
  stateKey: string,
  newValue: string
): void {
  setStateAction((prevState: any) => ({
    ...prevState,
    [stateKey]: [...prevState[stateKey], newValue],
  }));
}

export function removeRequirementHandler(
  indexToRemove: number,
  setStateAction: React.Dispatch<SetStateAction<any>>,
  stateKey: string
): void {
  setStateAction((prevState: any) => {
    const updatedState = prevState[stateKey].filter(
      (_: any, index: number) => index !== indexToRemove
    );

    return {
      ...prevState,
      [stateKey]: updatedState,
    };
  });
}

export async function hashPassword(password: string) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

export function responseMessage(message: string, status: number) {
  return new Response(JSON.stringify({ message: message }), { status: status });
}

export function responseJson(data: any, status: number) {
  return new Response(JSON.stringify(data), { status: status });
}

export function generateToken(id: string) {
  try {
    const token = jwt.sign(
      {
        userId: id,
      },
      "secret",
      { expiresIn: "1h" }
    );

    return token as string;
  } catch (error) {
    console.log("Cannot signup");
  }
}

export async function validatePassword(password: string, newPassword: string) {
  const isPasswordValid = await compare(password, newPassword);
  return isPasswordValid;
}

export function getAuthData() {
  const authData =
    typeof window !== "undefined" && localStorage.getItem("authData")
      ? JSON.parse(localStorage.getItem("authData")!)
      : null;

  return authData;
}
