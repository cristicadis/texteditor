import { useState } from 'react'

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
  
  return (
    <>
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
    </>
     
    
  )
}

export default App
