import React from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Experiencev2 from "./components/Experiencev2";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="container mx-auto">
        <Navbar />
        <Hero />
        <Skills />
        {/* <Experience /> */}
        <Experiencev2 />
        <Footer />
      </div>
    </div>
  );
};

export default App;
