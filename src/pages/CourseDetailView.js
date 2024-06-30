// import {
//     DislikeOutlined,
//     HeartOutlined,
//     LikeOutlined,
//     ShoppingCartOutlined,
//   } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Button, Image } from "react-bootstrap";
//   import { useDispatch, useSelector } from "react-redux";
//   import { getEnrolledCourses } from "../redux/actions/course.action";

const CourseDetailView = ({ sidebar }) => {
 
  const [activeTab, setActiveTab] = useState("About");
  // const userId = useSelector((state) => state.auth.id);
  // console.log(userId);
  // const { courses, loading, error } = useSelector(
  //   (state) => state.enrolledCourses
  // );
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (userId) {
  //     dispatch(getEnrolledCourses(userId));
  //   }
  // }, [dispatch, userId]);
  const About = () => {
    return (
      <div className="mt-10">
        <div>
        <h3 className="text-black text-xl font-medium"> Requirement</h3>
        <div>
          <li>
            <span>Have a computer with Internet </span>
            <span>Be ready to learn an insane amount of awesome stuff </span>
            <span>Prepare to build real web apps! </span>
          </li>
        </div>
        <div>
          <h3>Description</h3>
          <span>Just updated to include Bootstrap 4.1.3!</span>
          <p>
            Hi! Welcome to the Web Developer Bootcamp, the{" "}
            <strong>only course you need to learn web development.</strong>{" "}
            There are a lot of options for online developer training, but this
            course is without a doubt the most comprehensive and effective on
            the market. Here's why:
          </p>
          <div>
            <li>
              <span>
                This is the only online course taught by a professional
                bootcamp instructor.
              </span>
            </li>
            <li>
              <span>
                94% of my in-person bootcamp students go on to get full-time
                developer jobs. Most of them are complete beginners when I
                start working with them.
              </span>
            </li>
            <li>
              <span>
                The previous 2 bootcamp programs that I taught cost $14,000
                and $21,000. This course is just as comprehensive but with
                brand new content for a fraction of the price.
              </span>
            </li>
            <li>
              <span>
                Everything I cover is up-to-date and relevant to today's
                developer industry. No PHP or other dated technologies. This
                course does not cut any corners.
              </span>
            </li>
            <li>
              <span>
                This is the only complete beginner full-stack developer course
                that covers NodeJS.
              </span>
            </li>
            <li>
              <span>
                We build 13+ projects, including a gigantic production
                application called YelpCamp. No other course walks you through
                the creation of such a substantial application.
              </span>
            </li>
            <li>
              <span>
                The course is constantly updated with new content, projects,
                and modules. Think of it as a subscription to a never-ending
                supply of developer training.
              </span>
            </li>
            <p>
              When you're learning to program you often have to sacrifice
              learning the exciting and current technologies in favor of the
              "beginner friendly" classes. With this course, you get the best
              of both worlds. This is a course designed for the complete
              beginner, yet it covers some of the most exciting and relevant
              topics in the industry.
            </p>
            <p>
              Throughout the course we cover tons of tools and technologies
              including:
            </p>
            <div>
              <li>
                <span>HTML5</span>
              </li>
              <li>
                <span>CSS3</span>
              </li>
              <li>
                <span>JavaScript</span>
              </li>
              <li>
                <span>Bootstrap 4</span>
              </li>
              <li>
                <span>SemanticUI</span>
              </li>
              <li>
                <span>DOM Manipulation</span>
              </li>
              <li>
                <span>jQuery</span>
              </li>
              <li>
                <span>HTML5</span>
              </li>
              <li>
                <span>CSS3</span>
              </li>
              <li>
                <span>JavaScript</span>
              </li>
              <li>
                <span>Bootstrap 4</span>
              </li>
              <li>
                <span>SemanticUI</span>
              </li>
              <li>
                <span>DOM Manipulation</span>
              </li>
              <li>
                <span>jQuery</span>
              </li>
            </div>
            <p>
              This course is also unique in the way that it is structured and
              presented. Many online courses are just a long series of "watch
              as I code" videos. This course is different. I've incorporated
              everything I learned in my years of teaching to make this course
              not only more effective but more engaging. The course includes:
            </p>
            <div>
              <li>
                <span>Lectures</span>
              </li>
              <li>
                <li>
                  <span>Code-Alongs</span>
                </li>
                <li>
                  <span>Projects</span>
                </li>
                <span>Exercises</span>
              </li>
              <li>
                <span>Research Assignments</span>
              </li>
              <li>
                <span>Slides</span>
              </li>
              <li>
                <span>Downloads</span>
              </li>
              <li>
                <span>Readings</span>
              </li>
            </div>
            <p>
              If you have any questions, please don't hesitate to contact me.
              I got into this industry because I love working with people and
              helping students learn. Sign up today and see how fun, exciting,
              and rewarding web development can be!
            </p>
          </div>
        </div>
      </div>
      </div>
    );
  };

  const CoursesContent = () => {
    return (
      <div>
        <div className="text-black font-semibold text-xl my-10">
          
        
         
        </div>
      </div>
    );
  };

  const Reviews = () => {
    return (
      <div>
        <div className="text-black font-semibold text-xl my-10">
          Discussions
        </div>
       
      </div>
    );
  };

  return (
    <div className="mt-[65px] overflow-x-hidden">
      <div
        className={`bg-[#333333] h-[280px] flex gap-x-[200px] ${
          sidebar ? "w-[1457px]" : "w-[1690px]"
        }`}
      >
        <div className="">
          <div className={`flex  mt-6 ${sidebar ? "ml-28" : "ml-64"}`}>
            <Image
              className="w-[110px] h-[110px]"
              src={require("../../src/assets/img1.png")}
            />
            <div className=" ml-6 mt-6">
              <div className="text-white font-bold text-2xl">John Doe</div>
              <div className="text-white mt-3">Web Developer</div>
            </div>
          </div>
          <div
            className={`w-[580px] h-[82px] border flex gap-0 border-[#484343] mt-8 ${
              sidebar ? "ml-28" : "ml-64"
            }`}
          >
            
          </div>
        </div>
       
      </div>
      <div className="bg-white">
        <div className={`flex gap-5 pt-6  ${sidebar ? "ml-28" : "ml-64"}`}>
          <Button
            className={`text-black font-medium text-sm ${
              activeTab === "About" ? "border-b-2 p-2 border-[#ed2a26]" : ""
            }`}
            onClick={() => setActiveTab("About")}
          >
            About
          </Button>
          <Button
            className={`text-black font-medium text-sm ${
              activeTab === "Courses Content" ? "border-b-2 p-2 border-[#ed2a26]" : ""
            }`}
            onClick={() => setActiveTab("Courses Content")}
          >
            Courses Content
          </Button>
          <Button
            className={`text-black font-medium text-sm ${
              activeTab === "Review"
                ? "border-b-2 p-2 border-[#ed2a26]"
                : ""
            }`}
            onClick={() => setActiveTab("Review")}
          >
            Reviews
          </Button>
        </div>
      </div>
      <div className={`mt-4 ${sidebar ? "ml-28" : "ml-64"}`}>
        {activeTab === "About" && <About />}
        {activeTab === "Courses Content" && <CoursesContent />}
        {activeTab === "Review" && <Reviews />}
      </div>
    </div>
  );
};

export default CourseDetailView;
