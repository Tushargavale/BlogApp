import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Editor from '../Component/Editor/Editor'
import blogAPI from '../../Appwrite/BlogAPI'
import { useNavigate } from 'react-router-dom'
const EditPage = () => {
    const navigate=useNavigate()
    const [blog,setBlog]=useState()
    const [loader,setLoader]=useState(true)
    const {slug}=useParams()
    useState(()=>{
       async function FetchBlog() {
        let resp=await blogAPI.getBlogByID(slug)
        setBlog(resp)
        setLoader(false)
    }

       if(slug)
        FetchBlog()
    },[slug])

    const updateBlog=async()=>{
        try {
            console.log(blog)
            let res=await blogAPI.updateBlog({'slug':blog.$id,...blog})
            console.log(res)
            if(res)
                navigate('/blogs')
        } catch (error) {
            console.log(error)
        }
    }
  return (
  <>
   {loader?<>
       Loading 
        
        </>:<Editor blog={blog} readonly={false} setBlog={setBlog} submitBlog={updateBlog} editmode={true}/>}

       
  
  
  </> 
  )
}

export default EditPage