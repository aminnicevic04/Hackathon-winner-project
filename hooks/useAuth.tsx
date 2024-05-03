"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

export const useAuth = () => {
  const router = useRouter();
  const signin = useCallback((authToken: string, type: string, id: string) => {
    if (authToken) {
      const authData = {
        typeAuth: type === "student" ? "student" : "instructor",
        authToken: authToken,
        id: id,
      };
      localStorage.setItem("authData", JSON.stringify(authData));
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("authData");
    router.push("/login");
  }, []);

  return { signin, logout };
};
