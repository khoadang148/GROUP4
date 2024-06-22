import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CourseCard = ({
  image,
  rating,
  title,
  category,
  author,
  hours,
  price,
  views,
  date,
}) => (
    <div className="flex border p-[10px] rounded-sm shadow-md relative">
      <div className="relative w-[350px] h-full">
        <img
          src={image}
          alt={title}
          className="w-[350px] h-[180px] object-cover rounded-sm "
        />

        <span className="absolute top-2 left-2 bg-[#fdcc0d] text-white gap-2 text-[14px] font-medium px-[18px] py-[1px] rounded-sm ">
        <FontAwesomeIcon icon={faStar} />
          {rating}
        </span>
        <span className="absolute top-2 right-2 bg-[#fa8305] text-white text-[10px] font-medium text-xs px-2 py-1 rounded-sm">
          BESTSELLER
        </span>

        <span className="absolute bottom-2 right-2 bg-[#505050] text-white text-[12px] font-medium px-[10px] py-[1px] rounded-[3px]">
          {hours} hours
        </span>
      </div>

    <div className="ml-4 flex flex-col justify-between">
      <div className="flex justify-between items-center mt-2">
        <span className="text-[#686f7a]  text-[12px]">
          {views} views • {date}
        </span>
      </div>

      <div>
        <h2 className="text-[16px] font-medium  mt-2">{title}</h2>
        <p className="text-[#686f7a] font-normal text-[13px] pt-[2px]">{category}</p>
      </div>
      <div className="flex justify-between items-center mb-10">
        <p className="text-gray-500 text-[14px]">
          By <span className="text-[14px] text-black font-medium">{author}</span>
        </p>
        <span className="text-lg font-bold">${price}</span>
      </div>
    </div>
  </div>
);

const SavedCourses = () => (
  <div className="p-8 grid grid-cols-3 mt-12 ">
   <div className="col-span-1 mt-[10px]" style={{ width: 'calc(100% - 30px)' }}>
  <div className="flex justify-between items-center font-medium">
    <h2 className="text-[14px] font-medium mt-2">Saved Courses</h2>
    <button className="text-[#333] text-[14px] font-normal font-sans">
      Remove All
    </button>
  </div>
  <hr />
  <p className="mb-4 py-5 text-[#686f7a] text-[14px] font-medium">
    4 Courses
  </p>
  <button className="bg-red-500 hover:bg-[#333333] text-white w-full flex items-center justify-center px-4 py-2 font-medium text-[14px] rounded">
    <FontAwesomeIcon icon={faTrashCan} className="mr-4" />
    <p className="m-0 font-medium text-[14px]">Remove Saved Courses</p>
  </button>
</div>

    <div className="col-span-2 space-y-6  mt-2">
      <h1 className="text-[18px] font-medium py-2">Saved Courses</h1>
      <CourseCard
        image="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-1.jpg"
        rating="4.5"
        title="Complete Python Bootcamp: Go from zero to hero in Python 3"
        category="Web Development | Python"
        author="John Doe"
        hours="25"
        price="10"
        views="109k"
        date="15 days ago"
      />
      <CourseCard
        image="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-2.jpg"
        rating="4.5"
        title="The Complete JavaScript Course 2020: Build Real Projects!"
        category="Development | JavaScript"
        author="Jassica William"
        hours="28"
        price="5"
        views="5M"
        date="15 days ago"
      />
      <CourseCard
        image="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-3.jpg"
        rating="4.5"
        title="The Complete JavaScript Course 2020: Build Real Projects!"
        category="Development | JavaScript"
        author="Jassica William"
        hours="12"
        price="13"
        views="1M"
        date="15 days ago"
      />
      <CourseCard
        image="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-4.jpg"
        rating="4.5"
        title="The Complete JavaScript Course 2020: Build Real Projects!"
        category="Development | JavaScript"
        author="Jassica William"
        hours="1"
        price="12"
        views="153k"
        date="15 days ago"
      />
    </div>
  </div>
);

export default SavedCourses;
