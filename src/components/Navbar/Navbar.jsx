import React, { useState } from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { darkTheme } from "../../store/theam/theme";
import { Togglebtn } from "../../ButtonInput";

import { Logo } from "../components";

function Navbar() {
  const themeMode = useSelector((state) => state.theme.themethemeMode);
  const authStatus = useSelector((state) => state.auth.status);
  const adminStatus = useSelector((state) => state.auth.admin);

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [drpo, setDrop] = useState("hidden");

  // const navigate = useNavigate();
  const dropDown = () => {
    if (drpo === "hidden") {
      setDrop("flex");
    } else {
      setDrop("hidden");
    }
  };
  const themechange = () => {
    dispatch(darkTheme());
  };
  const authItem = [
    {
      name: "Login",
      slug: "/login",
      active: authStatus,
    },

    {
      name: "Logout",
      slug: "/logout",
      active: !authStatus,
    },
  ];
  const adminItem = [
    {
      name: "Admin",
      slug: "/dashboard",
      active: adminStatus,
    },
  ];

  const navItem = [
    {
      name: "Home",
      slug: "/",
    },
    {
      name: "All Products",
      slug: "/all-products",
    },
    {
      name: "Order",
      slug: "/order",
    },
  ];

  return (
    <>
      <header>
        <p className="flex h-10 items-center justify-center bg-pink-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8 dark:text-white dark:bg-[#3e4042]">
          Get free delivery on orders over ₹300
        </p>
        <nav className="flex justify-between items-center bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl dark:text-white dark:bg-[#282c34] py-2">
          <div>
            <Logo />
          </div>
          <div>
            <ul className="flex justify-evenly gap-10 items-center">
              {navItem.map((item) => (
                <li key={item.slug}>
                  <button className="hover:underline ">{item.name}</button>
                </li>
              ))}

              {adminItem.map((item) =>
                item.active ? (
                  <li key={item.slug}>
                    <button className="hover:underline ">{item.name}</button>
                  </li>
                ) : null
              )}

              {authItem.map((item) =>
                !item.active ? (
                  <li key={item.slug}>
                    {" "}
                    <button className=" hover:bg-blue-600 hover:text-gray-300 border-blue-900 border-2 px-6 py-2 rounded-lg text-center ">
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}

              <Togglebtn togglechange={themechange} checked={themeMode} />
              
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
