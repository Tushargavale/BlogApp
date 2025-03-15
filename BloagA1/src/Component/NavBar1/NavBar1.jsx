import React from 'react'
import { useState } from 'react';
import './NavBar.css'
import { NavLink ,useNavigate} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { loginUser,logoutUser } from '../../Redux/userApi';

const NavBar1 = () => {

    const navigate=useNavigate()
    const dispatch=useDispatch()
    const LogoutFun=()=>{
        console.log('dispatching')
        dispatch(logoutUser())
        .then(()=>{
            navigate('/login')
        })
    }
    
    

   
    const isAuthenticated=useSelector((state)=>state.user.Authnticated)
    const common=[
        {
            name:'Home',
            slug:'/',
        },
        {
            name:'About',
            slug:'/about'
        },
        {
            name:'contact',
            slug:'/contact'
        }
    ]



    const conitionNavItem=[
        {
            name:'Login',
            slug:'/login',
            Auth:!isAuthenticated
        },
        {
            name:'Signup',
            slug:'/signup',
            Auth:!isAuthenticated
        },
        {
            name:'Blogs',
            slug:'/blogs',
            Auth:isAuthenticated
        },
        {
            name:'Profile',
            slug:'/profile',
            Auth:isAuthenticated
        },
        {
            name:'Add Blog',
            slug:'/addnew',
            Auth:isAuthenticated
        }
    ]




  return (
    <>
      <div className="NavContainer">
        <div className="common">
        {common.map((item,key)=>{
          return <NavLink key={key} to={item.slug} className='navlink' >{item.name}</NavLink>
        })}
        </div>
        <div className="conditional">
        {conitionNavItem.map((item,key)=>{ return item.Auth?   <NavLink key={key} to={item.slug} className='navlink' >{item.name}</NavLink>:null})}
        </div>
        <div className="logoutButton">
            {isAuthenticated? 
               <div className="Button">
                    <button onClick={LogoutFun} >Logout</button>
                </div>
            :null}
        </div>
      </div>
    </>
//    <NavLink key={key} to={item.slug} className='navlink' >{item.name}</NavLink>
  )
}

export default NavBar1