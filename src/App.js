import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Error from "./pages/ErrorPage";
import About from "./pages/AboutPage";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route exact path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
