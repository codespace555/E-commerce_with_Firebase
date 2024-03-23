import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./store/store.js";


import {
  Admin,
  Home,
  Login,
  Singup,
  Allproducts,
  Order,
  Cart,
  NoRoutes,
  ProductDetails,
  Addproduct,
  EditProduct,
} from "./pages/pages.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AdminLayout from "./pages/Admin/AdminLayout.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Admin />,
      },
      {
        path: "/signup",
        element: <Singup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/all-products",
        element: <Allproducts />,
      },
      {
        path: "/Order",
        element: <Order />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/*",
        element: <NoRoutes />,
      },
      {
        path: "/poroductdetails/:slug",
        element: <ProductDetails />,
      },
      {
        path: "/profile/:user",
        element: <ProductDetails />,
      },
      {
        path: "/addproduct",
        element: 
        <AdminLayout authentication = {true} >
          <Addproduct />
        </AdminLayout>
        
      },
      {
        path: "/editproduct/:slug",
        element:
        <AdminLayout authentication = {true} >
        <EditProduct />
        </AdminLayout>
      },
    ],
  },
  
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
