import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ProductForm from "../ProductForm/ProductForm";
import products from "../../../firebase/product/productdb";

function EditProduct() {
  const { slug } = useParams();
  const [productsitem, setProductsitem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      if (slug) {
        const post = await products.getProduct(slug);
        if (post) {
          setProductsitem(...post)
          console.log(productsitem)
        } else {
          navigate("/");
        }
      } else {
        navigate("/");
      }
    };
    fetchProduct()
  }, [slug, navigate]);

  return productsitem ? (
    <div className=" flex justify-center items-center h-auto m-5">
      <div className=" bg-gray-800 px-10 py-10 rounded-xl ">
      
        <ProductForm productitem={productsitem} />
      </div>
    </div>
  ) : null;
}

export default EditProduct;
