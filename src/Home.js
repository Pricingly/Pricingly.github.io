import React, {useState, useEffect, useRef} from "react";
import "./app.css";

import pricinglyIntroductionShowcasing from "./images/mainPage/Allen-Wrench-Example.png";

import Sections from "./app-components/Sections";
import ItemExample from "./images/mainPage/Item-Example.png";

export default function Home(){

    // Good practice to have all management under useState()
    const [subName, changeName] = useState("For Visual People");
    const reactSubName = useRef();

    useEffect(() => {
        reactSubName.current.addEventListener("click", () => {
            changeName("Smile.");
        });
    }, [])

    return (
        <>            
            <div className="title-intro">

                <div className="title-intro-headers">
                    <h1>Product Calculation Reimagined.</h1>
                    <h2 ref={reactSubName}>{subName}</h2>
                </div>

                <img alt="pricingly introdution showcasing" src={pricinglyIntroductionShowcasing} draggable="false" />
            </div>

            {/* Take in an object as a parameter prop */}
            <Sections section={{
                title: "No More Slow Setup.", 
                content: "Pricingly allows you to quickly create items and automatically calculates all these items for you!", 
                image: ItemExample, 
                image_description: "Calculate Item Example",

                styleBackground: {backgroundColor: "white"},
                styleFlex: {flexDirection: "row-reverse"}
            }} />

            {/* Note that CSS Literally Styles Objects */}
            <Sections section={{
                title: "Factor In Everything!", 
                content: "Have Sales Tax? Are you within a budget? We got you covered.", 
                image: ItemExample, 
                image_description: "Calculate Item Example",

                styleBackground: {backgroundColor: "#f6f6f6"},
                styleFlex: {flexDirection: "row"}
            }} />

            <div className="start-calculating">                
                <h1>Ready To Start Calculating?</h1>
                <a href="/calculate">Take Me There!</a> 
            </div>
        </>
    )
} 