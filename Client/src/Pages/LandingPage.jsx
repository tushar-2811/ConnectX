import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import winking from '../assets/winking.png'
import { useNavigate } from 'react-router-dom'


const LandingPage = () => {
    const navigate = useNavigate();
  return (
   <>
 
   <div className='pt-20 w-full h-screen flex bg-black'>
      <div className='w-2/5 flex flex-col justify-center items-center '>

      <div className=' transition duration-500 hover:scale-125 hover:cursor-pointer '>
          
      <h1 class=" text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
        ConnectX
       </span>
       </h1>

      </div>

      <div className='flex items-center pl-48'>
         <h2 className='text-white font-mono'>Won't Be Connecting With Ur X    </h2>
         <img src={winking} className='h-8 mx-3' alt="" />
      </div>

      </div>

      <div className='w-3/5 flex flex-col justify-start gap-y-10 pt-32' >
           <h1 className='text-white font-extrabold font-mono text-4xl  ' >A College Based Social Interaction Platform for <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Gen-Z
           </span>
           </h1>

           <h1 className='text-white font-extrabold font-mono text-2xl' > Wanna Hang out with that <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Cute Girl</span> in College you Saw last week ? </h1>
           <h1 className='text-white font-extrabold font-mono text-2xl' >Wanna Go On <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Blind Date</span> with SomeOne from ur own School/College ? </h1>
           
           <div className='mx-auto'>
            <button onClick={() => navigate('/login')} className=' font-extrabold font-mono text-2xl border border-white px-4 py-2 rounded-lg hover:bg-gray-200' >
                 <span class="text-transparent font-mono bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">That Sounds Cool</span> 
            </button>
           </div>
      </div>
   </div>

   </>
  )
}

export default LandingPage;