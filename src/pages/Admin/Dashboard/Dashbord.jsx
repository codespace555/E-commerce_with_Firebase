import React, { useEffect, useState } from "react";
import InfoCard from "../InfoCard/InfoCard";
import Table from "../Table";
import products from "../../../firebase/product/productdb";
import authfirebase from "../../../firebase/auth/fireAuth";
import orderlist from "../../../firebase/order/order";

function Dashbord() {
  const [totalProduct , settotalProduct] = useState([])
  const [totaluser,setTotalUser] = useState([])
  const [order,setOrder] = useState([])

 
    const getProducts = async () => {
      try {
        const response = await products.getProducts();
      settotalProduct(response)
      } catch (err) {
        console.error('Error getting products:   ', err);
      }
    }
  
      const getUsers = async () => {
        try {
          const response = await authfirebase.getUsers();
          setTotalUser(response);
        } catch (err) {
          console.error("Error getting products:   ", err);
        }
      };
      
    
      const getOrder = async () => {
        try {
          const response = await orderlist.getOrders();
          setOrder(response);
          console.log(response);
        } catch (err) {
          console.error("Error getting products:   ", err);
        }
      };
      
 useEffect(() => {
  getProducts();
  getUsers();
  getOrder();
 },[])
 console.log(totaluser)

  return (
    <div>
      <div className=" px-5 mx-auto my-10 w-full">
        <div className="flex flex-wrap -m-4 text-center w-full  items-center justify-center ">
          <InfoCard InfoName={"Total Product"} InfoNumber={totalProduct.length} />
          <InfoCard InfoName={"Total Order"} InfoNumber={order.length} />
          <InfoCard InfoName={"Total Users"} InfoNumber={totaluser.length} />
     
        </div>
      </div>
      <div className="m-4">
     <Table orders={order} products={totalProduct}   users={totaluser}/>

      </div>
      
    </div>
  );
}

export default Dashbord;
