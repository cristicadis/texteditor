import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import { changeMode } from "../features/data/dataSlice";
import MenuIcon from "../icons/MenuIcon";
import Wrapper from "../assets/wrappers/Navbar";



const Navbar = () => {
    const [showLinks, setShowLinks] = useState(true)
    const dispatch = useDispatch()
    const {mode} = useSelector((state) => state.data)
     
    const toggleLinks= () => {
        setShowLinks(!showLinks)
        console.log(showLinks)
    }
  return (
    <Wrapper>
        <div className="nav-center">
            <div className="nav-header">
                <Link to='/'>textEditor</Link>
                <button onClick={toggleLinks}><MenuIcon /></button>
            </div>
            <div className={showLinks?'links-container show-container':'links-container'}>
                <ul>
                    <li>
                        <Link className="nav-link" to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to='/about'>About</Link>
                    </li>
                </ul>
                <div className="darkmode">
                    <input  type="checkbox" role="switch" id="flexSwitchCheckDefault "/>
                    <label  htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                </div>
                 
            </div>
        </div>
    
    </Wrapper>
    
  )

  



}

export default Navbar

// Navbar.propTypes = {
//   title: PropTypes.string.isRequired, aboutText: PropTypes.string.isRequired
// };

// Navbar.defaultProps = {
//   title: 'Set title here',
//   aboutText: 'About text here'
// }