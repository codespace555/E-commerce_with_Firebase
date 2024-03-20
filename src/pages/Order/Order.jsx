import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Order() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate()

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
