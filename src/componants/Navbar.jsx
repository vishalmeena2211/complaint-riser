import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { logout } from '../redux/Slices/authSlice';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();


  const handleLogout = () => {
    localStorage.removeItem('token');

    dispatch(logout());
  };



  return (
    <div>
      
<nav className="bg-white border-gray-200 dark:bg-gray-800">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-7">
    <NavLink to="/" className="flex items-center">
        {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" /> */}
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"><span className='text-blue-500 text-3xl'>C</span>omplaint<span className='text-blue-500 text-3xl'>R</span>iser</span>
    </NavLink>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-700 md:dark:bg-gray-800 dark:border-gray-700">
        <li>
          <NavLink to='/' className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</NavLink>
        </li>
        {isLoggedIn && <li>
          <NavLink to='/CitizenDetail' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Profile</NavLink>
        </li>}
        { isLoggedIn ? <li>
          <NavLink to='/ViewComplaints' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Complaints</NavLink>
        </li> : <li>
          <NavLink to='/AboutUs' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About Us</NavLink>
        </li>}
        {
          !isLoggedIn && 
            <div className='flex gap-8'>
          <li>
          <NavLink to='/CitizenLogin' className="block py-2 pl-3 pr-4 text-gray-900 rounded  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</NavLink>
        </li>
        <li>
          <NavLink to='/CitizenRagistration' className="block py-2 pl-3 pr-4 text-gray-900 rounded  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Signup</NavLink>
        </li>
        </div>
        }
        {
          isLoggedIn && 
            <div className='flex gap-8'>
          <li>
          <NavLink to='/' onClick={handleLogout} className="block py-2 pl-3 pr-4 text-gray-900 rounded  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Logout</NavLink>
        </li>
        </div>
        
        }
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar


// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showProfileDropdown, setShowProfileDropdown] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleProfileDropdown = () => {
//     setShowProfileDropdown(!showProfileDropdown);
//   };

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setShowProfileDropdown(false);
//   };

//   return (
//     <nav className="bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg text-white">
//       <div className="container mx-auto p-4">
//         <div className="flex items-center justify-between">
//           <div>
//             <h1 className="text-2xl font-semibold">My App</h1>
//           </div>
//           <div className="hidden md:flex space-x-4">
//             {isLoggedIn ? (
//               <div className="relative group">
//                 <button className="text-white">
//                   <img
//                     src="profile-image.jpg" // Replace with the user's profile image
//                     alt="User Profile"
//                     className="w-8 h-8 rounded-full cursor-pointer transform hover:scale-110 transition-transform duration-300"
//                     onClick={toggleProfileDropdown}
//                   />
//                 </button>
//                 {showProfileDropdown && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg text-gray-700">
//                     <div className="py-2 px-4 hover:bg-blue-100 cursor-pointer">
//                       <svg
//                         className="w-6 h-6 mr-2"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
//                       </svg>
//                       Edit Profile
//                     </div>
//                     <div className="py-2 px-4 hover:bg-blue-100 cursor-pointer">
//                       <svg
//                         className="w-6 h-6 mr-2"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 13l-7 7-7-7m14-8l3 3m0-3l-3 3"></path>
//                       </svg>
//                       Settings
//                     </div>
//                     <div className="py-2 px-4 hover:bg-blue-100 cursor-pointer">
//                       <svg
//                         className="w-6 h-6 mr-2"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
//                       </svg>
//                       Notifications
//                     </div>
//                     <div className="border-t border-gray-300"></div>
//                     <div className="py-2 px-4 hover:bg-blue-100 cursor-pointer" onClick={handleLogout}>
//                       <svg
//                         className="w-6 h-6 mr-2"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path>
//                       </svg>
//                       Logout
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <div className="space-x-4">
//                 <button className="text-white bg-blue-400 hover:bg-blue-600 py-2 px-4 rounded-lg" onClick={handleLogin}>
//                   Login
//                 </button>
//                 <a href="#/" className="text-white hover:text-gray-300">Sign Up</a>
//               </div>
//             )}
//           </div>
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={toggleMenu}
//               className="text-white focus:outline-none"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//                 ></path>
//               </svg>
//             </button>
//           </div>
//         </div>
//         {isOpen && (
//           <div className="md:hidden mt-2">
//             {isLoggedIn ? (
//               <div className="relative group">
//                 <button className="text-white">
//                   <img
//                     src="profile-image.jpg" // Replace with the user's profile image
//                     alt="User Profile"
//                     className="w-8 h-8 rounded-full cursor-pointer transform hover:scale-110 transition-transform duration-300"
//                     onClick={toggleProfileDropdown}
//                   />
//                 </button>
//                 {showProfileDropdown && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg text-gray-700">
//                     <div className="py-2 px-4 hover:bg-blue-100 cursor-pointer">
//                       <svg
//                         className="w-6 h-6 mr-2"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
//                       </svg>
//                       Edit Profile
//                     </div>
//                     <div className="py-2 px-4 hover:bg-blue-100 cursor-pointer">
//                       <svg
//                         className="w-6 h-6 mr-2"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 13l-7 7-7-7m14-8l3 3m0-3l-3 3"></path>
//                       </svg>
//                       Settings
//                     </div>
//                     <div className="py-2 px-4 hover:bg-blue-100 cursor-pointer">
//                       <svg
//                         className="w-6 h-6 mr-2"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
//                       </svg>
//                       Notifications
//                     </div>
//                     <div className="border-t border-gray-300"></div>
//                     <div className="py-2 px-4 hover:bg-blue-100 cursor-pointer" onClick={handleLogout}>
//                       <svg
//                         className="w-6 h-6 mr-2"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path>
//                       </svg>
//                       <span>Logout</span>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <div className="space-x-4">
//                 <button className="text-white bg-blue-400 hover:bg-blue-600 py-2 px-4 rounded-lg" onClick={handleLogin}>
//                   Login
//                 </button>
//                 <a href="/" className="text-white hover:text-gray-300">Sign Up</a>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
