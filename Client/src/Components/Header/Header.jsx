import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import coupleImage from '../../assets/couple.png'



const Header = () => {
    
  return (
   
<nav class="bg-black fixed top-0 w-full border-b border-gray-200">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <NavLink className="flex items-center" to={"/"}>

        <img src={coupleImage} class="h-8 mr-3" />
        <span className=" text-white self-center text-2xl font-semibold whitespace-nowrap">ConnectX</span>

    </NavLink>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      
          <NavLink to={"/login"} class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
          <span className='text-white font-mono border-x-2 border-white px-3 py-1 rounded hover:border-2 hover:text-sky-300' >
                Let's Connect
          </span>
          </NavLink> 
 
    </div>
  </div>
</nav>

  )
}

export default Header
