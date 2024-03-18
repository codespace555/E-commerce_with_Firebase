import React from 'react'
import { useParams } from 'react-router-dom'
import ProductForm from '../ProductForm/ProductForm'

function Addproduct() {
 
  return (
    <div className=" flex justify-center items-center h-auto m-5">
    <div className=" bg-gray-800 px-10 py-10 rounded-xl ">
      <ProductForm/>
    </div>
  </div>
  )
}

export default Addproduct
