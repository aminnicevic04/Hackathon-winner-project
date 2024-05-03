"use client";

import Login from "@/Componentse/auth/Login";
import ProtectedAuth from "@/Componentse/shared/auth/ProtectedAuth";
import { useAuth } from "@/hooks/useAuth";
import { usePostHttp } from "@/hooks/usePostHttp";
import { ClipLoader } from "react-spinners";
import { LoginData, LoginType } from "@/types/auth/LoginTypes";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { sendRequest, setIsLoading, isLoading, message } = usePostHttp();
  const { signin } = useAuth();
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="loader_wrapper">
        <ClipLoader />
      </div>
    );
  }

  if (message) {
    return <p>{message}</p>;
  }

  async function loginUser(
    data: LoginData,
    type: LoginType.Instructor | LoginType.Student
  ) {
    const loginData = {
      email: data.email,
      password: data.password,
      type: type,
    };
    const response = await sendRequest("POST", "/api/auth/login", loginData);

    if (!response) {
      alert("Not valid credentials");
      setIsLoading(false);
    } else {
      signin(response.token, response.type, response.id);
      router.push("/");
    }
  }

  return (
    <section className="flex items-center justify-center mt-40">
      <Login login={loginUser} />
    </section>
  );
};

export default ProtectedAuth(LoginPage);
