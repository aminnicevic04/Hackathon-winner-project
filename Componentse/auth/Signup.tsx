"use client";

import React, { useState } from "react";
import Input from "../shared/form/Input";
import Button from "../shared/form/Button";
import { useValidation } from "@/hooks/useValidation";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_FIRSTNAME,
  VALIDATOR_MINLENGTH,
} from "@/utils/validators";
import Link from "next/link";
import { SignupType, SubmitProps } from "@/types/auth/SignupTypes";
import { ExtraType, InputType } from "@/types/form/InputTypes";

const Signup: React.FC<SubmitProps> = ({ register }) => {
  const [isType, setisType] = useState(SignupType.Instructor);

  const first_name = useValidation([
    VALIDATOR_MINLENGTH(3),
    VALIDATOR_FIRSTNAME(),
  ]);
  const last_name = useValidation([
    VALIDATOR_MINLENGTH(3),
    VALIDATOR_FIRSTNAME(),
  ]);
  const email = useValidation([VALIDATOR_EMAIL()]);
  const password = useValidation([VALIDATOR_MINLENGTH(3)]);

  let formIsValid = false;
  if (
    first_name.isValid &&
    last_name.isValid &&
    email.isValid &&
    password.isValid
  ) {
    formIsValid = true;
  }

  function chooseType(type: SignupType.Instructor | SignupType.Student): void {
    setisType(type);
  }

  function submitRegister(e: React.FormEvent): void {
    e.preventDefault();

    const values = {
      first_name: first_name.value,
      last_name: last_name.value,
      email: email.value,
      password: password.value,
    };

    register(values, isType);
  }

  return (
    <form
      onSubmit={submitRegister}
      className="p-9 mt-4 max-w-2xl m-auto flex gap-6 flex-col justify-center align-right bg-[#1e1e1e] shadow-lg rounded-lg"
    >
      <div className="text-center">
        <h1 className="text-white font-bold text-2xl uppercase">
          Create Account
        </h1>
        <p className="p-2 text-gray-400 text-lg">
          Create an account to unlock a world of learning opportunities. Start
          your journey towards knowledge and growth with our innovative
          platform.
        </p>
        <p className="text-white font-bold">Register As:</p>
        <div className="flex justify-center gap-2 pt-2">
          <p
            className={`text-purple-400 cursor-pointer text-xl ${
              isType === "instructor" && "font-bold"
            }`}
            onClick={() => chooseType(SignupType.Instructor)}
          >
            Instructor
          </p>
          <p
            onClick={() => chooseType(SignupType.Student)}
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
          error={!first_name.isValid && first_name.isTouched}
          onChange={first_name.onChangeHandler}
          onBlur={first_name.onBlurHandler}
          id="instructor_firstname"
          value={first_name.value}
          placeholder="e.g John"
          label="First Name"
          helperText="Please enter valid name"
        />
        <Input
          type={InputType.Input}
          error={!last_name.isValid && last_name.isTouched}
          onChange={last_name.onChangeHandler}
          onBlur={last_name.onBlurHandler}
          id="instructor_lastname"
          value={last_name.value}
          placeholder="e.g Doe"
          label="Last Name"
          helperText="Please enter valid last name"
        />
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
          Register
        </Button>
      </div>
      <div className="text-center">
        <p className="text-white font-medium">
          You already have account?{" "}
          <Link className="text-blue-600 underline" href="/login">
            Click Here
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Signup;
