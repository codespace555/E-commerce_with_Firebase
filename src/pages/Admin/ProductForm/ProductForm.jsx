import React, { useState } from "react";
import { Input } from "../../../ButtonInput";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import productsfiber from "../../../firebase/product/productdb";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ProductForm({productitem}) {
  const products = useSelector((state) => state.auth.product);
  const [product, setProduct] = useState(products);
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, getValues } = useForm({
    defaultValues:{ 
      title: productitem?.title || "",
    price: productitem?.price || "",
    category: productitem?.category || "",
    imageurl: productitem?.imageurl || "",
    discription: productitem?.discription || "",
    slug: productitem?.slug ||  ""
  },
    
  });

  const editProduct = async() => {
    if(productitem){
      await productsfiber.editProduct(getValues(),productitem.id).then(()=>{
        toast("Product Updated Successfully");
        navigate("/dashboard")
      })
    }



  };
  const addproduct = async({data}) => {
    try {
      productsfiber.addProduct(getValues());
      console.log("Added");
      toast.success(`product has been added!`);
      navigate("/dashboard")
    } catch (error) {
      alert(`Error adding item: ${error.message}`);
      
    }
    
  };
  return (
    <div>
      <form onSubmit={handleSubmit(productitem ? editProduct : addproduct)}>
        <div className=" flex justify-center items-center h-screen">
          <div className=" bg-gray-800 px-10 py-10 rounded-xl ">
            <div className="">
              <h1 className="text-center text-white text-xl mb-4 font-bold">
                {productitem ? "Update Product" : "Add Product"}
              </h1>
            </div>
            <div>
              <Input
                placeholder="Title"
                className="mb-4"
                {...register("title", { required: true })}
              />
            </div>
            <div>
              <Input
                placeholder="Price"
                className="mb-4"
                {...register("price", { required: true })}
              />
            </div>
            <div>
              <Input
                placeholder="Product image"
                className="mb-4"
                {...register("imageurl", { required: true })}
              />
            </div>
           
            <div>
              <Input
                placeholder="Category"
                className="mb-4"
                {...register("category", { required: true })}
              />
            </div>
            <div>
              <textarea
                cols="30"
                rows="10"
                name="title"
                className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
                placeholder="Product discription"
                {...register("discription", { required: true })}
              ></textarea>
            </div>
            <div className=" flex justify-center mb-3">
              <button
                className=" bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg"
                type="submit"
              >
                {productitem ? " Update Product" : "Add new product"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
