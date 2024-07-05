import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Radio, Row, Space, Statistic, Input } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const { Countdown } = Statistic;
const deadline = Date.now() + 1 * 60 * 60 * 1000;

const TestView = () => {
  const [answers, setAnswers] = useState({});

  const onChange = (questionId, e) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: e.target.value,
    }));
  };

  const onFinish = () => {
    console.log("finished!");
  };

  const navigate = useNavigate();

  const handleCertificationCenter = () => {
    navigate("/certificationcenter");
  };

  const handleHome = () => {
    navigate("/home");
  };

  const renderQuestion = (questionId, questionText, options) => (
    <div className="mt-4 text-black" key={questionId}>
      <h1>{questionText}</h1>
      <Radio.Group
        className="radio-button"
        onChange={(e) => onChange(questionId, e)}
        value={answers[questionId]}
      >
        <Space direction="vertical">
          {options.map((option, index) => (
            <Radio className="radio-button" value={index + 1} key={index}>
              {option}
            </Radio>
          ))}
        </Space>
      </Radio.Group>
    </div>
  );

  return (
    <div>
      <div className="text-black bg-white">
        <div className="flex justify-between">
          <div className="text-black pt-[80px] pl-[11%] flex gap-3 text-[14px] cursor-pointer">
            <p onClick={handleHome}>Home /</p>
            <p onClick={handleCertificationCenter}>Certification Center /</p>
            <p className="text-[#787878]">WordPress Test View</p>
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
          <h1>WordPress Test View</h1>
        </div>
      </div>
      <div className="mt-[50px]">
        <div className="grid grid-cols-3 ml-[150px] mt-[50px]">
          <div className="flex h-[200px] fixed border">
            <div className="bg-white w-[200px] h-[200px] flex justify-center items-center flex-col gap-2">
              <div className="w-[130px] h-[130px] rounded-full bg-white border-2 border-black">
                <h1 className="text-[30px] text-black ml-[45px] mt-[45px]">
                  20
                </h1>
              </div>
              <div className="mb-0">
                <span className="text-black font-medium">Questions</span>
              </div>
            </div>
            <div className="bg-white w-[170px] h-[200px] flex justify-center items-center flex-col gap-2">
              <div className="w-[130px] h-[130px] rounded-full bg-white border-2 border-black">
                <Row gutter={-20} className="ml-[20px] mt-[45px] font-semibold">
                  <Countdown value={deadline} onFinish={onFinish} />
                </Row>
              </div>
              <div>
                <span className="text-black font-medium">Minutes</span>
              </div>
            </div>
          </div>
          <div className="bg-[#F7F7F7] w-[700px] ml-[430px] space-y-[40px] text-[#333333]">
            {renderQuestion(
              "q1",
              "Ques 1: What is the name of the first page you encounter after logging into your web page?",
              [
                "Dashboard",
                "Security question page",
                "WP upgrade option",
                "WPAdmin",
              ]
            )}
            <div className="text-black mt-4">
              <h1>Ques 2: What is WordPress?</h1>
              <div>
                <Input.TextArea
                  rows={4}
                  placeholder="Please explain!!!"
                  maxLength={1000}
                />
              </div>
            </div>
            {renderQuestion(
              "q3",
              "Ques 3: How can you get involved with WordPress?",
              [
                "Attend Word Camp",
                "Edit the CodeX (documentation)",
                "Help in the forum",
                "All of these",
              ]
            )}
            {renderQuestion("q4", "Ques 4: What ways to use WordPress?", [
              "Arcade",
              "Blog",
              "Content Management System (CMS)",
              "All of the above",
            ])}
            {renderQuestion(
              "q5",
              "Ques 5: What case we cannot recommend WordPress to our client?",
              [
                "If client is working on non-CMS base project",
                "If site want complex or innovation e-commerce",
                "In case of enterprise intranet solution",
                "All of the above",
              ]
            )}
            {renderQuestion(
              "q6",
              "Ques 6: Which relational database does WordPress use?",
              ["MySQL", "Oracle", "PostgreSQL", "MS SQLServer"]
            )}
            {renderQuestion(
              "q7",
              "Ques 7: What are the rules that you have to follow for WordPress plugin development?",
              [
                "Attend Word Camp",
                "Edit the CodeX (documentation)",
                "Help in the forum",
                "All of these",
              ]
            )}
            {renderQuestion(
              "q8",
              "Ques 8: What are the steps you can take if your WordPress file is hacked?",
              [
                "Attend Word Camp",
                "Edit the CodeX (documentation)",
                "Help in the forum",
                "All of these",
              ]
            )}
            {renderQuestion("q9", "Ques 9: What is a WordPress taxonomy?", [
              "Attend Word Camp",
              "Edit the CodeX (documentation)",
              "Help in the forum",
              "All of these",
            ])}
            {renderQuestion(
              "q10",
              "Ques 10: In WordPress, what is the user role with the highest privilege level?",
              ["Administrator", "Author", "Editor", "Contributor"]
            )}
            {renderQuestion(
              "q11",
              "Ques 11: What case we cannot recommend WordPress to our client?",
              [
                "If client is working on non-CMS base project",
                "If site want complex or innovation e-commerce",
                "In case of enterprise intranet solution",
                "All of the above",
              ]
            )}
            {renderQuestion("q12", "Ques 12: What is Gravatar?", [
              "A Plugin",
              "Global Recognized Image or Photo",
              "CMS",
            ])}
            {renderQuestion(
              "q13",
              "Ques 13: Types of post format available in WordPress.",
              ["10", "11", "9", "6"]
            )}
            {renderQuestion(
              "q14",
              "Ques 14: How many number of tables in WordPress database available?",
              ["18", "9", "6", "12"]
            )}
            {renderQuestion(
              "q15",
              "Ques 15: How many free plugins are available for self-hosted WordPress?",
              ["2,000", "30,000", "10,000"]
            )}
            {renderQuestion(
              "q16",
              "Ques 16: Are multilingual sites allowed in WordPress?",
              ["Yes", "No"]
            )}
            {renderQuestion(
              "q17",
              "Ques 17: What is the name of the configuration file in WordPress?",
              ["header.php", "wp-settings.php", "wp-config.php", "page.php"]
            )}
            {renderQuestion(
              "q18",
              "Ques 18: What case we cannot recommend WordPress to our client?",
              [
                "If client is working on non-CMS base project",
                "If site want complex or innovation e-commerce",
                "In case of enterprise intranet solution",
                "All of the above",
              ]
            )}
            {renderQuestion(
              "q19",
              "Ques 19: How many templates can one theme contain?",
              ["One", "Max Ten", "Max 20", "Unlimited"]
            )}
            {renderQuestion(
              "q20",
              "Ques 20: In which programming language is WordPress written?",
              ["Java", "Node", "PHP", "JavaScript"]
            )}
            <div>
              <button className="bg-red-600 hover:bg-[#333333] text-white px-6 py-[10px] text-[14px] font-medium rounded-sm">
                Submit Test
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestView;
