import { ShoppingCartOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Button, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getEnrolledCourses } from "./redux/actions/course.action";

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

  const [startIndex, setStartIndex] = useState(0);
  const [visibleAvatars, setVisibleAvatars] = useState(7);
  const [hoveredCourse, setHoveredCourse] = useState(null);

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

  const handleMouseEnter = (index) => {
    setHoveredCourse(index);
  };

  const handleMouseLeave = () => {
    setHoveredCourse(null);
  };
  const userId = useSelector((state) => state.auth.id);
  console.log(userId);
  const { courses, loading, error } = useSelector(
    (state) => state.enrolledCourses
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (userId) {
      dispatch(getEnrolledCourses(userId));
    }
  }, [dispatch, userId]);
  // const mapStateToProps = (state) => ({
  //   courses: state.enrolledCoursesReducer.courses,
  //   loading: state.enrolledCoursesReducer.loading,
  //   error: state.enrolledCoursesReducer.error,
  // });

  return (
    <div className="mt-20 ml-8 overflow-x-hidden">
      <div className="group flex">
        <div
          className={`mt-4 mb-5 border-2 border-[#F7F7F7] bg-white px-4 text-base h-[50px] relative pt-1 group-focus-within:border-black ${
            sidebar ? "w-[1400px]" : "w-[1640px]"
          }`}
        >
          <input
            type="text"
            placeholder="Search for Tuts Videos, Tutors, Tests and more.."
            className={`focus:outline-none text-sm ml-20 mt-2 text-black bg-white placeholder-gray-500 focus:placeholder-black focus:text-black rounded-[5px] ${
              sidebar ? "w-[1300px]" : "w-[1540px]"
            }`}
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
      <div className="mt-4 py-2 px-0 overflow-x-scroll no-scrollbar relative">
        <div className="flex items-center">
          <button
            onClick={handlePrevClick}
            disabled={startIndex === 0}
            className="group bg-white hover:bg-red-600 absolute left-3 z-50 cursor-pointer px-2 py-0 rounded-[5px]"
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
            className="group bg-white hover:bg-red-600 absolute right-[14px] z-50 cursor-pointer px-2 py-0 rounded-[5px]"
          >
            <h1 className="group-hover:text-white">{">"}</h1>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-[20px] mt-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className={`bg-white cursor-pointer relative ${
              sidebar ? "h-[370px] w-[330px]" : "h-[400px] w-[380px]"
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="">
              <div
                className={`absolute top-4 left-5 bg-[#fbcb0b] px-2 py-1 z-10 ${
                  sidebar ? "w-[60px] h-[30px]" : "w-[60px] h-[35px]"
                }`}
              >
                <div className="inline-flex items-center">
                  <Image
                    className="w-[14px] h-[20px] ml-1"
                    src={require("./assets/star.png")}
                  />
                  <div className="text-[16px] ml-1 text-white">
                    {course.rate}
                  </div>
                </div>
              </div>
              <div
                className={`bg-[#fa8305] absolute z-50 top-4 text-sm text-white font-medium text-center ${
                  sidebar
                    ? "right-3 ml-[10px] w-[80px] h-[20px]"
                    : "right-1 ml-[5px] w-[80px] h-[20px]"
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
                src={course.thumbnail}
                alt="Search"
              />
              <span className="text-xs text-white absolute bottom-[200px] right-[10px] p-[0.5rem] bg-[#505050] rounded-[3px] font-bold">
                {course.hours}
              </span>
              <div
                className={`relative left-2 top-2 shadow-inset-bottom ${
                  sidebar ? "w-[310px] h-[170px]" : "w-[370px] h-[200px]"
                }`}
              >
                {hoveredCourse === index && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button className="group relative" variant="light">
                      <div className="border-2 border-white p-4 rounded-full group-hover:bg-black group-hover:opacity-30">
                        <Image
                          className="w-[30px] inset-0 h-[35px] ml-2 opacity-100 z-50 group-hover: opacity-0"
                          src={require("./assets/pause.png")}
                        />
                      </div>
                    </Button>
                  </div>
                )}
              </div>
              {/* <div
                className={`relative left-2 top-2 shadow-inset-bottom ${
                  sidebar ? "w-[310px] h-[170px]" : "w-[370px] h-[200px]"
                }`}
              ></div> */}
              <div className="flex">
                <div
                  className={`text-[#91979f] text-xs font-medium flex mt-5 ml-3 ${
                    sidebar ? "gap-2" : "gap-2"
                  }`}
                >
                  {course.views}
                  <h1>• </h1>
                  {course.time}
                </div>
                <Button
                  className={`group relative ${sidebar ? "ml-36" : "ml-48"}`}
                >
                  <Image
                    className={`w-[16px] h-[16px] mt-4 `}
                    src={require("./assets/more.png")}
                  />
                  <div className="absolute left-2 z-50 w-[200px] bg-white border border-gray-300 rounded-md shadow-lg opacity-0 group-hover:opacity-100 hover:opacity-100 transition-opacity duration-300">
                    <ul className="py-1">
                      <li className="px-4 py-2 hover:bg-[#ffecec] cursor-pointer text-start flex">
                        <Image
                          className="mr-2"
                          src={require("../src/assets/share.png")}
                        />
                        Share
                      </li>
                      <li className="px-4 py-2 hover:bg-[#ffecec] cursor-pointer text-start flex">
                        <Image
                          className="mr-2"
                          src={require("../src/assets/time.png")}
                        />
                        Save
                      </li>
                      <li className="px-4 py-2 hover:bg-[#ffecec] cursor-pointer text-start flex">
                        <Image
                          className="mr-2 w-[16px] h-[16px]"
                          src={require("../src/assets/ban.png")}
                        />
                        Not Interested
                      </li>
                      <li className="px-4 py-2 hover:bg-[#ffecec] cursor-pointer text-start flex">
                        <Image
                          className="mr-2 w-[16px] h-[16px]"
                          src={require("../src/assets/wind-flag.png")}
                        />
                        Report
                      </li>
                    </ul>
                  </div>
                </Button>
              </div>
              <div className="ml-3 text-xl font-semibold">{course.title}</div>
              <div className="ml-3 text-sm text-[#91979f] mt-2">
                {course.language}
              </div>
              <div className="flex ml-3">
                <div className="flex mt-4 text-base">
                  <h1 className="mr-1 text-[#91979f] font-normal">By</h1>{" "}
                  <h1>{course.instructor}</h1>
                </div>
                <div
                  className={`mt-2 font-medium flex gap-1 ${
                    sidebar ? "ml-44" : "ml-56"
                  }`}
                >
                  <ShoppingCartOutlined
                    className={`mt-[1px] hover:text-red-600 ${
                      hoveredCourse === index ? "block" : "hidden"
                    }`}
                  />
                  {course.price}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreScreen;
