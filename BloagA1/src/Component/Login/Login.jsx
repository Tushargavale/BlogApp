import React from 'react'
import { useState,useEffect } from 'react';
import ErrorComponent from '../ErrorComponent';
import {NavLink} from 'react-router-dom'
import './Login.css'
import { useSelector,useDispatch } from 'react-redux';
import { loginUser } from '../../Redux/userApi';
import { useNavigate } from 'react-router-dom';
import { clearError } from '../../Redux/userSlice';
const Login = () => {

    const navigate=useNavigate()
    const storeuser=useSelector((state)=>state.user)
    const dispatch=useDispatch()
    const [error, setError] = useState("");
    const [user, setuser] = useState({
        email:'',
        password:''
    })

    useEffect(()=>{
      if(storeuser.Authenticated)
      {
        navigate('/blogs')
      }
      if(storeuser.error)
      {
        setError(storeuser.error)
      }

      return ()=>{dispatch(clearError())} 
    },[storeuser,dispatch,navigate])

    // useEffect(()=>{
    //   console.log(storeuser.error)
    //   console.log(error)
    // },[error])

    function Handler(e){
        const {name,value}=e.target
        setuser({...user,[name]:value})
    }

   function Validation(user){
            if(!user.email && user.email=='')
                setError('Enter the userName')
            else
            if(!user.password)
                setError('Please Enter the Password')
                else
           return true

            return false
   } 

   useEffect(()=>{dispatch(clearError())},[dispatch])

  function submit(){
    if(Validation(user)){
        dispatch(loginUser({email:user.email,password:user.password}))
    }
            // dispatch(loginUser({email:'tushaegasdc',password:'968987'}))
  }


return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <div>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name='email'
              onChange={(e)=>Handler(e)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name='password'
              onChange={(e)=>Handler(e)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            onClick={submit}
          >
            Login
          </button>
        </div>
         <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <NavLink to={'/signup'} className="text-blue-500 hover:underline">
            Sign up
          </NavLink>
        </p>
      </div>
      {error?<ErrorComponent error={error} setError={setError} />:null}
    </div>
  ); 

}

export default Login