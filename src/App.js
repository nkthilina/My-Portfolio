import { useEffect } from 'react';
import Aos from "aos";
import './App.css';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  useEffect(()=>{
    Aos.init();
  },[]);

  return (
    <div className="App">
      <Header />
      
      <Footer />
    </div>
  );
}

export default App;
