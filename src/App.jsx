import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Register from "./components/Register";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />

      <Routes>
        {/* 🔹 Standalone Register Page */}
        <Route path="/register" element={<Register />} />

        {/* 🔹 Main Website Layout */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <About />
              <Projects />
              <Testimonials />
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
