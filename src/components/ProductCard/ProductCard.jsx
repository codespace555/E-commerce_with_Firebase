import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cart/cartSlice";
import { toast } from "react-toastify";

function ProductCard({
  imglink = "https://dummyimage.com/720x400",
  title = "This is title",
  description = "description",
  addToCartproduct,
  price = 300,
}) {

  const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart)

    const addCart = (product) => {
     
        dispatch(addToCart(product))
        console.log(addToCartproduct)
        toast("Added To Cart!")
     
      
  }


  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
}, [cartItems])

useEffect( ()=>{
  
})




  return (
    <>
      <div className="w-[320px] rounded-md border h-[420px] overflow-hidden dark:bg-gray-600 dark:text-gray-300">
        <img
          src={imglink}
          alt={title.slice(0, 60)}
          className="h-[200px] w-full rounded-t-md object-cover"
        />
        <div>
          <div className="p-2">
          <h1 className="inline-flex items-center text-sm font-semibold">
            {title.slice(0, 60)}
          </h1>
          <p className="mt-2 text-sm text-gray-900  overflow-hidden h-20">
            {description.slice(0, 190)}
          </p>
          </div>
          <hr />
          <div className="   px-5">
            <p className="leading-relaxed mb-1 dark:text-gray-300 text-xl ">
              ₹{price}
            </p>

            <button
              type="button"
              className="mb-3 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={() => addCart( addToCartproduct)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
