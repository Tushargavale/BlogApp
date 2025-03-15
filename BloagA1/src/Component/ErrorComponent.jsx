import React, { useEffect } from 'react'
import {Message} from 'rsuite'
import "rsuite/dist/rsuite.min.css";
const ErrorComponent = ({error,setError}) => {
  useEffect(()=>{console.log(error)},[error])
  return (
   <>
   {error && (
  <div className=" w-64 fixed top-[4rem] left-1/2 transform -translate-x-1/2 z-50">
    <Message showIcon type="error" closable onClose={() => setError("")}>
      {error}
    </Message>
  </div>
)}


     
   </> 
  )
}

export default ErrorComponent