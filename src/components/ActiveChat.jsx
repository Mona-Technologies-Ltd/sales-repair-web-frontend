import React from "react";
import { FaMicrophone, FaPaperPlane } from "react-icons/fa";
import { BsPaperclip, BsThreeDotsVertical } from "react-icons/bs";
import "../styles/ActiveChat.css";

const ActiveChat = ({ chatHistory, message, setMessage, sendMessage }) => {
  return (
    <>
      {/* Active Chat Messages - Scrollable Area */}
      <div className="chat-container">
        {chatHistory.map((chat, index) => (
          <div
            key={index}
            className={`chat-message ${chat.sender === "bot" ? "bot" : "user"}`}
          >
            <div
              className={`message-bubble ${
                chat.sender === "bot" ? "bot" : "user"
              }`}
            >
              <p className="message-text">{chat.text}</p>
              <div className="message-info">
                <span
                  className={`message-time ${
                    chat.sender === "bot" ? "bot" : "user"
                  }`}
                >
                  {chat.time}
                </span>
                <BsThreeDotsVertical
                  size={14}
                  color={chat.sender === "bot" ? "#f0f0f0" : "#888"}
                />
              </div>
            </div>
            {chat.sender === "user" && (
              <img
                src="/chatrobo.svg"
                alt="User Avatar"
                className="user-avatar"
              />
            )}
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="message-input-container">
        <form onSubmit={sendMessage} className="message-form">
          <button type="button" className="icon-button">
            <FaMicrophone size={20} />
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write message"
            className="message-field"
          />
          <button type="button" className="icon-button">
            <BsPaperclip size={20} />
          </button>
          <button type="submit" className="send-button">
            <span>Send</span>
            <FaPaperPlane size={14} />
          </button>
        </form>
      </div>
    </>
  );
};

export default ActiveChat;
