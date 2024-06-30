import { ShoppingCartOutlined } from "@ant-design/icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEnrolledCourses } from "../redux/actions/course.action";
import { Image } from "react-bootstrap";

const CourseCard = ({
  thumbnail,
  rating,
  title,
  category,
  author,
  hours,
  price,
  views,
  date,
  handleMouseEnter,
  handleMouseLeave,
  index,
  hoveredCourse,
}) => (
  <div
    className="flex border p-[10px] rounded-sm shadow-md relative"
    onMouseEnter={() => handleMouseEnter(index)}
    onMouseLeave={handleMouseLeave}
  >
    <div className="relative w-[350px] h-full">
     <div>
      <Image src={thumbnail}
      className="w-[350px] h-[180px] object-cover rounded-sm"/>
     </div>
      <span className="absolute top-2 left-2 bg-yellow-400 text-white text-sm font-medium gap-2 px-3 py-1 rounded">
        <FontAwesomeIcon icon={faStar} />
        {rating}
      </span>
      <span className="absolute top-2 right-0 bg-[#fa8305] text-white text-[10px] font-medium text-xs px-2 py-1 rounded-sm">
        BESTSELLER
      </span>
      <span className="absolute bottom-2 right-2 bg-[#505050] text-white text-[12px] font-medium px-[10px] py-[5px] rounded-[3px]">
        {hours} hours
      </span>
    </div>
    <div className="ml-4 flex flex-col justify-between">
      <div className="flex justify-between items-center mt-2">
        <span className="text-[#686f7a] text-[12px]">
          {views} views • {date}
        </span>
      </div>
      <div>
        <h2 className="text-[16px] font-medium mt-2">{title}</h2>
        <p className="text-[#686f7a] font-normal text-[13px] pt-[2px]">
          {category}
        </p>
      </div>
      <div className="flex justify-between items-center mb-10">
        <p className="text-gray-500 text-[14px]">
          By{" "}
          <span className="text-[14px] text-black font-medium">{author}</span>
        </p>
        <div className={`flex items-center  mr-[-250px] ${index === hoveredCourse ? "block" : "hidden"}`}>
          <ShoppingCartOutlined className="text-black text-[18px]" />
          {/* <span className="text-lg font-bold">${price}</span> */}
        </div>
      
          <div className="text-[18px] font-bold">${price}</div>
       
      </div>
    </div>
  </div>
);

const SavedCourses = () => {
  const [hoveredCourse, setHoveredCourse] = useState(null);

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

 

  return (
    <div className="p-8 grid grid-cols-3 gap-8 mt-14">
      <div className="col-span-1">
        <div className="flex justify-between items-center">
          <h2 className="text-base font-medium">Saved Courses</h2>
          <button className="text-sm text-gray-700 font-normal">
            Remove All
          </button>
        </div>
        <hr className="my-2" />
        <p className="text-gray-500 text-sm">{courses.length} Courses</p>
        <button className="bg-[#ED2927] hover:bg-[#333333] text-white w-full py-2 rounded-sm mt-4">
          <FontAwesomeIcon icon={faTrashAlt} className="mr-2" />
          <span className="text-sm">Remove Saved Courses</span>
        </button>
      </div>
      <div className="col-span-2 space-y-6">
        <h1 className="text-xl font-medium">Saved Courses</h1>
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            thumbnail={course.thumbnail}
            rating={course.rating}
            title={course.title}
            category={course.category}
            author={course.author}
            hours={course.hours}
            price={course.price}
            views={course.views}
            date={course.date}
            index={index}
            hoveredCourse={hoveredCourse}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
    </div>
  );
};

export default SavedCourses;
