import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Sliders } from "./components/LoopSlider";
// import { NeonCursor } from "./components/Cursor";
import React from "react";

function App() {
  return (
    <div className="app" >
      {/* <NeonCursor /> */}
      <NavBar />
      <Banner />
      <Skills />
      <Sliders />
      <Projects />
      <Contact />
      <Footer />
    </div>
    
  );
}

export default App;