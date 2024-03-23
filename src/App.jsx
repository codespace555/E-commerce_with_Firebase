import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Footer, Loder, Navbar } from "./components/components";
import { Outlet, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { auth } from "./firebase/firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";
import { admin, loginauth, logoutauth } from "./store/auth/authSlice";

function App() {
  const themeMode = useSelector((state) => state.theme.themeMode);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      
      auth,
      (user) => {
        if (user) {
          if (user?.email === "namansanjaykumar@gmail.com") {
            dispatch(loginauth({ user: user.email, userimg: user.photoURL }));

            dispatch(admin());

          } else {
            navigate("/");
         

          }
          dispatch(loginauth({ user: user.email, userimg: user.photoURL }));
        
        } else {
          dispatch(logoutauth());

          navigate("/");
        }
      },
      (error) => {
        console.error("Authentication error:", error);
      }
    );
    return () => unsubscribe();
  }, [dispatch]);

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
   
    <>
      <div className="dark:bg-slate-800 bg-slate-400 h-auto">
        <Navbar />
        <Outlet />
        <Footer />
        <ToastContainer />
      </div>
    </>
  
  );
}

export default App;
