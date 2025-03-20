import {createSlice} from '@reduxjs/toolkit'
import { loginUser,logoutUser,createaccount ,getCurrentUser } from './userApi'
const initialState={
    user:{},
    Authenticated:false ,
    error:null 
}


export const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        show:(state)=>{
            console.log(state)
        },
        clearError: (state) => {
        state.error = null;
    },
    },
    extraReducers:(builder)=>{
       
        builder.addCase(loginUser.fulfilled,(state,action)=>{
          state.Authenticated=true 
          state.user=action.payload 
          state.error=null
         }),
         builder.addCase(loginUser.rejected,(state,action)=>{
            state.Authenticated=false 
            state.error=action.payload 
            state.user={}
         }),
         builder.addCase(logoutUser.fulfilled,(state,action)=>{
            state.Authenticated=false
            state.error=null
            state.user={}
         }),
         
        builder.addCase(createaccount.fulfilled,(state,action)=>{
            state.user=action.payload 
            state.error=null 
            state.Authenticated=true
        }),


        builder.addCase(createaccount.rejected,(state,action)=>{
            state.user={}
            state.Authenticated=false
            state.error=action.payload
        }),

        builder.addCase(getCurrentUser.fulfilled,(state,acion)=>{
            state.user=acion.payload
            state.Authenticated=true 
            state.error=null
        })

        builder.addCase(getCurrentUser.rejected,(state,action)=>{
            state.Authenticated=false
            state.user={}
            state.error=null
        })


        



    }
})


export default userSlice.reducer
export const {state,clearError} =userSlice.actions























