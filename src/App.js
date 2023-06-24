
import React,{useState,useEffect} from 'react';

import './App.css';

import Skills from './skills';
import Footer from "./footer";
import {Contact,Navbar,Experience,Projects,About,Introduction,Loading} from './components';

function App() {
const [isLoading,setIsLoading]=useState(true);
useEffect(() => {
  // Simulating a 1-second delay before loading the main page
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return () => clearTimeout(timer); // Clear the timer when the component is unmounted
}, []);
  return (
    <div className=" bg-[#1d1d20] px-10">
    {isLoading ? (
      <Loading />
    ) : (
      <>
        <header className=" min-h-screen">
          <Navbar />
          <About />
        </header>
        <Introduction />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </>
    )}
  </div>
  );
}

export default App;
