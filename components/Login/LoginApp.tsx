import React, { useEffect, useState } from "react";
import { AiFillFacebook, AiOutlineGoogle } from "react-icons/ai";
import { app } from '../../firebaseConfig'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

type Props = {
  name: string;
};

function LoginApp({ name }: Props) {
  let bgText = "";
  let bgIcon = "";

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const Login = () => {
    if (name === "GOOGLE") {
      signInWithPopup(auth, googleProvider)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  switch (name) {
    case "FACEBOOK":
      bgText = "bg-blue-600";
      bgIcon = "bg-blue-900";
      break;
    case "GOOGLE":
      bgText = "bg-red-600";
      bgIcon = "bg-red-900";
      break;
  }

  return (
    <div
      className="flex justify-center items-center h-[48px]  overflow-hidden rounded-xl mt-5 cursor-pointer"
      onClick={Login}
    >
      <div className={`${bgIcon} p-4 rounded-l-xl`}>
        {name === "GOOGLE" && (
          <AiOutlineGoogle className="fill-white w-5 h-5" />
        )}
        {name === "FACEBOOK" && (
          <AiFillFacebook className="fill-white w-5 h-5" />
        )}
      </div>
      <div
        className={`${bgText} p-3 bgIcon rounded-r-xl text-center text-white w-[250px]`}
      >
        LOGIN WITH {name}
      </div>
    </div>
  );
}

export default LoginApp;
