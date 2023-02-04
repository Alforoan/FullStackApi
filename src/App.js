import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import SingleCard from "./pages/SingleCardPage";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Error from "./pages/ErrorPage";
import About from "./pages/AboutPage";
import Checkout from "./pages/CheckoutPage";
import Cards from "./pages/CardsPage";
import Cart from "./pages/CartPage";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<PrivateRoute />}>
          <Route path="/checkout" element={<Checkout />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/cards/:id" element={<SingleCard />} />
        <Route exact path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
