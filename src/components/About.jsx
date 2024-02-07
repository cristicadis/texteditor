import { styled } from "styled-components";
import React, { createRef, useCallback, useEffect, useRef, useState } from "react";
import ChevronDownIcon from "../icons/ChevronDownIcon";
import ChevronUpIcon from "../icons/ChevronUpIcon";
import { useSelector } from "react-redux";


const About = () => {

    const {mode} = useSelector((state) => state.data)
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
        <div className='accordion'>
                    {data.map((item, index)=>{
                        const {id, title, text, clicked} = item;
                        return (<div className="accordion-item" key={index}>
                                    <button type='button' className={`accordion-button ${mode === 'dark'? 'bg-dark':'bg-light' }`} onClick={()=>handleClick(id)}>
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
            font-weight: 300;
            letter-spacing: 1px;
        }
    }
`
   