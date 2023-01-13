import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
