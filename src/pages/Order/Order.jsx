import React, { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import orderlist from "../../firebase/order/order";
import { Loder } from "../../components/components";

function Order() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [orders, setOrders] = React.useState("");
  const userId = useSelector((state) => state.auth.uId);
  const fetchOrder = useCallback(async () => {
    if (userId) {
      const orderList = await orderlist.orderlists(userId);

      setOrders(orderList);
    
    }
  });
  useEffect(() => {
    fetchOrder();
  }, [navigate, userId]);



  return authStatus ? (
    <>
      <h1 className="text-center font-bold text-2xl">Order</h1>
      <div className="flex flex-wrap w-full">   {orders.length > 0
        ? orders?.map((item) => (
            <div key={item.id} className=" m-5 bg-white rounded-lg dark:bg-slate-900 border">
              <div className="flex font-sans">
                <form className="flex-auto p-6">
                  <div className="flex flex-wrap">
                    <h1 className="flex-auto text-lg font-semibold text-slate-900 gap-2">
                    {Object.values(item.cartItem).map((key, index) => (
                      <div key={index} className="flex-auto text-lg font-semibold text-slate-500 gap-2">
                        <Link to={`/poroductdetails/${key.slug}`} className="text-blue-500 hover:text-blue-800">
                        {(key.title).slice(0, 30)+"..."}
                        </Link>
                        ₹{(key.price)}
                      </div>
                    ))}  
                    
                    </h1>
                    <p className="font-extralight text-gray-500">
                   
                    </p>
                    <div className="w-full flex-none text-sm  text-green-700 font-semibold mt-2 ">
                      {item.profile.status}
                    </div>
                  </div>
                
                  <div className="flex space-x-4 mb-6 text-sm font-medium">
                    <div className="flex-auto flex space-x-4">
                      <Link to={`/invoice/${item.id}`} >
                      <button
                        className="h-10 px-6 font-semibold rounded-md bg-black text-white m-2"
                        type="submit" 
                      >
                        Download Invoice
                      </button>
                      </Link>
                      <div
                        className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 m-2 text-center"
                        
                      >
                       <div className="text-lg font-semibold text-slate-500 mt-1">
                   Total- ₹{item.profile.amount}
                    </div>
                      </div>
                    </div>
                    
                  </div>
                  <p className="text-sm text-slate-700  gap-2">
                 <strong>Payment Id - </strong> {item.profile.paymentId}
               
                 <br /> <strong> order Id - </strong>
                 {item.id}
                  </p>
                </form>
              </div>
            </div>
          ))
        : <Loder/>}
        </div>
   
    </>
  ) : (
    <div className="h-[50vh] text-center flex items-center justify-center
    font-semibold text-2xl text-gray-800">
      <p>Please login to see the order page.</p>
    </div>
  );
}

export default Order;
