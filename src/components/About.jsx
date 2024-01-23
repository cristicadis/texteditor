import { AccordionItem } from './AccordionItem';
import { styled } from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import ChevronDownIcon from "../icons/ChevronDownIcon";
import ChevronUpIcon from "../icons/ChevronUpIcon";
const About = () => {
    
    const elementRef = useRef([React.createRef(), React.createRef()]);
    // const linkStyles = {height:elementRef?.current?.getBoundingClientRect()?.height};
   const linkStyles = `{height:${elementRef.current[0]?.current?.getBoundingClientRect()?.height}px}`
   console.log( linkStyles)
  

     

    
  const [data, setData]= useState([
    {   id:0,
        title:'Analyze Your Text',
        text:'This app gives you a way to enhance your text quality.',
        clicked:false,
    },
    {   id:1,
        title:'Your Text 2',
        text:'This app gives you a way to enhance your text quality. 2 This app gives you a way to enhance your text quality. 22 This app gives you a way to enhance your text quality. 2',
        clicked:false,
    }
  ])  
   

    const handleClick = (id) => {    
        const newData= data.map(item=>{     
            if(item.id===id){   
                return {...item, clicked:!item.clicked}
            } else
            if(item.id!==id){
                return {...item, clicked:false}
            } 
            return item;
        })
        setData(newData);
        
    }
    useEffect(() => {
        data.map((item)=>{
            console.log(elementRef.current[item.id].current)
        })
    
  }, []);

    
    

  return (<Wrapper>
    <div className="container">
        <h1>About Us</h1>
        <div className="accordion">
        {data.map((item, index)=>{
            const {title, text, clicked} = item;
            return (
                <div className="accordion-item" key={index}>
                    <button  type="button" className="accordion-button" onClick={()=>handleClick(index)}>
                        <h2>{title} </h2>
                        {clicked ? <ChevronUpIcon/> :<ChevronDownIcon/>}
                    </button>
                    <div className="collapse"  style={{height:'0px'}}>
                        <div className='text' ref={elementRef.current[index]}>
                            <p>{text}</p>
                        </div>
                        
                    </div>
                </div>
                )
        })}
           
            
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
        border: 1px solid #dee2e6;
        border-right: none;
        border-left: none;
        border-top: none;
        
        
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
        
        
    }
    .accordion-item:last-of-type {
        border-bottom-right-radius:0.375rem;
        border-bottom-left-radius:0.375rem;
        border-bottom: none;   
    }
    .collapse {
        overflow: hidden;
        transition: .3s ease-in-out all;
        border-top: 1px solid #dee2e6;
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