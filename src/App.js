import React from 'react';
import { useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Hero from './UI/Hero';

function App() {
  useEffect(()=>{
    Aos.init();
  },[]);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
