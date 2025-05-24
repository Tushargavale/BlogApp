import React,{useState,useEffect} from 'react'
import Blogs from '../Component/Blogs'
import blogAPI from '../../Appwrite/BlogAPI'
import { useSelector } from 'react-redux'

const BlogPage = () => {

  const [allblog,setAllblog]=useState([])
  const user=useSelector((state)=>state.user.user)
  console.log(user)
    useEffect(()=>{
       async function getAllBlogs(){
            try {
              let response=await blogAPI.getAllPost(user.$id)
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