import React from "react";
import {FaUserTie } from 'react-icons/fa';

function InfoCard({InfoName,InfoNumber}) {
  return (
    <>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div
          className=" border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl dark:bg-[#2e3137] dark:text-gray-200"
         
        >
          <div
            className="text-purple-500 w-12 h-12 mb-3 inline-block"
            viewBox="0 0 24 24"
          >
            <FaUserTie size={50} />
          </div>
          <h2
            className="title-font font-medium text-3xl text-black fonts1 dark:text-gray-200"
            
          >
            {InfoNumber}
          </h2>
          <p
            className=" text-purple-500  font-bold dark:text-gray-200"
           
          >
            {InfoName}
          </p>
        </div>
      </div>
    </>
  );
}

export default InfoCard;
