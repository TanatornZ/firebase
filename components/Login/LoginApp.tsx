import React, { useEffect, useState } from "react";
import { AiFillFacebook ,AiOutlineGoogle } from "react-icons/ai";

type Props = {
  name: string;
};

function LoginApp({ name }: Props) {
  let bgText = "";
  let bgIcon = "";

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
    <div className="flex justify-center items-center h-[48px]  overflow-hidden rounded-xl mt-5">
      <div className={`${bgIcon} p-4 rounded-l-xl`}>

        {name === 'GOOGLE' && <AiOutlineGoogle className="fill-white w-5 h-5" />}
        {name === 'FACEBOOK' && <AiFillFacebook className="fill-white w-5 h-5" />}
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
