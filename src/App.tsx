
import './App.css'
import { Routes, Route } from "react-router-dom";
import {Navbar} from "./components/Navbar/Navbar";
import {Home} from "./pages/Home/Home";
import {About} from "./pages/About/About";
import {Projects} from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Education from "./pages/Education/Education";

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
