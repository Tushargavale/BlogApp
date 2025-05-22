import React,{useEffect, useMemo,useRef, useState} from "react";
import { useNavigate,useParams } from "react-router-dom";
import blogAPI from '../../Appwrite/BlogAPI'
import JoditEditor from "jodit-react";
import { useSelector } from "react-redux";
import { htmlToText } from "html-to-text";
const BlogDetail = () => {
  const navigate = useNavigate();
  const {slug}=useParams()
  const [content,setContent]=useState('')
  const user=useSelector((state)=>state.user.user)
  // console.log(user.$id)
useEffect(()=>{
    // console.log(slug)
    async function getBlog() {
        const response=await blogAPI.getBlogByID(slug)
        // console.log(response)
       setContent(response)
    }
    if(slug)
        getBlog()

   
},[slug])


  const DeleteBlog=async()=>{
    try {
      let deleteresp=await blogAPI.deleteBlog(content.$id)
      if(deleteresp)
        navigate('/blogs')
    } catch (error) {
      console.log(error)
    }
  }

  const EditBlog=()=>{
    navigate(`/editblog/${slug}`)
  }



  const editor = useRef(null);
	const config = useMemo(() => ({
			readonly: true, 
	        height:500,
            width:1100,
            showCharsCounter: false,
            showWordsCounter: false,
            showXPathInStatusbar: false,
            toolbarButtonSize: 'middle',
            allowResizeX: false,
            allowResizeY: false,
            style:{
               color:'black',
               'text-align':'left',
                margine:'10px',
                padding:'10px',
                // maxHeight: '350px',
                     
            },
          
            enter:'br',
            toolbar:false
      
		}),
		[]
	);

  return (
    <>
   
    <div className="content text-gray-700 text-base leading-relaxed mb-6  ">
       {user.$id==content.userID? <>
     <button
       onClick={DeleteBlog}
      className="w-32 px-5 py-2 mb-2 mt-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition duration-200 flex items-center gap-2 ml-auto"
    >
      ✏️Delete
    </button>

        <button
       onClick={EditBlog}
      className="w-32 px-5 py-2 mb-2 mt-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition duration-200 flex items-center gap-2 ml-auto"
    >
      ✏️ Edit
    </button>


    </> :null }
        <JoditEditor
			ref={editor}
 			value={content.content}
			config={config}
     
			tabIndex={1} // tabIndex of textarea
		    // onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			// onChange={newContent => contentHandler(newContent) }
		/>


  </div>
    
    </>
  )
};

export default BlogDetail;
