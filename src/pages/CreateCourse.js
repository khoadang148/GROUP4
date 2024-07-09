import React, { useState } from "react";
import {
  Checkbox,
  Divider,
  Dropdown,
  InputNumber,
  Modal,
  Space,
  Steps,
  Switch,
  Upload,
} from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faBars,
  faChartLine,
  faCircleInfo,
  faClapperboard,
  faFileCircleQuestion,
  faGear,
  faMoneyBill1,
  faPaperclip,
  faPlus,
  faTrashCan,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCircleCheck,
  faCircleDot,
  faCircleQuestion,
  faClipboard,
  faFileLines,
  faImage,
  faNewspaper,
  faPenToSquare,
  faPlusSquare,
} from "@fortawesome/free-regular-svg-icons";
import { DownOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import thumnail from "../assets/thumnail.png";
import { createCourse } from "../redux/actions/course.action";
import { useDispatch } from "react-redux";

const CreateCourse = () => {
  const [activeTab, setActiveTab] = useState("Basic");

  const Basic = () => {
  const [courseData, setCourseData] = useState({
    title: '',
    shortDescription: '',
    description: '',
    learnings: '',
    requirements: '',
    level: '',
    audioLanguage: '',
    closeCaption: '',
    category: ''
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({
      ...courseData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    dispatch(createCourse(courseData));
  };

  const items = [
    { label: 'Beginner', key: 'Beginner' },
    { label: 'Intermediate', key: 'Intermediate' },
    { label: 'Expert', key: 'Expert' },
  ];

  const ittems = [
    { label: 'English', key: 'English' },
    { label: 'Español', key: 'Español' },
    { label: 'Português', key: 'Português' },
    { label: '日本語', key: '日本語' },
    { label: 'Deutsch', key: 'Deutsch' },
    { label: 'Français', key: 'Français' },
    { label: 'Türkçe', key: 'Türkçe' },
    { label: 'हिन्दी', key: 'हिन्दी' },
    { label: 'Italiano', key: 'Italiano' },
    { label: 'Polski', key: 'Polski' },
    { label: 'ภาษาไทย', key: 'ภาษาไทย' },
    { label: 'Română', key: 'Română' },
    { label: 'Telugu', key: 'Telugu' },
    { label: 'मराठी', key: 'मराठी' },
  ];

  return (
    <div>
      <div className="flex gap-x-3">
        <FontAwesomeIcon icon={faCircleInfo} className="mt-[4px] text-[15px]" />
        <p className="text-[18px] font-semibold">Basic Information</p>
      </div>
      <Divider />
      <div>
        <div className="py-4 px-4 pb-10 bg-white">
          <div className="pl-5 pt-5 pr-5">
            <div>
              <p className="font-semibold text-[14px]">Course Title*</p>
              <input
                name="title"
                placeholder="Course title here"
                className="border border-gray-200 w-[100%] h-10 pl-5 font-normal"
                value={courseData.title}
                onChange={handleChange}
              />
              <p className="text-[12px] text-[#686F7A] pt-1">
                (Please make this a maximum of 100 characters and unique.)
              </p>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Short Description*</p>
              <input
                name="shortDescription"
                placeholder="Item description here..."
                className="border border-gray-200 w-[100%] h-[130px] pl-5 font-normal pb-[100px]"
                value={courseData.shortDescription}
                onChange={handleChange}
              />
              <p className="text-[12px] text-[#686F7A] pt-1">220 words</p>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Course Description*</p>
              <input
                name="description"
                placeholder="Item description here..."
                className="border border-gray-200 w-[100%] h-[130px] pl-5 font-normal pb-[100px]"
                value={courseData.description}
                onChange={handleChange}
              />
            </div>
            <div className="flex">
              <div className="pr-[30px]">
                <p className="font-semibold text-[14px]">
                  What will students learn in your course?*
                </p>
                <input
                  name="learnings"
                  className="border border-gray-200 w-[500px] h-[130px] pl-5 font-normal pb-[100px]"
                  value={courseData.learnings}
                  onChange={handleChange}
                />
                <p className="text-[11px] text-[#686F7A] pt-1">
                  Student will gain this skills, knowledge after completing
                  this course. (One per line).
                </p>
              </div>
              <div>
                <p className="font-semibold text-[14px]">Requirements*</p>
                <input
                  name="requirements"
                  className="border border-gray-200 w-[500px] h-[130px] pl-5 font-normal pb-[100px]"
                  value={courseData.requirements}
                  onChange={handleChange}
                />
                <p className="text-[11px] text-[#686F7A] pt-1">
                  What knowledge, technology, tools required by users to start
                  this course. (One per line).
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-[14px] pt-7 pl-2">Course Level*</p>
                <button className="border border-gray-200 w-[100%] h-[50px] font-normal text-[#48c790] hover:text-black">
                  <Dropdown
                    menu={{ items }}
                    trigger={['click']}
                    onClick={(e) => e.preventDefault()}
                  >
                    <Space>
                      <div className="gap-[330px] flex">
                        <p className="mt-[8px] text-[14px]">Nothing Selected</p>
                        <DownOutlined />
                      </div>
                    </Space>
                  </Dropdown>
                </button>
              </div>
              <div>
                <p className="font-semibold text-[14px] pt-7 pl-2">Audio Language*</p>
                <button className="border border-gray-200 w-[100%] h-[50px] font-normal text-[#48c790] hover:text-black">
                  <Dropdown
                    menu={{ ittems }}
                    trigger={['click']}
                    onClick={(e) => e.preventDefault()}
                  >
                    <Space>
                      <div className="gap-[360px] flex">
                        <p className="mt-[8px] text-[14px]">Select Audio</p>
                        <DownOutlined />
                      </div>
                    </Space>
                  </Dropdown>
                </button>
              </div>
              <div>
                <p className="font-semibold text-[14px] pt-7 pl-2">Close Caption*</p>
                <button className="border border-gray-200 w-[100%] h-[50px] font-normal text-[#48c790] hover:text-black">
                  <Dropdown
                    menu={{ ittems }}
                    trigger={['click']}
                    onClick={(e) => e.preventDefault()}
                  >
                    <Space>
                      <div className="gap-[330px] flex">
                        <p className="mt-[8px] text-[14px]">Select Caption</p>
                        <DownOutlined />
                      </div>
                    </Space>
                  </Dropdown>
                </button>
              </div>
              <div>
                <p className="font-semibold text-[14px] pt-7 pl-2">Course Category*</p>
                <button className="border border-gray-200 w-[100%] h-[50px] font-normal text-[#48c790] hover:text-black">
                  <Dropdown
                    menu={{ ittems }}
                    trigger={['click']}
                    onClick={(e) => e.preventDefault()}
                  >
                    <Space>
                      <div className="gap-[330px] flex">
                        <p className="mt-[8px] text-[14px]">Web Development</p>
                        <DownOutlined />
                      </div>
                    </Space>
                  </Dropdown>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="mt-10 py-3 px-6 bg-white text-[#48c790] border hover:bg-black hover:text-white"
        onClick={handleSubmit}
      >
        Next
      </button>
    </div>
  );
};

  const Curriculum = ({ sidebar }) => {
    const handlePrevious = () => {
      setActiveTab("Basic");
      setCurrent(0);
    };
    const handleNext = () => {
      setActiveTab("Media");
      setCurrent(2);
    };

    const [open, setOpen] = useState(false);
    const [openlecture, setOpenLecture] = useState(false);
    const [openquiz, setOpenQuiz] = useState(false);
    const [openassignment, setOpenAssignment] = useState(false);

    // New Section button popup
    const showModal = () => {
      setOpen(true);
    };
    const handleOk = (e) => {
      console.log(e);
      setOpen(false);
    };
    const handleCancel = (e) => {
      console.log(e);
      setOpen(false);
    };

    // Lecture button popup
    const showLecture = () => {
      setOpenLecture(true);
    };

    const handleOkLectture = (e) => {
      console.log(e);
      setOpenLecture(false);
    };

    const handleCancelLecture = (e) => {
      console.log(e);
      setOpenLecture(false);
    };

    //Quiz button group
    const showQuiz = () => {
      setOpenQuiz(true);
    };

    const handleOkQuiz = (e) => {
      console.log(e);
      setOpenQuiz(false);
    };

    const handleCancelQuiz = (e) => {
      console.log(e);
      setOpenQuiz(false);
    };

    //Assignment button group
    const showAssignment = () => {
      setOpenAssignment(true);
    };

    const handleOkAssignment = (e) => {
      console.log(e);
      setOpenAssignment(false);
    };

    const handleCancelAssignment = (e) => {
      console.log(e);
      setOpenAssignment(false);
    };

    const [activeTab3, setActiveTab3] = useState("Basic");
    const [activeTab5, setActiveTab5] = useState("Basic1");
    const [activeTab6, setActiveTab6] = useState("Assignment");

    const slideDownAnimation = {
      "@keyframes slideDown": {
        "0%": { transform: "translateY(-100%)", opacity: "0" },
        "100%": { transform: "translateY(0)", opacity: "1" },
      },
      animation: "slideDown 0.3s ease-out",
    };

    const Basic = () => {
      const [checkedd, setCheckedd] = useState(false);
      const onChangee = (checkedd) => {
        console.log(`switch to ${checkedd}`);
        setCheckedd(checkedd);
      };
      return (
        <div>
          <div className="-ml-[100px]">
            <div className="text-black ">
              <p className="font-semibold ">Lecture Title*</p>
              <input
                placeholder="Title here"
                className="px-3 py-4 h-[40px] w-[100%] border border-gray-200 "
              />
            </div>
            <div className="text-black mt-5">
              <p className="font-semibold ">Description*</p>
              <input className=" h-[130px] w-[100%] border border-gray-200 b-[40px] pb-[100px] pl-2" />
            </div>
          </div>
          <div className="flex -ml-[100px] mt-5">
            <p className="mr-4">Free Preview</p>
            <Switch
              defaultChecked={checkedd}
              onChange={onChangee}
              className="w-[10px] "
              style={{ backgroundColor: checkedd ? "#ED2A26" : "#CCCCCC " }}
            />
          </div>
        </div>
      );
    };
    const Video = () => {
      const HTML = () => {
        const props = {
          name: "file",
          action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
          headers: {
            authorization: "authorization-text",
          },
          onChange(info) {
            if (info.file.status !== "uploading") {
              console.log(info.file, info.fileList);
            }
            if (info.file.status === "done") {
              message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === "error") {
              message.error(`${info.file.name} file upload failed.`);
            }
          },
        };
        return (
          <div className="-ml-[40px]">
            <div className="flex ">
              <div className="  mt-7 bg-white w-[50%] text-center border-dashed border-2  border-gray-200 h-[170px] mr-5">
                <Upload {...props}>
                  <button className="border-red-500 font-semibold border px-5 py-2 mt-6 text-red-500 mb-5">
                    UPLOAD VIDEO
                  </button>
                </Upload>
                <p className="text-[15px] text-[#828181]">File Format: .mp4</p>
                <p className=" flex text-[15px] pl-[130px]">
                  Uploaded ID : <p className="font-semibold">12</p>
                </p>
              </div>
              <div className="  mt-7 bg-white w-[50%] text-center border-dashed border-2  border-gray-200 h-[170px]">
                <Upload {...props}>
                  <button className="border-red-500 font-semibold border px-5 py-2 mt-6 text-red-500 mb-5">
                    VIDEO POSTER
                  </button>
                </Upload>
                <p className="text-[15px] text-[#828181]">
                  Uploaded ID : preview.jpg
                </p>
                <p className=" flex text-[13px] pl-[50px] text-black">
                  Size: 590x300 pixels. Supports: jpg,jpeg, or png
                </p>
              </div>
            </div>
            <div className="mt-5">
              <p className="font-semibold ">Video Runtime - hh:mm:ss*</p>

              <input
                value={0}
                className="border bg-[#F7F7F7] w-[100px] h-[30px] pl-2"
              />
              <input
                value={11}
                className="border bg-[#F7F7F7] w-[100px] h-[30px] pl-2"
              />
              <input
                value={0}
                className="border bg-[#F7F7F7] w-[100px] h-[30px] pl-2"
              />
            </div>
          </div>
        );
      };
      const External = () => {
        return (
          <div className="pt-6 -ml-[20px]">
            <div>
              <p className="text-[14px] font-semibold">External URL*</p>
              <input
                placeholder="External Video URL"
                className="w-[100%] h-[40px]  text-[14px] pl-2 border border-gray-100"
              />
            </div>
            <div className="mt-5">
              <p className="font-semibold ">Video Runtime - hh:mm:ss*</p>

              <input
                value={0}
                className="border bg-[#F7F7F7] w-[100px] h-[30px] pl-2"
              />
              <input
                value={11}
                className="border bg-[#F7F7F7] w-[100px] h-[30px] pl-2"
              />
              <input
                value={0}
                className="border bg-[#F7F7F7] w-[100px] h-[30px] pl-2"
              />
            </div>
          </div>
        );
      };
      const YouTube = () => {
        return (
          <div className="pt-6 -ml-[20px]">
            <div>
              <p className="text-[14px] font-semibold">Youtube URL*</p>
              <input
                placeholder="YouTube Video URL"
                className="w-[100%] h-[40px]  text-[14px] pl-2 border border-gray-100"
              />
            </div>
            <div className="mt-5">
              <p className="font-semibold ">Video Runtime - hh:mm:ss*</p>

              <input
                value={0}
                className="border bg-[#F7F7F7] w-[100px] h-[30px] pl-2"
              />
              <input
                value={11}
                className="border bg-[#F7F7F7] w-[100px] h-[30px] pl-2"
              />
              <input
                value={0}
                className="border bg-[#F7F7F7] w-[100px] h-[30px] pl-2"
              />
            </div>
          </div>
        );
      };
      const Vimeo = () => {
        return (
          <div className="pt-6 -ml-[20px]">
            <div>
              <p className="text-[14px] font-semibold">Vimeo URL*</p>
              <input
                placeholder="Vimeo Video URL"
                className="w-[100%] h-[40px]  text-[14px] pl-2 border border-gray-100"
              />
            </div>
            <div className="mt-5">
              <p className="font-semibold ">Video Runtime - hh:mm:ss*</p>

              <input
                value={0}
                className="border bg-[#F7F7F7] w-[100px] h-[30px] pl-2"
              />
              <input
                value={11}
                className="border bg-[#F7F7F7] w-[100px] h-[30px] pl-2"
              />
              <input
                value={0}
                className="border bg-[#F7F7F7] w-[100px] h-[30px] pl-2"
              />
            </div>
          </div>
        );
      };
      const Embedded = () => {
        return (
          <div className="pt-6 -ml-[20px]">
            <div>
              <p className="text-[14px] font-semibold">Embedded Code*</p>
              <input
                placeholder="Place your embedded code herex"
                className="w-[100%] h-[130px] pb-[100px] text-[14px] pl-2 border border-gray-200"
              />
            </div>
            <div className="mt-5 ">
              <p className="font-semibold ">Video Runtime - hh:mm:ss*</p>

              <input
                value={0}
                className="border bg-[#F7F7F7] w-[100px] h-[30px] pl-2"
              />
              <input
                value={11}
                className="border bg-[#F7F7F7] w-[100px] h-[30px] pl-2"
              />
              <input
                value={0}
                className="border bg-[#F7F7F7] w-[100px] h-[30px] pl-2"
              />
            </div>
          </div>
        );
      };

      const [activeTab, setActiveTab4] = useState("HTML");

      return (
        <div className="-ml-[100px]">
          <div>
            <p>Select your preferred video type. (.mp4, YouTube, Vimeo etc.)</p>
            <div className="-ml-[80px]">
              <div>
                <div
                  className={`flex gap-5   ${sidebar ? "ml-10" : "ml-[80px]"}`}
                >
                  <div className="bg-white">
                    <button
                      className={`text-black font-medium text-[14px] b px-5 py-3 border border-gray-200 ${
                        activeTab === "HTML" ? "bg-red-600 text-white" : ""
                      }`}
                      onClick={() => setActiveTab4("HTML")}
                    >
                      HTML5(mp4)
                    </button>
                  </div>
                  <div className="bg-white">
                    <button
                      className={`text-black font-medium text-[14px] b px-5 py-3 border border-gray-200 ${
                        activeTab === "External" ? "bg-red-600 text-white" : ""
                      }`}
                      onClick={() => setActiveTab4("External")}
                    >
                      External URL
                    </button>
                  </div>
                  <div className="bg-white">
                    <button
                      className={`text-black font-medium text-[14px]  px-5 py-3 border border-gray-200 ${
                        activeTab === "YouTube" ? "bg-red-600 text-white" : ""
                      }`}
                      onClick={() => setActiveTab4("YouTube")}
                    >
                      YouTube
                    </button>
                  </div>

                  <div className="bg-white">
                    <button
                      className={`text-black  font-medium text-[14px]  px-5 py-3 border border-gray-200 ${
                        activeTab === "Vimeo" ? "bg-red-600 text-white" : ""
                      }`}
                      onClick={() => setActiveTab4("Vimeo")}
                    >
                      Vimeo
                    </button>
                  </div>

                  <div className="bg-white">
                    <button
                      className={`text-black  font-medium text-[14px]  px-5 py-3 border border-gray-200 ${
                        activeTab === "Embedded" ? "bg-red-600 text-white" : ""
                      }`}
                      onClick={() => setActiveTab4("Embedded")}
                    >
                      Embedded
                    </button>
                  </div>
                </div>
              </div>
              <div className={`mt-4 ${sidebar ? "ml-28" : "ml-[100px]"}`}>
                {activeTab === "HTML" && <HTML />}
                {activeTab === "External" && <External />}
                {activeTab === "YouTube" && <YouTube />}
                {activeTab === "Vimeo" && <Vimeo />}
                {activeTab === "Embedded" && <Embedded />}
              </div>
            </div>
          </div>
        </div>
      );
    };
    const Attachments = () => {
      const props = {
        name: "file",
        action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
        headers: {
          authorization: "authorization-text",
        },
        onChange(info) {
          if (info.file.status !== "uploading") {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === "done") {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === "error") {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };
      return (
        <div className="-ml-[100px]">
          <div className="  mt-7 bg-white w-[100%] text-center border-dashed border-2  border-gray-200 h-[170px] mr-5 h-auto">
            <Upload {...props}>
              <button className="border-red-500 font-semibold border px-5 py-2 mt-6 text-red-500 mb-5">
                ATTACHMENT
              </button>
            </Upload>
            <p className="text-[15px] text-[#828181]">
              Supports: jpg, jpeg, png, pdf or .zip
            </p>
            <div className="bg-[#F7F7F7] h-[50px] pt-4 font-semibold text-[15px] w-[95%] ml-4  flex ">
              <p className="text-[15px] pl-2">Uploaded ID: 12</p>
              <FontAwesomeIcon
                icon={faTrashCan}
                className=" text-[#AFAFAF] cursor-pointer pl-[500px] pb-[100px]"
              />
            </div>
            <div className="bg-[#F7F7F7] h-[50px] pt-4 font-semibold text-[15px] w-[95%] ml-4  flex my-3">
              <p className="text-[15px] pl-2">Uploaded ID: 12</p>
              <FontAwesomeIcon
                icon={faTrashCan}
                className=" text-[#AFAFAF] cursor-pointer pl-[500px] pb-[100px]"
              />
            </div>
            <div className="bg-[#F7F7F7] h-[50px] pt-4 font-semibold text-[15px] w-[95%] ml-4  flex mb-3">
              <p className="text-[15px] pl-2">Uploaded ID: 12</p>
              <FontAwesomeIcon
                icon={faTrashCan}
                className=" text-[#AFAFAF] cursor-pointer pl-[500px] pb-[100px]"
              />
            </div>
          </div>
        </div>
      );
    };

    const Basic1 = () => {
      return (
        <div>
          <div className="-ml-[100px] ">
            <div className="text-black ">
              <p className="font-semibold ">Lecture Title*</p>
              <input
                placeholder="Title here"
                className="px-3 py-4 h-[40px] w-[100%] border border-gray-200 "
              />
            </div>
            <div className="text-black mt-5">
              <p className="font-semibold ">Description*</p>
              <input className=" h-[130px] w-[100%] border border-gray-200 b-[40px] pb-[100px] pl-2" />
            </div>
          </div>
        </div>
      );
    };

    const Question = () => {
      return (
        <div className="-ml-[100px] ">
          <div className="w-[100%] h-[45px] bg-red-600 text-white hover:bg-black ">
            <button className="pl-[300px] pt-3 font-semibold">
              <FontAwesomeIcon icon={faPlus} className="mx-3" />
              Add Question
            </button>
          </div>
          <div className="mt-5">
            <div className="bg-[#F7F7F7] h-[50px] pt-4 font-semibold text-[15px] w-[100%] flex ">
              <FontAwesomeIcon icon={faCircleDot} className="pt-1 pl-2" />
              <p className="text-[15px] pl-2">Question Title</p>
            </div>
            <div className="bg-[#F7F7F7] h-[50px] pt-4 font-semibold text-[15px] w-[100%] flex my-3">
              <FontAwesomeIcon icon={faCircleCheck} className="pt-1 pl-2" />
              <p className="text-[15px] pl-2">Question Title</p>
            </div>
            <div className="bg-[#F7F7F7] h-[50px] pt-4 font-semibold text-[15px] w-[100%] flex mb-3">
              <FontAwesomeIcon icon={faPenToSquare} className="pt-1 pl-2" />
              <p className="text-[15px] pl-2">Question Title</p>
            </div>
            <div className="bg-[#F7F7F7] h-[50px] pt-4 font-semibold text-[15px] w-[100%] flex mb-3">
              <FontAwesomeIcon icon={faFileLines} className="pt-1 pl-2" />
              <p className="text-[15px] pl-2">Question Title</p>
            </div>
          </div>
        </div>
      );
    };

    const Setting = () => {
      const [checked, setChecked] = useState(false);
      const onChange = (checked) => {
        console.log(`switch to ${checked}`);
        setChecked(checked);
      };
      const [checkedd, setCheckedd] = useState(false);
      const onChangee = (checkedd) => {
        console.log(`switch to ${checkedd}`);
        setCheckedd(checkedd);
      };
      const [keyboard, setKeyboard] = useState(true);
      return (
        <div className="-ml-[100px] h-auto">
          <div className="text-black ">
            <p className="font-semibold text-[17px] ">Gradable</p>
            <div>
              <div className="flex">
                <Switch
                  defaultChecked={checked}
                  onChange={onChange}
                  className="w-[10px] "
                  style={{ backgroundColor: checked ? "#ED2A26" : "#CCCCCC " }}
                />
                <p className="font-semibold ml-3">Quiz Gradable</p>
              </div>
              <p className="text-[13px] text-[#8a8787]">
                If this quiz test affect on the students grading system for this
                course.
              </p>
            </div>
          </div>
          <div className="text-black mt-3">
            <p className="font-semibold text-[17px]">Remaining time display</p>
            <div>
              <div className="flex">
                <Switch
                  defaultChecked={checkedd}
                  onChange={onChangee}
                  className="w-[10px] "
                  style={{ backgroundColor: checkedd ? "#ED2A26" : "#CCCCCC " }}
                />
                <p className="font-semibold ml-3">Show Time</p>
              </div>
              <p className="text-[13px] text-[#8a8787]">
                By enabling this option, quiz taker will show remaining time
                during attempt.
              </p>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="w-[30.3%] mr-[50px]">
              <p className="text-[15px] font-semibold">Time Limit*</p>
              <div className="flex">
                <Space>
                  <InputNumber
                    min={-100}
                    max={10}
                    keyboard={keyboard}
                    defaultValue={0}
                    className="w-[150px] h-[40px] border border-gray-200 pl-2 pt-1 focus:border-red-500"
                  />
                </Space>
                <p className="px-4 py-[9px] mt-4 bg-[#F7F7F7]">Minutes</p>
              </div>
              <p className="text-[11px] text-[#a0a0a0]">
                Set zero to disable time limit.
              </p>
            </div>
            <div className="w-[30.3%] mr-[50px]">
              <p className="text-[15px] font-semibold">Passing Score(%)*</p>
              <div className="flex mb-4">
                <Space>
                  <InputNumber
                    min={0}
                    max={10}
                    keyboard={keyboard}
                    className="w-[200px] h-[40px] border border-gray-200 pl-2 pt-1 focus:border-red-500"
                  />
                </Space>
              </div>
              <p className="text-[11px] text-[#a0a0a0 ]">
                Student have to collect this score in percent for the pass this
                quiz
              </p>
            </div>
            <div className="w-[30.3%]">
              <p className="text-[15px] font-semibold">Questions Limit*</p>
              <div className="flex mb-4">
                <Space>
                  <InputNumber
                    min={0}
                    max={10}
                    keyboard={keyboard}
                    className="w-[200px] h-[40px] border border-gray-200 pl-2 pt-1 focus:border-red-500"
                  />
                </Space>
              </div>
              <p className="text-[11px] text-[#a0a0a0 ]">
                The number of questions student have to answer in this quiz.
              </p>
            </div>
          </div>
        </div>
      );
    };

    const Assignment = () => {
      const props = {
        name: "file",
        action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
        headers: {
          authorization: "authorization-text",
        },
        onChange(info) {
          if (info.file.status !== "uploading") {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === "done") {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === "error") {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };
      const [keyboard, setKeyboard] = useState(true);
      const items = [
        {
          label: <a href="https://www.antgroup.com">Weeks</a>,
          key: "0",
        },
        {
          label: <a href="https://www.aliyun.com">Days</a>,
          key: "1",
        },
        {
          label: <a href="https://www.aliyun.com">Hours</a>,
          key: "2",
        },
      ];
      return (
        <div className="-ml-[100px] h-auto">
          <div>
            <div className="text-black ">
              <p className="font-semibold ">Lecture Title*</p>
              <input
                placeholder="Title here"
                className="px-3 py-4 h-[40px] w-[100%] border border-gray-200 "
              />
            </div>
            <div className="text-black mt-5">
              <p className="font-semibold ">Description*</p>
              <input className=" h-[130px] w-[100%] border border-gray-200 b-[40px] pb-[100px] pl-2" />
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div>
              <div>
                <p className="font-semibold">Time Duration*</p>
              </div>
              <div className="flex">
                <div className="mr-3">
                  <Space>
                    <InputNumber
                      min={-100}
                      max={10}
                      keyboard={keyboard}
                      defaultValue={0}
                      className="w-[116px] h-[40px] border border-gray-200 pl-2 pt-1 focus:border-red-500 "
                    />
                  </Space>
                </div>
                <div className="mt-[10px]">
                  <Dropdown
                    className="px-5 py-2 w-[140px] h-[40px] border border-gray-200 "
                    menu={{
                      items,
                    }}
                    trigger={["click"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        Select
                        <DownOutlined />
                      </Space>
                    </a>
                  </Dropdown>
                </div>
              </div>
              <p className="text-[11px] mt-2 text-[#848484]">
                Assignment time duration, set 0 for no limit.
              </p>
            </div>
            <div className="mx-3">
              <div>
                <p className="font-semibold">Total Number*</p>
              </div>
              <div>
                <Space>
                  <InputNumber
                    min={-100}
                    max={10}
                    keyboard={keyboard}
                    defaultValue={10}
                    className="w-[230px] h-[40px] border border-gray-200 pl-2 pt-1 focus:border-red-500 "
                  />
                </Space>
              </div>
              <p className="text-[12px] mt-2 text-[#848484]">
                Maximum points a student can score
              </p>
            </div>
            <div className="mr-[500px]">
              <div>
                <p className="font-semibold">Minimum Pass Number*</p>
              </div>
              <div>
                <Space>
                  <InputNumber
                    min={-100}
                    max={10}
                    keyboard={keyboard}
                    defaultValue={10}
                    className="w-[230px] h-[40px] border border-gray-200 pl-2 pt-1 focus:border-red-500 "
                  />
                </Space>
              </div>
              <p className="text-[12px] mt-2 text-[#848484]">
                Minimum points required for the student to pass this assignment
              </p>
            </div>
          </div>
          <Divider />
          <div className="flex">
            <div className="mr-3">
              <div className="mt-3">
                <p>Upload attachment limit*</p>
              </div>
              <div>
                <input
                  value={1}
                  className=" px-3 py-5 w-[350px] h-[40px] border border-gray-200"
                />
              </div>
              <p className="text-[12px] mt-2 text-[#848484]">
                Maximum attachment size limit
              </p>
            </div>
            <div>
              <div className="mt-3">
                <p>Maximum attachment size limit</p>
              </div>
              <div>
                <input
                  value={1}
                  className=" px-3 py-5 w-[350px] h-[40px] border border-gray-200"
                />
              </div>
              <p className="text-[12px] mt-2 text-[#848484]">
                Define maximum attachment size in MB
              </p>
            </div>
          </div>
          <div>
            <div className="mb-4">
              <div className="  mt-7 bg-white w-[100%] text-center border-dashed border-2  border-gray-200 h-[170px] mr-5 h-auto">
                <Upload {...props}>
                  <button className="border-red-500 font-semibold border px-5 py-2 mt-6 text-red-500 mb-5">
                    ATTACHMENT
                  </button>
                </Upload>
                <p className="text-[15px] text-[#828181]">
                  Supports: jpg, jpeg, png, pdf or .zip
                </p>
                <div className="bg-[#F7F7F7] h-[50px] pt-4 font-semibold text-[15px] w-[95%] ml-4  flex ">
                  <p className="text-[15px] pl-2">Uploaded ID: 12</p>
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    className=" text-[#AFAFAF] cursor-pointer pl-[500px] pb-[100px]"
                  />
                </div>
                <div className="bg-[#F7F7F7] h-[50px] pt-4 font-semibold text-[15px] w-[95%] ml-4  flex my-3">
                  <p className="text-[15px] pl-2">Uploaded ID: 12</p>
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    className=" text-[#AFAFAF] cursor-pointer pl-[500px] pb-[100px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

    return (
      <div className="h-auto pb-[50px]">
        <div className="flex gap-x-3">
          <FontAwesomeIcon
            icon={faNewspaper}
            className="mt-[4px] text-[15px]"
          />
          <p className="text-[18px] font-semibold">Curriculum</p>
        </div>
        <Divider className="mt-1" />
        <div>
          <div className="w-[100%] text-[20px] font-semibold h-[75px] px-4 py-4 bg-white border border-gray-200">
            <FontAwesomeIcon icon={faBars} className="px-2" />
            Curriculum
            <button
              className="ml-[800px] text-[15px] py-3 px-5 bg-red-500 text-white  hover:bg-black  "
              onClick={showModal}
            >
              New section
            </button>
            <Modal
              className="mr-[550px] "
              title="New Section"
              open={open}
              onOk={handleOk}
              onCancel={handleCancel}
              okText="Add New Section"
              okButtonProps={{
                className:
                  "bg-red-500 text-white pb-5 px-4 text-center hover:bg-black",
                disabled: false,
              }}
              cancelButtonProps={{
                className: "bg-gray-500 text-white pb-5 px-4 text-center",
                disabled: false,
              }}
              modalRender={(node) => (
                <div
                  className=" items-center h-full w-[800px] "
                  style={slideDownAnimation}
                >
                  {node}
                </div>
              )}
            >
              <div>
                <Divider />
                <div className="pt-1">
                  <p>Section Name*</p>
                  <input
                    placeholder="Section title here"
                    className="w-[97%] border border-gray-200 h-[40px] pl-2"
                  />
                </div>
                <Divider />
              </div>
            </Modal>
          </div>
        </div>
        <div className="mt-10 bg-white  px-4 py-4 border border-gray-200 h-[31%]">
          <div className="w-[100%] flex text-[15px] font-semibold   ">
            <FontAwesomeIcon icon={faBars} className="px-2" />
            Introduction
            <div className="ml-[900px]">
              <FontAwesomeIcon
                icon={faPenToSquare}
                className=" px-4 text-[#AFAFAF] cursor-pointer "
              />
              <FontAwesomeIcon
                icon={faTrashCan}
                className=" text-[#AFAFAF] cursor-pointer "
              />
            </div>
          </div>
          <Divider />
          <div className="bg-[#F7F7F7] h-[50px] pt-4 font-semibold text-[15px] ">
            <FontAwesomeIcon icon={faClipboard} className="px-4" />
            Lecture Title
          </div>
          <div className="bg-[#F7F7F7] h-[50px] pt-4 font-semibold text-[15px] my-3">
            <FontAwesomeIcon icon={faFileLines} className="px-4" />
            Assignment Title
          </div>
          <div className="bg-[#F7F7F7] h-[50px] pt-4 font-semibold text-[15px] ">
            <FontAwesomeIcon icon={faBars} className="px-4" />
            Quiz Title
          </div>
        </div>
        <div className="bg-black h-[50px]">
          <div className="flex">
            <button
              className=" h-[50px] font-semibold text-[15px] text-white "
              onClick={showLecture}
            >
              <FontAwesomeIcon icon={faPlusSquare} className="px-2" />
              Lecture
            </button>
            <Modal
              className="mr-[650px] "
              title="Add Lecture"
              open={openlecture}
              onOk={handleOkLectture}
              onCancel={handleCancelLecture}
              okText="Add New Section"
              okButtonProps={{
                className:
                  "bg-red-500 text-white pb-5 px-4 text-center hover:bg-black",
                disabled: false,
              }}
              cancelButtonProps={{
                className: "bg-gray-500 text-white pb-5 px-4 text-center",
                disabled: false,
              }}
              modalRender={(node) => (
                <div
                  className=" items-center h-full w-[800px]"
                  style={slideDownAnimation}
                >
                  {node}
                </div>
              )}
            >
              <div>
                <Divider />
                <div className="pt-1 ">
                  <div className="bg-white pt-5 px-5 h-auto ">
                    <div className="bg-[#F3F3F3] border ">
                      <button
                        className={`text-black  font-medium text-[14px] px-3 py-3 w-[33.3%]  ${
                          activeTab3 === "Basic" ? "bg-red-600 text-white" : ""
                        }`}
                        onClick={() => setActiveTab3("Basic")}
                      >
                        <FontAwesomeIcon
                          icon={faFileLines}
                          className="pr-[5px]"
                        />
                        Basic
                      </button>
                      <button
                        className={`text-black font-medium text-[14px] px-3 py-3 w-[33.3%]  ${
                          activeTab3 === "Video" ? "bg-red-600 text-white" : ""
                        }`}
                        onClick={() => setActiveTab3("Video")}
                      >
                        <FontAwesomeIcon icon={faVideo} className="pr-[5px]" />
                        Video
                      </button>
                      <button
                        className={`text-black font-medium text-[14px] px-3 py-3 w-[33.3%]  ${
                          activeTab3 === "Attachments"
                            ? "bg-red-600 text-white"
                            : ""
                        }`}
                        onClick={() => setActiveTab3("Attachments")}
                      >
                        <FontAwesomeIcon
                          icon={faPaperclip}
                          className="pr-[5px]"
                        />
                        Attachments
                      </button>
                    </div>
                    <div className={`mt-4 ${sidebar ? "ml-28" : "ml-[100px]"}`}>
                      {activeTab3 === "Basic" && <Basic />}
                      {activeTab3 === "Video" && <Video />}
                      {activeTab3 === "Attachments" && <Attachments />}
                    </div>
                  </div>
                </div>
                <Divider />
              </div>
            </Modal>
            <button
              className=" h-[50px] font-semibold text-[15px]  mx-5 text-white"
              onClick={showQuiz}
            >
              <FontAwesomeIcon icon={faPlusSquare} className="px-2" />
              Quiz
            </button>
            <Modal
              className="mr-[650px] "
              title="Add Quiz"
              open={openquiz}
              onOk={handleOkQuiz}
              onCancel={handleCancelQuiz}
              okText="Add New Section"
              okButtonProps={{
                className:
                  "bg-red-500 text-white pb-5 px-4 text-center hover:bg-black",
                disabled: false,
              }}
              cancelButtonProps={{
                className: "bg-gray-500 text-white pb-5 px-4 text-center",
                disabled: false,
              }}
              modalRender={(node) => (
                <div
                  className=" items-center h-full w-[800px]"
                  style={slideDownAnimation}
                >
                  {node}
                </div>
              )}
            >
              <div>
                <Divider />
                <div className="pt-1 ">
                  <div className="bg-white pt-5 px-5 h-auto ">
                    <div className="bg-[#F3F3F3] border ">
                      <button
                        className={`text-black  font-medium text-[14px] px-3 py-3 w-[33.3%]   ${
                          activeTab5 === "Basic1" ? "bg-red-600 text-white" : ""
                        }`}
                        onClick={() => setActiveTab5("Basic1")}
                      >
                        <FontAwesomeIcon
                          icon={faFileLines}
                          className="pr-[5px]"
                        />
                        Basic
                      </button>
                      <button
                        className={`text-black font-medium text-[14px] px-3 py-3 w-[33.3%]  ${
                          activeTab5 === "Question"
                            ? "bg-red-600 text-white"
                            : ""
                        }`}
                        onClick={() => setActiveTab5("Question")}
                      >
                        <FontAwesomeIcon
                          icon={faCircleQuestion}
                          className="pr-[5px]"
                        />
                        Question
                      </button>
                      <button
                        className={`text-black font-medium text-[14px] px-3 py-3 w-[33.3%]  ${
                          activeTab5 === "Setting"
                            ? "bg-red-600 text-white"
                            : ""
                        }`}
                        onClick={() => setActiveTab5("Setting")}
                      >
                        <FontAwesomeIcon icon={faGear} className="pr-[5px]" />
                        Setting
                      </button>
                    </div>
                    <div className={`mt-4 ${sidebar ? "ml-28" : "ml-[100px]"}`}>
                      {activeTab5 === "Basic1" && <Basic1 />}
                      {activeTab5 === "Question" && <Question />}
                      {activeTab5 === "Setting" && <Setting />}
                    </div>
                  </div>
                </div>
                <Divider />
              </div>
            </Modal>
            <button
              className=" h-[50px] font-semibold text-[15px] text-white "
              onClick={showAssignment}
            >
              <FontAwesomeIcon icon={faPlusSquare} className="px-2" />
              Assignment
            </button>
            <Modal
              className="mr-[650px] "
              title="Add Assignment"
              open={openassignment}
              onOk={handleOkAssignment}
              onCancel={handleCancelAssignment}
              okText="Add New Section"
              okButtonProps={{
                className:
                  "bg-red-500 text-white pb-5 px-4 text-center hover:bg-black",
                disabled: false,
              }}
              cancelButtonProps={{
                className: "bg-gray-500 text-white pb-5 px-4 text-center",
                disabled: false,
              }}
              modalRender={(node) => (
                <div
                  className=" items-center h-full w-[800px]"
                  style={slideDownAnimation}
                >
                  {node}
                </div>
              )}
            >
              <div>
                <Divider />
                <div>
                  <div className="bg-white  px-5 h-auto ">
                    <div className={`mt-4 ${sidebar ? "ml-28" : "ml-[100px]"}`}>
                      {activeTab6 === "Assignment" && <Assignment />}
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        </div>
        <div className="mt-[30px]">
          <button
            className="py-3 px-4 bg-white text-[#48c790] border hover:bg-black hover:text-white mr-[950px] "
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button
            className="py-3 px-7 bg-white text-[#48c790] border hover:bg-black hover:text-white "
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    );
  };

  const Media = ({ sidebar }) => {
    const handlePrevious = () => {
      setActiveTab("Currilum");
      setCurrent(1);
    };
    const handleNext = () => {
      setActiveTab("Price");
      setCurrent(3);
    };

    const props = {
      name: "file",
      action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
      headers: {
        authorization: "authorization-text",
      },
      onChange(info) {
        if (info.file.status !== "uploading") {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === "done") {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === "error") {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };
    const [activeTab, setActiveTab2] = useState("HTML");
    const HTML = () => {
      return (
        <div className="pt-5 -ml-[20px]">
          <div className=" pb-6 bg-white w-[480px] h-[150px] text-center pt-3">
            <Upload {...props}>
              <button className="border-red-500 font-semibold border px-5 py-2 mt-5 text-red-500 shadow-md">
                UPLOAD VIDEO
              </button>
            </Upload>
            <p className="pt-4 text-[14px]">File Format: .mp4</p>
          </div>
          <div>
            <p className="text-[14px] font-semibold mt-9">Course thumbnail*</p>
            <img
              src={thumnail}
              alt="Course thumbnail"
              className="w-[500px] h-[280px] object-cover"
            />
            <div className=" pb-6 bg-white w-[500px] text-center">
              <Upload {...props}>
                <button className="border-red-500 font-semibold border px-5 py-2 mt-5 text-red-500">
                  CHOOSE THUMBNAIL
                </button>
              </Upload>
              <p className="pt-4 text-[13px]">
                Size: 590x300 pixels. Supports: jpg,jpeg, or png
              </p>
            </div>
          </div>
        </div>
      );
    };

    const External = () => {
      return (
        <div className="pt-6 -ml-[20px]">
          <div>
            <p className="text-[14px] font-semibold">External URL*</p>
            <input
              placeholder="External Video URL"
              className="w-[100%] h-[40px]  text-[14px] pl-2 border border-gray-100"
            />
          </div>
          <div>
            <p className="text-[14px] font-semibold mt-9">Course thumbnail*</p>
            <img
              src={thumnail}
              alt="Course thumbnail"
              className="w-[500px] h-[280px] object-cover"
            />
            <div className=" pb-6 bg-white w-[500px] text-center">
              <Upload {...props}>
                <button className="border-red-500 font-semibold border px-5 py-2 mt-5 text-red-500">
                  CHOOSE THUMBNAIL
                </button>
              </Upload>
              <p className="pt-4 text-[13px]">
                Size: 590x300 pixels. Supports: jpg,jpeg, or png
              </p>
            </div>
          </div>
        </div>
      );
    };

    const Youtube = () => {
      return (
        <div className="pt-6 -ml-[20px]">
          <div>
            <p className="text-[14px] font-semibold">Youtube URL*</p>
            <input
              placeholder="External Video URL"
              className="w-[100%] h-[40px]  text-[14px] pl-2 border border-gray-100"
            />
          </div>
          <div>
            <p className="text-[14px] font-semibold mt-9">Course thumbnail*</p>
            <img
              src={thumnail}
              alt="Course thumbnail"
              className="w-[500px] h-[280px] object-cover"
            />
            <div className=" pb-6 bg-white w-[500px] text-center">
              <Upload {...props}>
                <button className="border-red-500 font-semibold border px-5 py-2 mt-5 text-red-500">
                  CHOOSE THUMBNAIL
                </button>
              </Upload>
              <p className="pt-4 text-[13px]">
                Size: 590x300 pixels. Supports: jpg,jpeg, or png
              </p>
            </div>
          </div>
        </div>
      );
    };

    const Vimeo = () => {
      return (
        <div className="pt-6 -ml-[20px]">
          <div>
            <p className="text-[14px] font-semibold">Vimeo URL*</p>
            <input
              placeholder="External Video URL"
              className="w-[100%] h-[40px]  text-[14px] pl-2 border border-gray-100"
            />
          </div>
          <div>
            <p className="text-[14px] font-semibold mt-9">Course thumbnail*</p>
            <img
              src={thumnail}
              alt="Course thumbnail"
              className="w-[500px] h-[280px] object-cover"
            />
            <div className=" pb-6 bg-white w-[500px] text-center">
              <Upload {...props}>
                <button className="border-red-500 font-semibold border px-5 py-2 mt-5 text-red-500">
                  CHOOSE THUMBNAIL
                </button>
              </Upload>
              <p className="pt-4 text-[13px]">
                Size: 590x300 pixels. Supports: jpg,jpeg, or png
              </p>
            </div>
          </div>
        </div>
      );
    };

    const Embedded = () => {
      return (
        <div className="pt-6 -ml-[20px]">
          <div>
            <p className="text-[14px] font-semibold">Embedded Code*</p>
            <input
              placeholder="Place your embedded code herex"
              className="w-[100%] h-[130px] pb-[100px] text-[14px] pl-2"
            />
          </div>
          <div>
            <p className="text-[14px] font-semibold mt-9">Course thumbnail*</p>
            <img
              src={thumnail}
              alt="Course thumbnail"
              className="w-[500px] h-[280px] object-cover"
            />
            <div className=" pb-6 bg-white w-[500px] text-center">
              <Upload {...props}>
                <button className="border-red-500 font-semibold border px-5 py-2 mt-5 text-red-500">
                  CHOOSE THUMBNAIL
                </button>
              </Upload>
              <p className="pt-4 text-[13px]">
                Size: 590x300 pixels. Supports: jpg,jpeg, or png
              </p>
            </div>
          </div>
        </div>
      );
    };

    return (
      <div className="h-[900px]">
        <div className="flex gap-x-3">
          <FontAwesomeIcon icon={faImage} className="mt-[4px] text-[15px]" />
          <p className="text-[18px] font-semibold">Media</p>
        </div>
        <Divider />
        <div>
          <p className="text-[#7c7c7c] text-[13px]   ">
            Intro Course overview provider type. (.mp4, YouTube, Vimeo etc.)
          </p>
        </div>
        <div className="-ml-[80px]">
          <div>
            <div className={`flex gap-5   ${sidebar ? "ml-10" : "ml-[80px]"}`}>
              <div className="bg-white">
                <button
                  className={`text-black font-medium text-[14px] b px-5 py-3 ${
                    activeTab === "HTML" ? "bg-red-600 text-white" : ""
                  }`}
                  onClick={() => setActiveTab2("HTML")}
                >
                  HTML5(mp4)
                </button>
              </div>
              <div className="bg-white">
                <button
                  className={`text-black font-medium text-[14px]  px-5 py-3 ${
                    activeTab === "External" ? "bg-red-600 text-white" : ""
                  }`}
                  onClick={() => setActiveTab2("External")}
                >
                  External URL
                </button>
              </div>
              <div className="bg-white">
                <button
                  className={`text-black font-medium text-[14px]  px-5 py-3 ${
                    activeTab === "Youtube" ? "bg-red-600 text-white" : ""
                  }`}
                  onClick={() => setActiveTab2("Youtube")}
                >
                  Youtube
                </button>
              </div>

              <div className="bg-white">
                <button
                  className={`text-black font-medium text-[14px]  px-5 py-3 ${
                    activeTab === "Vimeo" ? "bg-red-600 text-white" : ""
                  }`}
                  onClick={() => setActiveTab2("Vimeo")}
                >
                  Vimeo
                </button>
              </div>

              <div className="bg-white">
                <button
                  className={`text-black  font-medium text-[14px]  px-5 py-3 ${
                    activeTab === "Embedded" ? "bg-red-600 text-white" : ""
                  }`}
                  onClick={() => setActiveTab2("Embedded")}
                >
                  Embedded
                </button>
              </div>
            </div>
          </div>
          <div className={`mt-4 ${sidebar ? "ml-28" : "ml-[100px]"}`}>
            {activeTab === "HTML" && <HTML />}
            {activeTab === "External" && <External />}
            {activeTab === "Youtube" && <Youtube />}
            {activeTab === "Vimeo" && <Vimeo />}
            {activeTab === "Embedded" && <Embedded />}
          </div>
        </div>
        <div className="mt-[60px]">
          <button
            className="py-3 px-4 bg-white text-[#48c790] border hover:bg-black hover:text-white mr-[850px] "
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button
            className="py-3 px-7 bg-white text-[#48c790] border hover:bg-black hover:text-white "
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    );
  };

  const Price = ({ sidebar }) => {
    const handlePrevious = () => {
      setActiveTab("Media");
      setCurrent(2);
    };
    const handleNext = () => {
      setActiveTab("Publish");
      setCurrent(4);
    };
    const [activeTab, setActiveTab1] = useState("Free");

    const Free = () => {
      const [checked, setChecked] = useState(false);
      const onChange = (checked) => {
        console.log(`switch to ${checked}`);
        setChecked(checked);
      };
      const [checkedd, setCheckedd] = useState(false);
      const onChangee = (checkedd) => {
        console.log(`switch to ${checkedd}`);
        setCheckedd(checkedd);
      };
      return (
        <div className="   bg-white ml-[-120px] h-[200px] w-[1000px]">
          <div className="ml-[400px] pt-5">
            <div className="flex gap-3 ">
              <Switch
                defaultChecked={checked}
                onChange={onChange}
                className="w-[10px] "
                style={{ backgroundColor: checked ? "#ED2A26" : "#CCCCCC " }}
              />
              <div className="flex flex-col text-[12px] pt-1 font-semibold">
                <h3>Require Log In</h3>
              </div>
            </div>
            <div className="flex gap-3 mt-3">
              <Switch
                defaultChecked={checkedd}
                onChange={onChangee}
                className="w-[10px] "
                style={{ backgroundColor: checkedd ? "#ED2A26" : "#CCCCCC " }}
              />
              <div className="flex flex-col text-[12px] pt-1 font-semibold">
                <h3>Require Enroll</h3>
              </div>
            </div>
            <div className="-ml-[360px] text-[#606060] mt-10">
              <p>
                If the course is free, if student require to enroll your course,
                if not required enroll, if students required sign in to your
                website to take<p className="text-center">this course.</p>
              </p>
            </div>
          </div>
        </div>
      );
    };
    const Paid = () => {
      return (
        <div className="h-[300px]">
          <div className="-ml-[100px]">
            <p className="text-[14px] font-semibold">Regular Price*</p>
            <div className="flex items-center ">
              <input
                placeholder="$0"
                className="border w-[360px] pl-3 h-10 object-cover"
              />
              <p className="bg-[#F7F7F7]  ml-[-45px] mt-2 p-2 rounded-sm text-[12px] font-bold">
                USD
              </p>
            </div>
          </div>
          <div className="-ml-[100px] mt-5">
            <p className="text-[14px] font-semibold">Discount Price*</p>
            <div className="flex items-center ">
              <input
                placeholder="$0"
                className="border w-[360px] pl-3 h-10 object-cover"
              />
              <p className="bg-[#F7F7F7]  ml-[-45px] mt-2 p-2 rounded-sm text-[12px] font-bold">
                USD
              </p>
            </div>
          </div>
        </div>
      );
    };

    return (
      <div>
        <div className="flex gap-x-3">
          <FontAwesomeIcon
            icon={faMoneyBill1}
            className="mt-[2px] text-[20px]"
          />
          <p className="text-[18px] font-semibold">Price</p>
        </div>
        <Divider />
        <div className="  w-[1000px] h-[380px]">
          <div className="bg-white pt-5 px-5 h-[300px] border">
            <div className="bg-[#F3F3F3] border ">
              <button
                className={`text-black  font-medium text-[14px] px-3 py-3 w-[50%]  ${
                  activeTab === "Free" ? "bg-red-600 text-white" : ""
                }`}
                onClick={() => setActiveTab1("Free")}
              >
                Free
              </button>
              <button
                className={`text-black font-medium text-[14px] px-3 py-3 w-[50%]  ${
                  activeTab === "Paid" ? "bg-red-600 text-white" : ""
                }`}
                onClick={() => setActiveTab1("Paid")}
              >
                Paid
              </button>
            </div>
            <div className={`mt-4 ${sidebar ? "ml-28" : "ml-[100px]"}`}>
              {activeTab === "Free" && <Free />}
              {activeTab === "Paid" && <Paid />}
            </div>
          </div>
        </div>
        <button
          className="py-3 px-4 bg-white text-[#48c790] border hover:bg-black hover:text-white mr-[850px] "
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          className="py-3 px-7 bg-white text-[#48c790] border hover:bg-black hover:text-white "
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    );
  };

  const Publish = () => {
    const handlePrevious = () => {
      setActiveTab("Price");
      setCurrent(3);
    };
    const [messageApi, contextHolder] = message.useMessage();
    const info = () => {
      messageApi.info("Wizard Completed");
    };
    return (
      <div>
        <div className="flex gap-x-3">
          <FontAwesomeIcon
            icon={faArrowUpFromBracket}
            className="mt-[4px] text-[15px]"
          />
          <p className="text-[18px] font-semibold">Submit</p>
        </div>
        <Divider />
        <div className="w-[100%] border ">
          <div className="bg-white h-[150px]">
            <div>
              <FontAwesomeIcon
                icon={faPenToSquare}
                className="mt-[4px] text-[15px] py-8 pl-[500px] text-[30px] "
              />
            </div>
            <div>
              <p className="text-[#7c7c7c] text-[13px] px-5 pb-10 ">
                Your course is in a draft state. Students cannot view, purchase
                or enroll in this course. For students that are already
                enrolled, this course will not appear on their student
                Dashboard.
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <button
            className="mt-10 py-3 px-4 bg-white text-[#48c790] border hover:bg-black hover:text-white mr-[850px] "
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button
            className="mt-10 py-3 px-4 bg-white text-[#48c790] border hover:bg-black hover:text-white "
            onClick={info}
          >
            {contextHolder}
            Submit for Review
          </button>
        </div>
      </div>
    );
  };

  const [current, setCurrent] = useState(0);

  const onChange = (value) => {
    setCurrent(value);
    switch (value) {
      case 0:
        setActiveTab("Basic");
        break;
      case 1:
        setActiveTab("Curriculum");
        break;
      case 2:
        setActiveTab("Media");
        break;
      case 3:
        setActiveTab("Price");
        break;
      case 4:
        setActiveTab("Publish");
        break;
      default:
        setActiveTab("Basic");
    }
  };

  return (
    <div className="pt-[100px] pl-[100px] bg-[#f7f7f7] ">
      <div className="pb-[80px] gap-x-3 flex">
        <FontAwesomeIcon icon={faChartLine} className="mt-2" />
        <h1 className="text-2xl ">Create New Course</h1>
      </div>

      <div>
        <Steps
          current={current}
          onChange={onChange}
          className="w-[1080px]"
          items={[
            {
              title: "Basic",
            },
            {
              title: "Curriculum",
            },
            {
              title: "Media",
            },
            {
              title: "Price",
            },
            {
              title: "Publish",
            },
          ]}
        />
      </div>
      <Divider className="mt-[100px] " />
      <div>
        {activeTab === "Basic" && <Basic />}
        {activeTab === "Curriculum" && <Curriculum />}
        {activeTab === "Media" && <Media />}
        {activeTab === "Price" && <Price />}
        {activeTab === "Publish" && <Publish />}
      </div>
    </div>
  );
};

export default CreateCourse;
