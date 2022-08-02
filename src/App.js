import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import NavbarHome from "./components/navbar/Navbar";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Error from "./components/err/Error";

function App() {
  return (
    <BrowserRouter>
      <NavbarHome />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
