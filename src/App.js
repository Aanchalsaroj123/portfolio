import { useState } from 'react';
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/introduction/Intro";
import Navbar from "./components/navbar/Navbar";
import Myskills from './components/myskills/Myskills';


function App() {


  const [mode,setmode]=useState('light');
  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#080012';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
  <> 
  <div>
    <Navbar mode={mode} togglemode={togglemode}/>
    <Intro mode={mode}/>
    <About mode={mode}/>
    <Myskills mode={mode}/>
    <Contact mode={mode}/>
  </div>
  </>
  );
}

export default App;