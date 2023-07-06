import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-md p-2">
      <img
        className="h-6"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi9tpT4I8IfwZouXLJMqWz-_dDSSDkTfuMl6xIN0M&s"
        alt="user"
      />
      <span className="font-bold px-2">{name}:</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
