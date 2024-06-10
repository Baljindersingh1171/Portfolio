import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contactus from "./Components/Contactus";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Projects from "./Components/Projects";
import { useState, useEffect } from "react";
import Loading from "./Components/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate an async operation like fetching data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust time as needed for your async operation

    // return () => clearTimeout(timer);
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <BrowserRouter>
        <ToastContainer position="top-center" />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
