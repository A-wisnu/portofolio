import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import BackgroundAnimation from "./components/BackgroundAnimation/BackgroundAnimation";
import ContactBanner from "./components/ContactBanner/ContactBanner";

function App() {
  return (
    <div className="App">
      <BackgroundAnimation />
      <Navbar />
      <Hero />
      <Projects />
      <ContactBanner />
    </div>
  );
}

export default App;
