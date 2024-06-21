import { CheckCircleOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  const avatars = [
    "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg",
    "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-2.jpg",
    "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-9.jpg",
    "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-3.jpg",
    "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-4.jpg",
    "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-5.jpg",
    "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-6.jpg",
    "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-7.jpg",
  ];
  const keywords = [
    "John Doe",
    "Jassica",
    "Edututs",
    "Joginder Singh",
    "Zoena",
    "Albert Dua",
    "Ridhima",
    "Amritpal",
    "Jimmy",
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleAvatars = 6;

  const handlePrevClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (startIndex < avatars.length - visibleAvatars) {
      setStartIndex(startIndex + 1);
    }
  };

  return (

    <div className="grid grid-cols-7 bg-[#F7F7F7] gap-[200px]">
      <div className="col-span-5 mt-20">
        <div className="ml-[30px] mt-8 flex justify-between w-[950px]">
          <h2>Live Streams</h2>
          <Link to={"/livestream"}>
            <span className=" text-sm   ">See all</span>
          </Link>
        </div>
        <div className="mt-4  py-2 px-0 overflow-x-scroll no-scrollbar w-[1000px] relative">
          <div className="flex items-center">
            <button
              onClick={handlePrevClick}
              disabled={startIndex === 0}
              className="group bg-white hover:bg-red-600 absolute left-11 z-50  cursor-pointer px-2 py-0 rounded-[5px] "
            >
             <h1 className="group-hover:text-white">{"<"}</h1>
            </button>
            <div className="flex gap-4 rounded relative h-[174px] mx-10">
              {keywords
                .slice(startIndex, startIndex + visibleAvatars)
                .map((value, i) => (
                  <div key={i} className="bg-[#DDD8DD] rounded w-[144px]">
                    <div className="flex items-center flex-col justify-center bg-[#E3DFE3] mt-3 mb-3 ml-3 mr-3 h-[155px] drop-shadow-md">
                      <img
                        src={avatars[startIndex + i]}
                        alt={value}
                        className="w-20 h-20 rounded-full border-white"
                      />
                      <h3 className="text-xs">{value}</h3>
                      <span className="text-xs">
                        <span>live </span>
                        <span className="text-red-600">•</span>
                      </span>
                    </div>
                  </div>
                ))}
            </div>
            <button
              onClick={handleNextClick}
              disabled={startIndex >= avatars.length - visibleAvatars}
              className="group bg-white hover:bg-red-600 absolute right-[20px] z-50  cursor-pointer px-2 py-0 rounded-[5px] "
            >
              <h1 className="group-hover:text-white">{">"}</h1>
            </button>
          </div>
        </div>
        <div className="ml-[30px] mt-8 flex justify-between w-[950px]">
          <h2>Featured Courses</h2>
          <span className=" text-sm">See all</span>
        </div>

    
      </div>
      {/* cot ben phai */}
      <div className="col-span-2 mt-20   ">
        <div className="bg-[#FFFFFF] mt-9 w-[250px] ml-[-50px] flex flex-col items-center justify-center    ">
          <img
            src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-3.jpg"
            className="rounded-full w-16 mt-3  "
          />
          <div className="flex  ">
            <h3>Joginder Singh</h3>
            <CheckCircleOutlined className="text-blue-500" />
          </div>
          <span className="text-sm">
            Web Developer, Designer, and Teacher
          </span>
          <div className="flex gap-2 mt-3">
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_960_720.png"
                className="w-[40px]"
              />
            </div>
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2017/08/23/11/30/twitter-2672572_960_720.jpg"
                className="w-[40px]"
              />
            </div>
            <div>
              <img
                src="https://i1.wp.com/globalinfusion.org/wp-content/uploads/2018/01/ig-logo-email.png?ssl=1"
                className="w-[40px]"
              />
            </div>
            <div>
              <img
                src="https://1.bp.blogspot.com/-hY5-pNrOcKw/XeI_00cpCgI/AAAAAAAAF4A/J7jS49V8kNozycy0PgY6wfc7SUU9gulTgCLcBGAsYHQ/s1600/Youtube-Icon-square-2340x2340.png"
                className="w-[40px]"
              />
            </div>
          </div>
          <div className="text-sm items-center justify-center mt-3">
            <span>615k Students •</span>
            <span> 12 Courses</span>
            
          </div>
          <h3 className="text-sm mt-4">Go To Profile</h3>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
