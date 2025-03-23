import React, { useEffect, useState,useMemo } from "react";
import { htmlToText } from "html-to-text";
import { useNavigate } from "react-router-dom";
const BlogCard = ({ title, content ,slug }) => {
    const navigate=useNavigate()
    const [newcontent,setNewcontent]=useState('')
    useEffect(()=>{
        setNewcontent(htmlToText(content))
    },[])
    

    const openBlog=()=>{
// BlogDetail/:userID  
navigate(`/BlogDetail/${slug}`)

    }

  return(
    <div className="max-w-sm w-full bg-white shadow-md rounded-lg border border-gray-200 p-5 hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {/* Blog Title */}
      <h2 className="text-lg font-semibold text-gray-900 truncate">{title}</h2>

      {/* Blog Content Preview */}
      <div className="flex-1">
        <p className="text-gray-700 mt-2 line-clamp-3">
          {newcontent.length > 150 ? newcontent.substring(0, 150) + "..." : newcontent}
        </p>
      </div>

      {/* Read More Button */}
      <button className="mt-auto px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition"
        onClick={openBlog}      
      >
        Read More
      </button>
    </div>
  );
};

export default BlogCard;
