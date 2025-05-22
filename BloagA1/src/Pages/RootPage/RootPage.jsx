import React, { useState } from 'react'

import { Outlet } from 'react-router-dom'
import Container from '../../Component/Container/Container'
import Footer from '../../Component/Footer'
import NavBar1 from '../../Component/NavBar1/NavBar1'
import './RootPage.css'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getCurrentUser } from '../../Redux/userApi'
import Loading from '../../Component/Loading'
const RootPage = () => {

const dispatch=useDispatch() 
const [loader,setLoader]=useState(true)
useEffect(()=>{
  dispatch(getCurrentUser()).then(()=>{
    setLoader(false)
  })
},[])

  return (
    <>



{loader?<Loading/>:

<div className="rootcontainer">
  <div className="NavBar">
       <NavBar1/>
  </div>
  <div className="middlecontainer">
   <Container>
    <Outlet/>
   </Container>
  </div>
  <div className="footer">
   <Footer/>
  </div>
</div>

}




    </>
  )
}

export default RootPage