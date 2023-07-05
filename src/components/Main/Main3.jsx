import React from 'react';
import front from '../assets/front.png';
import back from '../assets/back.png'

const Main3 = () => {
  return (
    <div className=" h-96 flex justify-center items-center mb-40">
      <img className="absolute" src={back} alt="" />
      <img className="z-50 w-[70%] absolute " src={front} alt="" />
    </div>
  );
}

export default Main3