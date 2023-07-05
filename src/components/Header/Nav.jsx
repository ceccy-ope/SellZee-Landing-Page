import React from 'react'
import logo from '../assets/logo.png'

const Nav = () => {
  return (
    <div className=" flex justify-around items-center mx-20 pt-5">
      <img className="w-[10%] h-[30%]" src={logo} alt="" />

      <ul className="flex  w-[40%] flex-row justify-evenly text-white font-medium">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Testimonial</li>
        <li>Pricing</li>
      </ul>

      <button
        className="font-semibold text-white bg-[#FF5A05] px-4 py-2"
      >
        Get Started
      </button>
    </div>
  );
}

export default Nav