import React from "react";
import { FaUserCircle, FaKey } from "react-icons/fa";
import { BsKeyFill } from "react-icons/bs";

type Props = {
  name: string;
  type: string;
  placeholder: string;
  setValue? : string;
};

function InputField({ type, name, placeholder }: Props) {
  return (
    <div className="flex items-center  mt-4 ">
      <div className="h-full bg-slate-100 p-3 border">
        {name === "username" && <FaUserCircle className="w-6 h-6" />}
        {name === "password" && <BsKeyFill className="w-6 h-6" />}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="p-3 bg-slate-100 w-full"
      />
    </div>
  );
}

export default InputField;
