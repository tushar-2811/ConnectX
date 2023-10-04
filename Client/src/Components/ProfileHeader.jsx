import React from 'react'
import tushar from '../assets/tushar.jpg'


const ProfileImage = () => {
  return (
    <div className='border-2 w-full h-1/3 my-8 gap-x-2 flex  ' >

      <div className='w-1/2 border-black transition duration-500 hover:scale-75 hover:cursor-pointer '>
            <img src={tushar} alt="" className='object-cover h-full w-full'/> 
      </div>

      <div className='w-1/2  transition duration-500 hover:scale-125 hover:cursor-pointer'>
      <img src={tushar} alt="" className='object-cover h-full w-full'/> 
      </div>

    </div>
  )
}

export default ProfileImage
