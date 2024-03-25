import React, { useEffect, useState } from "react";
import { AddressPop, CartItem, Layout } from "../../components/components";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../../store/cart/cartSlice";
import { toast } from "react-toastify";

function Cart() {
  const cartitem = useSelector((state) => state.cart.cartItem);
  const dispatch = useDispatch();
  const [totalAmount, setTotalAmount] = useState([]);

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    console.log(item);
    toast.success("Delete cart product");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartitem));
  }, [cartitem]);

  useEffect(() => {
    let sum = 0;
    cartitem?.forEach((element) => {
      sum = sum + parseInt(element.price*element.quantity);
    });
    sum >= 300 ?setTotalAmount(sum): setTotalAmount(sum + 20)
    ;
  }, [cartitem]);

  return (
    <Layout>
      <div className=" bg-gray-100 pt-5 dark:bg-[#282c34]  h-auto">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>

        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6  ">
          <div className="rounded-lg md:w-2/3 ">
            {cartitem.length === 0 ? (
              <p className="h-[50vh] text-center flex items-center justify-center
              font-semibold text-2xl text-gray-800">
                Your Cart is Empty! Please add some items to your cart.
              </p>
            ) : (
              <>
                {" "}
                {cartitem?.map((item, index) => (
                  <div key={index}>
                    <CartItem
                      title={item.title}
                      image={item.imageurl}
                      price={item.price}
                      describe={item.discription}
                      slug={item.slug}
                      quantity={item.quantity}
                      deletecart={() => deleteCart(item)}
                    />
                  {
                  

                  }
                  </div>
                ))}
              </>
            )}
          </div>
          <div
            className={`mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3  dark:text-gray-600 text-black ${
              cartitem.length === 0 ? "hidden" : "block"
            }`}
          >
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700 dark:text-gray-600">Subtotal</p>
              <p className="text-gray-700 dark:text-gray-600">{totalAmount}</p>
            </div>
            <div className={`flex justify-between`}>
              <p
                className={`text-gray-700 dark:text-gray-600 ${
                  totalAmount >= 300 ? "hidden" : "block"
                }`}
              >
                Shipping
              </p>
              <p
                className={`text-gray-700 dark:text-gray-600 ${
                  totalAmount >= 300 ? "hidden" : "block"
                }`}
              >
                ₹20
              </p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between mb-3">
              <p className="text-lg font-bold dark:text-gray-900">Total</p>
              <div className>
                <p className="mb-1 text-lg font-bold dark:text-gray-900 ">
                  {totalAmount}
                </p>
              </div>
            </div>
            <AddressPop amount={totalAmount} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Cart;
