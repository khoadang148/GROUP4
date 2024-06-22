import React, { useState } from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const ExploreScreen = ({ sidebar }) => {
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
  const thumbnails = [
    "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-1.jpg",
    "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-2.jpg",
    "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-4.jpg",
    "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-7.jpg",
    "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-8.jpg",
    "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-13.jpg",
    "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-16.jpg",
    "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-20.jpg",
  ];
  const rates = ["4.5", "5", "4", "4.5", "5", "4", "5", "4"];
  const prices = ["$10", "$10", "$10", "$10", "$10", "$10", "$10", "$10"];
  const instructors = [
    "John Doe",
    "John Doe",
    "John Doe",
    "John Doe",
    "John Doe",
    "John Doe",
    "John Doe",
    "John Doe",
  ];
  const languages = [
    "Javascript",
    "Web Development | Python",
    "Javascript",
    "Web Development | Python",
    "Javascript",
    "Web Development | Python",
    "Javascript",
    "Web Development | Python",
  ];
  const hours = [
    "25 hours",
    "28 hours",
    "30 hours",
    "1 hour",
    "25 hours",
    "28 hours",
    "30 hours",
    "1 hour",
  ];
  const views = [
    "109k views",
    "109k views",
    "109k views",
    "109k views",
    "109k views",
    "109k views",
    "109k views",
    "109k views",
  ];
  const times = [
    "15 days ago",
    "15 days ago",
    "15 days ago",
    "15 days ago",
    "15 days ago",
    "15 days ago",
    "15 days ago",
    "15 days ago",
  ];
  const titles = [
    "Complete Python Bootcamp: Go from zero to hero in Python 3",
    "Complete Python Bootcamp: Go from zero to hero in Python 3",
    "Complete python bootcamp",
    "Complete python bootcamp",
    "Complete python bootcamp",
    "Complete python bootcamp",
    "Complete python bootcamp",
    "Complete python bootcamp",
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [visibleAvatars, setVisibleAvatars] = useState(7);

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

  const handleToggleSidebar = () => {
    setVisibleAvatars(visibleAvatars === 7 ? 6 : 7);
  };
  return (
    <div className="mt-20 ml-8 overflow-x-hidden">
      <div className="group flex">
        <div
          className={`mt-4 mb-5 border-2 border-[#F7F7F7] bg-white px-4 text-base  h-[50px] relative pt-1 group-focus-within:border-black ${
            sidebar ? "w-[1400px]" : "w-[1640px]"
          }`}
        >
          <input
            type="text"
            placeholder="Search for Tuts Videos, Tutors, Tests and more.."
            className={`focus:outline-none  text-sm ml-20 mt-2 text-black bg-white placeholder-gray-500 focus:placeholder-black focus:text-black rounded-[5px]
                ${sidebar ? "w-[1300px]" : "w-[1540px]"}`}
          />
          <button type="submit" className="top-2 left-14 absolute">
            <Image
              className="max-w-none mt-2"
              src={require("./assets/search.png")}
              width={14}
              height={14}
              alt="Search"
            />
          </button>
        </div>
      </div>
      <div className="ml-[30px] mt-8 flex justify-between">
        <h2>Live Streams</h2>
        <Link to={"/livestream"}>
          <span className="text-sm">See all</span>
        </Link>
      </div>
      <div className="mt-4  py-2 px-0 overflow-x-scroll no-scrollbar relative">
        <div className="flex items-center">
          <button
            onClick={handlePrevClick}
            disabled={startIndex === 0}
            className="group bg-white hover:bg-red-600 absolute left-3 z-50  cursor-pointer px-2 py-0 rounded-[5px] "
          >
            <h1 className="group-hover:text-white">{"<"}</h1>
          </button>
          <div
            className={`flex gap-[7px] rounded relative h-[175px] ${
              sidebar ? "w-[1400px]" : "w-full"
            }`}
          >
            {keywords
              .slice(startIndex, startIndex + visibleAvatars)
              .map((value, i) => (
                <div
                  key={i}
                  className="bg-[#DDD8DD] rounded w-[230px] h-[175px]"
                >
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
            className="group bg-white hover:bg-red-600 absolute right-[14px] z-50  cursor-pointer px-2 py-0 rounded-[5px] "
          >
            <h1 className="group-hover:text-white">{">"}</h1>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-[20px] mt-8">
        {thumbnails.map((thumbnail, index) => (
          <div
            className={`bg-white relative ${
              sidebar ? "h-[370px] w-[330px]" : "h-[400px] w-[380px]"
            }`}
          >
            <div className="">
              {/* <div className=" bg-[#fbcb0b] relative top-14 left-5 z-50 pb-2 w-[60px] h-[25px] rounded-[4px]">
                <div className="inline-flex mb-3">
                    <Image className="w-[14px] h-[20px] ml-2 pt-1 mt-1" src={require("../src/assets/star.png")} />
                    <div className="text-[16px] ml-1 text-white pb-5">{rates[index]}</div>
                </div>          
              </div>
              <div className="bg-[#fa8305] w-[80px] h-[20px] relative z-50 left-56 top-9 text-sm text-white font-medium text-center ml-[14px]">Best Seller</div> */}
              <div
                className={`absolute top-4 left-5 bg-[#fbcb0b] px-2 py-1 z-10  ${
                  sidebar ? "w-[60px] h-[30px]" : "w-[60px] h-[35px]"
                }`}
              >
                <div className="inline-flex items-center">
                  <Image
                    className="w-[14px] h-[20px] ml-1"
                    src={require("./assets/star.png")}
                  />
                  <div className="text-[16px] ml-1 text-white">
                    {rates[index]}
                  </div>
                </div>
              </div>
              <div
                className={`bg-[#fa8305] absolute z-50 top-4 text-sm text-white font-medium text-center ${
                  sidebar
                    ? " right-3 ml-[10px]  w-[80px] h-[20px]"
                    : " right-1 ml-[5px]  w-[80px] h-[20px]"
                }`}
              >
                Best Seller
              </div>
              <Image
                className={`absolute max-w-none indent-0 shadow-inset-bottom mt-2 ${
                  sidebar
                    ? "w-[310px] h-[170px] ml-[10px]"
                    : "ml-[5px] w-[370px] h-[200px]"
                }`}
                src={thumbnails[index]}
                alt="Search"
              />
              <span className='text-xs text-white absolute bottom-[200px] right-[10px] p-[0.5rem] bg-[#505050] rounded-[3px] font-bold'>{hours[index]}</span>
              <div
                className={`relative left-2 top-2 shadow-inset-bottom ${
                  sidebar ? "w-[310px] h-[170px]" : "w-[370px] h-[200px]"
                }`}
              ></div>
              <div className="flex">
                <div className={`text-[#91979f] text-xs font-medium flex mt-5 ml-3 ${sidebar?"gap-2":"gap-2"}`}>
                  {views[index]}
                  <h1>• </h1>
                  {times[index]}
                </div>
                <Button>
                <Image
                    className={`w-[16px] h-[16px] mt-4 ${sidebar?"ml-36":"ml-48"}`}
                    src={require("./assets/more.png")}
                  />
                </Button>
              </div>
              <div className="ml-3 text-xl font-semibold">{titles[index]}</div>
              <div className="ml-3 text-sm text-[#91979f] mt-2">{languages[index]}</div>
              <div className="flex  ml-3">
                <div className="flex mt-4 text-base"><h1 className="mr-1 text-[#91979f] font-normal">By</h1> <h1>{instructors[index]}</h1></div>
                <div className={` mt-2 font-medium ${sidebar?" ml-44":"ml-56"}`}>{prices[index]}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreScreen;
