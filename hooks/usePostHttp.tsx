"use client";

import { useState } from "react";

export const usePostHttp = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  let response;

  async function sendRequest(method: string, url: string, data?: {}) {
    setIsLoading(true);
    try {
      if (data) {
        response = await fetch(url, {
          method: method,
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
        });
        const responseData = await response.json();

        if (response.ok) {
          setIsLoading(false);
          responseData.message && setMessage(responseData.message);
          return responseData;
        }
      } else {
        response = await fetch(url, {
          method: method,
          headers: { "Content-Type": "application/json" },
        });
        const responseData = await response.json();

        if (response.ok) {
          setIsLoading(false);
          responseData.message && setMessage(responseData.message);
          return responseData;
        }
      }
    } catch (error) {
      setIsLoading(false);
      console.log("Something went wrong");
    }
  }

  return { sendRequest, setIsLoading, isLoading, message };
};
