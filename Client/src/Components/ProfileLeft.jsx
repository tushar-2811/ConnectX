import React from 'react'

import coupleImage from '../assets/couple.png'
import Home from '../assets/home.png'
import Loveletter from '../assets/love-letter.png'
import notification from '../assets/notification-bell.png'
import School from '../assets/school-building.png'
import Heart from '../assets/heart2.png'
import { NavLink, useNavigate } from 'react-router-dom'

const ProfileLeft = () => {
    const navigate = useNavigate();
  return (
    <div className='w-1/6 border bg-black fixed left-0 h-full'>

    <div className='flex items-center justify-center my-16' >
      <img src={coupleImage} class="h-8 mr-2" />
      <span className=" text-white self-center text-2xl font-semibold whitespace-nowrap">ConnectX</span>
    </div>

    <div className=' flex justify-center'>
      <ul className='text-white space-y-10 ' >
        
        <NavLink to="/auth/Home" >
        <li className='flex items-center ' >
          <img src={Home} class="h-8 mr-2" />
          <span className='font-mono font-medium text-xl'  > Home </span>
        </li>
        </NavLink>

        <li className='flex items-center' >
          <img src={School} class="h-8 mr-2" />
          <span className='font-mono font-medium text-xl' > My College </span>
        </li>

        <li className='flex items-center' >
          <img src={Loveletter} class="h-8 mr-2" />
          <span className='font-mono font-medium text-xl' > Messages </span>
        </li>

        <li className='flex items-center' >
          <img src={Heart} class="h-8 mr-2" />
          <span className='font-mono font-medium text-xl' > Date Requests  </span>
        </li>


        <li className='flex items-center' >
          <img src={notification} class="h-8 mr-2" />
          <span className='font-mono font-medium text-xl' > Notifications  </span>
        </li>

        <li className='flex items-center' >
          <img src="" class="h-8 mr-2" />
         <button onClick={() => navigate('/auth/complete-profile') } > 
             <span className='font-mono font-medium text-xl border-2 px-4 py-1 rounded-lg ' > Complete Profile </span>
              </button>
        </li>

      </ul>
    </div>



  </div>

  )
}

export default ProfileLeft
