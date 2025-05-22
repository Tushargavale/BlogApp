import React, { useEffect, useState } from 'react'
import Editor from './Editor/Editor'
import blogAPI from '../../Appwrite/BlogAPI'
import { useSelector } from 'react-redux'
import ErrorComponent from './ErrorComponent'
import { useNavigate } from 'react-router-dom'
const AddNew = () => {
  const navigate=useNavigate()
const [error,setError]=useState('')
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
       if(doc.status)
        navigate('/blogs')
      else{
        console.log(doc.error)
        setError(doc.error)
      }
      }catch(error)
      {
        console.log(doc)
        setError(error)
      }

    }

    
  



  return (
    <>
        <Editor readonly={false}  blog={blog} submitBlog={submitBlog} setBlog={setBlog}  />
           {error?<ErrorComponent error={error} setError={setError} />:null}
    </>
  )
}

export default AddNew