import React, { useState } from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { darkTheme } from "../../store/theam/theme";
import { Togglebtn } from "../../ButtonInput";
import { GoPersonFill } from "react-icons/go";
import { MdOutlineLogout } from "react-icons/md";
import { Logo } from "../components";
import authfirebase from "../../firebase/auth/fireAuth";
import { logoutauth } from "../../store/auth/authSlice";
import { SiPhpmyadmin } from "react-icons/si";
import { SiHomeadvisor } from "react-icons/si";
import { MdProductionQuantityLimits } from "react-icons/md";
import { LiaJediOrder } from "react-icons/lia";

function Navbar() {
  const themeMode = useSelector((state) => state.theme.themethemeMode);
  const authStatus = useSelector((state) => state.auth.status);
  const adminStatus = useSelector((state) => state.auth.admin);
  const userData = useSelector((state) => state.auth.userImg);
  const cartItems = useSelector((state) => state.cart.cartItem)
  const userUid = useSelector((state) => state.auth.uId);


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  // const navigate = useNavigate();

  const themechange = () => {
    dispatch(darkTheme());
  };
  const adminItem = [
    {
      name: "Admin",
      icon:<SiPhpmyadmin />,
      slug: "/dashboard",
      active: adminStatus,
    },
  ];

  const navItem = [
    {
      name: "Home",
      icon: <SiHomeadvisor />,
      slug: "/",
    },
    {
      name: "All Products",
      icon: <MdProductionQuantityLimits />,
      slug: "/all-products",
    },
    {
      name: "Order",
      slug: "/order",
      icon:<LiaJediOrder />
    },
  ];

  const logouthendel = async () => {
    await authfirebase.logout();

    dispatch(logoutauth(null));
  };

  return (
    <>
      {/* mobile */}
      <div className="bg-white sticky top-0 z-50  ">
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-gray-400 pb-12 shadow-xl dark:bg-[#282c34] py-5">
                  <Logo />
                  <div className="flex px-4 pb-2 pt-28 justify-between items-center">
                    <button
                      type="button"
                      className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-black"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <RxCross2 />
                    </button>

                    <Togglebtn togglechange={themechange} checked={themeMode} />
                  </div>
                  <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                    <ul className="flex flex-col gap-10 justify-between items-center">
                      {navItem.map((item) => (
                        <li key={item.slug}>
                          <button
                            onClick={() => navigate(item.slug)}
                            className="hover:underline flex flex-col gap-10 justify-between items-center"
                          >
                           {item.icon} {item.name}
                          </button>
                        </li>
                      ))}

                      {adminItem.map((item) =>
                        item.active ? (
                          <li key={item.slug}>
                            <button
                              onClick={() => navigate(item.slug)}
                              className="hover:underline flex flex-col gap-10 justify-between items-center"
                            >
                             {item.icon}  {item.name}
                            </button>
                          </li>
                        ) : null
                      )}

                      {authStatus ? (
                        <li>
                          <button
                            onClick={logouthendel}
                            className=" hover:bg-green-600 hover:text-gray-300 border-green-900 border-2 px-6 py-2 rounded-lg text-center "
                          >
                            Logout
                          </button>
                        </li>
                      ) : (
                        <button
                          onClick={() => navigate("/login")}
                          className=" hover:bg-blue-600 hover:text-gray-300 border-blue-900 border-2 px-6 py-2 rounded-lg text-center "
                        >
                          <GoPersonFill /> Login
                        </button>
                      )}
                      <Link to={"/cart"}>
                        <div className="ml-4 flex lg:ml-6 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            />
                          </svg>

                          <span className="ml-2 text-sm font-medium text-pink-700">
                          {cartItems.length}
                          </span>
                          <span className="sr-only">
                            items in cart, view bag
                          </span>
                        </div>
                      </Link>
                    </ul>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* desktop */}
        <header>
          <div className="flex justify-between h-10 items-center  bg-[#8c946c] px-4 text-sm font-medium text-white sm:px-6 lg:px-8 dark:text-white dark:bg-[#3e4042]">
            <span className="hidden md:block">
              Get free delivery on orders over ₹300{" "}
            </span>
            <span className="font-semibold text-xl">
              Welcome To Local <span></span>
            </span>
            <Togglebtn togglechange={themechange} checked={themeMode} />
          </div>
          <nav className="flex  items-center bg-gray-400 px-4 sm:px-6 lg:px-8 shadow-xl dark:text-white dark:bg-[#282c34] py-2 w-full gap-5 justify-between">
          <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 md:hidden lg:hidden dark:bg-[#505257]"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            <div className="flex gap-20  w-full">
            <div>
              <Logo />
            </div>
              
              <ul className="md:flex lg:flex md:justify-between lg:justify-between gap-20 items-center hidden w-full  ">
                <div className="flex justify-around gap-5">
                {navItem.map((item) => (
                  <li key={item.slug}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className="hover:underline flex items-center justify-center gap-1"
                    >
                      {item.icon} {item.name}
                    </button>
                  </li>
                ))}

                {adminItem.map((item) =>
                  item.active ? (
                    <li key={item.slug}>
                      <button
                        onClick={() => navigate(item.slug)}
                        className="hover:underline flex items-center justify-center gap-1"
                      >
                       {item.icon}  {item.name}
                      </button>
                    </li>
                  ) : null
                )}
</div>
                <div className="flex items-center justify-around gap-5 ">
                {authStatus ? (
                  <li>
                    <button
                      onClick={logouthendel}
                      className=" bg-green-600 hover:text-gray-300 border-green-900 border-2 px-6 py-2 rounded-lg text-center flex gap-2 items-center justify-center  "
                    >
                     <MdOutlineLogout /> Logout
                    </button>
                  </li>
                ) : (
                  <button
                    onClick={() => navigate("/login")}
                    className=" hover:bg-blue-600 hover:text-gray-300 border-blue-900 border-2 px-6 py-2 rounded-lg text-center flex gap-2 items-center justify-center "
                  >
                     <GoPersonFill /> Login
                  </button>
                )}

               
                <Link to={"/cart"}>
                  <div className=" flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>

                    <span className="ml-2 text-sm font-medium text-pink-700">
                      {cartItems.length}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </div>
                </Link>
                </div>

              </ul>
              
            </div>
            <Link to={`/profile/${userUid}`}>
            <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={
                      userData
                        ? userData
                        : "https://img.freepik.com/premium-vector/social-avatar-stories-gradient-frame_41737-3.jpg"
                    }
                    alt=""
                  />
                </div>
                </Link>
          </nav>
        </header>
      </div>
    </>
  );
}

export default Navbar;
