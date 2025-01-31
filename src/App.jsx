import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero Section/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import ContactForm from "./components/Contact/Contact";
import { ThemeProvider } from "./ThemeContext";
import Skills from "./components/Skill/Skill";
import Footer from "./components/Footer/Footer";
// import Footer from "./components/Footer/Footer";

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
 <ThemeProvider  >
    <Header />
    <Hero />
    <About />
  
    <Projects />

    <ContactForm />
    <Footer />
 </ThemeProvider>
  );
};

export default App;


