import { SettingOutlined } from '@ant-design/icons'
import TextArea from 'antd/es/input/TextArea'
import React from 'react'
import {  useNavigate } from 'react-router-dom';
import {  message } from 'antd';
const SettingAccount = () => {
    const navigate = useNavigate();

    const handleNoti =()=> {
       
        navigate("/notification");
      
    };
    const handlePrivacy =()=> {
       
        
        navigate("/privacy");
    };
    const handleBilling =()=> {
       
        navigate("/billing");
      
    };
    const handleApiclients = () => {
        navigate("/apiclient")
      }
      const handleCloseAccount = () => {
        navigate("/closeAccount");
      }
      const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Save Changes Success',
    });
  };
  return (
    <div className='mt-20 ml-5 bg-[#F7F7F7] '>
        <div className='flex gap-5 items-center  '>
        <SettingOutlined className='text-3xl'/>
        <h3  className='text-2xl mt-2'>Setting</h3>
        </div>
    <div className='mt-10 flex'>
        <button className=' p-2 rounded-md bg-[#ED2A26] text-white font-medium'>Account</button>
        <button className='p-2 rounded-md  font-medium' onClick={handleNoti}>Notification</button>
        <button className='p-2 rounded-md  font-medium' onClick={handlePrivacy}>Privacy</button>
        <button className='p-2 rounded-md  font-medium' onClick={handleBilling}>Billing and Payouts</button>
        <button className='p-2 rounded-md  font-medium' onClick={handleApiclients}>API Clients</button>
        <button className='p-2 rounded-md  font-medium'onClick={handleCloseAccount}>Close Account</button>
    </div>

    
        <h5 className='mt-12 text-xl'>Your Cursus Account</h5>
        <span className=' font-light'>This is your public presence on Cursus. You need a account to upload your paid courses, comment on courses, purchased by students, or earning.</span>
       <div className='mt-12'>
       <h5 className=' text-lg'>Basic Profile</h5>
       <span className='  font-light'>Add information about yourself</span>
       </div>
        <div className='flex gap-5 mt-10'>
            <input placeholder='First Name' className='p-3 w-[550px] border border-solid'></input>
            <input placeholder='Last Name' className='p-3 w-[500px] border border-solid' ></input>
        </div>
        <div className='flex mt-10 items-center'>
            <input placeholder='Headline' className='p-3 w-[1070px] border border-solid object-cover'/>
            <div className='bg-[#DEDFE0] p-2 ml-[-40px] rounded-md '>36</div>
        </div>
       <h1 className='font-light'>Add a professional headline like, "Engineer at Cursus" or "Architect."</h1>
       <TextArea className='mt-10 text-lg' placeholder='write a little description about you...' rows={4} />
       <h1 className='font-light'>Links and coupon codes are not permitted in this section."</h1>
       <hr className='h-5 border-gray-400 mt-16'/>
        {/* ///////////////////////////////// */}
       <h5 className='mt-10 text-lg'>Profile Links</h5>
       <div className='flex mt-8'>
        <div className='p-3 bg-[#E8E8E8] font-medium rounded-sm'>https://</div>
        <input placeholder='yoursite.com' className='p-3 border border-solid w-[1100px] rounded-tr-lg rounded-br-lg '/>
       </div>
        {/* ///////////////////////////////// */}
       <div className='flex mt-8'>
        <div className='p-3 bg-[#E8E8E8] font-medium rounded-sm'>https://facebook.com/</div>
        <input placeholder='Facebook Profile' className='p-3 border border-solid w-[995px] rounded-tr-lg rounded-br-lg '/>
       </div>
       <h1 className='font-light'>Add your Facebook username (e.g. johndoe)."</h1>
        {/* ///////////////////////////////// */}
       <div className='flex mt-8'>
        <div className='p-3 bg-[#E8E8E8] font-medium rounded-sm'>https://twitter.com/</div>
        <input placeholder='Twitter Profile' className='p-3 border border-solid w-[1015px] rounded-tr-lg rounded-br-lg '/>
       </div>
       <h1 className='font-light'>Add your Twitter username (e.g. johndoe)."</h1>
       {/* ///////////////////////////////// */}
       <div className='flex mt-8'>
        <div className='p-3 bg-[#E8E8E8] font-medium rounded-sm'>https://linkedin.com/</div>
        <input placeholder='linkedin Profile' className='p-3 border border-solid w-[1000px] rounded-tr-lg rounded-br-lg '/>
       </div>
       <h1 className='font-light'>Input your LinkedIn resource id (e.g. in/johndoe)."</h1>
       {/* ///////////////////////////////// */}
       <div className='flex mt-8'>
        <div className='p-3 bg-[#E8E8E8] font-medium rounded-sm'>https://youtube.com/</div>
        <input placeholder='youtube Profile' className='p-3 border border-solid w-[1000px] rounded-tr-lg rounded-br-lg '/>
       </div>
       <h1 className='font-light'>Input your Youtube username (e.g. johndoe)."</h1>
        {/* ///////////////////////////////// */}
        {contextHolder}
        <button className='mt-12 mb-12 bg-[#ED2A26] p-[10px] w-32 text-white font-medium rounded-sm hover:bg-black' onClick={success}>Save Changes</button>
        </div>
  )
}

export default SettingAccount