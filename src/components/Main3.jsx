import React from 'react';
import front from '../assets/front.png';
import back from '../assets/back.png'

const Main3 = () => {
  return (
    <div className="relative mb-5 ">
      <img className="absolute top-0 left-0" src={back} alt="" />
      <img className="absolute top-40 left-32 w-[75%]" src={front} alt="" />
    </div>
  );
}

export default Main3