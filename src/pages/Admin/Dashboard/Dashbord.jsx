import React, { useState } from "react";
import InfoCard from "../InfoCard/InfoCard";
import Table from "../Table";

function Dashbord() {
   
  return (
    <div>
      <div className="container px-5 mx-auto my-10">
        <div className="flex flex-wrap -m-4 text-center">
          <InfoCard InfoName={"Total Product"} InfoNumber={50} />
          <InfoCard InfoName={"Total Order"} InfoNumber={50} />
          <InfoCard InfoName={"Total Users"} InfoNumber={50} />
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
