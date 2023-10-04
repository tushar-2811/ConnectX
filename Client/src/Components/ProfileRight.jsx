import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';



const ProfileRight = (props) => {

    const navigate = useNavigate();


    const handleLogout = async(e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        navigate('/login');
    }

  return (
    

    <div className='w-1/6 border bg-black fixed h-full right-0'>

    <div className='font-mono text-white flex justify-center my-4 font-medium text-xl'  > 
    {props.name} 
    </div>


    <div className=' flex justify-start mt-4 pl-6'>

        <ul className='text-white space-y-6 ' >

        

          <li className='flex items-center ' >
            <span className='font-mono  font-medium text' > RelationShip : {props.inRelationship ? "yes" : "No"}   </span>
          </li>

          <li className='flex items-center ' >
            <span className='font-mono font-medium text' > Gender : {props.gender}   </span>
          </li>

         
          <li className='flex items-center ' >
            <span className='font-mono font-medium text' > College : {props.college}   </span>
          </li>

          
          <li className='flex items-center ' >
            <span className='font-mono font-medium text' > Course : {props.course}   </span>
          </li>

          
          <li className='flex items-center ' >
            <span className='font-mono font-medium text' > BodyCount : {props.bodyCount}   </span>
          </li>

          
          <li className='flex items-center ' >
            <span className='font-mono font-medium text' > Sutta : {props.isSmoker ? "yes" : "No"}   </span>
          </li>

          
          <li className='flex items-center ' >
            <span className='font-mono font-medium text' > Daru : {props.isDrinker ? "yes" : "No"}   </span>
          </li>

          
          <li className='flex items-center ' >
            <span className='font-mono font-medium text' > Height : {props.height}cm   </span>
          </li>

        </ul>
      </div>

      <div className='flex justify-center my-8'  >
        <button className=' border-2 px-3 rounded-lg  py-2 hover:bg-slate-200' onClick={handleLogout} > 
        <span className="text-transparent font-mono bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> Logout </span> </button>
      </div>

    </div>
  )
}

export default ProfileRight
