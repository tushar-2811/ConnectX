import { Routes,Route, Outlet } from "react-router-dom"
import LandingPage from "./Pages/LandingPage"
import Login from "./Pages/Login"
import Layout from "./Components/Layout/Layout"
import SignUp from "./Pages/SignUp"
import Home from "./Pages/Auth/Home"
import AuthCheck from "./Pages/Auth/AuthCheck"
import Profile from './Pages/Auth/Profile'
import CompleteProfile from "./Pages/Auth/CompleteProfile"

function App() {
  
  return (
    <>
      <Routes>

         <Route path="/" element={<Layout/>} > 

         <Route index element={<LandingPage/>} />
         <Route path="/login" element={<Login/>}/>
         <Route path="/register" element={<SignUp/>} />
        
         </Route>

         <Route path="/auth" element={<AuthCheck/>} >
           <Route path="profile" element={<Profile/>} />
           <Route path="home" element={<Home/>}/>
           <Route path="complete-profile" element={<CompleteProfile/>} />
         </Route>


      </Routes>
    </>
  )
}

export default App
