import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getInstructorById } from "../redux/actions/instructor.action";
import { addMessage, setMessages } from "../redux/actions/chat.action";
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie"; 
const Livestreamdetail = ({ sidebar }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { instructor } = useSelector((state) => state.instructors);
  const { messages } = useSelector((state) => state.chat);
  const [inputMessage, setInputMessage] = useState("");
  const [username, setUsername] = useState("");  // Add state for username
  const websocketRef = useRef(null);

  useEffect(() => {
    dispatch(getInstructorById(id));
  }, [dispatch, id]);

  useEffect(() => {
    // Get the username from cookies
    const name = Cookies.get('username');
    setUsername(name);
    
    const savedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    dispatch(setMessages(savedMessages));

    websocketRef.current = new WebSocket("ws://localhost:8080");

    websocketRef.current.onopen = () => {
      console.log("Connected to WebSocket server");
    };

    websocketRef.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      dispatch(addMessage(message));
    };

    websocketRef.current.onclose = () => {
      console.log("Disconnected from WebSocket server");
    };

    return () => {
      websocketRef.current.close();
    };
  }, [dispatch]);

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      const message = {
        username: username,  // Use the state value for username
        content: inputMessage,
      };
      websocketRef.current.send(JSON.stringify(message));
      dispatch(addMessage(message));
      setInputMessage("");
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };
  const keywords = [
    "John Doe",
    "Jassica",
    "Edututs",
    "Joginder Singh",
    "Zoena",
    "Albert Dua",
    "Ridhima",
    "Amritpal",
    "Jimmy",
  ];
  const avatars = [
    "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg",
    "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-2.jpg",
    "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-9.jpg",
    "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-3.jpg",
    "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-4.jpg",
    "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-5.jpg",
    "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-6.jpg",
    "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-7.jpg",
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleAvatars = 6;
  const avatarListRef = useRef(null);

  const handlePrevClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (startIndex < avatars.length - visibleAvatars) {
      setStartIndex(startIndex + 1);
    }
  };
   const navigate = useNavigate();
   const handleInstructorClick = (instructorId) => {
     navigate(`/livestreamdetail/${instructorId}`);
   };

const { instructors } = useSelector((state) => state.instructors);
  return (
    <div className="mt-[100px] ml-10">
      <div className={`flex ${sidebar ? "w-[1200px]" : "w-[1640px]"}`}>
        <div>
          <div>
            <iframe
              width={808}
              height={435}
              src="https://www.youtube.com/embed/Ohe_JzKksvA"
              title='What is a "Good Font"?'
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className={` ${sidebar ? "w-[800px]" : "w-[1000px]"}`}
            />
          </div>
          <div className="mt-7 flex justify-between">
            <div className="flex">
              <Image
                className="w-[50px] h-[50px] rounded-full"
                src={instructor?.avatar}
              />
              <div className=" px-5 font-semibold ">{instructor?.username}</div>
              <button className="mt-7 px-5 py-[7px] bg-red-600 text-white text-center -ml-[96px]">
                Subscribe
              </button>
            </div>
            <div>
              <div className="flex">
                <div className="px-4   bg-white text-[#A9A9A9] hover:text-black">
                  <FontAwesomeIcon
                    icon={faEye}
                    className="py-2 text-center pl-2"
                  />
                  <p>1452</p>
                </div>
                <div className="px-4 mx-[7px] bg-white text-[#A9A9A9] hover:text-black">
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    className="py-2 text-center pl-2"
                  />
                  <p>1452</p>
                </div>
                <div className="px-4  bg-white text-[#A9A9A9] hover:text-black">
                  <FontAwesomeIcon
                    icon={faThumbsDown}
                    className="py-2 text-center pl-2"
                  />
                  <p>1452</p>
                </div>
                <div className="px-4 mx-[7px] bg-white text-[#A9A9A9] hover:text-black">
                  <FontAwesomeIcon
                    icon={faShareNodes}
                    className="py-2 text-center pl-2"
                  />
                  <p>1452</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white px-5 py-5 w-[1000px] ml-10">
          <p className="font-semibold">Live Chat</p>
          <div className="h-96 overflow-y-scroll">
            {messages.map((message, index) => (
              <div key={index} className="my-2">
                <strong>{message.username}: </strong>
                <span>{message.content}</span>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress} // Thêm sự kiện này
              className="w-full border rounded px-3 py-2"
              placeholder="Enter your message..."
            />
            <button
              onClick={handleSendMessage}
              className="mt-2 bg-red-600 text-white px-4 py-2 rounded"
            >
              Send
            </button>
          </div>
        </div>
      </div>

      <div
        className={`mt-[37px] -ml-[60px] py-2 px-0 overflow-hidden w-[1250px] relative ${
          sidebar ? "" : "w-[1000px]"
        }`}
      >
        <div className="ml-[50px] mt-8 flex justify-between w-[1000px]">
          <h2>Live Streams</h2>
          <Link to={"/livestream"}>
            <span className=" text-sm">See all</span>
          </Link>
        </div>

        <div className="mt-4 py-2 px-0 overflow-hidden w-[1400px] relative">
          <div className="flex items-center">
            <button
              onClick={handlePrevClick}
              disabled={startIndex === 0}
              className="group bg-white hover:bg-red-600 absolute left-11 z-50 cursor-pointer px-2 py-0 rounded-[5px]"
            >
              <h1 className="group-hover:text-white">{"<"}</h1>
            </button>
            <div
              className="flex gap-4 rounded relative h-[174px] mx-10 transition-transform duration-300"
              style={{ transform: `translateX(-${startIndex * 144}px)` }}
              ref={avatarListRef}
            >
              {instructors.map((value, i) => (
                <div
                  key={i}
                  className="bg-[#DDD8DD] rounded w-[200px]"
                  onClick={() => handleInstructorClick(value.id)}
                >
                  <div className="flex items-center flex-col justify-center bg-[#E3DFE3] mt-3 mb-3 ml-3 mr-3 h-[155px] drop-shadow-md">
                    <img
                      src={value.avatar}
                      alt={value}
                      className="w-20 h-20 rounded-full border-white"
                    />
                    <h3 className="text-xs">{value.username}</h3>
                    <span className="text-xs">
                      <span>live </span>
                      <span className="text-red-600">•</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={handleNextClick}
              disabled={startIndex >= instructors.length - visibleAvatars}
              className="group bg-white hover:bg-red-600 absolute right-[150px] z-50 cursor-pointer px-2 py-0 rounded-[5px]"
            >
              <h1 className="group-hover:text-white">{">"}</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Livestreamdetail;
