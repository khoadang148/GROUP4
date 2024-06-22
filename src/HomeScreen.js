import {
  BarChartOutlined,
  CameraOutlined,
  CheckCircleOutlined,
  DesktopOutlined,
  FlagOutlined,
  FundProjectionScreenOutlined,
  HeartOutlined,
  HistoryOutlined,
  LineChartOutlined,
  MoreOutlined,
  PlayCircleOutlined,
  ShareAltOutlined,
  ShoppingCartOutlined,
  StarOutlined,
  StopOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  faArrowsLeftRight,
  faBookOpen,
  faHeadset,
  faMusic,
  faRuler,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Dropdown, Row, Space } from "antd";
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
          className="hover:bg-red-400"
        >
          <ShareAltOutlined /> Share
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          <HeartOutlined /> Save
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          <StopOutlined /> Not Interested
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          <FlagOutlined /> Report
        </a>
      ),
    },
  ];
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
  const popularInstructor = [
    {
      img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg",
      name: "John Doe",
      job: "Wordpress & Plugin Tutor",
      suber: 10000,
      theircourse: 15,
    },
    {
      img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-2.jpg",
      name: "Kerstin Cable",
      job: "Language Learning Coach,Writer,Online Tutor",
      suber: 14000,
      theircourse: 11,
    },
    {
      img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-3.jpg",
      name: "Jose Portilla",
      job: "Head of Data Science, Pierian Data Inc.",
      suber: 1000000,
      theircourse: 25,
    },
    {
      img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-4.jpg",
      name: "Farhat Amin",
      job: "Cookery Coach",
      suber: 1500,
      theircourse: 9,
    },
    {
      img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-5.jpg",
      name: "Kyle Pew",
      job: "Microsoft Certified Trainer - 380000+ Udemy Students",
      suber: 300000,
      theircourse: 18,
    },
    {
      img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-7.jpg",
      name: "Jaysen Batchelor",
      job: "Illustrator & Designer",
      suber: 491000,
      theircourse: 13,
    },
    {
      img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-8.jpg",
      name: "Jaysen Batchelor",
      job: "Photographer & Instructor",
      suber: 364000,
      theircourse: 6,
    },
    {
      img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-6.jpg",
      name: "Eli Natoli",
      job: "Entrepreneur - Passionate Teacher",
      suber: 615000,
      theircourse: 12,
    },
  ];
  const previews = [
    {
      preview:
        "Donec ac ex eu arcu euismod feugiat. In venenatis bibendum nisi, in placerat eros ultricies vitae. Praesent pellentesque blandit scelerisque. Suspendisse potenti.",
      img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-4.jpg",
      names: "Jassica William",
    },
    {
      preview:
        "Cras id enim lectus. Fusce at arcu tincidunt, iaculis libero quis, vulputate mauris. Morbi facilisis vitae ligula id aliquam. Nunc consectetur malesuada bibendum.",
      img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg",
      names: "Rock Smith",
    },
    {
      preview:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos eros ac, sagittis orci.",
      img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-7.jpg",
      names: "Louci Marchant",
    },
    {
      preview:
        "Nulla bibendum lectus pharetra, tempus eros ac, sagittis orci. Suspendisse posuere dolor neque, at finibus mauris lobortis in.  Pellentesque vitae laoreet tortor.",
      img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-7.jpg",
      names: "Poonam Sharma",
    },
    {
      preview:
        "Curabitur placerat justo ac mauris condimentum ultricies. In magna tellus, eleifend et volutpat id, sagittis vitae est.  Pellentesque vitae laoreet tortor.",
      img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-3.jpg",
      names: "Davinder Singh",
    },
  ];
  const featuresCourse = [
    {
      img: "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-1.jpg",
      title: "Complete Python BootCamp: Go from zero to hero in python 3",
      instructor: "John Doe",
      rating: 4.5,
      type: "Web Development | Python",
      price: "$10",

      bestseller: true,
      duration: "2 hours",
      views: "12,345",
      published: "2 days ago",
    },
    {
      img: "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-2.jpg",
      title: "The complete JavaScript Course 2020: Build Real Projects!",
      instructor: "Jassica",
      rating: 4.0,
      type: "Development | JavaScript",

      price: "$15",

      bestseller: true,
      duration: "3 hours",
      views: "8,765",
      published: "1 week ago",
    },
    {
      img: "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-3.jpg",
      title: "Beginning C++ Programming - From Beginner to Beyond",
      instructor: "Joginder Singh",
      rating: 4.8,
      type: "Development | C++",
      price: "$30",

      bestseller: true,
      duration: "1.5 hours",
      views: "5,432",
      published: "3 days ago",
    },
    {
      img: "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-4.jpg",
      title: "The complete Digital Marketing Course - 12 Courses in 1 ",
      instructor: "Poonam Verma",
      rating: 5.0,
      type: "Digital Marketing | Marketing",

      price: "$12",

      bestseller: true,
      duration: "2.5 hours",
      views: "10,987",
      published: "2 weeks ago",
    },
    {
      img: "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-5.jpg",
      title: "Microsoft Excel - Excel from Beginner to Advanced",
      instructor: "Rock William",
      rating: 4.5,
      type: "Office Productivity | Excel",
      price: "$6",

      bestseller: true,
      duration: "4 hours",
      views: "15,678",
      published: "1 month ago",
    },
    {
      img: "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-6.jpg",
      title: "Angular 8 - The complete Guide (2020 Edition)",
      instructor: "John Doe",
      rating: 4.7,
      type: "Development | Angular",
      price: "$15",

      bestseller: true,
      duration: "1 hour",
      views: "4,321",
      published: "5 days ago",
    },
    {
      img: "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-7.jpg",
      title: "WordPress for Beginners: Create a Website Step by Step",
      instructor: "Sabnam Slngh",
      rating: 5.0,
      type: "Design | Wordpress",
      price: "$40",

      bestseller: true,
      duration: "5 hours",
      views: "7,890",
      published: "3 weeks ago",
    },
    {
      img: "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-8.jpg",
      title: "CSS - The Complete Guide 2020 (incl. Flexbox, Grid & Sass",
      instructor: "Jashanpreet Singh",
      rating: 4.0,
      type: "Design | CSS",
      price: "$10",

      bestseller: true,
      duration: "2 hours",
      views: "6,543",
      published: "2 days ago",
    },
  ];
  const NewestCourse = [
    {
      img: "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-14.jpg",
      title: "Complete Python BootCamp: Go from zero to hero in python 3",
      instructor: "John Doe",
      rating: 4.5,
      type: "Development | CSS",
      price: "$10",

      bestseller: true,
      duration: "2 hours",
      views: "12,345",
      published: "2 days ago",
    },
    {
      img: "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-11.jpg",
      title: "The complete JavaScript Course 2020: Build Real Projects!",
      instructor: "Jassica",
      rating: 4.0,
      type: "Development | JavaScript",

      price: "$15",

      bestseller: false,
      duration: "3 hours",
      views: "8,765",
      published: "1 week ago",
    },
    {
      img: "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-18.jpg",
      title: "The Complete Front-End Web Development Course!",
      instructor: "Joginder Singh",
      rating: 4.8,
      type: "Development | Web Development",
      price: "$30",

      bestseller: true,
      duration: "1.5 hours",
      views: "5,432",
      published: "3 days ago",
    },
    {
      img: "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-4.jpg",
      title: "Course Title 4",
      instructor: "Joginder Singh",
      rating: 4.6,
      reviews: 180,
      price: "$25",

      bestseller: false,
      duration: "2.5 hours",
      views: "10,987",
      published: "2 weeks ago",
    },
    {
      img: "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-5.jpg",
      title: "Course Title 5",
      instructor: "Zoena",
      rating: 4.3,
      reviews: 110,
      price: "$20",

      bestseller: true,
      duration: "4 hours",
      views: "15,678",
      published: "1 month ago",
    },
    {
      img: "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-6.jpg",
      title: "Course Title 6",
      instructor: "Albert Dua",
      rating: 4.7,
      reviews: 140,
      price: "$35",

      bestseller: false,
      duration: "1 hour",
      views: "4,321",
      published: "5 days ago",
    },
    {
      img: "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-7.jpg",
      title: "Course Title 7",
      instructor: "Ridhima",
      rating: 4.2,
      reviews: 90,
      price: "$40",

      bestseller: false,
      duration: "5 hours",
      views: "7,890",
      published: "3 weeks ago",
    },
    {
      img: "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-8.jpg",
      title: "Course Title 8",
      instructor: "Amritpal",
      rating: 4.1,
      reviews: 80,
      price: "$50",

      bestseller: true,
      duration: "2 hours",
      views: "6,543",
      published: "2 days ago",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleAvatars = 6;
  const avatarListRef = useRef(null);

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

  const [startIndexx, setStartIndexx] = useState(0);
  const visiblefeatureCourses = 3;
  const courseListRef = useRef(null);

  const handlePrevClickk = () => {
    if (startIndexx > 0) {
      setStartIndexx(startIndexx - 1);
    }
  };

  const handleNextClickk = () => {
    if (startIndexx < featuresCourse.length - visiblefeatureCourses) {
      setStartIndexx(startIndexx + 1);
    }
  };
  const [hoveredCourse, setHoveredCourse] = useState(null);

  const handleMouseEnter = (i) => {
    setHoveredCourse(i);
  };

  const handleMouseLeave = () => {
    setHoveredCourse(null);
  };
  const [startIndexxx, setStartIndexxx] = useState(0);
  const visibleNewestCourses = 3;
  const NewcourseListRef = useRef(null);

  const handlePrevClickkk = () => {
    if (startIndexxx > 0) {
      setStartIndexxx(startIndexxx - 1);
    }
  };

  const handleNextClickkk = () => {
    if (startIndexxx < NewestCourse.length - visibleNewestCourses) {
      setStartIndexxx(startIndexxx + 1);
    }
  };
  const [hoveredCoursee, setHoveredCoursee] = useState(null);
  const handleMouseEnterr = (k) => {
    setHoveredCoursee(k);
  };

  const handleMouseLeavee = () => {
    setHoveredCoursee(null);
  };

  const [startIndexxxx, setStartIndexxxx] = useState(0);
  const visiblepopularInstructor = 3;
  const pplInstructorListRef = useRef(null);

  const handlePrevClickkkk = () => {
    if (startIndexxxx > 0) {
      setStartIndexxxx(startIndexxxx - 1);
    }
  };

  const handleNextClickkkk = () => {
    if (startIndexxxx < popularInstructor.length - visiblepopularInstructor) {
      setStartIndexxxx(startIndexxxx + 1);
    }
  };

  const [startIndexxxxx, setStartIndexxxxx] = useState(0);
  const visiblePreview = 3;
  const previewListRef = useRef(null);

  const handlePrevClickkkkk = () => {
    if (startIndexxxxx > 0) {
      setStartIndexxxxx(startIndexxxxx - 1);
    }
  };

  const handleNextClickkkkk = () => {
    if (startIndexxxxx < previews.length - visiblePreview) {
      setStartIndexxxxx(startIndexxxxx + 1);
    }
  };

  return (
    <div className="bg-[#F7F7F7]">
      <div className="grid grid-cols-7 bg-[#F7F7F7] gap-[200px]">
        <div className="col-span-5 mt-20">
          <div className="ml-[30px] mt-8 flex justify-between w-[950px]">
            <h2>Live Streams</h2>
            <Link to={"/livestream"}>
              <span className=" text-sm">See all</span>
            </Link>
          </div>
          <div className="mt-4 py-2 px-0 overflow-hidden w-[1000px] relative">
            <div className="flex items-center">
              <button
                onClick={handlePrevClick}
                disabled={startIndex === 0}
                className="group bg-white hover:bg-red-600 absolute left-11 z-50 cursor-pointer px-2 py-0 rounded-[5px]"
              >
                <h1 className="group-hover:text-white">{"<"}</h1>
              </button>
              <div
                className="flex gap-4 rounded relative h-[174px] mx-10 transition-transform duration-300"
                style={{ transform: `translateX(-${startIndex * 144}px)` }}
                ref={avatarListRef}
              >
                {keywords.map((value, i) => (
                  <div key={i} className="bg-[#DDD8DD] rounded w-[144px]">
                    <div className="flex items-center flex-col justify-center bg-[#E3DFE3] mt-3 mb-3 ml-3 mr-3 h-[155px] drop-shadow-md">
                      <img
                        src={avatars[i]}
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
                className="group bg-white hover:bg-red-600 absolute right-[20px] z-50 cursor-pointer px-2 py-0 rounded-[5px]"
              >
                <h1 className="group-hover:text-white">{">"}</h1>
              </button>
            </div>
          </div>
          {/* --------------------------------------------- */}
          {/* --------------------------------------------- */}
          {/* --------------------------------------------- */}

          <div className="ml-[30px] mt-8 flex justify-between w-[950px]">
            <h2>Featured Courses</h2>
            <Link to={"/featured-courses"}>
              <span className="text-sm">See all</span>
            </Link>
          </div>
          <div className="mt-4 py-2 px-0 overflow-hidden w-[973px] relative">
            <div className="flex items-center">
              <button
                onClick={handlePrevClickk}
                disabled={startIndexx === 0}
                className="group bg-white hover:bg-red-600 absolute left-7 z-50 cursor-pointer px-2 py-0 rounded-[5px] top-36"
              >
                <h1 className="group-hover:text-white">{"<"}</h1>
              </button>
              <div
                className="flex gap-4 rounded relative h-[352px] mx-10 transition-transform duration-300"
                style={{ transform: `translateX(-${startIndexx * 296}px)` }}
                ref={courseListRef}
              >
                {featuresCourse.map((course, i) => (
                  <div
                    key={i}
                    className="bg-white shadow-md rounded w-[296px]"
                    onMouseEnter={() => handleMouseEnter(i)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="relative">
                      <img
                        src={course.img}
                        alt={course.title}
                        className="w-full h-[160px] object-cover rounded-t"
                      />
                      {course.bestseller && (
                        <div className="absolute top-2 right-2 bg-[#FA8305] text-white text-sm font-medium  px-2 py-1 rounded">
                          Bestseller
                        </div>
                      )}
                      <div className="absolute top-2 left-2 bg-yellow-400 text-white text-sm font-medium   px-2 py-1 rounded ">
                        <StarOutlined /> {course.rating}
                      </div>
                      <div className="absolute bottom-2 right-2 bg-[#4E4E4E]  text-white text-sm font-medium   px-2 py-1 rounded">
                        {course.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="text-sm text-gray-500 mt-2 flex justify-between items-center">
                        <span>
                          {course.views} views • {course.published}{" "}
                        </span>

                        <Dropdown
                          menu={{
                            items,
                          }}
                        >
                          <a onClick={(e) => e.preventDefault()}>
                            <Space>
                              <MoreOutlined className="text-2xl hover:text-black" />
                            </Space>
                          </a>
                        </Dropdown>
                      </div>
                      <h3 className="text-base font-semibold">
                        {course.title}
                      </h3>
                      <span className="text-sm">{course.type}</span>
                      <div className="flex justify-between items-center mt-3">
                        <div className="flex gap-2">
                          <span className="text-sm">By</span>
                          <h3 className="text-sm">{course.instructor}</h3>
                        </div>

                        <div className="flex items-center gap-4 ">
                          <ShoppingCartOutlined
                            className={`mt-[-5px] hover:text-red-600 ${
                              hoveredCourse === i ? "block" : "hidden"
                            }`}
                          />
                          <h3>{course.price}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={handleNextClickk}
                disabled={
                  startIndexx >= featuresCourse.length - visiblefeatureCourses
                }
                className="group bg-white hover:bg-red-600 absolute right-[0px] z-50 cursor-pointer px-2 py-0 rounded-[5px]  top-36"
              >
                <h1 className="group-hover:text-white">{">"}</h1>
              </button>
            </div>
          </div>
          {/* //////////////////////////////// */}
          {/* //////////////////////////////// */}
          {/* //////////////////////////////// */}
          <div className="ml-[30px] mt-8 flex justify-between w-[950px]">
            <h2>Newest Courses</h2>
            <Link to={"/new-courses"}>
              <span className="text-sm">See all</span>
            </Link>
          </div>
          <div className="mt-4 py-2 px-0 overflow-hidden w-[973px] relative">
            <div className="flex items-center">
              <button
                onClick={handlePrevClickkk}
                disabled={startIndexxx === 0}
                className="group bg-white hover:bg-red-600 absolute left-7 z-50 cursor-pointer px-2 py-0 rounded-[5px] top-36"
              >
                <h1 className="group-hover:text-white">{"<"}</h1>
              </button>
              <div
                className="flex gap-4 rounded relative h-[352px] mx-10 transition-transform duration-300"
                style={{ transform: `translateX(-${startIndexxx * 296}px)` }}
                ref={NewcourseListRef}
              >
                {NewestCourse.map((course, k) => (
                  <div
                    key={k}
                    className="bg-white shadow-md rounded w-[296px]"
                    onMouseEnter={() => handleMouseEnterr(k)}
                    onMouseLeave={handleMouseLeavee}
                  >
                    <div className="relative">
                      <img
                        src={course.img}
                        alt={course.title}
                        className="w-full h-[160px] object-cover rounded-t"
                      />
                      {course.bestseller && (
                        <div className="absolute top-2 right-2 bg-[#FA8305] text-white text-sm font-medium  px-2 py-1 rounded">
                          Bestseller
                        </div>
                      )}
                      <div className="absolute top-2 left-2 bg-yellow-400 text-white text-sm font-medium   px-2 py-1 rounded ">
                        <StarOutlined /> {course.rating}
                      </div>
                      <div className="absolute bottom-2 right-2 bg-[#4E4E4E]  text-white text-sm font-medium   px-2 py-1 rounded">
                        {course.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="text-sm text-gray-500 mt-2 flex justify-between items-center">
                        <span>
                          {course.views} views • {course.published}{" "}
                        </span>

                        <Dropdown
                          menu={{
                            items,
                          }}
                        >
                          <a onClick={(e) => e.preventDefault()}>
                            <Space>
                              <MoreOutlined className="text-2xl hover:text-black" />
                            </Space>
                          </a>
                        </Dropdown>
                      </div>
                      <h3 className="text-base font-semibold">
                        {course.title}
                      </h3>
                      <span className="text-sm">{course.type}</span>
                      <div className="flex justify-between items-center mt-3">
                        <div className="flex gap-2">
                          <span className="text-sm">By</span>
                          <h3 className="text-sm">{course.instructor}</h3>
                        </div>

                        <div className="flex items-center gap-4 ">
                          <ShoppingCartOutlined
                            className={`mt-[-5px] hover:text-red-600 ${
                              hoveredCoursee === k ? "block" : "hidden"
                            }`}
                          />
                          <h3>{course.price}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={handleNextClickkk}
                disabled={
                  startIndexxx >= NewestCourse.length - visibleNewestCourses
                }
                className="group bg-white hover:bg-red-600 absolute right-[0px] z-50 cursor-pointer px-2 py-0 rounded-[5px]  top-36"
              >
                <h1 className="group-hover:text-white">{">"}</h1>
              </button>
            </div>
          </div>

          {/* //////////////////////////////// */}
          {/* //////////////////////////////// */}
          {/* //////////////////////////////// */}

          <div className="w-[920px] ml-[40px]">
            <div className="flex gap-[40px] py-10  ">
              <div className="w-[440px] bg-[#FFFFFF] h-40 flex flex-col justify-center items-center gap-5 rounded-sm ">
                <HistoryOutlined className="text-4xl bg-[#FFECEC] p-2" />
                <h3>Go at your own pace</h3>
                <span className="text-sm">
                  Enjoy lifetime access to courses on Edututs+'s website
                </span>
              </div>
              <div className="w-[440px] bg-[#FFFFFF] h-40 flex flex-col justify-center items-center gap-5 rounded-sm ">
                <UserOutlined className="text-4xl bg-[#FFECEC] p-2" />
                <h3>Learn from industry experts</h3>
                <span className="text-sm">
                  Select from top instructors around the world
                </span>
              </div>
            </div>
            <div className="flex gap-[40px]">
              <div className="flex gap-[40px] py-10  ">
                <div className="w-[440px] bg-[#FFFFFF] h-40 flex flex-col justify-center items-center gap-5 rounded-sm ">
                  <PlayCircleOutlined className="text-4xl bg-[#FFECEC] p-2" />
                  <h3>Find video courses on almost any topic</h3>
                  <span className="text-sm">
                    Build your library for your career and personal growth
                  </span>
                </div>
                <div className="w-[440px] bg-[#FFFFFF] h-40 flex flex-col justify-center items-center gap-5 rounded-sm ">
                  <FundProjectionScreenOutlined className="text-4xl bg-[#FFECEC] p-2" />
                  <h3>100,000 online courses</h3>
                  <span className="text-sm">
                    Explore a variety of fresh topics
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* //////////////////////////////// */}
          {/* //////////////////////////////// */}
          {/* //////////////////////////////// */}
          <div className="ml-[30px] mt-8 flex justify-between w-[950px]">
            <h2>Popular Instructors</h2>
            <Link to={"/pplIn"}>
              <span className="text-sm">See all</span>
            </Link>
          </div>

          <div className="mt-4 py-2 px-0 overflow-hidden w-[973px] relative">
            <div className="flex items-center">
              <button
                onClick={handlePrevClickkkk}
                disabled={startIndexxxx === 0}
                className="group bg-white hover:bg-red-600 absolute left-7 z-50 cursor-pointer px-2 py-0 rounded-[5px] top-36"
              >
                <h1 className="group-hover:text-white">{"<"}</h1>
              </button>
              <div
                className="flex gap-4 rounded relative h-[352px] mx-10 transition-transform duration-300"
                style={{ transform: `translateX(-${startIndexxxx * 296}px)` }}
                ref={pplInstructorListRef}
              >
                {popularInstructor.map((ppl, ak) => (
                  <div
                    key={ak}
                    className="bg-white shadow-md rounded w-[296px] flex flex-col justify-center items-center"
                  >
                    <img src={ppl.img} width={"30%"} />
                    <h3>
                      {ppl.name}
                      <CheckCircleOutlined className="text-blue-500 ml-1" />{" "}
                    </h3>
                    <span className="text-sm">{ppl.job}</span>
                    <div className="flex gap-2 mt-6">
                      <div>
                        <img
                          src="https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_960_720.png"
                          className="w-[40px] rounded-lg "
                        />
                      </div>
                      <div>
                        <img
                          src="https://cdn.pixabay.com/photo/2017/08/23/11/30/twitter-2672572_960_720.jpg"
                          className="w-[40px] rounded-lg"
                        />
                      </div>
                      <div>
                        <img
                          src="https://i1.wp.com/globalinfusion.org/wp-content/uploads/2018/01/ig-logo-email.png?ssl=1"
                          className="w-[40px] rounded-lg"
                        />
                      </div>
                      <div>
                        <img
                          src="https://1.bp.blogspot.com/-hY5-pNrOcKw/XeI_00cpCgI/AAAAAAAAF4A/J7jS49V8kNozycy0PgY6wfc7SUU9gulTgCLcBGAsYHQ/s1600/Youtube-Icon-square-2340x2340.png"
                          className="w-[40px] rounded-lg"
                        />
                      </div>
                    </div>
                    <span className="mt-10 font-light text-sm">
                      {ppl.suber} Students • {ppl.theircourse} Courses
                    </span>
                  </div>
                ))}
              </div>
              <button
                onClick={handleNextClickkkk}
                disabled={
                  startIndexxxx >=
                  popularInstructor.length - visiblepopularInstructor
                }
                className="group bg-white hover:bg-red-600 absolute right-[0px] z-50 cursor-pointer px-2 py-0 rounded-[5px]  top-36"
              >
                <h1 className="group-hover:text-white">{">"}</h1>
              </button>
            </div>
          </div>
          {/* //////////////////////////////// */}
          {/* //////////////////////////////// */}
          {/* //////////////////////////////// */}
        </div>
        {/* ////////////////////////// */}
        {/* COT BEN PHAI */}
        {/* ////////////////////////// */}
        <div className="col-span-2 mt-20">
          <div className="bg-[#FFFFFF] mt-9 w-[250px] ml-[-50px] flex flex-col items-center justify-center rounded-sm">
            <img
              src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-3.jpg"
              className="rounded-full w-16 mt-7"
            />
            <div className="flex mt-5">
              <h3>Joginder Singh</h3>
              <CheckCircleOutlined className="text-blue-500 ml-1" />
            </div>
            <span className="text-sm">
              Web Developer, Designer, and Teacher
            </span>
            <div className="flex gap-2 mt-6">
              <div>
                <img
                  src="https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_960_720.png"
                  className="w-[40px] rounded-lg"
                />
              </div>
              <div>
                <img
                  src="https://cdn.pixabay.com/photo/2017/08/23/11/30/twitter-2672572_960_720.jpg"
                  className="w-[40px] rounded-lg"
                />
              </div>
              <div>
                <img
                  src="https://i1.wp.com/globalinfusion.org/wp-content/uploads/2018/01/ig-logo-email.png?ssl=1"
                  className="w-[40px] rounded-lg"
                />
              </div>
              <div>
                <img
                  src="https://1.bp.blogspot.com/-hY5-pNrOcKw/XeI_00cpCgI/AAAAAAAAF4A/J7jS49V8kNozycy0PgY6wfc7SUU9gulTgCLcBGAsYHQ/s1600/Youtube-Icon-square-2340x2340.png"
                  className="w-[40px] rounded-lg"
                />
              </div>
            </div>
            <div className="text-sm items-center justify-center mt-5">
              <span>615k Students •</span>
              <span> 12 Courses</span>
            </div>
            <h3 className="text-sm mt-4">Go To Profile</h3>
          </div>
          {/* //////////////////////////////// */}
          {/* //////////////////////////////// */}
          {/* //////////////////////////////// */}
          <div className="bg-[#FFFFFF] mt-6 w-[250px] ml-[-50px] rounded-sm">
            <h3 className="text-base ml-5 pt-3 pb-3">Live Streaming</h3>
            <hr className="text-xl"></hr>
            <div className="flex flex-col items-center justify-center pb-3">
              <FontAwesomeIcon
                icon={faHeadset}
                className="text-4xl bg-[#FFECEC] mt-4 rounded-full px-3 py-3"
              />
              <span className="text-sm mt-3">
                Set up your channel and stream live to your students
              </span>
              <button className="bg-[#FF0000] hover:bg-[#333333] rounded-sm text-white mt-6 px-2 py-2 text-sm w-24">
                Get Started
              </button>
              <span className="text-sm mt-6 ">
                Info : This feature only for 'Instructors'.
              </span>
            </div>
          </div>
          {/* //////////////////////////////// */}
          {/* //////////////////////////////// */}
          {/* //////////////////////////////// */}
          <div className="w-[250px] ml-[-50px] mt-6 relative rounded-sm">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/135/692/935/astronaut-space-black-background-artwork-hd-wallpaper-thumb.jpg"
              className="w-[250px] object-cover rounded-sm"
            />
            <h3 className="top-3 left-3 absolute text-white text-sm">
              Get personalized recommendations
            </h3>
            <span className="top-10 left-3 absolute text-white text-xs">
              Answer a few questions for your top picks
            </span>
            <button className="top-20 left-3 absolute text-white text-xs bg-[#FF0000] hover:bg-[#C72127] px-2 py-2 w-24  rounded-sm ">
              Get Started
            </button>
          </div>
          {/* //////////////////////////////// */}
          {/* //////////////////////////////// */}
          {/* //////////////////////////////// */}
          <div className="bg-[#FFFFFF] mt-6 w-[250px] ml-[-50px] rounded-sm">
            <h3 className="text-base ml-5 pt-3 pb-3">Top Categories</h3>
            <hr className="text-xl"></hr>
            <div className="flex flex-col pb-3 ">
              <div className="flex  items-center gap-3 text-sm ml-5 pt-5 ">
                <FontAwesomeIcon
                  icon={faArrowsLeftRight}
                  style={{ color: "#4d514f" }}
                />
                <span className="font-light">Development</span>
              </div>
              <div className="flex  items-center gap-3 text-sm ml-5 pt-5 ">
                <BarChartOutlined className="text-[#4d514f]" />
                <span className="font-light">Business</span>
              </div>
              <div className="flex  items-center gap-3 text-sm ml-5 pt-5 ">
                <DesktopOutlined className="text-[#4d514f]" />
                <span className="font-light">IT and Software</span>
              </div>
              <div className="flex  items-center gap-3 text-sm ml-5 pt-5 ">
                <FontAwesomeIcon icon={faRuler} style={{ color: "#4d514f" }} />
                <span className="font-light">Design</span>
              </div>
              <div className="flex  items-center gap-3 text-sm ml-5 pt-5 ">
                <LineChartOutlined className="text-[#4d514f]" />
                <span className="font-light">Marketing</span>
              </div>
              <div className="flex  items-center gap-3 text-sm ml-5 pt-5 ">
                <FontAwesomeIcon
                  icon={faBookOpen}
                  style={{ color: "#4d514f" }}
                />
                <span className="font-light">Personal Development</span>
              </div>
              <div className="flex  items-center gap-3 text-sm ml-5 pt-5 ">
                <CameraOutlined className="text-[#4d514f]" />
                <span className="font-light">Marketing</span>
              </div>
              <div className="flex  items-center gap-3 text-sm ml-5 pt-5 ">
                <FontAwesomeIcon icon={faMusic} style={{ color: "#4d514f" }} />
                <span className="font-light">Personal Development</span>
              </div>
            </div>
          </div>
          {/* //////////////////////////////// */}
          {/* //////////////////////////////// */}
          {/* //////////////////////////////// */}
          <div className="bg-[#FFFFFF] mt-6 w-[250px] ml-[-50px] rounded-sm">
            <div className="flex flex-col items-center justify-center pb-3">
              <h3 className="pt-4">Become an Instructor</h3>
              <span className="text-xs">
                Top instructors from around the world teach
              </span>
              <span className="text-xs">
                millions of students on Cursus. We provide the tools
              </span>
              <span className="text-xs">
                and skills to teach what you love.
              </span>
              <button className="bg-[#FF0000] hover:bg-[#333333] rounded-sm text-white mt-6 px-2 py-2 text-sm w-32">
                Start Teaching
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* //////////////////////////////// */}
      {/* //////////////////////////////// */}
      {/* //////////////////////////////// */}
      <div className="ml-[30px]   w-[1370px] ">
        <h2>What Our Student Have Today</h2>
      </div>

      <div className="mt-4 py-2 px-0 overflow-hidden w-[1400px] relative">
        <div className="flex items-center">
          <button
            onClick={handlePrevClickkkkk}
            disabled={startIndexxxxx === 0}
            className="group bg-white hover:bg-red-600 absolute left-7 z-50 cursor-pointer px-2 py-0 rounded-[5px] top-24"
          >
            <h1 className="group-hover:text-white">{"<"}</h1>
          </button>
          <div
            className="flex gap-4 rounded relative h-[200px] mx-10 transition-transform duration-300"
            style={{ transform: `translateX(-${startIndexxxxx * 296}px)` }}
            ref={previewListRef}
          >
            {previews.map((pr, m) => (
              <div
                key={m}
                className="bg-white shadow-md rounded w-[439px] flex flex-col  "
              >
                <span className="text-base ml-4 mt-5">"{pr.preview} "</span>
                <div className="flex items-center ml-4  gap-3 mt-10 ">
                  <img src={pr.img} width={"10%"} />
                  <h3>{pr.names}</h3>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handleNextClickkkkk}
            disabled={startIndexxxxx >= previews.length - visiblePreview}
            className="group bg-white hover:bg-red-600 absolute right-[0px] z-50 cursor-pointer px-2 py-0 rounded-[5px]  top-24"
          >
            <h1 className="group-hover:text-white">{">"}</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
