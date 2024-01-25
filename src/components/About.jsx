import { AccordionItem } from './AccordionItem';
import { styled } from "styled-components";
import React, { createRef, useCallback, useEffect, useRef, useState } from "react";
import ChevronDownIcon from "../icons/ChevronDownIcon";
import ChevronUpIcon from "../icons/ChevronUpIcon";

const About = () => {
    const elementRef = useRef([]);
    const [data, setData]= useState([
    {   id:0,
        title:'Analyze Your Text',
        text:'This app gives you a way to enhance your text quality.',
        clicked:false,
    },
    {   id:1,
        title:'Free to Use',
        text:'This is an free counter tool,that provide instant solution of your problem.Maintain the dignity of your text with TEXTUTILIS',
        clicked:false,
    },
    {   id:2,
        title:'Browser Compatible',
        text:'This works in every browser and has abilty to count every type of document.',
        clicked:false,
    }    
]) 
    elementRef.current = data.map((_, i) => elementRef.current[i] ?? createRef());
    
    
 
    const handleClick = (id) => {     
        const newData = data.map((item)=> {
            if(item.id === id){
                return {...item, clicked:!item.clicked}
            } else if(item.id !== id){
                return {...item, clicked:false}
            } else return item;
        })
        setData(newData)
    }


  return (<Wrapper>
    <div className="container">
        <h1>About Us</h1>
        <div className="accordion">
                    {data.map((item, index)=>{
                        const {id, title, text, clicked} = item;
                        return (<div className="accordion-item" key={index}>
                                    <button type='button' className="accordion-button" onClick={()=>handleClick(id)}>
                                        <h2>{data[id].title}</h2>
                                        {data[id].clicked ? <ChevronUpIcon/> :<ChevronDownIcon/>}
                                    </button>
                                    <div  className='collapse'  style={{height:data[id].clicked?`${elementRef.current[id].current.getBoundingClientRect().height}px`:'0px'}}  >
                                        <div className='text' ref={elementRef.current[id]} >
                                        <p>{data[id].text}</p>
                                    </div>
                                    
                                </div>
                            </div>        
                        )
                    })}
                    {/* <button type='button' className="accordion-button" onClick={()=>handleClick(0)}>
                        <h2>{data[0].title}</h2>
                        {data[0].clicked ? <ChevronUpIcon/> :<ChevronDownIcon/>}
                    </button>
                    <div  className='collapse'  style={{height:data[0].clicked?`${elementRef.current[0].current.getBoundingClientRect().height}px`:'0px'}}  >
                        <div className='text' ref={elementRef.current[0]} >
                            <p>{data[0].text}</p>
                        </div>
                        
                    </div>
                    <button type='button' className="accordion-button" onClick={()=>handleClick(1)}>
                        <h2>{data[1].title}</h2>
                        {data[1].clicked ? <ChevronUpIcon/> :<ChevronDownIcon/>}
                    </button>
                    <div  className='collapse'  style={{height:data[1].clicked?`${elementRef.current[1].current.getBoundingClientRect().height}px`:'0px'}}  >
                        <div className='text' ref={elementRef.current[1]} >
                            <p>{data[1].text}</p>
                        </div>
                        
                    </div> */}
                
                
       
           
            
            {/* <div className="accordion-item"></div>
            <div className="accordion-item"></div> */}

        </div>
    </div>
    </Wrapper>
  )
}

export default About

const Wrapper = styled.section`

    .accordion {
        border: 1px solid #dee2e6;
        border-radius: 0.375rem;
        
        svg {
            width: 25px;

        }
        
    }
    .accordion-item {
        border-bottom: 1px solid #dee2e6;
        overflow: hidden;
        
    }
    .accordion-item:first-of-type,
    .accordion-item:first-of-type .accordion-button {
        border-top-left-radius:0.375rem;
        border-top-right-radius:0.375rem;
        
    }
    .accordion-button { 
        cursor: pointer;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 1rem 1rem;
        border: none;
        background: transparent;
        justify-content: space-between;
        border-bottom: 1px solid #dee2e6;
        
        
    }
    .accordion-item:last-of-type {
        border-bottom-right-radius:0.375rem;
        border-bottom-left-radius:0.375rem;
        border-bottom: none;   
    }
    
    .collapse {
        overflow: hidden;
        transition: .3s ease-in-out all;
        margin-top: -1px;
        
        
        
        .text {
            padding: 1rem;
        }
    }
   
   
   



`
    
//       <h2 className="my-3 ">About Us</h2>

//       <div className="accordion" id="accordionExample">
//         <div className="accordion-item">
//           <h2 className="accordion-header">
//             <button
//               className="accordion-button"
//               type="button"
//               style={myStyle}
//               data-bs-toggle="collapse"
//               data-bs-target="#collapseOne"
//               aria-expanded="true"
//               aria-controls="collapseOne"
//             >
//               <strong> Analyze Your Text </strong>
//             </button>
//           </h2>
//           <div
//             id="collapseOne"
//             className="accordion-collapse collapse show"
//             data-bs-parent="#accordionExample"
//             style={myStyle}
//           >
//             <div className="accordion-body" style={myStyle}>
//               This app gives you a way to enhance your text quality.
//             </div>
//           </div>
//         </div>
//         <div className="accordion-item">
//           <h2 className="accordion-header">
//             <button
//               className="accordion-button collapsed"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#collapseTwo"
//               aria-expanded="false"
//               aria-controls="collapseTwo"
//               style={myStyle}
//             >
//               <strong> Free to Use</strong>
//             </button>
//           </h2>
//           <div
//             id="collapseTwo"
//             className="accordion-collapse collapse"
//             data-bs-parent="#accordionExample"
//             style={myStyle}
//           >
//             <div className="accordion-body" style={myStyle}>
//               This is an free counter tool,that provide instant solution of your
//               problem.Maintain the dignity of your text with TEXTUTILIS
//             </div>
//           </div>
//         </div>
//         <div className="accordion-item">
//           <h2 className="accordion-header">
//             <button
//               className="accordion-button collapsed"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#collapseThree"
//               aria-expanded="false"
//               aria-controls="collapseThree"
//               style={myStyle}
//             >
//               <strong>Browser Compatible</strong>
//             </button>
//           </h2>
//           <div
//             id="collapseThree"
//             className="accordion-collapse collapse"
//             data-bs-parent="#accordionExample"
//             style={myStyle}
//           >
//             <div className="accordion-body" style={myStyle}>
//               This works in every browser and has abilty to count every type of
//               document.
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );