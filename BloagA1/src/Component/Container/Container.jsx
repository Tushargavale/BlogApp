import './Container.css'


export default function Container({ children }) {


  return (
  <>
  <div className="flex h-full  w-full items-center justify-center bg-gray-100">
      {children}
    </div> 
  </> 
  );
}