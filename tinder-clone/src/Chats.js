import React from "react";
import "./Chats.css";
import Chat from "./Chat.js";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Mark"
        message="Yo whats up"
        timestamp="40 seconds ago"
        profilePic="https://image.cnbcfm.com/api/v1/image/104410446-GettyImages-669889288.jpg?v=1529474846&w=1400&h=950"
      />
    </div>
  );
}

export default Chats;
