import { useState } from 'react'
import { useSelector } from "react-redux";

import './App.css'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import About from './components/About';


function App() {
  const {mode} = useSelector((state) => state.data)
  
  return (
    <section className={`main ${mode === 'dark'? 'bg-dark':'bg-light' }`}>
      <Router>
      <Navbar  />
        <Alert /> 
        

          <Routes>
            <Route path="/About" element={<About/>}>
            </Route>

            <Route path="/" element={<TextForm />}>   
            </Route>
          </Routes>

          
        


      </Router>
    </section>
     
    
  )
}

export default App
