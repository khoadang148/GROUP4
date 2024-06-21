import React from "react";
import "@flaticon/flaticon-uicons/css/all/all.css";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const Footer = ({ sidebar }) => {
  const items = [
    {
      label: <a href="https://www.antgroup.com">English</a>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">Danish</a>,
      key: "1",
    },
  
   
    {
      label: <a href="https://www.antgroup.com">Spanish</a>,
      key: "2",
    },
    {
      label: <a href="https://www.aliyun.com">Chinese</a>,
      key: "3",
    },
   
   
    {
      label: <a href="https://www.antgroup.com">French</a>,
      key: "4",
    },
    {
      label: <a href="https://www.aliyun.com">Greek</a>,
      key: "5",
    },
   
  ];

  return (
    <div
      className={`bg-[#333333]  footer fixed bottom-0 w-full duration-700 transform ${
        sidebar ? "ml-[250px]" : ""
      }`}
    >
      <div className="footer_section_padding  ">
        <div className="footer-links flex gap-[170px]  justify-center items-center flex-row flex-wrap w-full text-left mb-[10px] mt-[10px]   py-[20px]  ">
          <div className="footer-links-div w-[60px] ml-[5px]  justify-center flex-col text-white text-[14px] ">
            <a href="/about">
              <p>About</p>
            </a>
            <a href="/blog">
              <p>Blog</p>
            </a>
            <a href="/careers">
              <p>Careers</p>
            </a>
            <a href="/press">
              <p>Press</p>
            </a>
          </div>
          <div className="footer-links-div  w-[120px] m-[10px]   justify-center flex-col text-white text-[14px]">
            <a href="/help">
              <p>Help</p>
            </a>
            <a href="/advertise">
              <p>Advertise</p>
            </a>
            <a href="/developers">
              <p>Developers</p>
            </a>
            <a href="/contactUs">
              <p>Contact Us</p>
            </a>
          </div>
          <div className="footer-links-div  w-[120px] mr-[10px]  justify-center flex-col text-white text-[14px]">
            <a href="/copyrightPolicy">
              <p>Copyright Policy</p>
            </a>
            <a href="/terms">
              <p>Terms</p>
            </a>
            <a href="/privacyPolicy">
              <p>Privacy Policy</p>
            </a>
            <a href="/sitemap">
              <p>Sitemap</p>
            </a>
          </div>
          <div className="footer-links-div w-[150px]  ">
            <button
              class="bg-red-600 hover:bg-red-800 text-white flex text-[14px] rounded-md px-5 py-3 font-medium
          "
            >
              Teach On Curcus
            </button>
            <button
              class=" text-white flex text-[14px] px-4 py-0 mt-[20px] border border-white rounded-md
          "
            >
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <div className=" gap-[10px] flex ">
                      <i class="fi fi-rr-world mt-[10px]"></i>
                      <p className=" mt-[8px] font-medium">Language</p>
                      <DownOutlined />
                    </div>
                  </Space>
                </a>
              </Dropdown>
            </button>
          </div>
        </div>

        <hr className="border-[#444444]  w-[75%] ml-[200px]"></hr>

        <div className="footer-below flex flex-row justify-center items-center gap-[570px]  mt-[16px]  ">
          <div className="footer-copyright text-white text-[14px] py-[10px]">
            <p>@{new Date().getFullYear()} Cursus. All Rights Reserved.</p>
          </div>
          <div className="flex p-2  gap-1">
            <i class="fi fi-brands-facebook text-white w-[30px] h-[30px]"></i>
            <i class="fi fi-brands-twitter text-white w-[30px] h-[30px]"></i>
            <i class="fi fi-brands-google text-white w-[30px] h-[30px]"></i>
            <i class="fi fi-brands-linkedin text-white w-[30px] h-[30px]"></i>
            <i class="fi fi-brands-instagram text-white w-[30px] h-[30px] "></i>
            <i class="fi fi-brands-youtube  text-white w-[30px] h-[30px]"></i>
            <i class="fi fi-brands-pinterest  text-white w-[30px] h-[30px]"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
