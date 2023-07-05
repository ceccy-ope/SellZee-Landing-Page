import React from "react";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import {BsFillStarFill } from 'react-icons/bs';
import Rectangle26 from '../assets/Rectangle 26.png'

const Main5 = () => {
  return (
    <div className="h-[80vh] mt-40">
      <div className="">
        <h1 className="text-3xl font-bold mb-3">User's Review</h1>
        <p className="text-xs">
          Collaborate over projects with your team and clients optimised
        </p>
        <p className="text-xs">for mobile and tablet don't let slow</p>
      </div>
      <div className="flex justify-center items-start gap-48 mt-20 relative">
        <div className="h-[100%] text-left">
          <h1 className="font-bold text-xl align-text-top">
            What People Say About Us
          </h1>
          <div className=" shadow-sm bg-white mt-28 absolute pl-5 pr-16 pt-4 pb-6">
            <div className="flex gap-44 ">
              <div className="flex flex-col items-start">
                <h1 className="font-bold text-lg">Davit millar</h1>
                <p className="font-normal text-sm">CEO, PParkview int, Ltd </p>
              </div>
              <div className="flex mt-7">
                <BsFillStarFill size="20px" color="orange" />
                <BsFillStarFill size="20px" color="orange" />
                <BsFillStarFill size="20px" color="orange" />
                <BsFillStarFill size="20px" color="orange" />
              </div>
            </div>
            <div className="text-xs italic mt-12 text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nisl,{" "}
              <br></br>tincidunt commodo sit. Et, purus lectus odio cursus
              placerat leo, <br></br>non etiam. Neque at leo risus orci,
            </div>
          </div>
          <div className="flex absolute bottom-[1px] left-96 gap-2">
            <MdOutlineChevronRight
              style={{
                backgroundColor: "red",
                color: "white",
                width: "36px",
                height: "36px",
                borderRadius: "0px 62.5px  62.5px  62.5px",
                rotate: "-180deg"
               
              }}
            />
            <MdOutlineChevronRight
              style={{
                backgroundColor: "red",
                width: "36px",
                color: "white",
                height: "36px",
                borderRadius: "62.5px 62.5px 62.5px 0px",
              }}
            />
          </div>
        </div>
        <div className="">
          <img className=" w-[80%]" src={Rectangle26} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main5;
