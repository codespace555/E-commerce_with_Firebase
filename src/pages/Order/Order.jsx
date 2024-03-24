import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import orderlist from "../../firebase/order/order";

function Order() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [orders, setOrders] = React.useState("");
  const userId = useSelector((state) => state.auth.uId);

  useEffect(() => {
    const fetchOrder = async () => {
      userId;

      if (userId) {
        const orderList = await orderlist.orderlists(userId);

        setOrders(orderList);
      }
    };
    fetchOrder();
  }, [navigate,userId]);

  console.log(orders);

  return authStatus ? (
    <h1>Order</h1>
  ) : (
    <div>
      <p>Please login to see the order page.</p>
      <button onClick={() => navigate("/login")}>Login</button>
    </div>
  );
}

export default Order;
