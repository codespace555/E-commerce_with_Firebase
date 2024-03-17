import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Footer, Navbar } from "./components/components";
import { Outlet } from "react-router-dom";


function App() {
 const authSlice = useSelector(state=> state.auth.userData)
 const themeMode= useSelector(state => state.theme.themeMode)
 const dispatch =  useDispatch();

// const themechange = () => {

//     dispatch(darkTheme())
  
// }


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
