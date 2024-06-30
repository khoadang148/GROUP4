import { faBook, faBorderAll } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DashBoard = ({ sidebar }) => {
  return (
    <div className={`mt-[100px] mx-[20px] transition-all duration-1000 ${sidebar ? 'ml-[30px]' : 'ml-[-200px]'}`}>
      <div className="flex items-center">
        <FontAwesomeIcon icon={faBorderAll} className="text-xl" />
        <h1 className="ml-2">Dashboard</h1>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-3">
        {[
          { title: "Total Sales", amount: "$350", new: "New 5", imgSrc: "https://gambolthemes.net/html-items/cursus-new-demo/images/dashboard/achievement.svg", bgColor: "bg-yellow-400" },
          { title: "Total Enroll", amount: "$350", new: "New 5", imgSrc: "https://gambolthemes.net/html-items/cursus-new-demo/images/dashboard/graduation-cap.svg", bgColor: "bg-purple-500" },
          { title: "Total Courses", amount: "$350", new: "New 5", imgSrc: "https://gambolthemes.net/html-items/cursus-new-demo/images/dashboard/online-course.svg", bgColor: "bg-orange-400" },
          { title: "Total Students", amount: "$350", new: "New 5", imgSrc: "https://gambolthemes.net/html-items/cursus-new-demo/images/dashboard/knowledge.svg", bgColor: "bg-purple-500" },
        ].map((item, index) => (
          <div key={index} className="col-span-1 bg-white h-[150px] p-3 flex justify-between items-center">
            <div>
              <h5 className="text-[16px] font-medium text-[#333333]">{item.title}</h5>
              <h3 className="text-[24px] text-[#333333]">{item.amount}</h3>
              <span className={`text-[12px] px-[8px] py-[5px] ${item.bgColor} font-medium rounded-sm`}>
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
          <h1 className="text-[24px] font-normal">Jump Into Course Creation</h1>
        </div>
        <button className="py-2 px-6 bg-red-600 font-medium text-white rounded-sm text-[14px]">
          Create your Course
        </button>
      </div>
      <div className="grid grid-cols-3 gap-6 h-[200px] mt-7">
        <div className="col-span-1 bg-red-300">
          <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-1.jpg" alt="content1" />
          <h1>content1</h1>
        </div>
        <div className="col-span-1 bg-blue-400"></div>
        <div>
          <h4>Profile Analytics</h4>
          </div>
        <div className="col-span-1 bg-yellow-300">
         
          <div className="border-b">
            <h6>Current subscribers</h6>
            <h3>856</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
