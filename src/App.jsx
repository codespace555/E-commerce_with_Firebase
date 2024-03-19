import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Footer, Navbar } from "./components/components";
import { Outlet } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { auth } from "./firebase/firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";
import { loginauth } from "./store/auth/authSlice";



function App() {

 const themeMode= useSelector(state => state.theme.themeMode)
 const dispatch =  useDispatch();

 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, user => {
      dispatch(loginauth(user.uid))
      console.log(user)
  })

  return unsubscribe
}, [])


 useEffect(() => {
  document.querySelector('html').classList.remove("light", "dark")
  document.querySelector('html').classList.add(themeMode)
}, [themeMode]);
  return (
    <>
    <div className="dark:bg-slate-800 bg-slate-400 h-auto">
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
    </>
  )
}

export default App
