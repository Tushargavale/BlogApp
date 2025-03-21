import React, { useEffect } from 'react'
import {Message} from 'rsuite'
import "rsuite/dist/rsuite.min.css";

const ErrorComponent = ({error,setError}) => {
  useEffect(()=>{console.log(error)},[error])
  return (
   <>
   {error && (
  <div className=" w-1/3 fixed top-[4rem] left-1/2 transform -translate-x-1/2 z-50">
    <Message style={{backgroundColor:'red'}}  showIcon type="error" closable onClose={() => setError("")}>
      {error}
    </Message>
  
  </div>
)}


     
   </> 
  )
}

export default ErrorComponent