import React, { useEffect, useState } from 'react'
import Editor from './Editor/Editor'
import blogAPI from '../../Appwrite/BlogAPI'
import { useSelector } from 'react-redux'
const AddNew = () => {

    const blogtemp={
      title:'',
      slug:'',
      content:'',
      status:true
    }
const [blog,setBlog]=useState(blogtemp)
    const user=useSelector((state)=>state.user.user)

    const submitBlog=async()=>{
      console.log(blog)
      try{
        let doc=await blogAPI.createPost({...blog,'userID':user.$id})
        console.log(doc)
      }catch(error)
      {
        console.log(error)
      }

    }

    
  



  return (
    <>
        <Editor readonly={false}  blog={blog} submitBlog={submitBlog} setBlog={setBlog}  />
    </>
  )
}

export default AddNew