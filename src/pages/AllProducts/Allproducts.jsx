import React, { useState } from 'react'
import productsfiber from '../../firebase/product/productdb';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Link, useNavigate } from 'react-router-dom';


function Allproducts() {
const [products, setProducts] = useState([]);
const navigate = useNavigate()


React.useEffect(() => {
  const getProducts = async () => {
    try {
      const response = await productsfiber.getProducts();
      setProducts(response);
      console.log(products)
    } catch (err) {
      console.error('Error getting products:   ', err);
    };
  };
  // Call function to retrieve data from db
  getProducts();
  }, []);


  return (
    <>
    <div className='flex flex-wrap gap-5 items-center justify-around w-full'>
  
   { products?.map((item,index) => {
    console.log(item.slug)
    return (<Link to={`/poroductdetails/${item.slug}`} className="p-4 md:w-1/4  drop-shadow-lg  "  key={index} >
      
      <ProductCard title={item.title}  price={item.price} description={item.discription} imglink={item.imageurl} addToCartproduct={item} />
      
    </Link>)

   })
   
}

</div> 
    </>
  )
}

export default Allproducts
