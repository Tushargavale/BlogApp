import { createAsyncThunk } from "@reduxjs/toolkit";
import authservice from "../../Appwrite/AuthAPI";
export const addUser=createAsyncThunk('user/addUser',async({email,password,name,dateOfBirth})=>{

}) 

export const createaccount = createAsyncThunk(
  "user/createaccount",
  async ({ email, password, username,dateOfBirth }, { rejectWithValue }) => {
    try {
      const user = await authservice.createaccount({ email, password, username,dateOfBirth });

      if (!user) {
        return rejectWithValue("User creation failed"); 
      }
      console.log(user)
      return user;
    } catch (error) {
      console.error("Error creating account:", error);

      return rejectWithValue(error.response?.data || error.message || "Unknown error occurred");
    }
  }
);


export const loginUser=createAsyncThunk('user/loginUser',async({email,password},{rejectWithValue})=>{
   try{
        let user=await authservice.Login({email,password})
        console.log(user)
        if(!user)
            return rejectWithValue('Wrong userName and password')

        return user
   }catch(error)
   {
    console.log('Error is ',error)
        return rejectWithValue(error.response?.data || error.message || "Something Wennt Wrong" )
   }
})




export const logoutUser=createAsyncThunk('user/logoutUser',async()=>{
    try {
        let deletesession=await authservice.Logout()
        console.log('Session is Successfully Deleted.')
        console.log(deletesession)
        return true 
    } catch (error) {
        console.log(error)
    }
})



export const getCurrentUser=createAsyncThunk('user/getcurrentuser',async(_,{rejectWithValue})=>{
  try {
     let user=await authservice.getCurrentUser()
    if(user)
        return user
    
    return rejectWithValue(false)

  } catch (error) {
    rejectWithValue(error)
  } 
})



