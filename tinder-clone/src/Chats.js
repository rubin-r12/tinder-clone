import React from "react";
import "./Chats.css";
import Chat from "./Chat.js";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Sabrina"
        message="hey you!"
        timestamp="40 seconds ago"
        profilePic="https://pm1.narvii.com/6572/090953029189116002a1cef5c1b8672959528035_hq.jpg"
      />
      <Chat
        name="Dakota"
        message="hey, can't wait to see you!"
        timestamp="1 minute ago"
        profilePic="https://pbs.twimg.com/media/CaFhxafUsAAylES.jpg"
      />
      <Chat
        name="Emma"
        message="hey,See you in 5!"
        timestamp="2 minutes ago"
        profilePic="https://images.fullhdwallpaper.net/wp-content/uploads/2018/02/cute-smile-pics-of-Emma-Stone.jpg"
      />
      <Chat
        name="Paz"
        message="Wanna get some Coffee?!"
        timestamp="3 minutes ago"
        profilePic="https://1.bp.blogspot.com/-A-CkdSDX8I0/XWlD2HLUCxI/AAAAAAAADMs/7I_5Ud4-zMYk0xpFj3cp9amkIC2Z5qA9QCLcBGAs/s1600/Paz%2BVega.png"
      />
    </div>
  );
}

export default Chats;
