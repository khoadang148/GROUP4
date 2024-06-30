import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faBook, faDownload, faPrint,  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const PurchasedCourses = ({ sidebar }) => {
  const data3 = [
    {
      key: '1', itemNo: '001', title: 'Course Title Here', vendor: 'Rock William', category: 'Web Development', deliverytype: 'download', price: '$15', date: '25 March 2020'
    },
    {
      key: '2', itemNo: '002', title: 'Course Title Here', vendor: 'Rock William', category: 'Web Development', deliverytype: 'download', price: '$15', date: '25 March 2020'
    },
    {
      key: '3', itemNo: '003', title: 'Course Title Here', vendor: 'Rock William', category: 'Web Development', deliverytype: 'download', price: '$15', date: '25 March 2020'
    },
    {
      key: '4', itemNo: '004', title: 'Course Title Here', vendor: 'Rock William', category: 'Web Development', deliverytype: 'download', price: '$15', date: '25 March 2020'
    },
    {
      key: '5', itemNo: '005', title: 'Course Title Here', vendor: 'Rock William', category: 'Web Development', deliverytype: 'download', price: '$15', date: '25 March 2020'
    },
  ];

  return (
    <div className={`mt-[110px] ${sidebar ? 'ml-[50px]' : 'ml-[-150px]'} transition-all duration-1000`}>
       
        <div className='flex gap-3 mb-11'>
        <FontAwesomeIcon icon={faBook} className='size-[30px]' />
        <h2 className='text-[20px] font-medium'>Purchased Courses</h2>
        </div>

       
      <table className="min-w-full shadow-md rounded-sm">
        <thead className="bg-red-200 ">
          <tr className="text-gray-700 border-b text-[14px] font-medium text-[#333333]">
            <th className="py-2 px-9   text-left">Item No.</th>
            <th className="py-2 px-7 text-left">Title</th>
            <th className="py-2 px-10 text-left">Vendor</th>
            <th className="py-2 px-9 text-left">Category</th>
            <th className="py-2 px-9 text-left">Delivery Type</th>
            <th className="py-2 px-7 text-left">Price</th>
            <th className="py-2 px-7 text-left">Purchased Date</th>
            <th className="py-2 px-13 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data3.map((item) => (
            <tr key={item.key} className="border-b border-blue-gray-200 text-[14px] font-normal text-[#333333] ">
              <td className="py-5 px-9 ">{item.itemNo}</td>
              <td className="py-5 px-7 ">{item.title}</td>
              <td className="py-5 px-10 text-[14px] text-[#4183c4] hover:text-black cursor-pointer ">{item.vendor}</td>
              <td className="py-5 px-9   text-[14px] text-[#4183c4] hover:text-black cursor-pointer">{item.category}</td>
              <td className="py-5 px-9 text-red-500  text-[14px] font-medium ">{item.deliverytype}</td>
              <td className="py-5 px-7 ">{item.price}</td>
              <td className="py-5 px-7 ">{item.date}</td>
              <td className="py-5 px-11 "> <div className='flex gap-3 text-gray-500'>
               <a href='#' className='hover:text-black'>
               <FontAwesomeIcon icon={faDownload} />

               </a>
               <a href='#' className='hover:text-black'>
               <FontAwesomeIcon icon={faTrashCan} />
               </a>
               <a href='#' className='hover:text-black'>
               <FontAwesomeIcon icon={faPrint} />
               </a>
                </div></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
   
  );
};

export default PurchasedCourses;
