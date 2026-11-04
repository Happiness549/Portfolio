import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import {Navbar} from "./components/Navbar/Navbar";
import {Home} from "./pages/Home/Home";

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/projects" element={<h1>Projects Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>
    </>
  )
}

export default App
