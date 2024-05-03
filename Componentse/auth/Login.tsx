"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useValidation } from "@/hooks/useValidation";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from "@/utils/validators";
import { LoginProps, LoginType } from "@/types/auth/LoginTypes";
import Input from "../shared/form/Input";
import Button from "../shared/form/Button";
import { ExtraType, InputType } from "@/types/form/InputTypes";

const Login: React.FC<LoginProps> = ({ login }) => {
  const [isType, setisType] = useState(LoginType.Instructor);
  const email = useValidation([VALIDATOR_EMAIL()]);
  const password = useValidation([VALIDATOR_MINLENGTH(3)]);

  let formIsValid = false;
  if (email.isValid && password.isValid) {
    formIsValid = true;
  }

  function chooseType(type: LoginType.Instructor | LoginType.Student): void {
    setisType(type);
  }

  function submitLogin(e: React.FormEvent): void {
    e.preventDefault();
    const values = {
      email: email.value,
      password: password.value,
    };
    login(values, isType);
  }

  return (
    <form
      onSubmit={submitLogin}
      className="p-9 mt-4 max-w-2xl m-auto flex gap-6 flex-col justify-center align-right bg-[#1e1e1e] shadow-lg rounded-lg"
    >
      <div className="text-center">
        <h1 className="text-white font-bold text-2xl uppercase">
          Login to Account
        </h1>
        <p className="p-2 text-gray-400 text-lg">
          Please sign in to access your account. If you don't have an account
          yet, you can create one easily
        </p>
        <p className="text-white font-bold">Login As:</p>
        <div className="flex justify-center gap-2 pt-2">
          <p
            className={`text-purple-400 cursor-pointer text-xl ${
              isType === "instructor" && "font-bold"
            }`}
            onClick={() => chooseType(LoginType.Instructor)}
          >
            Instructor
          </p>
          <p
            onClick={() => chooseType(LoginType.Student)}
            className={`text-blue-400 cursor-pointer text-xl ${
              isType === "student" && "font-bold"
            }`}
          >
            Student
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <Input
          type={InputType.Input}
          error={!email.isValid && email.isTouched}
          onChange={email.onChangeHandler}
          onBlur={email.onBlurHandler}
          id="instructor_email"
          value={email.value}
          placeholder="johndoe@gmail.com"
          label="Email"
          helperText="Please enter valid email"
        />
        <Input
          type={InputType.Input}
          error={!password.isValid && password.isTouched}
          onChange={password.onChangeHandler}
          onBlur={password.onBlurHandler}
          id="instructor_password"
          value={password.value}
          placeholder="****"
          label="Password"
          helperText="Please enter valid password"
          extraType={ExtraType.Password}
        />
        <Button
          type="submit"
          styleType="initial"
          disabled={!formIsValid}
          additionalStyles="bg-purple-600 transition-all hover:bg-purple-700"
        >
          Login
        </Button>
      </div>
      <div className="text-center">
        <p className="text-white font-medium">
          You dont have account?{" "}
          <Link className="text-blue-600 underline" href="/register">
            Click Here
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Login;
