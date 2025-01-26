import React from 'react'
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa'
import qZone from '../../assets/img/q-zone1.jpeg'

const RightSideNav = () => {
  return (
 <div>
     <div className='p-4 space-y-3 mb-6'>
    <h2 className='text-3xl'>Login With</h2>
    <button className='btn btn-outline w-full'>
      <FaGoogle/> Google
    </button>
    <button className='btn btn-outline w-full'>
      <FaGithub/> Github
    </button>
</div>

<div className='p-4  mb-6'>
    <h2 className='text-3xl m'>Find Us on</h2>
      <a className='flex p-4 text-lg items-center border-x rounded-t-lg' href=""><FaFacebook className='mr-3'/>
     <span> Facebook</span></a>
      <a className='flex p-4 text-lg items-center border rounded-t-lg' href=""><FaTwitter className='mr-3'/>
     <span> Twitter</span></a>
      <a className='flex p-4 text-lg items-center border rounded-t-lg' href=""><FaInstagram className='mr-3'/>
     <span> Instagram</span></a>
</div>

{/* q zone */}
<div className='p-4 space-y-3 mb-6'>
 <h2 className='text-3xl'>Q Zone</h2>
 <img src={qZone} alt="" />
 <img src={qZone} alt="" />
 <img src={qZone} alt="" />
</div>
 </div>
  )
}

export default RightSideNav