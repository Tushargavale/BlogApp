import React, { useEffect, useState } from 'react'
import Editor from './Editor/Editor'
const AddNew = () => {

    const blogtemp={
      title:'',
      slug:'',
      content:''
    }

    const submitBlog=()=>{
      console.log(blog)
    }

    const [blog,setBlog]=useState(blogtemp)
  



  return (
    <>
        <Editor readonly={false}  blog={blog} submitBlog={submitBlog} setBlog={setBlog}  />
    </>
  )
}

export default AddNew