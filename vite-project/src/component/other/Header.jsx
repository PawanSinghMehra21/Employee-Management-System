import React from 'react'

function Header() {
  return (
    <div className='flex items-end justify-between'>
      <h1 className=' text-black text-2xl font-medium '>Hellow <br/><spain className='text-3xl text-white font-semibold'> Pawan  👋 </spain> </h1>
      <button className='bg-red-500 text-lg font-medium  text-white px-5 py-2 rounded'>Log Out</button>
    </div>
  )
}

export default Header
