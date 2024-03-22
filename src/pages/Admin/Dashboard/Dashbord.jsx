import React, { useState } from "react";
import InfoCard from "../InfoCard/InfoCard";
import Table from "../Table";
import products from "../../../firebase/product/productdb";
import authfirebase from "../../../firebase/auth/fireAuth";

function Dashbord() {
  const [totalProduct , settotalProduct] = useState(0)
  const [totaluser,setTotalUser] = useState(0)
  React.useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await products.getProducts();
      settotalProduct(response.length)
      } catch (err) {
        console.error('Error getting products:   ', err);
      };
    };
    // Call function to retrieve data from db
    getProducts();
    }, []);
   
    React.useEffect(() => {
      const getUsers = async () => {
        try {
          const response = await authfirebase.getUsers();
        setTotalUser(response.length);
          console.log(response);
        } catch (err) {
          console.error("Error getting products:   ", err);
        }
      };
      // Call function to retrieve data from db
      getUsers();
    }, []);

  return (
    <div>
      <div className="container px-5 mx-auto my-10">
        <div className="flex flex-wrap -m-4 text-center">
          <InfoCard InfoName={"Total Product"} InfoNumber={totalProduct} />
          <InfoCard InfoName={"Total Order"} InfoNumber={50} />
          <InfoCard InfoName={"Total Users"} InfoNumber={totaluser} />
          <InfoCard InfoName={"Total Category"} InfoNumber={50} />
        </div>
      </div>
      <div className="m-4">
     <Table/>

      </div>
      
    </div>
  );
}

export default Dashbord;
