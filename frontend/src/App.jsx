import React from 'react'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Customize from './pages/Customize'
import { userDataContext } from './context/UserContext'
import { useContext } from 'react'
import Home from './pages/Home'
import Customize2 from './pages/Customize2'

function App () {
  const {userData, setUserData,loading} = useContext(userDataContext)
  if(loading){
    return <div>Loading</div>
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={(userData?.assistantImage && userData?.assistantName)? <Home/> :<Navigate to="/customize"/>}/>
        <Route path='/signup' element={!userData?<SignUp/>:<Navigate to={"/"}/>}/>
        <Route path='/signin' element={!userData?<SignIn/>:<Navigate to={"/"}/>}/>
        <Route path='/customize' element={userData?<Customize/>:<Navigate to={"/signup"}/>}/>
         <Route path='/customize2' element={userData?<Customize2 />:<Navigate to={"/signup"}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
