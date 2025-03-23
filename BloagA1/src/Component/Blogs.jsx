import React, { useEffect, useState } from 'react'
import blogAPI from '../../Appwrite/BlogAPI'
import BlogCard from './BlogCard'


import BlogDetail from './BlogDetail'
const Blogs = () => {

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

    useEffect(()=>{
        console.log(allblog)
    },[allblog])



  return (

  <div className="flex flex-col h-full">
      {/* Ensures Navbar stays fixed while content takes full height */}
      <div className="container mx-auto px-4 py-6 flex-grow overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">All Blogs</h1>

        {/* Responsive Grid Layout */}
        {allblog.length? <>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
          {allblog.length > 0 ? (
            allblog.map((blog, index) => (
              <BlogCard key={index} title={blog.title} content={blog.content} slug={blog.$id} />
            ))
          ) : (
           <h1>Loading .....</h1>
          )}
        </div>
        
        </> :null }
        
      </div>
    </div>



);
}

export default Blogs




// <>
// {allblog.length?<>

// <BlogDetail content={allblog[2].content} title={allblog[0].title} />

// </>:null}

// </>