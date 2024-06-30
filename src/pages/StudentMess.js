import {
    DeleteOutlined,
    EllipsisOutlined,
    FlagOutlined,
    MessageOutlined,
    MutedOutlined,
    RightOutlined,
    SearchOutlined,
    StopOutlined,
  } from "@ant-design/icons";
  import { Badge, Dropdown } from "antd";
  import React from "react";
  
  
  const StudentMess = () => {
   
    const items = [
      {
        key: "1",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            <DeleteOutlined /> Delete
          </a>
        ),
      },
      {
        key: "2",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            <StopOutlined /> Block
          </a>
        ),
      },
      {
        key: "3",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            <FlagOutlined /> Report
          </a>
        ),
      },
      {
        key: "4",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            <MutedOutlined /> Mute
          </a>
        ),
      },
    ];
    return (
      <div className="mt-20 ml-5 bg-[#F7F7F7]">
        <div className="flex gap-5 items-center  ">
          <MessageOutlined className="text-3xl" />
          <h3 className="text-2xl mt-2"> Messages</h3>
        </div>
        <div className="mt-10 bg-white w-[1600px] flex border border-solid">
          <div className="w-[550px]">
            <div className=" mt-5 ml-5">
              <SearchOutlined className="p-3 border border-solid rounded-sm" />
              <input
                placeholder="Search Messages..."
                className="p-3 border border-solid w-[450px] rounded-sm"
              />
            </div>
            <div className="flex mt-5  gap-4  bg-[#FFECEC] py-7 px-3 cursor-pointer">
              <Badge count={2}>
                <img
                  src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg"
                  className="w-[50px] rounded-3xl ml-2 "
                  alt="imag1"
                />
              </Badge>
              <div className="flex flex-col">
                <div className="flex justify-between w-[460px]">
                  <h3>John Doe</h3>
                  <div className="text-sm font-extralight">7 hours ago</div>
                </div>
                <div className="truncate  w-[430px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                  nec varius velit. Sed bibendum arcu in lorem pellentesque, a
                  faucibus nulla consequat. Suspendisse potenti. Donec tincidunt
                  diam et magna efficitur, vel fermentum justo dictum. Vivamus vel
                  magna at felis ultricies fermentum nec id dolor. Nam vehicula
                  tristique tincidunt. Proin hendrerit ligula at augue placerat
                  facilisis.
                </div>
              </div>
            </div>
            {/* /////////////////////////// */}
            <div className="flex  gap-4  hover:bg-[#FFECEC] py-7 px-3 cursor-pointer">
              <Badge count={3}>
                <img
                  src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-2.jpg"
                  className="w-[50px] rounded-3xl ml-2 "
                  alt="img2"
                />
              </Badge>
              <div className="flex flex-col">
                <div className="flex justify-between w-[460px]">
                  <h3>Kerstin Cable</h3>
                  <div className="text-sm font-extralight">8 hours ago</div>
                </div>
                <div className="truncate  w-[430px]">
                  Hello, I paid yoy video turtorial bit i did not play error 404.
                </div>
              </div>
            </div>
            {/* /////////////////////////// */}
            <div className="flex  gap-4  hover:bg-[#FFECEC] py-7 px-3 cursor-pointer">
              <Badge count={1}>
                <img
                  src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-3.jpg"
                  className="w-[50px] rounded-3xl ml-2 "
                  alt="img3"
                />
              </Badge>
              <div className="flex flex-col">
                <div className="flex justify-between w-[460px]">
                  <h3>Jose Portilla</h3>
                  <div className="text-sm font-extralight">15 hours ago</div>
                </div>
                <div className="truncate  w-[430px]">
                  Thanks Sir, Such a nice video.
                </div>
              </div>
            </div>
            {/* /////////////////////////// */}
            <div className="flex  gap-4  hover:bg-[#FFECEC] py-7 px-3 cursor-pointer">
              <Badge count={1}>
                <img
                  src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-4.jpg"
                  className="w-[50px] rounded-3xl ml-2 "
                  alt="img4"
                />
              </Badge>
              <div className="flex flex-col">
                <div className="flex justify-between w-[460px]">
                  <h3>Farhat Amin</h3>
                  <div className="text-sm font-extralight">22 hours ago</div>
                </div>
                <div className="truncate  w-[430px]">
                  Hi!Sir, this is a purchase key CFKX123456ERUJSKLL
                </div>
              </div>
            </div>
            {/* /////////////////////////// */}
            <div className="flex  gap-4  hover:bg-[#FFECEC] py-7 px-3 cursor-pointer">
              <Badge count={1}>
                <img
                  src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-5.jpg"
                  className="w-[50px] rounded-3xl ml-2 "
                  alt="img5"
                />
              </Badge>
              <div className="flex flex-col">
                <div className="flex justify-between w-[460px]">
                  <h3>Kyle Pew</h3>
                  <div className="text-sm font-extralight">2 days ago</div>
                </div>
                <div className="truncate  w-[430px]">Pls! Upload .NET Course</div>
              </div>
            </div>
          </div>
          {/* /////////////////////////// */}
          <div className="flex-1    ">
            {/* /////////////////////////// */}
            <div className="flex  gap-4   py-7 px-3  border border-solid">
              <img
                src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-5.jpg"
                className="w-[50px] rounded-3xl ml-2 "
                alt="img5"
              />
  
              <div className="flex flex-col">
                <div className="flex justify-between items-center w-[940px]">
                  <h3>John Doe</h3>
  
                  <Dropdown
                    menu={{
                      items,
                    }}
                    placement="bottomLeft"
                    arrow
                  >
                    <EllipsisOutlined className="text-3xl cursor-pointer" />
                  </Dropdown>
                </div>
                <div className="bg-[#40D04F] w-[65px] text-white font-semibold px-2 py-[2px] rounded-sm">
                  Online
                </div>
              </div>
            </div>
            {/* /////////////////////////// */}
            <div className="flex flex-col h-[500px] border border-solid">
    <div className="border border-solid flex-1 overflow-y-auto">
      {/* /////////////////////////// */}
      <div className="self-end text-right">
        <div className="max-w-[550px] inline-block text-white bg-[#ED2A26] mr-28 rounded-md text-center">
          <div className="break-words p-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec rutrum congue leo eget malesuada. Vivamus suscipit
            tortor eget felis porttitor.
          </div>
        </div>
        <div className="mt-2 mr-2 text-sm font-extralight">Sat, April 10, 1:08 PM</div>
      </div>
      {/* /////////////////////////// */}
      <div>
        <div className="bg-[#FFECEC] p-3 inline-block max-w-[550px] ml-5 rounded-md">
          <div className="break-words">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec rutrum congue leo eget malesuada. Vivamus suscipit
            tortor eget felis porttitor.
          </div>
        </div>
        <div className="mt-2 ml-2 text-sm font-extralight">5 minutes ago</div>
      </div>
      {/* /////////////////////////// */}
      <div className="self-end text-right">
        <div className="max-w-[550px] inline-block text-white bg-[#ED2A26] mr-28 rounded-md text-center">
          <div className="break-words p-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec rutrum congue leo eget malesuada. Vivamus suscipit
            tortor eget felis porttitor.
          </div>
        </div>
        <div className="mt-2 mr-2 text-sm font-extralight">Sat, April 10, 1:08 PM</div>
      </div>
      {/* /////////////////////////// */}
      <div>
        <div className="bg-[#FFECEC] p-3 inline-block max-w-[550px] ml-5 rounded-md">
          <div className="break-words">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec rutrum congue leo eget malesuada. Vivamus suscipit
            tortor eget felis porttitor.
          </div>
        </div>
        <div className="mt-2 ml-2 text-sm font-extralight">5 minutes ago</div>
      </div>
      {/* /////////////////////////// */}
      <div className="self-end text-right">
        <div className="max-w-[550px] inline-block text-white bg-[#ED2A26] mr-28 rounded-md text-center">
          <div className="break-words p-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec rutrum congue leo eget malesuada. Vivamus suscipit
            tortor eget felis porttitor.
          </div>
        </div>
        <div className="mt-2 mr-2 text-sm font-extralight">Sat, April 10, 1:08 PM</div>
      </div>
      {/* /////////////////////////// */}
      <div>
        <div className="bg-[#FFECEC] p-3 inline-block max-w-[550px] ml-5 rounded-md">
          <div className="break-words">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec rutrum congue leo eget malesuada. Vivamus suscipit
            tortor eget felis porttitor.
          </div>
        </div>
        <div className="mt-2 ml-2 text-sm font-extralight">5 minutes ago</div>
      </div>
      {/* /////////////////////////// */}
      <div className="self-end text-right">
        <div className="max-w-[550px] inline-block text-white bg-[#ED2A26] mr-28 rounded-md text-center">
          <div className="break-words p-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec rutrum congue leo eget malesuada. Vivamus suscipit
            tortor eget felis porttitor.
          </div>
        </div>
        <div className="mt-2 mr-2 text-sm font-extralight">Sat, April 10, 1:08 PM</div>
      </div>
    </div>
    <div className="flex gap-5 p-4 border border-solid">
      <input
        placeholder="Write a message..."
        className="p-2 border border-solid flex-1"
      />
      <button className="p-2 w-12 bg-[#ED2A26] hover:bg-black rounded-sm text-white">
        <RightOutlined />
      </button>
    </div>
  </div>
  
          </div>
        </div>
      </div>
    );
  };
  
  export default StudentMess;
  