import React from 'react';
import tab from '../assets/tab.png'

const HeaderContent = () => {
  return (
    <div className="w- flex flex-row justify-around items-center mx-20 my-20">
      <div className="w-[40%] flex flex-col justify-start items-start ">
        <p className="text-white font-normal tracking-widest ">
          INSPIRATION TECHNOLOGY.
        </p>
        <div className="my-5">
          <h1 className="text-white font-bold text-3xl tracking-widest ">
            Runs faster.
          </h1>
          <h1 className="text-white font-medium  text-3xl tracking-wide ">
            Costs less and
          </h1>
          <h1 className="text-white font-medium text-3xl tracking-wide">
            never breaks.
          </h1>
        </div>
        <div className="w-[50%] h-[1px] bg-white"></div>
        <p className="text-white text-left text-sm my-4 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          consequuntur doloribus officiis cum autem pariatur id consectetur
          dolorum quis iusto tenetur.
        </p>
        <div className='flex gap-5 my-5'>
          <button className="font-semibold text-white bg-[#FF5A05] px-4 py-2">
            Get Started
          </button>
          <button className="font-semibold text-white bg-transparent border px-4 py-2">
            Free Trial
          </button>
        </div>
      </div>
      <img className=" w-[40%] h-80" src={tab} alt="" />
    </div>
  );
}

export default HeaderContent