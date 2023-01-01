import React, {useState, useRef} from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Home.js'
import About from './About.js'
import Calculate from './Calculate.js'
import Navigation from './app-components/Navigation.js';

function App() {
  return (
    // You're always returning on element, so you can wrap everything in a div or a fragment
    <>
      <Navigation />

      <Routes>
        {/* Home is the root component (reusable piece of code) */}

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/calculate" element={<Calculate />} />
      </Routes>

    </>
    )
}

export default App;