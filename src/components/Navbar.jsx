import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import PropTypes from "prop-types";
import {Link, NavLink} from 'react-router-dom';
import { changeMode } from "../features/data/dataSlice";
import MenuIcon from "../icons/MenuIcon";
import Wrapper from "../assets/wrappers/Navbar";
import Switch from '@mui/material/Switch';
import { FormControlLabel } from "@mui/material";


const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const dispatch = useDispatch();
    const {mode} = useSelector((state) => state.data)
     console.log(mode)
    const toggleLinks= () => {    
        setShowLinks(!showLinks)    
    }
    const closeOpenMenu = (e) => {
        if(showLinks && !linksContainerRef.current?.contains(e.target)){
            setShowLinks(false)
        }
    }
    useEffect(()=>{
        document.addEventListener('mousedown', closeOpenMenu)
        return ()=> {
            document.removeEventListener('mousedown', closeOpenMenu)
        }
    },[closeOpenMenu])
    
    const linkStyles = {
        height:showLinks?`${linksRef?.current?.getBoundingClientRect()?.height + 38}px`:'0px'
    }
    
  return (
    <Wrapper>
        <div ref={linksContainerRef} className={`nav-center ${mode === 'dark'? 'bg-dark':'bg-light' }`}>
            <div className="nav-header">
                <Link to='/' className={`${mode === 'dark'? 'font-dark':'font-light' }`} onClick={toggleLinks}>textEditor</Link>
                <button className={`${mode === 'dark'? 'border-dark svg-dark':'border-light svg-light' }`} onClick={toggleLinks}><MenuIcon /></button>
            </div>
            <div className='links-container'  style={linkStyles}>
                <ul ref={linksRef}>
                    <li>
                        <NavLink activeclassname="active" className={`nav-link ${mode === 'dark'? 'font-dark-nav':'font-light-nav' }`} to='/' >Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeclassname="active" className={`nav-link ${mode === 'dark'? 'font-dark-nav':'font-light-nav' }`} to='/about' >About</NavLink>
                    </li>
                    
                </ul>
                <div className={`darkmode ${mode === 'dark' && 'darkmode-dark' }`} >
                         <FormControlLabel  control={<Switch onChange={()=>dispatch(changeMode())} />} label="Enable Dark Mode" />
 
                    
                    
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