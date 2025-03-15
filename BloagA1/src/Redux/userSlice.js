import {createSlice} from '@reduxjs/toolkit'
import { loginUser,logoutUser } from './userApi'
const initialState={
    user:{},
    Authnticated:false ,
    error:null 
}


export const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        show:(state)=>{
            console.log(state)
        }
    },
    extraReducers:(builder)=>{
       
        builder.addCase(loginUser.fulfilled,(state,action)=>{
          state.Authnticated=true 
          state.user=action.payload 
          state.error=null
         }),
         builder.addCase(loginUser.rejected,(state,action)=>{
            state.Authnticated=false 
            state.error=action.payload 
            state.user={}
         }),
         builder.addCase(logoutUser.fulfilled,(state,action)=>{
            state.Authnticated=false
            state.error=null
            state.user={}
         })
    }
})


export default userSlice.reducer
export const {state} =userSlice.actions























