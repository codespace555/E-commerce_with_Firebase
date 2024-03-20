import React, { useState } from 'react'
import productsfiber from '../../firebase/product/productdb';
import ProductCard from '../../components/ProductCard/ProductCard';


function Allproducts() {
const [products, setProducts] = useState([]);


React.useEffect(() => {
  const getProduct = async () => {
    try {
      const response = await productsfiber.getProducts();
      setProducts(response);
      console.log(products)
    } catch (err) {
      console.error('Error getting products:   ', err);
    };
  };
  // Call function to retrieve data from db
  getProduct();
  }, []);


  return (
    <>
    <div className='flex flex-wrap'>
  
   { products?.map((item,index) => {
    return (<div className="p-4 md:w-1/4  drop-shadow-lg  " key={index}>
      
      <ProductCard title={item.title}  price={item.price} description={item.discription} imglink={item.imageurl} />
      
    </div>)

   })
   
}

</div> 
    </>
  )
}

export default Allproducts
