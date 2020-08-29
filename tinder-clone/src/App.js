import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/chat">
            <h1>I'm the chat page</h1>
          </Route>
          <Route path="/">
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
      {/* Tinder cards */}
      {/* Buttons below tinder cards */}

      {/* Chats screeen */}
      {/* Individual chat screen */}
    </div>
  );
}

export default App;
