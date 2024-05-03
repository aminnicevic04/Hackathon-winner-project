import React, { useEffect } from "react";
import Router from "next/router";
import { getAuthData } from "@/utils/helpers";
import { useRouter } from "next/navigation";

const ProtectedAuth = (WrappedComponent: React.FC) => {
  const Wrapper = (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const authData = getAuthData();
      if (authData) {
        router.push("/");
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default ProtectedAuth;
