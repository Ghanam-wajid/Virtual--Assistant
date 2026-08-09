import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const userDataContext = createContext()

function UserContext({children}) {
  const serverUrl = "https://virtual-assistant-b4g0.onrender.com"
  const [userData, setUserData] = useState(null)
  const [loading,setLoading]=useState(true)
  const [frontendImage, setFrontendImage] = useState(null)
  const [backendImage, setBackendImage] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)

const handleCurrentuser = async () => {
  try {
    console.log("ServerURL:", serverUrl)
    const result = await axios.get(`${serverUrl}/api/user/current`, {withCredentials: true})
    setUserData(result.data)
    console.log(result.data)
  } catch(error) {
    console.log(error)
  } finally {
    setLoading(false)
  }
}
  const getGeminiResponse=async(command)=>{
  try {
    const result=await axios.post(`${serverUrl}/api/user/asktoassistant`,{command},{withCredentials:true})
    return result.data
  } catch (error) {
    console.log(error)
  }
  }

  useEffect(() => {
    handleCurrentuser()
  }, [])

  const value = {
    serverUrl,
    userData, setUserData,
    backendImage, setBackendImage,
    frontendImage, setFrontendImage,
    selectedImage, setSelectedImage,
    getGeminiResponse,
    loading

  }

  return (
    <userDataContext.Provider value={value}>
      {children}
    </userDataContext.Provider>
  )
}

export default UserContext
