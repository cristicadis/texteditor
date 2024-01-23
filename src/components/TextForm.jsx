import React, { useState } from "react";
import { styled } from "styled-components";


const TextForm = () => {
const [text, setText] = useState(" ");

    const handleChange = (e) => {
        const {value} = e.target;
        setText(value);

    }
    const handleUpClick = () => {
        
    }
    const handleLoClick = () => {
        
    }
    const handleClear = () => {
        
    }
    const handleCopy = () => {
        
    }
    
  return (
    
    <Wrapper>
      <div className="container"  >
        <h1>Enter the text to analyze below</h1>
        <div className="textarea-container">
          <textarea
            className="form-control"
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



// export default function TextForm(props) {
//   const handleUpClick = () => {
//     // console.log("Uppercase was clicked," + text);
//     let newText = text.toUpperCase();
//     setText(newText)
//     props.showAlert("Converted to UpperCase!", "success");
//   };
//   const handleLoClick = () => {
//     let newText = text.toLowerCase();
//     setText(newText)
//     props.showAlert("Converted to LowerCase!","success");
//   }
//   const handleClear = () => {
//     let newText = ' ';
//     setText(newText)
//     props.showAlert("Text has been cleared", "success");
//   }
  

//   const handleonChange = (event) => {
//     // console.log("On change  ")
//     setText(event.target.value);
//   };

//   const handleCopy = ()=>{
//     console.log("I am copy");
//      var text = document.getElementById("myBox");
//      text.select();
//      text.setSelectionRange(0,9999);
//      navigator.clipboard.writeText(text.value);
//      props.showAlert("Copied to clipboard", "success");
//   }
//   const [text, setText] = useState(" ");

//   return (
//     <>
//       <div className="container"   style={{color: props.mode === 'dark' ?  'white':'black'}}>
//         <h1>{props.heading} </h1>
//         <div className="mb-3">
//           <textarea
//             className="form-control"
//             value={text}
//             onChange={handleonChange}
//             style={{backgroundColor: props.mode === 'dark' ?  'black':'white', color: props.mode === 'dark' ?  'white':'black'}}
//             id="myBox"
//             rows="8"
//           ></textarea>
//         </div>
//         <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
//           Convert To Uppercase
//         </button>
//         <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
//           Convert To Lowercase
//         </button>
//         <button className="btn btn-primary mx-2 my-2" onClick={handleClear}>
//           Clear Text
//         </button>
//         <button className="btn btn-success mx-2 my-2" onClick={handleCopy}>
//           COPY
//         </button>
//       </div>
//       <div className="container my-3" style={{color: props.mode === 'dark' ?  'white':'black'}}>
//         <h1>Your Text Summary</h1>
//         <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
//         {/* {<p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes to read</p>} */}
//         <h3>Preview</h3>
//         <p>{text.length>0?text:"Enter something in the textarea to preview it here! "}</p>
//       </div>
//     </>
//   );
// }