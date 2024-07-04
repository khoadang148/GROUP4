import React, { useEffect, useState } from 'react';
import { StarOutlined, SearchOutlined } from '@ant-design/icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Review2 = ({ sidebar }) => {
    const [courses, setCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('https://66806e6756c2c76b495c072b.mockapi.io/review')
            .then(response => response.json())
            .then(data => setCourses(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const filteredCourses = courses.filter(course =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className={`mt-[100px] ml-6 text-black text-xl ${sidebar ? "w-[1400px]" : "w-[1640px]"}`}>
                <h1><StarOutlined /> All Review</h1>
            </div>
            <div className='flex gap-x-10 justify-center mt-8 ml-6'>
                <div className={`bg-white h-[350px] mt-5 p-4 ${sidebar ? "w-[700px]" : "w-[900px]"}`}>
                    <div className='text-2xl mt-4 ml-1'>
                        <h1>All Student Feedback</h1>
                    </div>
                    <div className='w-full h-14 bg-[#F7F7F7] border'>
                        <div className='ml-6 pt-4 text-yellow-500 text-[25px] flex gap-3'>
                            <h1 className='text-black mr-2 text-2xl'>4.6</h1>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <p className='text-black text-[16px] ml-2 text-xl'>All Rating</p>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className='flex'>
                            <div className='relative w-full h-6 rounded-sm'>
                                <div className='absolute bg-red-500 w-[75%] h-6 z-10'></div>
                                <div className='absolute bg-[#F7F7F7] w-full h-6'></div>
                            </div>
                            <div className='ml-6 text-yellow-500 text-[25px] flex gap-1'>
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon className='text-[#F7F7F7]' icon={faStar} />
                                <p className='text-black text-[20px] ml-2'>70%</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='relative w-full h-6 rounded-sm'>
                                <div className='absolute bg-red-500 w-[37.5%] h-6 z-10'></div>
                                <div className='absolute bg-[#F7F7F7] w-full h-6'></div>
                            </div>
                            <div className='ml-6 text-yellow-500 text-[25px] flex gap-1'>
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <div className='text-[#F7F7F7] flex gap-1'>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <p className='text-black text-[20px] ml-2'>40%</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='relative w-full h-6 rounded-sm'>
                                <div className='absolute bg-red-500 w-[5%] h-6 z-10'></div>
                                <div className='absolute bg-[#F7F7F7] w-full h-6'></div>
                            </div>
                            <div className='ml-6 text-yellow-500 text-[25px] flex gap-1'>
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <div className='text-[#F7F7F7] flex gap-1'>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <p className='text-black text-[20px] ml-2 mt-1'>5%</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='relative w-full h-6 rounded-sm'>
                                <div className='absolute bg-red-500 w-0 h-6 z-10'></div>
                                <div className='absolute bg-[#F7F7F7] w-full h-6'></div>
                            </div>
                            <div className='ml-6 text-[#F7F7F7] text-[25px] flex gap-1'>
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <p className='text-black text-[20px] ml-2'>0%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`p-4 ${sidebar ? "w-[800px]" : "w-[900px]"}`}>
                    <div>
                        <div className='flex items-center'>
                            <h1 className='mt-1 mr-4 text-2xl'>All Reviews</h1>
                            <div className='flex items-center bg-[#F7F7F7] border-[#F7F7F7] relative w-[200px] ml-auto p-1'>
                                <input
                                    type='text'
                                    placeholder='Search reviews..'
                                    className='focus:outline-none w-full text-xs p-2 bg-white text-black'
                                    value={searchTerm}
                                    onChange={e => setSearchTerm(e.target.value)}
                                />
                                <button className='bg-red-500 p-1.5 hover:bg-[#333333] transition duration-300'>
                                    <SearchOutlined style={{ color: 'white', fontSize: '16px' }} />
                                </button>
                            </div>
                        </div>
                    </div>
                    {filteredCourses.map((course, index) => (
                        <div key={index} className='bg-white mt-8 pb-4'>
                            <div className='pt-4'>
                                <h1 className='text-2xl ml-4'>Course Title Here</h1>
                                <hr className="my-2 w-full border-gray-300" />
                            </div>
                            <div>
                                <div className='flex gap-3 mt-6 ml-4'>
                                    <div>
                                        <img
                                            src={course.img}
                                            width={60}
                                            alt='img9'
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className='text-xl'>{course.name}</h3>
                                        <div className="text-[18px] font-light text-gray-500">{course.time}</div>
                                    </div>
                                </div>
                                <div className='ml-4 mt-4 text-yellow-500 text-[25px] flex gap-1'>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon className='text-[#F7F7F7]' icon={faStar} />
                                </div>
                                <div className='ml-4 mt-4 leading-7'>
                                    <p className='text-gray-400 text-[19px]'>{course.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Review2;
