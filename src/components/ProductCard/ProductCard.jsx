import React from "react";

function ProductCard({imglink = "https://dummyimage.com/720x400" , title = "This is title" , description = "description" , addToCart}) {
  return (
    <>
      <div className="p-4 md:w-1/4  drop-shadow-lg ">
        <div
          className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden dark:bg-[#2e3137] dark:text-gray-200"
         
        >
          <div className="flex justify-center cursor-pointer">
            <img
              className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
              src={imglink}
              alt= {title}
            />
          </div>
          <div className="p-5 border-t-2">
            <h2
              className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 dark:text-gray-300"
              
            >
             Local
            </h2>
            <h1
              className="title-font text-lg font-medium text-gray-900 mb-3 dark:text-gray-200"
              
            >
              {title}
            </h1>
            <p className="leading-relaxed mb-3">{description}</p>
            <p
              className="leading-relaxed mb-3 dark:text-gray-300"
              
            >
              ₹ 500
            </p>
            <div className=" flex justify-center">
              <button
              onClick={addToCart}
                type="button"
                className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
