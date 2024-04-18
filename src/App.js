import React from 'react';
import './App.css';
import errol from './resources/errol1.jpg';
import Fade from 'react-reveal';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <div className="container home">
      <div className="main-body">
        <div className="img-container">
          <img src={errol} alt="..." />
        </div>
        <Fade bottom cascade>
          <h2 >Hi, I'm Errol</h2>
          <p className="definition">Software Engineer</p>
          <Link class="navbar-brand" style={{ fontFamily: "Comfortaa", color: "#cad1d2", "fontSize": "17px" }} to="/about">About Me</Link>
        </Fade>
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
