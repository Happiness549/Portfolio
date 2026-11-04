import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import {Navbar} from "./components/Navbar/Navbar";
import {Home} from "./pages/Home/Home";
import {About} from "./pages/About/About";
import {Projects} from "./pages/Projects/Projects";

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>
    </>
  )
}

export default App
