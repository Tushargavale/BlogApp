import React,{useState,useEffect} from 'react'
import Blogs from '../Component/Blogs'
import blogAPI from '../../Appwrite/BlogAPI'

const BlogPage = () => {

  const [allblog,setAllblog]=useState([])
    useEffect(()=>{
       async function getAllBlogs(){
            try {
              let response=await blogAPI.getAllPost()
                setAllblog(response.documents)
            } catch (error) {
                console.log(error)
            }
       }

       getAllBlogs()
    },[])



  return <><Blogs allblog={allblog} /></>
}

export default BlogPage