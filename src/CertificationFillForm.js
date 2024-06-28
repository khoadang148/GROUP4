
import { useNavigate } from "react-router-dom";
import {
  faChevronLeft,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input, Menu, Radio, Space } from "antd";
import React, { useState } from "react";

const items = [
  {
    key: "1",
    label: <span style={{ fontWeight: "bold" }}>Development</span>,
    children: [
      {
        key: "11",
        label: <Radio value={1}>WordPress</Radio>,
      },
      {
        key: "12",
        label: <Radio value={2}>HTML CSS</Radio>,
      },
      {
        key: "13",
        label: <Radio value={3}>Full Time</Radio>,
      },
      {
        key: "14",
        label: <Radio value={4}>MotoCMS 3</Radio>,
      },
      {
        key: "16",
        label: <Radio value={6}>Full Time</Radio>,
      },
      {
        key: "17",
        label: <Radio value={7}>Open Cart</Radio>,
      },
      {
        key: "18",
        label: <Radio value={8}>WordPress Pro</Radio>,
      },
      {
        key: "19",
        label: <Radio value={9}>WordPress Elementor</Radio>,
      },
      {
        key: "20",
        label: <Radio value={10}>WordPress Elementor Pro</Radio>,
      },
      {
        key: "21",
        label: <Radio value={11}>Presta Shop</Radio>,
      },
    ],
  },

  {
    key: "2",
    label: <span style={{ fontWeight: "bold" }}>Finance & Accounting</span>,
    children: [
      {
        key: "11",
        label: <Radio value={1}>Accounting</Radio>,
      },
      {
        key: "12",
        label: <Radio value={2}>Finance Fundamentals</Radio>,
      },
      {
        key: "13",
        label: <Radio value={3}>Bookkeeping</Radio>,
      },
      {
        key: "14",
        label: <Radio value={4}>Political Science</Radio>,
      },
      {
        key: "16",
        label: <Radio value={6}>Finance</Radio>,
      },
      {
        key: "17",
        label: <Radio value={7}>Cryptocurrency</Radio>,
      },
    ],
  },
  {
    key: "3",
    label: <span style={{ fontWeight: "bold" }}>Design</span>,
    children: [
      {
        key: "11",
        label: <Radio value={1}>Adobe Photoshop</Radio>,
      },
      {
        key: "12",
        label: <Radio value={2}>Adobe Illustrator</Radio>,
      },
      {
        key: "13",
        label: <Radio value={3}>Adobe After Effects</Radio>,
      },
      {
        key: "14",
        label: <Radio value={4}>Adobe InDesign</Radio>,
      },
      {
        key: "16",
        label: <Radio value={6}>Unity</Radio>,
      },
      {
        key: "17",
        label: <Radio value={7}>Drawing</Radio>,
      },
      {
        key: "18",
        label: <Radio value={8}>Game Development Fundamentals</Radio>,
      },
      {
        key: "18",
        label: <Radio value={9}>3D Modeling</Radio>,
      },
      {
        key: "19",
        label: <Radio value={10}>Motion Graphics</Radio>,
      },
      {
        key: "20",
        label: <Radio value={11}>2D Animation</Radio>,
      },
      {
        key: "21",
        label: <Radio value={12}>T-Shirt Design</Radio>,
      },
    ],
  },
  {
    key: "4",
    label: <span style={{ fontWeight: "bold" }}>Marketing</span>,
    children: [
      {
        key: "11",
        label: <Radio value={1}>Google Ads(Adwords)</Radio>,
      },
      {
        key: "12",
        label: <Radio value={2}>Google Ads(AdWords) Certification</Radio>,
      },
      {
        key: "13",
        label: <Radio value={3}>Social Marketing</Radio>,
      },
      {
        key: "14",
        label: <Radio value={4}>Email Marketing</Radio>,
      },
      {
        key: "16",
        label: <Radio value={6}>Business Strategy</Radio>,
      },
      {
        key: "17",
        label: <Radio value={7}>SEO</Radio>,
      },
      {
        key: "18",
        label: <Radio value={8}>PPC Advertising</Radio>,
      },
      {
        key: "18",
        label: <Radio value={9}>Blogging</Radio>,
      },
    ],
  },
  {
    key: "5",
    label: <span style={{ fontWeight: "bold" }}>Teaching & Academics</span>,
    children: [
      {
        key: "11",
        label: <Radio value={1}>Math</Radio>,
      },
      {
        key: "12",
        label: <Radio value={2}>Humanities</Radio>,
      },
      {
        key: "13",
        label: <Radio value={3}>Engineering</Radio>,
      },
      {
        key: "14",
        label: <Radio value={4}>Science</Radio>,
      },
      {
        key: "16",
        label: <Radio value={6}>Social Science</Radio>,
      },
      {
        key: "17",
        label: <Radio value={7}>English Language</Radio>,
      },
      {
        key: "18",
        label: <Radio value={8}>German Language</Radio>,
      },
      {
        key: "19",
        label: <Radio value={9}>Sign Language</Radio>,
      },
      {
        key: "20",
        label: <Radio value={10}>French Language</Radio>,
      },
      {
        key: "18",
        label: <Radio value={9}>Spanish Language</Radio>,
      },
      {
        key: "18",
        label: <Radio value={9}>English Grammar</Radio>,
      },
      {
        key: "18",
        label: <Radio value={9}>IELTS</Radio>,
      },
    ],
  },
];

