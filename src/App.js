import React from 'react';
import { useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './UI/Hero';
import Services from './UI/Services';
import Portfolio from './UI/Portfolio';
import Contact from './UI/Contact';

function App() {
  useEffect(()=>{
    Aos.init();
  },[]);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
