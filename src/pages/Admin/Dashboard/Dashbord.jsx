import React, { useState } from "react";
import InfoCard from "../InfoCard/InfoCard";
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { FaUser, FaCartPlus } from 'react-icons/fa';
import { AiFillShopping, AiFillPlusCircle, AiFillDelete } from 'react-icons/ai';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function Dashbord() {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
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
      <Tabs defaultIndex={0} className=" " >
      <TabList className="md:flex md:space-x-8 bg-  grid grid-cols-2 text-center gap-4   md:justify-center mb-10 ">
        <Tab>
          <button
            type="button"
            className="font-medium border-b-2 hover:shadow-purple-700 border-purple-500 text-purple-500 rounded-lg text-xl shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]  px-5 py-1.5 text-center bg-[#605d5d12] "
          >
            <div className="flex gap-2 items-center">
              <MdOutlineProductionQuantityLimits />
              Products
            </div>{" "}
          </button>
        </Tab>
        <Tab>
          <button
            type="button"
            className="font-medium border-b-2 border-pink-500 bg-[#605d5d12] text-pink-500  hover:shadow-pink-700  rounded-lg text-xl shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]    px-5 py-1.5 text-center "
          >
            <div className="flex gap-2 items-center">
              <AiFillShopping /> Order
            </div>
          </button>
        </Tab>
        <Tab>
          <button
            type="button"
            className="font-medium border-b-2 border-green-500 bg-[#605d5d12] text-green-500 rounded-lg text-xl  hover:shadow-green-700 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]   px-5 py-1.5 text-center "
          >
            <div className="flex gap-2 items-center">
              <FaUser /> Users
            </div>
          </button>
        </Tab>
      </TabList>

      <div className="relative overflow-x-auto px-5 ">
      <TabPanel> product </TabPanel>
      <TabPanel> odder</TabPanel>
      <TabPanel>user </TabPanel>
       
      </div>
      </Tabs>
    </div>
  );
}

export default Dashbord;
