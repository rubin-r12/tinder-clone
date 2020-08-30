import React, { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      name: "Mark",
      image:
        "https://image.cnbcfm.com/api/v1/image/104410446-GettyImages-669889288.jpg?v=1529474846&w=1400&h=950",
      message: "Whats up",
    },
    {
      name: "Mark",
      image:
        "https://image.cnbcfm.com/api/v1/image/104410446-GettyImages-669889288.jpg?v=1529474846&w=1400&h=950",
      message: "Good morning",
    },
    {
      message: "Hey, how are you Mark",
    },
  ]);

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">You matched with Mark on 30/08/20</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <div className="chatScreen__input">
        <form>
          <input
            className="chatScreen__inputField"
            placeholder="Type a message..."
            type="text"
          />
          <button className="chatScreen__inputButton">SEND</button>
        </form>
      </div>
    </div>
  );
}

export default ChatScreen;
