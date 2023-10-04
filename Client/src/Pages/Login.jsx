import React, { useState } from 'react'
import heart1 from '../assets/heart1.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'




const Login = () => {

  const navigate = useNavigate();
 
  const [details , setDetails] = useState({
    userName : "",
    password : ""
  }) 

  const handleChange = (e) => {
    setDetails((prevState) => ({
      ...prevState ,
     [e.target.id] : e.target.value
    }))
  }



  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const {data} = await axios.post("http://127.0.0.1:4000/api/v1/user/login",{
                   userName : details.userName,
                   password : details.password}
    );

    localStorage.setItem('token' , data.token);
    navigate('/auth/profile');
  }




  return (
    <div className='pt-20 w-full h-screen flex bg-black justify-center '>

      <div className=' h-5/6  w-2/3 flex'>

        <div className='w-2/5 rounded-lg '>
           <p className='font-mono text-white text-4xl text-center mt-32' >Let's Connect With Cool People Around In School</p>
           <p className='text-transparent font-mono text-2xl text-center bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'> A HangOut Place For Gen-Z </p>
        </div>

        <div className='w-3/5  bg-black flex flex-col justify-center '>

          <div className='flex  items-center justify-center'>

            <h1 className='font-mono font-semibold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400' >
              Enter The Colorful World of
            </h1>
            <img className='h-8' src={heart1} alt="" />

          </div>

          <div className='border border-white rounded-lg h-2/3 w-2/3 mx-auto  ' >
             <form className='flex flex-col' >

               <input type="text" id='userName' value={details.userName} placeholder='UserName' className='bg-slate-200 m-4 p-2 rounded-lg' onChange={handleChange} />
               <input type='password' id='password' value={details.password} placeholder='Password' className='bg-slate-200 m-4 p-2 rounded-lg' onChange={handleChange} />
               <button type='submit' className='text-white border border-white mx-5 p-2 rounded-lg' onClick={handleSubmit}> 
                 LogIn 
               </button>

              <div className='flex mt-10 items-center justify-around'>
                
               <p className='text-white'> Don't have an Account ?  </p>
               <button onClick={(e) => {
                e.preventDefault();
                navigate('/register')
               }}
               className='border border-white text-white font-mono px-2 py-2 rounded-lg hover:bg-white hover:text-black ' >
                 Sign Up
                 </button>
                
              </div>
             </form>

          </div>


        </div>

      </div>
    </div>
  )
}

export default Login
