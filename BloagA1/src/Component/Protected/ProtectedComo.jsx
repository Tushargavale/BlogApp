import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const ProtectedComo = ({children}) => {
 
    const navigate=useNavigate()    
    const Auth=useSelector((state)=>state.user.Authenticated)
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        if(!Auth)
        {
            navigate('/login')
        }else{
            setLoading(false)
        }
    },[Auth])

  return (
   <>
   {loading?<h1>Loading ...</h1>:children}
   </>
  )
}

export default ProtectedComo