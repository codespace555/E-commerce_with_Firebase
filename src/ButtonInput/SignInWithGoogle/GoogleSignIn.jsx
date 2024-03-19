import React from "react";
import { FcGoogle } from "react-icons/fc";
import authfirebase from "../../firebase/auth/fireAuth";
import { useNavigate } from "react-router-dom";

function GoogleSignIn({singupWithEmail}) {
  
  return (
    <div>
      <button
        className="w-full mt-5 bg-gray-700 hover:bg-gray-600 flex p-3 items-center gap-2 justify-center rounded-lg dark:text-gray-200"
        onClick={singupWithEmail}
      >
        <FcGoogle /> Singup with Google
      </button>
    </div>
  );
}

export default GoogleSignIn;
