import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Input } from "../../ButtonInput/index.js";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { fireDB } from "../../firebase/firebaseconfig.js";
import { addDoc, collection } from "firebase/firestore";

function AddressPop({ amount }) {
  let [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, getValues } = useForm();
  const userData = useSelector((state) => state.auth.user);
  const cartItem = useSelector((state) => state.cart.cartItem);
  const userId = useSelector((state) => state.auth.uId);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  

  const order = async () => {
    if (document.getElementById("rzp-payment")) return;

    const options = {
      key: "rzp_test_Eksk76wCAelhun",
      key_secret: "8eGfaCtJ6xhFDVL7z9Uaz8Qj",
      amount: parseInt(amount * 100),
      currency: "INR",
      order_receipt: "order_rcptid_" + getValues("fullname"),
      name: "LOCAL",
      description: "Product Purchase",
      handler: function (response) {
        toast.success("Payment Successful");

        const paymentId = response.razorpay_payment_id;

        const orderInfo = {
          cartItem: { ...cartItem },
          profile: {
            name: getValues("fullname"),
            contact: getValues("mobilenumber"),
            address: getValues("address"),
            picode: getValues("pincode"),
            email: userData,
            date: new Date().toLocaleString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            }),
            paymentId: paymentId,
            amount: amount,
            status: "paid",
          },
          uid: userId,
        };

        try {
          addDoc(collection(fireDB, "orders"), orderInfo);
        } catch (error) {
          console.log(error);
        }
      },

      theme: {
        color: "#F37254",
      },
    };

    const rzp = new Razorpay(options);
    rzp.open();
  };

  return (
    <>
      <div className="  text-center rounded-lg text-white font-bold">
        <button
          type="button"
          onClick={openModal}
          className="w-full  bg-violet-600 py-2 text-center rounded-lg text-white font-bold dark:bg-green-600"
        >
          Buy Now
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 top-56" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl p-2  text-left align-middle shadow-xl transition-all bg-gray-50">
                  <section className="">
                    <div className="flex flex-col items-center justify-center py-8 mx-auto  lg:py-0">
                      <div className="w-full  rounded-lg md:mt-0 sm:max-w-md xl:p-0 ">
                        Total Amount - {amount}
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                          <form
                            className="space-y-4 md:space-y-6"
                            onSubmit={handleSubmit(order)}
                          >
                            <div>
                              <Input
                                label="Enter Full Name"
                                type="text"
                                placeHolder=""
                                {...register("fullname", { required: true })}
                                required
                              />
                            </div>
                            <div>
                              <Input
                                label="Enter Full Address"
                                type="text"
                                placeHolder=""
                                {...register("address", { required: true })}
                                required
                              />
                            </div>
                            <div>
                              <Input
                                label="Enter Pincode"
                                type="text"
                                placeHolder=""
                                {...register("pincode", { required: true })}
                                required
                              />
                            </div>
                            <div>
                              <Input
                                label="Enter Mobile Number"
                                type="text"
                                placeHolder=""
                                {...register("mobilenumber", {
                                  required: true,
                                })}
                                required
                              />
                            </div>
                            <button
                              type="submit"
                              className="focus:outline-none w-full text-white bg-violet-600 dark:bg-green-600 hover:bg-violet-800  outline-0 font-medium rounded-lg text-sm px-5 py-2.5 "
                            >
                              Order Now
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </section>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default AddressPop;
