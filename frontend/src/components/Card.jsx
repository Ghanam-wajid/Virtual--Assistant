import React, { useContext } from 'react'
import { userDataContext } from '../context/userContext'

const Card = ({image}) => {
  const { serverUrl,userData, setUserData,backendImage,setBackendImage,frontendImage,setFrontendImage,selectedImage,setSelectedImage}=useContext(userDataContext)
  return (
    <div className={`w-[60px] h-[130] lg:w-[120px] lg:h-[200px] bg-[#030326] border-2 border-[#0000ff31] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-950 cursor-pointer hover:border-4 hover:bg-white ${selectedImage==image?"border-4 border-white shadow-2xl shadow-blue-950":null}`}onClick={()=>{
      setSelectedImage(image)
      setBackendImage(null)
      setFrontendImage(null)
      }}>
        <img src={image} className='w-full h-full object-cover'/>
    </div>
  )
}

export default Card
