import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Navbar } from "./components/components";


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
    <div className="bg-black h-screen">

    <Navbar/>
    </div>
    </>
  )
}

export default App
