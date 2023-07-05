import React from 'react'

const Main7 = () => {
  return (
    <div className="h-[100vh]  flex justify-center relative items-center">
      <div className="h-[50%] w-[50%] bg-[#FDEEE7] absolute top-36 z-0 rounded-2xl"></div>
      <div className="h-[50%] w-[60%] bg-[#FDEEE7] absolute top-48 z-10 rounded-2xl"></div>
      <div className="h-[50%] w-[70%] bg-[#FDEEE7] absolute top-56 z-20 rounded-2xl flex flex-col justify-center items-center">
        <h2 className="font-bold text-sm py-2 text-[#FF5A05]">NEWSLETTER</h2>
        <h1 className="font-bold pb-4 text-2xl">
          We Offer Every Month 20% Off<br></br> For Our All Subscribers
        </h1>
        <div className="flex justify-between border-x-2 border-y-4 outline-none py-1 px-2 bg-transparent w-80">
          <input className="bg-transparent text-xs" type="email" placeholder="Email Address"/>
          <button className="bg-[#FF5A05] text-white py-1 px-3 text-xs">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Main7 
