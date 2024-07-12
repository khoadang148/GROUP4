import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "./redux/actions/chat.action";

const WebSocketContext = createContext(null);

export const WebSocketProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const websocketRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    websocketRef.current = new WebSocket("ws://localhost:8080");

    websocketRef.current.onopen = () => {
      console.log("Connected to WebSocket server");
      setIsConnected(true);
    };

    websocketRef.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      dispatch(addMessage(message));
    };

    websocketRef.current.onclose = () => {
      console.log("Disconnected from WebSocket server");
      setIsConnected(false);
    };

    return () => {
      websocketRef.current.close();
    };
  }, [dispatch]);

  const sendMessage = (message) => {
    if (isConnected) {
      websocketRef.current.send(JSON.stringify(message));
    } else {
      console.error("WebSocket is not connected");
    }
  };

  return (
    <WebSocketContext.Provider value={{ sendMessage }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocket = () => {
  return useContext(WebSocketContext);
};
