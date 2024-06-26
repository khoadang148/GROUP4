import React from "react";
import { Image } from "react-bootstrap";

const InstructorProfie = () => {
  return (
    <div className="mt-[68px]">
      <div className="bg-[#333333] w-full h-[280px] flex p-4">
        <div className="">
          <div className="flex">
            <Image
              className="w-[120px] h-[120px] bg-[#333333]"
              src={require("../src/assets/img1.png")}
            />
            <div>John Doe</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorProfie;
