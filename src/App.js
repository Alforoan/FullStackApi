import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import SingleProduct from "./pages/SingleProductPage";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Error from "./pages/ErrorPage";
import About from "./pages/AboutPage";
import Checkout from "./pages/CheckoutPage";
import Cards from "./pages/CardsPage";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route exact path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
