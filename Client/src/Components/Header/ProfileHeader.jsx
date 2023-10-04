import React from 'react'
import tushar from '../../assets/tushar.jpg'

function ProfileHeader(props) {
  return (
    <div className='w-full h-56 mt-4 border-b-2 flex  mb-4' >

        
          <img src={tushar} alt="" className='object-cover  rounded-full ml-8 my-4' />
        

        <div className='border-b-2 h-1/2 ml-3 pt-4 flex flex-col justify-between mt-8 '>
            <h1 className='font-mono font-medium ' > {props.username} </h1>
            <p className='font-mono font-black'> Wanna Hangout Let's go for a party Bitch.... </p>
            <h1 className='font-mono text-xl text-gray-600' > {props.name} </h1>
        </div>
    </div>
  )
}

export default ProfileHeader;
