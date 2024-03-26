import React, { useCallback, useState } from "react";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaUser, FaCartPlus } from "react-icons/fa";
import { AiFillShopping, AiFillPlusCircle, AiFillDelete } from "react-icons/ai";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link, useNavigate } from "react-router-dom";
import productsfiber from "../../firebase/product/productdb";
import authfirebase from "../../firebase/auth/fireAuth";
import { toast } from "react-toastify";

function Table({ products, users, orders }) {
  let [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [allUser, setAllUser] = useState([]);
  const [order, setOrder] = useState([]);

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  const deleteProducts = useCallback(
    async (id) => {
      try {
        await productsfiber.deleteProduct(id);
        toast("Product deleted Successfully");
      } catch (err) {
        console.error("Error getting products:   ", err);
      }
    },
    [setData]
  );

  React.useEffect(() => {
    setAllUser(users);
    setData(products);
    setOrder(orders);
  });
  return (
    <>
      <Tabs defaultIndex={0} className=" ">
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
                <AiFillShopping /> Orders
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

        <TabPanel>
          <div className="  px-4 md:px-0 mb-16">
            <h1 className=" text-center mb-5 text-3xl font-semibold underline dark:text-gray-200">
              Product Details
            </h1>
            <div className=" flex justify-end">
              <button
                type="button"
                className="focus:outline-none text-white bg-pink-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] border hover:bg-pink-700 outline-0 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:text-gray-200 dark:bg-[#2e3137]"
              >
                {" "}
                <div
                  className="flex gap-2 items-center"
                  onClick={() => navigate("/addproduct")}
                >
                  Add Product <FaCartPlus size={20} />
                </div>
              </button>
            </div>
            <div className="relative overflow-x-auto ">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400  ">
                <thead className="text-xs border border-gray-600 text-black uppercase bg-gray-200 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)] dark:text-gray-200 dark:bg-[#2e4137]">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      S.No
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Image
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {data?.map((item, index) => (
                    <tr
                      className="bg-gray-50 border-b  dark:border-gray-700 dark:text-gray-200 dark:bg-[#2e3137]"
                      key={index}
                    >
                      <td className="px-6 py-4 text-black dark:text-gray-200 ">
                        {index + 1}
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-black whitespace-nowrap"
                      >
                        <img className="w-16" src={item.imageurl} alt="img" />
                      </th>
                      <td className="px-6 py-4 text-black dark:text-gray-200 ">
                        {item.title}
                      </td>
                      <td className="px-6 py-4 text-black dark:text-gray-200 ">
                        {item.price}
                      </td>
                      <td className="px-6 py-4 text-black dark:text-gray-200 ">
                        {item.category}
                      </td>
                      <td className="px-6 py-4">
                        <div className=" flex gap-2">
                          <div className=" flex gap-2 cursor-pointer text-black dark:text-gray-200 ">
                            <button onClick={() => deleteProducts(item.id)}>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-6 h-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                  />
                                </svg>
                              </div>
                            </button>
                            <button
                              onClick={() =>
                                navigate(`/editproduct/${item.slug}`)
                              }
                            >
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-6 h-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                  />
                                </svg>
                              </div>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          {/* <Order order={order} setOrder={setOrder} setLoading={setLoading} /> */}
          <div className="relative overflow-x-auto mb-16 ">
            <h1 className=" text-center mb-5 text-3xl font-semibold underline dark:text-gray-200 ">
              Order Details
            </h1>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 dark:bg-[#2e3137]">
              <thead className="text-xs text-black uppercase bg-gray-200 dark:bg-[#2e4137]">
                <tr>
                  <th scope="col" className="px-6 py-3 dark:text-gray-200">
                    Payment Id
                  </th>
                  <th scope="col" className="px-6 py-3 dark:text-gray-200">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3 dark:text-gray-200">
                    Price
                  </th>
                 
                  <th scope="col" className="px-6 py-3 dark:text-gray-200">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 dark:text-gray-200">
                    Address
                  </th>
                  <th scope="col" className="px-6 py-3 dark:text-gray-200">
                    Pincode
                  </th>
                  <th scope="col" className="px-6 py-3 dark:text-gray-200">
                    Phone Number
                  </th>
                  <th scope="col" className="px-6 py-3 dark:text-gray-200">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 dark:text-gray-200">
                    status
                  </th>
                  <th scope="col" className="px-6 py-3 dark:text-gray-200">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 dark:text-gray-200">
                   Print Invoive
                  </th>
                </tr>
              </thead>
              <tbody>
                {order.map((item) => (
                  <tr
                    className="bg-gray-500 border-b  dark:border-gray-800 dark:text-gray-200 dark:bg-[#2e3137]"
                    key={item.id}
                  >
                    <td className="px-6 py-4 text-black dark:text-gray-200">
                      {item.profile.paymentId}
                    </td>
                    <td>
                    {Object.values(item.cartItem).map((key, index) => (
                      <div
                        scope="col"
                        className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-gray-200 dark:bg-[#2e3137] "
                        key={index}
                      >
                        <div className="px-6 py-4 text-black dark:text-gray-200  ">
                          <div>
                          <img className="w-16" src={key.imageurl} alt="img" />
                          </div>
                          <div>
                          {(key.title).slice(0, 20)+"..."}
                          <strong>₹{key.price} </strong>
                           X
                          <strong> {key.quantity}</strong>
                          
                          </div>
                        </div>

                      </div>
                    ))}
                    </td>
                    <td className="px-6 py-4 text-black dark:text-gray-200 ">
                      ₹{item.profile.amount}
                    </td>
                    

                    <td className="px-6 py-4 text-black dark:text-gray-200 ">
                    {item.profile.name}
                    </td>
                    <td className="px-6 py-4 text-black dark:text-gray-200">
                    {item.profile.address}
                    </td>

                    <td className="px-6 py-4 text-black dark:text-gray-200">
                    {item.profile.picode}
                    </td>
                    <td className="px-6 py-4 text-black dark:text-gray-200">
                    {item.profile.contact}

                    </td>
                    <td className="px-6 py-4 text-black dark:text-gray-200">
                    {item.profile.email}

                    </td>
                    <td className="px-6 py-4 text-black dark:text-gray-200">
                    {item.profile.status}
                      
                    </td>
                    <td className="px-6 py-4 text-black dark:text-gray-200">
                    {item.profile.date}
                     
                    </td>
                    <td className="px-6 py-4 text-black dark:text-gray-200">
                   <Link to={`/invoice/${item.id}`}>

                   <button className="border w-28 bg-blue-500 p-2 rounded-xl">Print Invoice </button>
                   </Link>
                     
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabPanel>
        <TabPanel>
          {/* users */}
          <div className="relative overflow-x-auto mb-10">
            <h1 className=" text-center mb-5 text-3xl font-semibold underline dark:text-gray-200">
              User Details
            </h1>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 dark:bg-[#2e3137]">
              <thead className="text-xs text-black uppercase bg-gray-200 dark:bg-[#2e4137]">
                <tr>
                  <th scope="col" className="px-6 py-3 dark:text-gray-200">
                    S.No
                  </th>

                  <th scope="col" className="px-6 py-3 dark:text-gray-200">
                    Name
                  </th>

                  <th scope="col" className="px-6 py-3 dark:text-gray-200">
                    uid
                  </th>
                  <th scope="col" className="px-6 py-3 dark:text-gray-200">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 dark:text-gray-200">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {allUser?.map((item, index) => (
                  <tr
                    className="bg-gray-50 border-b  dark:border-gray-700 dark:bg-[#2e3137] dark:text-gray-200"
                    key={index}
                  >
                    <td className="px-6 py-4 text-black dark:text-gray-200">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 text-black dark:text-gray-200">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 text-black dark:text-gray-200">
                      {item.uid}
                    </td>
                    <td className="px-6 py-4 text-black dark:text-gray-200">
                      {item.email}
                    </td>
                    <td className="px-6 py-4 text-black dark:text-gray-200">
                      {item.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
}

export default Table;
