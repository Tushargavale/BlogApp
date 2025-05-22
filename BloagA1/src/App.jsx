import { useState } from 'react'
import './App.css'

import {Route,createBrowserRouter,RouterProvider,createRoutesFromElements} from 'react-router-dom'
import RootPage from './Pages/RootPage/RootPage'
import * as Main from './Pages/AllPage'
import ProtectedComo from './Component/Protected/ProtectedComo'
function App() {
 

  const Router=createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootPage/>} >
      <Route index element={<Main.HomePage/>} ></Route>
      <Route path='/login' element={<Main.LoginPage/>} ></Route>
      <Route path='/signup' element={<Main.SignupPage/>} ></Route>
      <Route path='/contact' element={<Main.ContactPage/>} ></Route>
      <Route path='/about' element={<Main.AboutPage/>} ></Route>


      {/* Protected Route's */}
      <Route path='/blogs' element={<ProtectedComo children={<Main.BlogPage/>}/>}></Route>
      <Route path='/profile' element={<ProtectedComo children={<Main.ProfilePage/>}/>}></Route>
      <Route path='/addnew' element={<ProtectedComo children={<Main.AddNewPage/>}/>}></Route>

  <Route path='/editblog/:slug' element={<ProtectedComo children={<Main.EditPage/>}/>}></Route>
 <Route path='/BlogDetail/:slug' element={<ProtectedComo children={<Main.BlogDetailPage/>}/>}></Route>
      {/* <Route path='/cart' element={<ProctedRoute  children={<root.CartPage />} />} /> */}
    
      {/* <Route path='/blogs' element={<Main.BlogPage/>} ></Route> */}
     

    </Route>
  ))



  return (
    <>
    <RouterProvider router={Router} ></RouterProvider>
   </>
  )
}

export default App
