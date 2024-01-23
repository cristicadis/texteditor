import ChevronDownIcon from "../icons/ChevronDownIcon";
import ChevronUpIcon from "../icons/ChevronUpIcon";
import React, { useRef, useState } from "react";

export function AccordionItem({title, text, id}) {
    const [active, setActive] = useState(null);
    const buttonRef = useRef(null)

    const handleClick = (e) => {
        setActive(e.target.id);
        
    }
    console.log(buttonRef?.current?.id)
  return <div className="accordion-item">
                <button ref={buttonRef} id={id} type="button" className="accordion-button" onClick={handleClick}>
                     <h2>{title} </h2>
                     {active==buttonRef?<ChevronDownIcon />:<ChevronUpIcon/>}
                </button>
                <div className="collapse">
                    <p>{text}</p>
                </div>
            </div>;
}
  