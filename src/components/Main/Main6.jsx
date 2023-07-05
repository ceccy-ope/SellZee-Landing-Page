import React from 'react';
import grp36 from '../assets/Group 36.png';
import grp37 from '../assets/Group 37.png'

const Main6 = () => {
  return (
    <div  className='h-[100vh] relative mb-10'>
      <div className="h-[50vh] bg-[#EBEDFF]">
        <h1 className="font-bold text-xl pt-5">
          Without Extra Charge Choose <br></br>Your Best Plan
        </h1>
        <div className="bg-white flex justify-around items-center  h-12 w-52 m-auto mt-5 rounded-md">
          <button className="bg-[#FF5A05] px-3 py-1 w-20 rounded-sm text-white h-8">
            Monthly
          </button>
          <button className="bg-[#FF5A051A] px-3 py-1 w-20 rounded-sm text-[#FF5A05] h-8">
            Yearly
          </button>
        </div>
      </div>
      <div className="flex justify-center my-5 gap-5 absolute top-40 left-40">
        <img className="w-[35%] h-[70%]" src={grp36} alt="" />
        <img className="w-[35%] h-[70%]" src={grp37} alt="" />
      </div>
    </div>
  );
}


export default Main6