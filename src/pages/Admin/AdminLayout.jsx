import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loder from '../../components/Loder/Loder'
import { useSelector } from 'react-redux'

function AdminLayout({children,authentication = true}) {
    const navigate = useNavigate()
    const [loader,setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.admin)
    useEffect( () => {
        if(authentication && authStatus !== authentication){
            navigate("/")

        }else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    },[authStatus,navigate,authentication])
    return loader? <h1><Loder/></h1>: <>{children}</> 
}

export default AdminLayout
