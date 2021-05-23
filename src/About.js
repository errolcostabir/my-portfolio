import { Component } from "react";
import projects from './projectdatabase';
import intern from './internshipdatabase';
import { Link } from "react-router-dom";
import reactjs from './resources/react.png';
import html from './resources/html.png';
import css from './resources/css.png';
import php from './resources/php.png';
import c from './resources/c.png';
import cpp from './resources/cpp.png';
import flutter from './resources/flutter.png';
import java from './resources/java.png';
import js from './resources/js.png';
import node from './resources/node.png';
import python from './resources/python.png';
import sql from './resources/sql.png';
import vid from './resources/github.gif';
import Slider from './slider';
import Fade from 'react-reveal';

class About extends Component {
    constructor(props) {
        super();
        this.state = {
            projects: projects,
            internships: intern
        }
    }
    render() {
        return (
            <div className="container about" >
                <div className="row">
                    <nav className="fixed-top navbar mx-auto about-nav">
                        <div className="container">
                            <Link to="/">Home</Link>
                            <a href="#projects">Projects</a>
                            <a href="#internships">Internships</a>
                        </div>
                    </nav>
                </div>
                <br />
                <br />
                <br />

                <div className="row" id="intro">
                    <div className="card text-center mx-auto border-dark mb-3" style={{ "width": "70vw" }}>
                        <Fade bottom>
                            <p className="card-body about-para">
                                I'm an undergrad Computer Engineering student who lives in Goa.
                                My hobbies include listening to music, singing, photography and I also play the guitar. I enjoy working on frontend as well as backend development.
                                Some of my projects and work experience is listed down below, do check it out.
                        </p>
                        </Fade>
                    </div>
                </div>

                <br />
                <br />
                <h2 className="h2-heading">My Techstack</h2>
                <br />
                <div className="row" style={{ "width": "90vw" }}>
                    <Fade left>
                        <div className="row" style={{ "width": "90vw" }}>
                            <img src={c} alt="..." className="col icon-holder " />
                            <img src={cpp} alt="..." className="col icon-holder " />
                            <img src={java} alt="..." className="col icon-holder " />
                            <img src={js} alt="..." className="col icon-holder " />
                            <img src={python} alt="..." className="col icon-holder " />
                            <img src={php} alt="..." className="col icon-holder " />
                        </div>
                    </Fade>
                    <br />
                    <Fade right>
                        <div className="row" style={{ "width": "90vw" }}>
                            <img src={reactjs} alt="..." className="col icon-holder " />
                            <img src={node} alt="..." className="col icon-holder " />
                            <img src={flutter} alt="..." className="col icon-holder " />
                            <img src={html} alt="..." className="col icon-holder " />
                            <img src={css} alt="..." className="col icon-holder " />
                            <img src={sql} alt="..." className="col icon-holder " />
                        </div>
                    </Fade>
                </div>
                <hr></hr>
                <br />
                <div className="row" id="projects">
                    <div className="row">
                        <h2 className="h2-heading">Projects</h2>
                        <br />
                        <p style={{ "fontFamily": "Comfortaa", "fontSize": "20px" }}>These are some of the projects I have worked on in the past...</p>
                    </div>
                    <div className="row mx-auto" style={{ "width": "80vw" }}>
                        <div className="card mx-auto bg-dark mb-3 about-body" >
                            <Fade bottom>
                                {
                                    this.state.projects.map((project) =>
                                        <ul className="card-body">
                                            <li style={{ "fontWeight": "bold" }}>{project.name}</li>
                                            <p>{project.description}</p>
                                        </ul>
                                    )
                                }
                            </Fade>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="row mx-auto" style={{ "width": "30rem", "textAlign": "center" }}>
                        <div className="row mx-auto">
                            <br />
                            <h4 className="h2-heading" style={{ "fontSize": "35px" }}>Quiz Web App</h4>
                            <br />
                            <img src={vid} alt="..." style={{ "objectFit": "scale-down" }} />
                        </div>
                    </div>
                </div>
                <hr></hr>
                <br />
                <br />
                <div className="row" id="internships">
                    <div className="row">
                        <h2 className="h2-heading">Work Experience</h2>
                        <p style={{ "fontFamily": "Comfortaa", "fontSize": "20px" }}>These are some of the companies I have interned with in the past...</p>
                    </div>
                    <div className="row mx-auto" style={{ "width": "25rem" }}>
                        <div className="card mx-auto  mb-3 about-body" style={{ "borderColor": "black" }}>
                            <Fade bottom>
                                {
                                    this.state.internships.map((intern) =>
                                        <ul className="card-body" >
                                            <li style={{ "color": "black" }}>{intern.company}</li>
                                            <ul>
                                                <p style={{ "color": "black" }}>{intern.title}</p>
                                            </ul>
                                        </ul>
                                    )
                                }
                            </Fade>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <br />
                <h2 className="h2-heading">Photography Collection</h2>
                <br />
                <Slider />
                <hr></hr>

                <div className="container-fluid">
                    <div className="row about-bottom-footer">
                        <p>Errol Costabir | Goa-India</p>
                    </div>
                </div>

            </div >
        );
    }
}

export default About;