
import React, { useState, useRef, useMemo,useEffect } from 'react';
import JoditEditor from 'jodit-react';



import Dropdown from "../Dropdown"

const Editor = ({setBlog,readonly,submitBlog,blog,status,editmode=false}) => {

  
  const placeholder='Enter Blog'
    const editor = useRef(null);
    
	  const [content, setContent] = useState(blog.content?blog.content:'');

    const [title,setTitle]=useState(blog.title?blog.title:'')
    const [slug,setSlug]=useState(blog.slug?blog.slug:'')

  const contentHandler=(content)=>{
        setBlog({...blog,['content']:content})
    }



 useEffect(() => {
    const generateSlug = (title) => {
      return title
        .toUpperCase() // Convert to UPPERCASE
        .trim() // Remove leading/trailing spaces
        .replace(/\s+/g, "-") // Replace spaces with dashes
        .replace(/[^A-Z0-9\-]/g, ""); // Allow only A-Z, 0-9, and dashes
    };

    setSlug(generateSlug(title));
    // console.log(slug)
  }, [title]); 


  useEffect(()=>{
    setBlog({...blog,['slug']:slug,['title']:title})
  },[slug,title])


	const config = useMemo(() => ({
			readonly: false, 
			placeholder: placeholder || 'Start typings...',
            height:350,
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
                maxHeight: '350px',
                
            },
            enter:'br',
            extraPlugins: ['pasteCode']       // it allow to add paste code
     
		}),
		[placeholder]
	);

  return (
	 <>
     <div className="MainContainer max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg ">
  {/* Title */}
<div className="mb-4">
    
    <input 
      type="text" 
      readOnly={editmode}
      // disabled={editmode}
      placeholder="Enter title..." 
      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
    />
  </div>

  {/* Slug Input */}
  <div className="mb-4">
   
    <input 
      type="text" 
      readOnly={true}
     
      placeholder="Enter slug..." 
      className="w-full p-3 border  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      defaultValue={slug}
           
    />
       <div className="dropdown">
    <Dropdown name={'status'} DropdownValue={blog.status} setFun={setBlog} value={blog}  />
  </div>
    
    
  </div>

  {/* Content */}
  <div className="content text-gray-700 text-base leading-relaxed mb-6">
        <JoditEditor
			ref={editor}
 			value={content}
			config={config}
     
			tabIndex={1} // tabIndex of textarea
		    onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => contentHandler(newContent) }
		/>


  </div>

  {/* Button */}
  <div className="button flex justify-center">
    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
    onClick={submitBlog}
    
    >
    Submit      
   </button>

   
  </div>
  

</div>
     
     
     
     
     
     </>	
	);
}

export default Editor

