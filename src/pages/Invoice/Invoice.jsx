import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import orderlist from "../../firebase/order/order";
import { Loder } from "../../components/components";

function Invoice() {
  const { id } = useParams();
  const [transactionData, settransactionData] = useState([]);
  const fetchOrder = useCallback(async () => {
    if (id) {
      const orderList = await orderlist.invoicelist(id);
      settransactionData([orderList]);

      console.log(transactionData);
    }
  }, []);
  const handlePrint = () => {
    const printableArea = document.getElementById("invoiceToPrint");
    if (printableArea) {
      const content = printableArea.innerHTML;
      const originalContent = document.body.innerHTML;
      document.body.innerHTML = content;
      window.print();
      document.body.innerHTML = originalContent;
    } else {
      console.error("Printable area not found");
    }
  };
  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <div className="invoice bg-gray-500 p-5" id="invoiceToPrint">
      {transactionData.length > 0 ?(transactionData.map((transaction) => (
        <div key={transaction.id} className="invoice bg-white p-5 rounded-lg" >
          <div className="header text-center text-2xl"   >
            <h2>Invoice</h2>
            <p className="header text-center text-xl">
              Date: {transaction.profile.date}
            </p>
          </div>
          <div className="details flex flex-col justify-center items-center m-5 gap-10">
            <div className="details flex  justify-center items-center  gap-10">
              <span>
                <strong>Name:</strong> {transaction.profile.name}
              </span>
              <span>
                <strong>Email:</strong> {transaction.profile.email}
              </span>
            </div>

            <div className="details flex justify-center items-center  gap-10">
              <span>
                <strong>Address:</strong> {transaction.profile.address}
              </span>
              <span>
                <strong>Contact:</strong> {transaction.profile.contact}
              </span>
            </div>
          </div>
          <div className="order-details ">
            <h3>Order Details</h3>
            {Object.values(transaction.cartItem).map((item, index) => (
              <div key={index} className="item bg-gray-200 flex gap-20">
                <div>
                  <strong>Product</strong>: {item.title}
                </div>
                <div>
                  <strong>Price:</strong>:₹{item.price}
                </div>
                <div>
                  <strong>Quantity:</strong>: {item.quantity}
                </div>
                <div>
                  <strong>Total:</strong>: ₹{item.price * item.quantity}
                </div>
              </div>
            ))}
          </div>
          <div className="total relative left-[600px]">
            <strong>Total Amount:</strong> ₹{transaction.profile.amount}
          </div>
          <div className="footer flex justify-between">
            <p>
              <strong>Payment ID:</strong> {transaction.profile.paymentId}
            </p>
            <p>
              <strong>Order ID:</strong> {transaction.id}
            </p>
          </div>
        </div>
      ))):<Loder/>}
      <button className="border bg-gray-200 py-2 px-5 mt-5 rounded-lg" onClick={handlePrint}>Print Invoice</button>
    </div>
  
  )
            }

export default Invoice;
