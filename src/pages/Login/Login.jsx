
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button, Input } from "../../ButtonInput";

function Login() {
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();
  const loggin= async () => {};

  return (
    <>
      <div className=" flex justify-center items-center h-screen">
        <div className=" bg-gray-800 px-10 py-10 rounded-xl dark:bg-slate-600">
          <div className="">
            <h1 className="text-center text-white text-xl mb-4 font-bold">
            Sign in to your account
            </h1>
          </div>
          <form onSubmit={handleSubmit(loggin)}>
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
