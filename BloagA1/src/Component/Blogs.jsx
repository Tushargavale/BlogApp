import React, { useEffect } from 'react'
import blogAPI from '../../Appwrite/BlogAPI'
const Blogs = () => {


    useEffect(()=>{
        blogAPI.getAllPost()

    },[])
  return (
    <div>Blogs....</div>
  )
}

export default Blogs