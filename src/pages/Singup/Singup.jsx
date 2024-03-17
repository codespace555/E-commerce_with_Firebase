import React, { useState } from "react";
import { Button, Input } from "../../ButtonInput";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Singup() {
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();
  const signup = async () => {};

  return (
    <>
      <div className=" flex justify-center items-center h-screen">
        <div className=" bg-gray-800 px-10 py-10 rounded-xl dark:bg-slate-600">
          <div className="">
            <h1 className="text-center text-white text-xl mb-4 font-bold">
              Signup to create your account
            </h1>
          </div>
          <form onSubmit={handleSubmit(signup)}>
            <Input
              type="text"
             
              placeHolder="Enter your full name"
              {...register("name", {
                required: true,
              })}
            />
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
            <Button type="submit" className="w-full mt-5 bg-pink-500 hover:bg-pink-700">
              Sign up
            </Button>
          </form>
          {error && <p className=" text-red-500 text-center">{error}</p>}
          <p className="mt-2 text-center text-base text-gray-200">
            Already have an account?
            <Link
              to="/login"
              className="font-medium hover:text-blue-800 text-blue-500 transition duration-150 ease-in-out"
            >
              {" "}
              Login{" "}
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}

export default Singup;
