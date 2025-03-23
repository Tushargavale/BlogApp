import React,{useEffect, useMemo,useRef, useState} from "react";
import { useNavigate,useParams } from "react-router-dom";
import blogAPI from '../../Appwrite/BlogAPI'
import JoditEditor from "jodit-react";

import { htmlToText } from "html-to-text";
const BlogDetail = () => {
  const navigate = useNavigate();
  const {slug}=useParams()
  const [content,setContent]=useState('')
useEffect(()=>{
    console.log(slug)
    async function getBlog() {
        const response=await blogAPI.getBlogByID(slug)
        console.log(response)
       setContent(response.content)
    }
    if(slug)
        getBlog()
},[slug])
  const editor = useRef(null);
	const config = useMemo(() => ({
			readonly: true, 
	        height:550,
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
    <div className="content text-gray-700 text-base leading-relaxed mb-6">
        <JoditEditor
			ref={editor}
 			value={content}
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
