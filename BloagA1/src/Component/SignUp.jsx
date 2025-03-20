import React, { useEffect, useState } from 'react'
import './Login/Login.css'
import ErrorComponent from './ErrorComponent'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser,createaccount } from '../Redux/userApi'
import { clearError } from '../Redux/userSlice'
const SignUp = () => {

  const tempUser={
      name:'',
      email:'',
      password:'',
      dateOfBirth:''
    }

    const navigate=useNavigate()

    const dispatch=useDispatch()
    
    const userInfo=useSelector((state)=>state.user)
    const [error,setError]=useState('') 

    const ValidatorFunction=(user)=>{

      if(!user.name || !user.email || !user.password || !user.email )
        setError('Please Fill all the field')
      else
      return true
    }

       useEffect(()=>{dispatch(clearError())},[dispatch])
  useEffect(()=>{
    console.log(userInfo)
    if(userInfo.Authenticated)
      navigate('/blogs')

    if(userInfo.error)
      setError(userInfo.error)

 return ()=>{dispatch(clearError())} 

  },[userInfo])


  const [user,setUSer]=useState(tempUser)
  const Handler=(e)=>{
    const {name,value}=e.target
    // console.log(name,value)
    setUSer({...user,[name]:value}) 
  }
  const SignupFun=()=>{
    if(ValidatorFunction(user))
    {
      // console.log('Submited Successful;y')
      dispatch(createaccount(user))
    }

  }




  return (
       <div className="flex items-center justify-center min-h-screen bg-gray-100 w-1/3 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>
        
        <div className="mt-6">
          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input 
              type="text" 
              name='name'
              value={user.name}
              onChange={(e)=>Handler(e)}
              className="w-full mt-2 px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Email</label>
            <input 
value={user.email}
type="email" 
   onChange={(e)=>Handler(e)}
               name='email'
              className="w-full mt-2 px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Password</label>
            <input 
            name='password'
             onChange={(e)=>Handler(e)}
              type="password" 
              className="w-full mt-2 px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Confirm Password</label>
            <input 
              type="password" 
              className="w-full mt-2 px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Date of Birth */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Date of Birth</label>
            <input 
              type="date" 
              name='dateOfBirth'
              value={user.dateOfBirth}
              onChange={(e)=>Handler(e)}
              className="w-full mt-2 px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Signup Button */}
          <button 
            type="submit" 
            onClick={SignupFun}
            className="w-full bg-blue-600 text-white py-2 rounded-md font-bold hover:bg-blue-700 transition">

            Sign Up
          </button>

          {/* Already have an account */}
          <p className="text-center mt-4 text-gray-700">
            Already have an account? 
            <a href="#" className="text-blue-600 font-bold hover:underline ml-1">Log In</a>
          </p>
        </div>
      </div> 
      {error?<ErrorComponent error={error} setError={setError} />:null}
    </div>
  )
}

export default SignUp