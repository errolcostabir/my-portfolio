import { Component } from "react";
import projects from './projectdatabase';
import intern from './internshipdatabase';
import { Link } from "react-router-dom";
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
                            <a href="#internships">Experience</a>
                        </div>
                    </nav>
                </div>
                <br />
                <br />

                <div className="row" id="intro">
                    <div className="text-center mx-auto border-dark mb-2" style={{ "width": "90vw" }}>
                        <Fade bottom>
                            <p className="card-body about-para">
                            I'm an experienced software engineer proficient in delivering robust software solutions. 
                            Upskilled in multiple programming languages and 
                            technologies, with a focus on problem-solving and delivering quality products to the clients. 
                            I'm passionate about staying updated with industry trends and continuously enhancing skills to drive innovation and 
                            efficiency. Proven ability to work collaboratively in agile environments to meet project deadlines and 
                            exceed client expectations. Well, that was about my professional career. During my free time I like to listen to music. 
                            Some of my other hobbies include, cycling, outdoor running, going to gym, photography, singing and I also strum the guitar.  
                        </p>
                        </Fade>
                    </div>
                </div>
                <hr></hr>
                <div className="row" id="projects">
                    <div className="row">
                        <Fade right>
                            <h2 className="h2-heading">Projects</h2>
                        </Fade>
                        <Fade left>
                            <p style={{ "fontFamily": "Comfortaa", "fontSize": "20px" }}>These are some of the projects I have worked on...</p>
                        </Fade>
                    </div>
                    <div className="row mx-auto" style={{ "width": "90vw"}}>
                        <div className="card mx-auto mb-3 about-body" style={{backgroundColor: "#1d2324"}}>
                            <Fade bottom>
                                {
                                    this.state.projects.map((project) =>
                                        <ul className="card-body">
                                            <li style={{ "fontWeight": "bold" }}>{project.name}</li>
                                            <p>{project.description}</p>
                                            <p><span style={{"fontWeight": "bold", color:"white"}}>Tech Stack:</span> {project.language}</p>
                                        </ul>
                                    )
                                }
                            </Fade>
                        </div>
                    </div>
                    </div>
                <hr></hr>
                <br />
                <div className="row" id="internships">
                    <div className="row">
                        <Fade right>
                            <h2 className="h2-heading">Experience</h2>
                        </Fade>
                    </div>
                    <div className="row mx-auto" style={{ "width": "25rem" }}>
                        <div className="card mx-auto  mb-3 about-body" style={{ backgroundColor: "#1d2324" }}>
                            <Fade bottom>
                                {
                                    this.state.internships.map((intern) =>
                                        <ul className="card-body" >
                                            <li style={{ "color": "#cad1d2" }}>{intern.company}</li>
                                            <ul>
                                                <p style={{ "color": "#cad1d2" }}>{intern.title}</p>
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
                <Fade right>
                    <h2 className="h2-heading">Photography Collection</h2>
                </Fade>
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