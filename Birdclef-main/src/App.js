import React, {useState,useEffect} from 'react';


import './App.css';
import Header from './components/Headers/Header.jsx';
import Hero from "./components/UI/Hero.jsx";
import Services from './components/UI/Services.jsx';
import Slider from "./components/UI/Slider.jsx";
import About from './components/UI/About.jsx';
import Newsletter from './components/UI/Newsletter.jsx';
import Footer from './components/Footer/Footer.jsx';



function App() {

  const [theme, setTheme] =useState('') 
  const toggleTheme = () => {
    theme === '' ? setTheme('light-theme') : setTheme('');
  }

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return <>
    <Header  theme={theme} toggleTheme={toggleTheme}/>
    <Hero theme={theme} />
    <Slider/>
    <Services />
    <About />
    <Newsletter/>
    <Footer/>
    </>

}

export default App;
