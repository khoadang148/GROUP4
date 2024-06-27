import { Checkbox } from 'antd';
import React from 'react'
import { Image } from 'react-bootstrap';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CourseCard = ({
    image,
    title,
    category,
    views,
    date,
  }) => (
    <div className="flex border p-[10px] rounded-sm shadow-md relative">
      <div className="relative w-[700px] h-full">
        <img
          src={image}
          alt={title}
          className="w-[650px] h-[180px] object-cover rounded-sm"
        />
      </div>
      <div className="ml-4 flex flex-col justify-between">
        <div className="flex justify-between items-center mt-2">
          <span className="text-[#686f7a] text-[12px] mb-2">
            {views} views • {date}
          </span>
        </div>
        <div className='mb-5'>
          <h2 className="text-[16px] font-medium mt-1 text-black">{title}</h2>
          <p className="text-[#686f7a] font-normal text-[13px] pt-[2px] ">{category}</p>
          <button className='mt-10 text-black'>Read more</button>
        </div>
      </div>
    </div>
);

const courses = [
  {
    image: "https://gambolthemes.net/html-items/cursus-new-demo/images/blog/img-1.jpg",
    title: "Blog Title here",
    category: "Donec eget arcu vel mauris lacinia vestibulum id eu elit. Nam metus odio, iaculis eu nunc et, interdum mollis arcu. Pellentesque viverra faucibus diam. In sit amet laoreet dolor, vitae fringilla quam interdum mollis arcu.",
    views: "109k views",
    date: "March 10, 2020",
  },
  {
    image: "https://gambolthemes.net/html-items/cursus-new-demo/images/blog/img-2.jpg",
    title: "Blog Title here",
    category: "Donec eget arcu vel mauris lacinia vestibulum id eu elit. Nam metus odio, iaculis eu nunc et, interdum mollis arcu. Pellentesque viverra faucibus diam. In sit amet laoreet dolor, vitae fringilla quam interdum mollis arcu.",
    views: "109k views",
    date: "March 10, 2020",
  },
  {
    image: "https://gambolthemes.net/html-items/cursus-new-demo/images/blog/img-3.jpg",
    title: "Blog Title here",
    category: "Donec eget arcu vel mauris lacinia vestibulum id eu elit. Nam metus odio, iaculis eu nunc et, interdum mollis arcu. Pellentesque viverra faucibus diam. In sit amet laoreet dolor, vitae fringilla quam interdum mollis arcu.",
    views: "109k views",
    date: "March 10, 2020",
    more: "Read more",
  },
  {
    image: "https://gambolthemes.net/html-items/cursus-new-demo/images/blog/img-4.jpg",
    title: "Blog Title here",
    category: "Donec eget arcu vel mauris lacinia vestibulum id eu elit. Nam metus odio, iaculis eu nunc et, interdum mollis arcu. Pellentesque viverra faucibus diam. In sit amet laoreet dolor, vitae fringilla quam interdum mollis arcu.",
    views: "109k views",
    date: "March 10, 2020",
  },
];

const OurBlog = () => {
  return (
    <div>
      <div className="relative pt-[100px] p-4 z-40 flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-black">
          <div className="flex justify-center space-x-4 mb-5 mt-4">
            <h3 className="inline-block ">About</h3>
            <h3 className="inline-block">Blog</h3>
            <h3 className="inline-block">Company</h3>
            <h3 className="inline-block">Careers</h3>
            <h3 className="inline-block">Press</h3>
          </div>
          <div>
            <h1 className="text-xl font-bold">Insights, ideas, and stories</h1>
          </div>
        </div> 
        <img
          className="absolute inset-0 z-0 h-full w-full object-cover object-center"
          src={require("../src/assets/title_bg.jpg")}
          alt="Background Image"
        />
      </div>
      <div className="p-8 grid grid-cols-3 gap-8 mt-14">
        <div className="grid grid-cols-3 gap-8 pl-[250px] ">
            <div className="flex border p-[10px] rounded-sm shadow-md bg-white relative w-[200px] h-[300px] flex-col items-center">
                <div className="relative">
                    <input
                        id="search"
                        type="text"
                        placeholder="Enter keywords..."
                        className="border border-gray-300 p-2 rounded-md w-full pl-8"
                    />
                    <button
                        type="submit"
                        className="absolute left-2 top-1/2 transform -translate-y-1/2"
                    >
                        <img
                        src={require("../src/assets/search.png")}
                        width={12}
                        height={12}
                        alt="Search"
                        />
                    </button>
                    <hr className="my-2 w-full" />
                </div>
                    <div>
                        <label htmlFor="labelCheckbox" className="text-sm mb-2 text-black flex items-center">
                        <span className="mr-20">Labels</span>
                        <div>
                            <input type="checkbox" id="labelCheckbox" className="mr-2" />
                        </div>
                        </label>
                    </div>
                    <hr className="my-2 w-full border-gray-300" />
                    <div className="">
                        <label htmlFor="archiveCheckbox" className="text-sm mb-2 text-black flex items-center">
                        <span className="mr-20">Archive</span>
                        <div>
                            <input type="checkbox" id="archiveCheckbox" className="mr-2" />
                        </div>
                        </label>
                    </div>
                    <hr className="my-2 w-full border-gray-300" /> 
                    <div className="bg-blue-500 h-6 mb-4 mt-2 w-40 rounded-md flex items-center justify-center relative">
                        <FontAwesomeIcon icon={faTwitter} className="text-white mr-2" />
                        <span className="text-white">Follow</span>
                    </div>

                    <div className="bg-blue-800 h-6 mb-4 w-40 rounded-md flex items-center justify-center relative">
                        <FontAwesomeIcon icon={faFacebook} className="text-white mr-2" />
                        <span className="text-white">Follow</span>
                    </div>
                    <hr className="my-2 w-full border-gray-300" />
                    <div className='text-center'>
                        <p className='text-black inline-block mb-2'>Learn more</p>
                        <a href="#" className="text-blue-400 hover:underline inline-block ml-2">Cursus Help Center</a>
                    </div>

            </div>
        </div>

        <div className="col-span-2 space-y-6">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              image={course.image}
              title={course.title}
              category={course.category}
              views={course.views}
              date={course.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
