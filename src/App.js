import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import './App.css';
import errol from './resources/errol.jpg';

function App() {
  return (
    <div className="container home">
      <Navbar />
      <br />
      <div className="main-body">
        <div className="img-container">
          <img src={errol} alt="..." />
        </div>
        <br />
        <br />
        <h2 >Hi, I'm Errol</h2>
      </div>
      <div className="footer">
        <div className="top-footer row">
          <a className="col" href="https://www.instagram.com/errolcostabir">Instagram</a><br />
          <a className="col" href="https://www.github.com/errolcostabir">GitHub</a><br />
          <a className="col" href="https://in.linkedin.com/in/errolcostabir">LinkedIn</a><br />
        </div>
        <div className="bottom-footer">
          <p>GOA | INDIA</p>
        </div>
      </div>
    </div>
  );
}

export default App;
