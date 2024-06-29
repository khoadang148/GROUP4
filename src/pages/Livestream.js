import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';

const Livestream = () => {
  const avatars = [
    "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg",
    "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-2.jpg",
    "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-9.jpg",
    "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-3.jpg",
    "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-4.jpg",
    "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-5.jpg",
    "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-6.jpg",
    "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-7.jpg",
    "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-11.jpg",
    "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-12.jpg",
    "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-13.jpg",
    "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-13.jpg",
    "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-13.jpg",
    "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-13.jpg",
    "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-13.jpg",
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
    "Quinton Batchelor",
    "Eli Natoli",
    "Jaysen Batchelor",
    "Jaysen Batchelor",
    "Jaysen Batchelor",
    "Jaysen Batchelor",
    "Jaysen Batchelor",
  ];

  return (
    <div>
      <div className="pt-[100px] pl-[30px] font-semibold">All Live Streams</div>
      <div className="grid grid-cols-7 w-[1200px]">
        <div className="col-span-5 pl-[30px]">
          <div className="grid grid-cols-4 gap-7 pt-5">
            {keywords.map((value, i) => (
              <a
                href="https://gambolthemes.net/html-items/cursus-new-demo/live_output.html"
                key={i}
              >
                <div key={i} className="bg-[#DED9DE] py-[20px] px-[20px]">
                  <div className="bg-[#E5E0E5] py-[30px] px-[10px] drop-shadow-lg text-center relative">
                    <div className="pl-[30px]">
                      <img
                        src={avatars[i % avatars.length]}
                        alt={value}
                        className="w-[60px] rounded-full relative -mt-[20px]"
                      />
                    </div>
                    <div className="text-base mt-4">{value}</div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="col-span-2 bg-white ml-[30px] max-h-80 w-[100%]">
          <div className="font-semibold text-[17px] pt-2 pl-4">
            <p>Live Streaming</p>
          </div>
          <hr />
          <div className="text-center pt-3">
            <FontAwesomeIcon
              icon={faHeadset}
              className="text-[40px] px-3 py-3 rounded-full bg-[#FFECEC]"
            />
          </div>
          <div className="text-[15px] text-center pt-4 text-[#767676]">
            Set up your channel and stream live to your students
          </div>
          <div className="text-center pt-5">
            <button className="bg-[#ed2a26] hover:bg-black text-white py-2 px-6 text-[15px] rounded">
              Get Started
            </button>
          </div>
          <p className="text-[#767676] text-center text-[12px] pt-2">
            Info: This feature only for 'Instructors'.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Livestream;
