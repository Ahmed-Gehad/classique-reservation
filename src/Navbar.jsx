import React from 'react'

import logo from '../src/assets/logo.webp'

function Navbar() {
  return (
    <div className='relative h-64'>
        <img src={logo} alt="" 
        className='w-full h-52 rounded-3xl'/>
        <div className='absolute top-10 left-0 w-full h-full  flex justify-center items-center text-white text-2xl font-bold'>
            Catring By Classique
        </div>
    </div>
  )
}

export default Navbar