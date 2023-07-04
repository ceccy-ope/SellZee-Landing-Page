import React from 'react';
import fedex from "../assets/fedex.png";
import google from "../assets/google.png";
import ola from "../assets/ola.png";
import microsoft from "../assets/microsoft.png";
import amazon from '../assets/amazon.png';
import fedex2 from '../assets/fedex2.png';
import walmart from '../assets/walmart.png'

const ImageList = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <div className="flex flex-row justify-center items-center gap-10">
        <img className="bg-white py-3 px-6 shadow-lg" src={fedex} alt="" />
        <img className="bg-white py-3 px-6 shadow-lg" src={google} alt="" />
        <img className="bg-white py-3 px-6 shadow-lg" src={ola} alt="" />
        <img className="bg-white py-3 px-6 shadow-lg" src={microsoft} alt="" />
      </div>
      <div className="flex flex-row justify-center items-center gap-10 my-10">
        <img className="bg-white py-3 px-6 shadow-lg" src={amazon} alt="" />
        <img className="bg-white py-3 px-6 shadow-lg" src={fedex2} alt="" />
        <img className="bg-white py-3 px-6 shadow-lg" src={walmart} alt="" />
      </div>
    </div>
  );
}

export default ImageList