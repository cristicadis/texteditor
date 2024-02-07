import React, { useState } from "react";
import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { hideAlert, showAlert } from "../features/data/dataSlice";
import { useSelector } from "react-redux";


const TextForm = () => {
    const {mode} = useSelector((state) => state.data)
    const dispatch = useDispatch();
    const [text, setText] = useState(" ");

    const handleChange = (e) => {
        const {value} = e.target;
        setText(value);

    }
   
    const time = () => {
         setTimeout (()=>{
            dispatch(hideAlert())
         },1200)
    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        dispatch(showAlert({msg:"Converted to UpperCase!", type:"success"}))
        time();
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        dispatch(showAlert({msg:"Converted to LowerCase!",type:"success"}))
        time();
    }
    const handleClear = () => {
        let newText = ' ';
        setText(newText)
        dispatch(showAlert({msg:"Text has been cleared", type:"success"}))
        time();
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        dispatch(showAlert({msg:"Copied to clipboard", type:"success"}))
        time();
    }
    
  return (
    
    <Wrapper>
      <div className='container'  >
        <h1>Enter the text to analyze below</h1>
        <div className="textarea-container">
          <textarea 
            className={`form-control ${mode === 'dark'? 'bg-dark':'bg-light' }`}
            value={text}
            onChange={handleChange}
            style={{}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary " onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary " onClick={handleLoClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary " onClick={handleClear}>
          Clear Text
        </button>
        <button className="btn btn-success " onClick={handleCopy}>
          COPY
        </button>
      </div>
      <div className="container" >
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
        {/* {<p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes to read</p>} */}
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the textarea to preview it here! "}</p>
      </div>
    </Wrapper>
  );
  
}

export default TextForm

const Wrapper= styled.section`
    
   
    .container {
        
       p{
        color:rgb(4, 9, 156);
        font-weight: 400;
        letter-spacing: 1px;
        margin-top:10px;
        margin-bottom: 10px;
       }
       h3{
        font-size: 1.3rem;
        font-weight: 500;
        letter-spacing: 1px;
       }
    }
    
    textarea {
        width: 100%;
        font-size: 1rem;
        border: 1px solid #dee2e6;
        border-radius:7px;
        transition: .3s ease-in-out all;
        padding: .375rem .75rem;
        line-height: 1.5;
        font-weight: 400;
        font-family: 'Roboto',
      sans-serif;
      letter-spacing: 1px;
    }
    textarea:focus {
        outline: none !important;
        border:1px solid #86b7fe;
        box-shadow: 0 0 0 0.25rem rgba(13,110,253,.25);
    }
    .textarea-container {
        margin-bottom: 1rem;
    }
    .btn-primary {
        
        color: #fff;
        background: #0d6efd;
        border-color: #0d6efd;
        transition: .1s ease-in-out all;
    }
    .btn-primary:hover,
    .btn-primary:active {
        background-color:#0b5ed7;
        border-color: #0a58ca;
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.125)
    }
    .btn {
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        border: none;
        line-height: 1.5;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15),0 1px 1px rgba(0, 0, 0, 0.075);
        text-align: center;
        text-decoration: none;
        border-radius: 0.375rem;
        margin: 0.5rem 0.5rem 0.5rem 0;
    }
    .btn-success {
        color: #fff;
        background-color: #198754;
        border-color: #198754;
    }
    .btn-success:hover {
        background-color: #157347;
        border-color: #146c43;
    }

`


