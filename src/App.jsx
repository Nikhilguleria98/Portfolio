import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero Section/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import ContactForm from "./components/Contact/Contact";

const App = () => {
  return (
    // <BrowserRouter>
    //   <Header />
    //   <Routes>
    //     <Route path="/" element={<Hero />} />
    //     <Route path="/#about" element={<About />} />
    //     <Route path="/#projects" element={<Projects />} />
    //     <Route path="/#contact" element={<Contact />} />
    //   </Routes>
    // </BrowserRouter>
 <>
    <Header />
    <Hero />
    <About />
    <Projects />

    <ContactForm />
 </>
  );
};

export default App;


