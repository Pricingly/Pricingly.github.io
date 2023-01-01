import React, {useState, useEffect, useRef} from "react";
import "./app.css";

import pricinglyIntroductionShowcasing from "./images/mainPage/Project-Example-Words.png";

export default function Home(){

    // Good practice to have all management under useState()
    const [name, changeName] = useState("Product Calculation Reimagined.");
    const reactHeader = useRef();

    return (
        <>            
            <div className="title-intro">

                <div className="title-intro-headers">
                    <h1 ref={reactHeader}>{name}</h1>
                    <h2>For Visual People</h2>
                </div>

                <img alt="pricingly introdution showcasing" src={pricinglyIntroductionShowcasing} draggable="false" />
            </div>
        </>
    )
} 