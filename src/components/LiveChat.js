import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/Helper";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      // API polling

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: "Hello, everyone!!!",
        })
      );
    }, 1000);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="w-full h-[450px] ml-2 p-2 border border-gray-400 bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((value, index) => (
          <ChatMessage key={index} name={value.name} message={value.message} />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({
            name: "Kushal Nigam",
            message: liveMessage,
          }));
          setLiveMessage("");
        }}
        className="w-full ml-2 mt-1 p-2 border border-gray-400 rounded-md"
      >
        <input
          className="w-3/4 py-2 px-1"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="bg-red-500 ml-1 p-1 rounded text-white">
          Comment
        </button>
      </form>
    </>
  );
};

export default LiveChat;
