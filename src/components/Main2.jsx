import React from 'react'
import main2 from '../assets/main2.png'
import { LiaCheckCircle } from "react-icons/lia";

const Main2 = () => {
  return (
    <div className="flex mt-14 justify-start items-start gap-5 ">
      <img className="" src={main2} alt="" />
      <div className="w-[40%] mt-14 h-[100%] text-left">
        <p className="text-red-500">LOREM IPSU DOREM SIT AME </p>
        <h1 className="font-bold text-5xl mt-3">Simple Solutions For</h1>
        <h1 className="font-bold text-5xl mb-4">Complex Connections</h1>
        <p className="text-sm mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quo
          recusandae veniam modi asperiores architecto tenetur corporis impedit?
          Dolorem tempora expedita architecto aliquid placeat nihil atque illo
          eaque itaque doloremque?
        </p>
        <div className="flex justify-left gap-10 mb-4">
          <div className="flex font-bold gap-3">
            <LiaCheckCircle size="20px" color="black" />
            <p>High Analysis</p>
          </div>
          <div className="flex font-bold gap-3">
            <LiaCheckCircle size="20px" color="black" />
            <p>Certified Institute</p>
          </div>
        </div>
        <button className="font-semibold text-white bg-[#FF5A05] px-4 py-2">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Main2