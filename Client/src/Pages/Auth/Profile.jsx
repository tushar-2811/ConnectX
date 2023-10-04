import React, { useEffect } from 'react'
import axios from 'axios'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { userInfo } from '../../State/Atoms/userInfo'

import { useNavigate } from 'react-router-dom'
import ProfileHeader from '../../Components/Header/ProfileHeader'
import ProfileImage from '../../Components/ProfileHeader'
import Spinner from '../../Components/Spinner'
import { NavLink } from 'react-router-dom'
import ProfileLeft from '../../Components/ProfileLeft'
import ProfileRight from '../../Components/ProfileRight'


const Profile = () => {
  
  const navigate = useNavigate();
  const setUserInfo = useSetRecoilState(userInfo);
  const userInformation = useRecoilValue(userInfo);

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
    }

    getData();
  }, [])

  


  return (
    <div className='w-full h-screen flex justify-center ' >

       <ProfileLeft/>

      <div className=' w-1/2'>
            <ProfileHeader username={userInformation.userName} name={userInformation.name} /> 
          
            <ProfileImage/> 

      </div>


      <ProfileRight name={userInformation.name} 
                     college =  {userInformation.college}
                     course = { userInformation.course}
                     gender =  {userInformation.gender}
                     height =  {userInformation.height}
                     bodyCount =  {userInformation.bodyCount}
                     isSmoker = { userInformation.isSmoker}
                     isDrinker =  {userInformation.isDrinker}
                     inRelationship = {userInformation.inRelationship}
                      />



    </div>
  )
}

export default Profile;
