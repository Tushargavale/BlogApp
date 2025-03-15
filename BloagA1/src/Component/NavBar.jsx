import React from 'react'

import { useState } from 'react';
import { Link,NavLink } from 'react-router-dom';

const NavBar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    const common=[
        {
            name:'Home',
            slug:'/home',
        },
        {
            name:'About',
            slug:'/about'
        },
        {
            name:'contact',
            slug:'/contact'
        }
    ]



    const conitionNavItem=[
        {
            name:'Login',
            slug:'/login',
            Auth:!isAuthenticated
        },
        {
            name:'Signup',
            slug:'/signup',
            Auth:!isAuthenticated
        },
        {
            name:'Blogs',
            slug:'/blogs',
            Auth:isAuthenticated
        },
        {
            name:'Profile',
            slug:'/profile',
            Auth:isAuthenticated
        },
        {
            name:'Add Blog',
            slug:'/addnew',
            Auth:isAuthenticated
        }
    ]
  return (
    <>
<nav className="bg-black text-white py-4 px-6 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-6 text-lg font-semibold">
          {common.map((item, key) => (
            <NavLink
              to={item.slug}
              key={key}
              className="text-white px-4 py-2 rounded-lg hover:text-white hover:no-underline focus:no-underline active:text-white focus:text-white hover:font-bold"
            >
              {item.name}
            </NavLink>
          ))}

          <div className="mx-4"></div> {/* Adds space between sections */}

          {conitionNavItem.map((item, key) => {item.Auth?<>
          
 
             <NavLink
               to={item.slug}
               key={key}
               className="text-white px-4 py-2 rounded-lg hover:text-white hover:no-underline focus:no-underline active:text-white focus:text-white hover:font-bold"
            >
               {item.name}
             </NavLink>
            
          


          
          </>:null} )}
        </div>

        {isAuthenticated && (
          <button
            className="bg-transparent text-lg border-none px-4 py-2 rounded-lg text-white no-underline focus:outline-none font-bold"
         onClick={()=>setIsAuthenticated(!isAuthenticated)}
         >
            Logout
          </button>
        )}
      </div>
    </nav>



   </>
  )
}

export default NavBar


// import React, { useEffect } from 'react'
// import './Navbar.css'
// import { NavLink,useNavigate } from 'react-router-dom'
// // import { fetchUSer,Logout } from '../../Redux/authAPI'
// // import { useSelector,useDispatch } from 'react-redux'

// const Navbar = () => {
// //   const navigate=useNavigate()

// // let dispatch=useDispatch()
// //   useEffect(()=>{
// //     dispatch(fetchUSer())
// //   },[navigate])

  

// //   const Auth= useSelector((state)=>state.user.status)
 

//   const Auth=false


//   const content=[
//   {
//       value:'Login',
//       slut:'/login',
//       Auth:!Auth  
//   },
//   {
//     value:'Sign Up',
//     slut:'/signup',
//     Auth:!Auth,
//   },
//   {
//     value:'Profile',
//     Auth:Auth,
//     slut:'/profile'
//   },
//   {
//     value:'Cart',
//     Auth:Auth,
//     slut:'/cart'
//   },
//   {
//     value:'Products',
//     Auth:Auth,
//     slut:'/product'
//   }
// ]

// const commonContent=[
//     {
//         value:'Home',
//         slut:'/'
//     },
//     {
//         value:'About',
//         slut:'/about'
//     },
//     {
//         value:'Contact us',
//         slut:'/contact'
//     }
// ]

// function Logoutuser(){
//   // dispatch(Logout())
//   // navigate('/login')
// }
  

//  return (
//     <div className="NavBarContainer">
//      {/* Common  */}
//       <div className="common">
//         {commonContent?.map((item, key) => (
//           <NavLink key={key} className="item" to={item.slut}>
//             {item.value}
//           </NavLink>
//         ))}
//       </div>

    
//       <div className="condition">
//         {content
//           ?.filter((item) => item.Auth) 
//           .map((item, key) => (
//             <NavLink key={key} className="item" to={item.slut}>
//               {item.value}
//             </NavLink>
//           ))}
//       </div> 
//       {Auth? 
//       <div className='condition'>
//         <button className='item' onClick={Logoutuser} >
//           Logout
//         </button>

//       </div>  
//     :null
//     }
//     </div>
//   );




  
// }

// export default Navbar







//  {item.Auth? 
//              <NavLink
//               to={item.slug}
//               key={key}
//               className="text-white px-4 py-2 rounded-lg hover:text-white hover:no-underline focus:no-underline active:text-white focus:text-white hover:font-bold"
//             >
//               {item.name}
//             </NavLink>
            
//             :null}


