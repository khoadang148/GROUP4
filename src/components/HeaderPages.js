import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderPages = () => {
    const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/home');
  };
  return (
    <div className="p-4 z-50 flex items-center justify-between bg-white h-[60px] w-full fixed top-0 left-0">
        <button
          onClick={handleBackClick}
          className="bg-white text-black border border-black py-1.5 px-4 rounded-full hover:bg-gray-800 hover:text-white transition duration-300 text-base"
        >
          Back to Cursus
        </button>
        <button onClick={handleBackClick} className="ml-22">
          <img
            className="w-[120px] h-[30px]"
            src={require("../assets/logo.png")}
            alt="hehe"
          />
        </button>
        <img
          className="w-[40px] h-[40px] rounded-full border border-gray-300 ml-8"
          src='https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg'
          alt="Cursus"
        />
      </div>
  )
}

export default HeaderPages