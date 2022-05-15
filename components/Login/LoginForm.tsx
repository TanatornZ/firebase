import React from "react";
import InputField from "./InputField";
import LoginApp from "./LoginApp";

type Props = {};

function LoginForm({}: Props) {
  return (
    <div className="w-[400px] p-12 rounded-2xl">
      <form className="flex flex-col ">
        <InputField
          name="username"
          placeholder="username or email"
          type="text"
        />
        <InputField name="password" placeholder="Password" type="password" />

        <button
          type="submit"
          className="p-3 my-3 rounded-xl bg-blue-700 text-white self-center"
        >
          <p>LOGIN</p>
        </button>

        <div className="flex justify-between">
          <p className="">Register Now</p>
          <p className="text-blue-600">forgot password ?</p>
        </div>
      </form>

      <p className=" flex items-center mt-5 flex-row text-xl before:border-b before:flex-auto before:mr-3 after:ml-3 after:flex-auto after:border-b">
        or
      </p>

      <LoginApp name="FACEBOOK" />
      <LoginApp name="GOOGLE" />
    </div>
  );
}

export default LoginForm;
