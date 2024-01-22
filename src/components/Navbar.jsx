import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import PropTypes from "prop-types";
import {Link, NavLink} from 'react-router-dom';
import { changeMode } from "../features/data/dataSlice";
import MenuIcon from "../icons/MenuIcon";
import Wrapper from "../assets/wrappers/Navbar";
import Switch from '@mui/material/Switch';
import { FormControlLabel } from "@mui/material";


const Navbar = () => {
    const [showLinks, setShowLinks] = useState(true);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const dispatch = useDispatch();
    const {mode} = useSelector((state) => state.data)
     console.log(mode)
    const toggleLinks= () => {
        
        setShowLinks(!showLinks)
        
    }
    const linkStyles = {
        height:showLinks?`${linksRef?.current?.getBoundingClientRect()?.height + 38}px`:'0px'
    }
    
  return (
    <Wrapper>
        <div className="nav-center">
            <div className="nav-header">
                <Link to='/'>textEditor</Link>
                <button onClick={toggleLinks}><MenuIcon /></button>
            </div>
            <div className='links-container' ref={linksContainerRef} style={linkStyles}>
                <ul ref={linksRef}>
                    <li>
                        <NavLink activeclassname="active" className="nav-link" to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeclassname="active" className="nav-link" to='/about'>About</NavLink>
                    </li>
                    
                </ul>
                <div className="darkmode">
                         <FormControlLabel control={<Switch onChange={()=>dispatch(changeMode())} />} label="Enable Dark Mode" />
 
                    
                    
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