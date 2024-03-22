import React from "react";
import { DisplayOffer, Layout, ProductCard, Testimonial } from "../../components/components";
import Filter from "../../components/Filter/Filter";

function Home() {
  return (
    <Layout>
      <section>
        <div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg"
            alt=""
          />
        </div>
        <Filter />
        <div className="container px-5 py-8 md:py-16 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium title-font my-5 text-gray-900 dark:text-gray-200">
            Our Latest Collection
          </h1>
          {/* <div class="h-1 w-30 bg-pink-600 rounded"></div> */}
        </div>
        <div className="flex flex-wrap justify-evenly">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
<DisplayOffer/>
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
