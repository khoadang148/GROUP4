import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Flex, Progress } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const TestResult = () => {
  const navigate = useNavigate();

  const handleCertificationCenter = () => {
    navigate("/certificationcenter");
  };

  const handleHome = () => {
    navigate("/home");
  };
  return (
    <div className="">
      <div className="text-black bg-white ">
        <div className="flex justify-between">
          <div className="text-black pt-[80px] pl-[11%] flex gap-3 text-[14px] cursor-pointer">
            <p onClick={handleHome}>Home /</p>
            <p onClick={handleCertificationCenter}>Certification Center /</p>
            <p className="text-[#787878]">Result</p>
          </div>
          <div
            className="text-black pt-[80px] pr-[12%] text-[14px] flex items-center text-center cursor-pointer"
            onClick={handleCertificationCenter}
          >
            <FontAwesomeIcon className="text-[7px] pb-3" icon={faChevronLeft} />
            <FontAwesomeIcon className="text-[7px] pb-3" icon={faChevronLeft} />
            <p className="pl-2">Back to Certification Center</p>
          </div>
        </div>
        <div className="pt-5 pb-3 pl-[11%] text-2xl">
          <h1>Result</h1>
        </div>
      </div>
      <div>
        <div className="ml-[500px] mt-[50px] ">
          <Flex gap="small" wrap>
            <Progress type="circle" percent={100} />
            <Progress
              type="circle"
              percent={25}
              status="exception"
              className="px-[80px] -"
            />
            <Progress type="circle" percent={75} />
          </Flex>
        </div>
        <div className="flex ml-[520px] mt-[10px] text-[#333333] font-medium">
          <div>
            <h1 className="text-[18px]">Right (15)</h1>
          </div>
          <div className="px-[130px] text-[18px]">
            <h1>Wrong (5)</h1>
          </div>
          <div className="text-[18px]">
            <h1>Out Of 20</h1>
          </div>
        </div>
        <h1 className="text-[42px] text-black ml-[530px] mt-[50px] font-bold">
          Congratulation! Joginder
        </h1>
        <h2 className="text-[20px] text-[#333333] ml-[620px] mt-[40px]">
          You are eligible for this certificate
        </h2>
        <div className="ml-[700px] mt-[60px] mb-[50px]">
          <a
            href="https://gambolthemes.net/html-imgs/certificate.jpg"
            className=" bg-red-600 hover:bg-[#333333] text-white text-[14px] font-medium px-[10px] py-[9px] rounded-sm "
          >
            Download Certificate
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestResult;
