import React from 'react'
import indianflag from '../../assets/india.png'
import heart from '../../assets/heart.png'

const Footer = () => {
  return (
    
<footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-black border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"> 
    © 2023 ConnectX™. All Rights Reserved.
    </span>
    <span class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
       Made in  <span> <img className="h-8 mx-3" src={indianflag} alt="" /> </span> with <span> <img className='h-8 mx-3' src={heart} alt="" /> </span>
    </span>
</footer>

  )
}

export default Footer
