import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Home } from './Home';
// import About from './About';
// import Projects from './Projects';
// import Contact from './Contact';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { useRef } from 'react'; 

function App() {
  return (
    <div className="App">
      <Home/>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
      <img className="cat-pic" src="https://i.pinimg.com/474x/57/23/c8/5723c86aed5d1c9db9d74c3d8b7aa347.jpg" alt="cat-image"></img>
      <img src="https://media.tenor.com/RdCh8-EI1mEAAAAj/dance.gif"></img>
        <a className="cat-pic-link" href="https://i.pinimg.com/474x/57/23/c8/5723c86aed5d1c9db9d74c3d8b7aa347.jpg"> Meet Kitty </a>
      </header>
    </div>
  );
}

export default App;
