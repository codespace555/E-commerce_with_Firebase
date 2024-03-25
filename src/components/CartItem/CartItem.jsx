import React from "react";
import {  useNavigate } from "react-router-dom";
import { deleteFromCart } from "../../store/cart/cartSlice";
import { useDispatch } from "react-redux";

function CartItem({title, image, price,describe,slug,deletecart,quantity}) {
const navigate = useNavigate()


  return (
    <>
      <div className="rounded-lg md:w-2/3 ">
        <div className="justify-between mb-6 rounded-lg border  drop-shadow-xl bg-white p-6  sm:flex  sm:justify-start dark:bg-[#202122] dark:text-gray-300">
          <img
            src={image|| "https://dummyimage.com/400x400"}
            alt="product-image"
            className="w-full rounded-lg sm:w-40"
          />
          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div className="mt-5 sm:mt-0">
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-300">
               <p onClick={() => navigate(`/poroductdetails/${slug}`)}> {title||"This is title"}</p>
              </h2>
              <h2 className="text-sm  text-gray-900 dark:text-gray-300">
         
              </h2>
              <p className="mt-1 text-xs font-semibold text-gray-700">₹{price ||100}</p>
              <div>
                <button className="bg-red-500 px-5 txt-xl rounded-md py-2">{quantity ||1}</button>
             
              </div>
            </div>
            <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6
          
            " onClick={deletecart}>
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
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