const getLevelKeys = (items1) => {
  const key = {};
  const func = (items2, level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};

const levelKeys = getLevelKeys(items);

const CertificationFillForm = () => {
  const navigate = useNavigate();

  const handleCertificationCenter = () => {
    navigate("/certificationcenter");
  };

  const handleHome = () => {
    navigate("/home");
  };

  const [value, setValue] = useState(1);
  const [stateOpenKeys, setStateOpenKeys] = useState(["2", "23"]);
  const [selectedKeys, setSelectedKeys] = useState([]);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    );

    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          .filter((_, index) => index !== repeatIndex)
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      setStateOpenKeys(openKeys);
    }
  };

  const onSelect = ({ key }) => {
    setSelectedKeys([key]);
    setValue(Number(key));
  };

  return (
    <div className="pb-[50px]">
      <div className="text-black bg-white ">
        <div className="flex justify-between">
          <div className="text-black pt-[80px] pl-[11%] flex gap-3 text-[14px] cursor-pointer">
            <p onClick={handleHome}>Home /</p>
            <p onClick={handleCertificationCenter}>Certification Center /</p>
            <p className="text-[#787878]">Certification Fill Form</p>
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
          <h1>Certification Fill Form</h1>
        </div>
      </div>
      <div className="pl-[35%] pt-[50px] text-black">
        <div className="flex border p-[10px] rounded-sm shadow-md bg-white relative w-[550px] h-auto flex-col items-center">
          <div>
            <div className="text-2xl font-semibold pt-7 text-center">
              <p>Fill in before you start:</p>
            </div>
            <div className="flex flex-col gap-y-4 pt-5">
              <Input
                placeholder="Full Name"
                className="h-[35px] w-[450px] px-2 border border-gray-300 focus:border focus:border-black focus:outline-none"
              />
              <Input
                placeholder="Email Address"
                className="h-[35px] w-[450px] px-2 border border-gray-300 focus:border focus:border-black focus:outline-none"
              />
              <Input
                placeholder="Phone Number"
                className="h-[35px] w-[450px] px-2 border border-gray-300 focus:border focus:border-black focus:outline-none"
              />
            </div>
            <div className="pt-5 text-[18px]">
              <h2>Select Category</h2>
            </div>
            <div>
              <Radio.Group
                onChange={onChange}
                value={value}
                style={{ marginBottom: 20, backgroundColor: "red" }}
                className={value === 1 ? "radio-checked" : ""}
              >
                <Menu
                  mode="inline"
                  defaultSelectedKeys={["11"]}
                  selectedKeys={selectedKeys}
                  openKeys={stateOpenKeys}
                  onOpenChange={onOpenChange}
                  onSelect={onSelect}
                  style={{
                    width: 450,
                  }}
                  items={items.map((item) => ({
                    ...item,
                  }))}
                />
              </Radio.Group>
            </div>
            <div className="text-[14px] text-center pb-[20px] ">
              <p>
                By signing up, you agree to our
                <a className="text-[#ED2A26] px-1 hover:text-black hover:underline cursor-pointer">
                  Privacy Policy
                </a>{" "}
                and
                <a className="text-[#ED2A26] px-1 hover:text-black hover:underline cursor-pointer">
                  Terms and Conditions.
                </a>
              </p>
            </div>
            <div className="bg-[#ED2A26] text-center py-3 mt-5 text-white hover:bg-black">
              <button>Lets Go</button>
            </div>
            <div className="text-[14px] text-center pt-[50px] pb-[20px] ">
              <p>
                Please be ready to answer
                <a className="text-[#ED2A26] px-1  ">20 questions</a>
                and
                <a className="text-[#ED2A26] px-1">1 hours</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationFillForm;
