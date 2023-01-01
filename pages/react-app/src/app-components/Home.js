import React from "react";
import Navigation from "./Navigation";
import "./../app.css";

export default function Home(){
    return (
        // Good practice to wrap jsx in an empty tag so you don't have to use a div        
        <>
        <Navigation />
        
        {/* We use className over class because class is a reserved word in JavaScript */ }
        
        </>
    )
}