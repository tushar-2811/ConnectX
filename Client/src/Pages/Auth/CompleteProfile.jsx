import React, { useState } from 'react'
import ProfileLeft from '../../Components/ProfileLeft';
import ProfileRight from '../../Components/ProfileRight';
import {LoadingState} from '../../State/Atoms/loadingState'
import { useRecoilState, useRecoilValue , useSetRecoilState } from 'recoil';
import { userInfo } from '../../State/Atoms/userInfo';
import { useEffect } from 'react';
import axios from 'axios';
import Spinner from '../../Components/Spinner';
import { useNavigate } from 'react-router-dom';


const CompleteProfile = () => {

  const navigate = useNavigate();
 const [loadingState , setLoadingState] = useRecoilState(LoadingState);

  const setUserInfo = useSetRecoilState(userInfo);
  const userInformation = useRecoilValue(userInfo);

  const [details , setDetails] = useState({
     college : "",
     course : "",
     gender : "",
     height : "",
     bodyCount : "",
     isSmoker : false,
     isDrinker : false,
     inRelationship : false
  })

  useEffect(() => {
    
    const getData = async () => {
      const token = localStorage.getItem("token");
      const { data } = await axios.get('http://127.0.0.1:4000/api/v1/user/profile', {
        headers: {
          Authorization: token
        }
      })

      console.log(data.user);
      setUserInfo({
        name: data.user.name,
        email: data.user.email,
        userName: data.user.userName,
        college : data.user.college,
        course : data.user.course,
        gender : data.user.gender,
        height : data.user.height,
        bodyCount : data.user.bodyCount,
        isSmoker : data.user.isSmoker,
        isDrinker : data.user.isDrinker,
        inRelationship : data.user.inRelationship
      })
      setLoadingState(false);
    }

    getData();
    
   
  }, [])


  const handleChange = async(e) => {

    if (e.target.type === 'radio') {
      setDetails((prevState) => ({
        ...prevState,
        gender: e.target.value,
      }));
    }

    // Handle checkboxes (smoker, drinker, relationship)
    else if (e.target.type === 'checkbox') {
      setDetails((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.checked,
      }));
    }
    
    else{
      
     setDetails(prevState => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))

    }

  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(details);

    const {data} = await axios.post('http://127.0.0.1:4000/api/v1/user/update' , {...details} , {
      headers : {
        Authorization : localStorage.getItem('token')
      }
    })

    console.log(data);
    navigate('/auth/profile')

  }


  return (
      <>
      {loadingState ? 
      (
        <> <Spinner/> </>
      ) 
      : 
      (
        <> 
         <div className='w-full h-screen flex justify-center ' >
      <ProfileLeft />

      <div className=' w-1/2 border-2 px-6 flex flex-col justify-start gap-y-8'>

        <h1 className='font-mono font-medium text-blue-700 text-4xl mt-4 ml-auto mr-auto' >
          Complete Profile
        </h1>

        <div className='w-full border-2 border-black' >

        </div>

        <form>

          <div class="relative z-0 w-full mb-6 group">
            <input type="text" value={details.college} onChange={handleChange} name="college" id="college" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="college" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">College</label>
          </div>

          <div class="relative z-0 w-full mb-6 group">
            <input type="text" name="course" value={details.course} onChange={handleChange} id="course" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="course" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Course</label>
          </div>

          <div className="flex">
            <div className="flex items-center gap-x-4 mr-4">

              <div className='flex items-center gap-x-1 mr-4'>
                <input
                  id="male"
                  type="radio"
                  name="gender" // Use the same name for both radio buttons to make them mutually exclusive
                  value="Male"
                  checked={details.gender === 'Male'}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  "
                />
                <label htmlFor="male" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
              </div>

              <div className="flex items-center gap-x-1 mr-4">
                <input
                  id="female"
                  type="radio"
                  name="gender" // Use the same name for both radio buttons to make them mutually exclusive
                  value="Female"
                  checked={details.gender === 'Female'}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                />
                <label htmlFor="female" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
              </div>

            </div>
          </div>



          <div class="grid md:grid-cols-2 md:gap-6 mt-4">

            <div class="relative z-0 w-full mb-6 group">
              <input type="number" name="height" value={details.height} onChange={handleChange} id="height" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="height" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Height</label>
            </div>

            <div class="relative z-0 w-full mb-6 group">
              <input type="number" name="bodyCount" value={details.bodyCount} onChange={handleChange} id="bodyCount" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="bodyCount" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">BodyCount</label>
            </div>

          </div>

          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">

              <label className="relative inline-flex items-center cursor-pointer">
                <input name='isDrinker' type="checkbox" value={details.isDrinker} checked={details.isDrinker} onChange={handleChange } defaultValue className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Do You Drink ?</span>
              </label>


            </div>
            <div class="relative z-0 w-full mb-6 group">

              <label className="relative inline-flex items-center cursor-pointer">
                <input name='isSmoker' type="checkbox" defaultValue value={details.isSmoker} checked={details.isSmoker} onChange={handleChange} className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Do You Smoke ?</span>
              </label>

            </div>

          </div>

          <div class="relative z-0 w-full mb-6 group">

            <label className="relative inline-flex items-center cursor-pointer">
              <input name='inRelationship' type="checkbox" defaultValue value={details.inRelationship} checked={details.inRelationship} onChange={handleChange} className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Relationship </span>
            </label>

          </div>
          <button onClick={handleSubmit} type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Submit
            </button>
        </form>


      </div>

      <ProfileRight name={userInformation.name}
      college =  {userInformation.college}
      course = { userInformation.course}
      gender =  {userInformation.gender}
      height =  {userInformation.height}
      bodyCount =  {userInformation.bodyCount}
      isSmoker = { userInformation.isSmoker}
      isDrinker =  {userInformation.isDrinker}
      inRelationship = {userInformation.inRelationship} />
    </div>
        </>
      )}
      </>
  )
}

export default CompleteProfile;
