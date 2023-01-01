import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// To learn: 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const box_container = document.querySelector('.box-container');

console.log(box_container);