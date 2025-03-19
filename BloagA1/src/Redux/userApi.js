import { createAsyncThunk } from "@reduxjs/toolkit";
import authservice from "../../Appwrite/AuthAPI";
export const addUser=createAsyncThunk('user/addUser',async({email,password,name,dateOfBirth})=>{

}) 




export const loginUser=createAsyncThunk('user/loginUser',async({email,password},{rejectWithValue})=>{

    try{
       
        if(email=='admin'  && password=='admin')
            return {email,password} 
        else 
            {
              return rejectWithValue('Wrong userName and Password') 
            }
    }catch(er){
        console.log(er)
        return rejectWithValue(er)
    }
})




export const logoutUser=createAsyncThunk('user/logoutUser',async()=>{
    console.log('Logout...')
    setTimeout(() => {
         return true
    }, 300);
})







