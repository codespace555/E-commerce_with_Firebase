import React, { useEffect, useState } from "react";
import { AddressPop, CartItem, Layout } from "../../components/components";
import { useSelector } from "react-redux";

function Cart() {
  const cartitem = useSelector(state => state.cart);
  return (
    <Layout>
      <div className="h-auto bg-gray-100 pt-5 dark:bg-[#282c34] ">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>

        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6  ">
        <div className="rounded-lg md:w-2/3 ">
          {
            cartitem.length===0?<p className='text-center'>Your Cart is Empty! Please add some items to your cart.</p>:<> {
              cartitem?.map((item,index) => (
                <div key={index}>
                 
                  <CartItem title={item.title} image ={item.imageurl} price={item.price} describe={item.discription} slug={item.slug}/>
                  
                </div>
              ))
            }
            </>
          }
          </div>
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3 dark:bg-[#202122] dark:text-gray-200">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700 dark:text-gray-200">Subtotal</p>
              <p className="text-gray-700 dark:text-gray-200">₹100</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700 dark:text-gray-200">Shipping</p>
              <p className="text-gray-700 dark:text-gray-200">₹20</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between mb-3">
              <p className="text-lg font-bold dark:text-gray-200">Total</p>
              <div className>
                <p className="mb-1 text-lg font-bold dark:text-gray-200">
                  ₹200
                </p>
              </div>
            </div>
            <AddressPop/>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Cart;
