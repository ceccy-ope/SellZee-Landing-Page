import React from 'react'
import Nav from './Nav'
import HeaderContent from './HeaderContent'

const Header = () => {
  return (
    <div className='w-full h-[50%] bg-blue-600 flex flex-col'>
        <Nav />
        <HeaderContent />
    </div>
  )
}

export default Header