import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input } from "../../ButtonInput";
import { toast } from "react-toastify";
import authfirebase from "../../firebase/auth/fireAuth";
import GoogleSignIn from "../../ButtonInput/SignInWithGoogle/GoogleSignIn";
import { useDispatch } from "react-redux";
import { loginauth } from "../../store/auth/authSlice";

function Login() {
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginuser = async (data) => {
    try {
      const user = await authfirebase.login(data);
      if (user) {
        navigate("/");
        toast.success(`Welcome Local`);
      } else {
        setError("Invalid email or password.");
      }
    } catch (err) {
      console.error("Error logging in: ", err);
      setError("An error occurred while logging in.");
    }
  };

  const singupWithEmail = async () => {
    try {
      const user = await authfirebase.loginBygoogle()
        if (user) {
          navigate("/");
          toast.success(`Welcome, ${user.email}`);
        }
      ;
    } catch (err) {
      console.error("Error signing in with Google: ", err);
      setError("An error occurred while signing in with Google.");
    }
  };

  return (
    <>
      <div className=" flex justify-center items-center h-screen">
        <div className=" bg-gray-800 px-10 py-10 rounded-xl dark:bg-slate-600">
          <div className="">
            <h1 className="text-center text-white text-xl mb-4 font-bold">
              Sign in to your account
            </h1>
          </div>
          <form onSubmit={handleSubmit(loginuser)}>
            <Input
              type="email"
              placeHolder="Enter your email address"
              {...register("email", {
                required: true,

                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              type="password"
              placeHolder="Enter Your password"
              {...register("password", { required: true })}
            />
            <Button type="submit" className="w-full mt-5 hover:bg-blue-500">
              Login
            </Button>
          </form>
          <h1 className="mt-2 text-center text-base text-gray-200">or</h1>
          <GoogleSignIn singupWithEmail={singupWithEmail} />

          {error && <p className=" text-red-500 text-center">{error}</p>}
          <p className="mt-2 text-center text-base text-gray-200">
            Don't have an account?
            <Link
              to="/signup"
              className="font-medium hover:text-blue-800 text-blue-500 transition duration-150 ease-in-out"
            >
              {" "}
              Sign up{" "}
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
