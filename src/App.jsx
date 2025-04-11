import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import RoomView from "./components/RoomView";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/:roomName" element={<RoomView />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
