import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductForm from "../ProductForm/ProductForm";

function EditProduct() {
  const { slug } = useParams();
  const product = useSelector((state) => state.auth.product);

  return product ? (
    <div className=" flex justify-center items-center h-auto m-5">
      <div className=" bg-gray-800 px-10 py-10 rounded-xl ">
        {slug}
        <ProductForm/>
      </div>
    </div>
  ) : null;
}

export default EditProduct;
