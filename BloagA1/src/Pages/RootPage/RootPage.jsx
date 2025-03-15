import React from 'react'

import { Outlet } from 'react-router-dom'
import Container from '../../Component/Container/Container'
import Footer from '../../Component/Footer'
import NavBar1 from '../../Component/NavBar1/NavBar1'
import './RootPage.css'
const RootPage = () => {
  return (
    <>
{/* <div className="flex flex-col min-h-screen">
 
  <NavBar1/>
  <div className="flex-grow">
    <Container>
      <Outlet />
    </Container>
  </div>
  <Footer  />
</div> */}


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


    </>
  )
}

export default RootPage