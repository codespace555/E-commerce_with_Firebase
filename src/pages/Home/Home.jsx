import React, { useState } from "react";
import {
  DisplayOffer,
  Layout,
  Loder,
  ProductCard,
  SlideImg,
  Testimonial,
} from "../../components/components";
import Filter from "../../components/Filter/Filter";
import productsfiber from "../../firebase/product/productdb";


function Home() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  React.useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await productsfiber.getProducts();
        let item = [];
        for (let i = 0; i < response.length; i++) {
          item.push(response[i]);
        }
        setProduct(item);
        setIsloading(false)
     
      } catch (err) {
        console.error("Error getting products:   ", err);
      }
    };
    // Call function to retrieve data from db
    getProducts();
  }, []);
  return (
    isLoading?<Loder/>:
    <Layout>
      <section>
        <div>
          <SlideImg />
        </div>
        <Filter data={product} />
        <div className="container px-5 py-8 md:py-16 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium title-font my-5 text-gray-900 dark:text-gray-200">
            Our Latest Collection
          </h1>
          {/* <div class="h-1 w-30 bg-pink-600 rounded"></div> */}
        </div>
        <div className="flex flex-wrap  gap-1 w-full items-center justify-center">
          {product?.map((item, index) => {
  
            return (
              <div
                className="p-4   drop-shadow-lg  "
                key={index}
              >
                <ProductCard
                  title={item?.title}
                  price={item?.price}
                  description={item?.discription}
                  imglink={item?.imageurl}
                  addToCartproduct={{...item}}
                />
              </div>
            );
          })}
        </div>
        <DisplayOffer />
        <div className="container px-5 py-10 mx-auto text-gray-600 body-font mb-10">
          <h1 className=" text-center text-3xl font-bold text-black dark:text-gray-300">
            Testimonial
          </h1>

          <h2 className=" text-center text-2xl font-semibold mb-10 dark:text-gray-300">
            What our <span className=" text-pink-500">customers</span> are
            saying
          </h2>

          <div className="flex flex-wrap -m-4 border-pink-600 rounded-lg sm:rounded-none ">
            <Testimonial name="Naman Kumar" />
            <Testimonial name="Ranjan Kumar" />
            <Testimonial name="Sahil Kumar" />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Home;
