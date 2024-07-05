import { faBook, faBorderAll } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Image } from "react-bootstrap";

const DashBoard = ({ sidebar }) => {
  const latestcourse = [];
  const news2 = [
    {
      image:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/news-1.jpg",
      title: "COVID-19 Updates & Resources",
      description:
        "See the latest updates to coronavirus-related content, including changes to monetization, and access new Creator support resources",
    },
    {
      image:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/news-2.jpg",
      title: "Watch: Edututs+ interview Mr. Joginder",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac eleifend ante. Duis ac pulvinar felis. Sed a nibh ligula. Mauris eget tortor id mauris tristique accumsan.",
    },
    {
      image:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/news-1.jpg",
      title: "COVID-19 Updates - April 7",
      description:
        "Ut porttitor mi vel orci cursus, nec elementum neque malesuada. Phasellus imperdiet quam gravida pharetra aliquet. Integer vel ligula eget nisl dignissim hendrerit.",
    },
  ];
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  const handleNext = () => {
    setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % news2.length);
  };

  const handlePrev = () => {
    setCurrentNewsIndex((prevIndex) =>
      prevIndex === 0 ? news2.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-[1280px]">
      <div
        className={`mt-[100px] mx-[20px] transition-all duration-1000  ${
          sidebar ? "ml-[30px]" : "ml-[-200px]"
        } overflow-x-hidden`}
      >
        <div className="flex items-center">
          <FontAwesomeIcon icon={faBorderAll} className="text-xl" />
          <h1 className="ml-2">Dashboard</h1>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-3">
          {[
            {
              title: "Total Sales",
              amount: "$350",
              new: "New 5",
              imgSrc:
                "https://gambolthemes.net/html-items/cursus-new-demo/images/dashboard/achievement.svg",
              bgColor: "bg-yellow-400",
            },
            {
              title: "Total Enroll",
              amount: "$350",
              new: "New 5",
              imgSrc:
                "https://gambolthemes.net/html-items/cursus-new-demo/images/dashboard/graduation-cap.svg",
              bgColor: "bg-purple-500",
            },
            {
              title: "Total Courses",
              amount: "$350",
              new: "New 5",
              imgSrc:
                "https://gambolthemes.net/html-items/cursus-new-demo/images/dashboard/online-course.svg",
              bgColor: "bg-orange-400",
            },
            {
              title: "Total Students",
              amount: "$350",
              new: "New 5",
              imgSrc:
                "https://gambolthemes.net/html-items/cursus-new-demo/images/dashboard/knowledge.svg",
              bgColor: "bg-purple-500",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="col-span-1 bg-white h-[150px] p-3 flex justify-between items-center"
            >
              <div>
                <h5 className="text-[16px] font-medium text-[#333333]">
                  {item.title}
                </h5>
                <h3 className="text-[24px] text-[#333333]">{item.amount}</h3>
                <span
                  className={`text-[12px] px-[8px] py-[5px] ${item.bgColor} font-medium rounded-sm`}
                >
                  {item.new}
                </span>
              </div>
              <img src={item.imgSrc} className="w-16 h-16" alt={item.title} />
            </div>
          ))}
        </div>
        <div className="h-[120px] w-full bg-white mt-7 flex justify-between items-center text-[24px] px-5">
          <div className="flex items-center gap-8">
            <FontAwesomeIcon icon={faBook} className="text-[30px]" />
            <h1 className="text-[24px] font-normal">
              Jump Into Course Creation
            </h1>
          </div>
          <button className="py-2 px-6 bg-red-600 font-medium text-white rounded-sm text-[14px]">
            Create your Course
          </button>
        </div>
        <div className="flex mt-7">
          <div className="flex-1">
            <div className="flex items-start mb-3">
              <h1 className="text-[16px]">Latest Courses Performance</h1>
              <div
                className={`flex items-end gap-2 justify-end ${
                  sidebar ? "ml-[100px]" : "ml-[150px]"
                }`}
              >
                <Button
                  className={`px-2 py-1 bg-white text-center rounded ${
                    currentNewsIndex === 0
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={handlePrev}
                  disabled={currentNewsIndex === 0}
                >
                  &lt;
                </Button>
                <Button
                  className={`px-2 py-1 bg-white text-center rounded ${
                    currentNewsIndex === news2.length - 1
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={handleNext}
                  disabled={currentNewsIndex === news2.length - 1}
                >
                  &gt;
                </Button>
              </div>
            </div>
            {news2.map(
              (item, index) =>
                index === currentNewsIndex && (
                  <div
                    key={index}
                    className={`bg-white ${
                      sidebar ? "h-[480px] w-[400px]" : "h-[480px] w-[410px]"
                    }`}
                  >
                    <div
                      className={`ml-[5px] mt-[5px] ${
                        sidebar ? "w-[390px] h-[270px]" : "w-[400px] h-[270px]"
                      }`}
                    >
                      <Image
                        className={`pt-2 ${
                          sidebar
                            ? "w-[440px] h-[270px]"
                            : "w-[500px] h-[270px]"
                        }`}
                        src={item.image}
                      />
                    </div>
                    <h1 className="mt-10 ml-3 text-xl">{item.title}</h1>
                    <div className="mt-4 ml-3 text-md">{item.description}</div>
                    <div className="mt-10 ml-3 text-xs font-semibold">
                      WATCH NOW
                    </div>
                  </div>
                )
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center mb-3">
              <h1 className="text-[16px]">News</h1>
              <div
                className={`flex items-center gap-2 justify-end ${
                  sidebar ? "ml-[100px]" : "ml-[150px]"
                }`}
              >
                <Button
                  className={`px-2 py-1 bg-white text-center rounded ${
                    currentNewsIndex === 0
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={handlePrev}
                  disabled={currentNewsIndex === 0}
                >
                  &lt;
                </Button>
                <Button
                  className={`px-2 py-1 bg-white text-center rounded ${
                    currentNewsIndex === news2.length - 1
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={handleNext}
                  disabled={currentNewsIndex === news2.length - 1}
                >
                  &gt;
                </Button>
              </div>
            </div>
            {news2.map(
              (item, index) =>
                index === currentNewsIndex && (
                  <div
                    key={index}
                    className={`bg-white ${
                      sidebar ? "h-[480px] w-[400px]" : "h-[480px] w-[410px]"
                    }`}
                  >
                    <div
                      className={`ml-[5px] mt-[5px] ${
                        sidebar ? "w-[390px] h-[270px]" : "w-[400px] h-[270px]"
                      }`}
                    >
                      <Image
                        className={`pt-2 ${
                          sidebar
                            ? "w-[440px] h-[270px]"
                            : "w-[500px] h-[270px]"
                        }`}
                        src={item.image}
                      />
                    </div>
                    <h1 className="mt-10 ml-3 text-xl">{item.title}</h1>
                    <div className="mt-4 ml-3 text-md">{item.description}</div>
                    <div className="mt-10 ml-3 text-xs font-semibold">
                      WATCH NOW
                    </div>
                  </div>
                )
            )}
          </div>
          <div className="flex-1 ml-10">
            <div></div>
            <div className="text-xl font-semibold mb-4">
              What's new in Cursus?
            </div>
            {news2.map((item, index) => (
              <div key={index} className="mt-[1px] w-full h-[50px] bg-white">
                <h1 className="items-center pt-4 pl-4 font-light text-sm">
                  {item.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
