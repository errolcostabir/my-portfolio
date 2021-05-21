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

class About extends Component {
    constructor(props) {
        super();
        this.state = {
            projects: projects,
            internships: intern
        }
    }
    componentDidMount() {
        console.log(this.state.projects);
        console.log(this.state.internships);
    }
    render() {
        return (
            <div className="container about">
                <div className="row">
                    <nav className="fixed-top navbar about-nav">
                        <div className="container">
                            <Link to="/">Home</Link>
                            <a href="#intro">Intro</a>
                            <a href="#projects">Projects</a>
                            <a href="#internships">Internships</a>
                        </div>
                    </nav>
                </div>
                <br />
                <br />
                <br />
                <div className="row" id="intro">
                    <div className="card text-center mx-auto border-dark mb-3" style={{ "width": "50rem" }}>
                        <p className="card-body about-para">I'm a Final Year Computer Engineering student of Padre Conceicao College of Engineering.
                        During my free time I enjoy listening to music, singing and playing the guitar.
                        I do frontend as well as backend web/app development</p>
                    </div>
                </div>
                <br />
                <br />
                <div>
                    <h2 className="h2-heading">Tech Stack/Programming languages I work with...</h2>
                    <br />
                    <div className="row">
                        <img src={c} className="icon-holder col" />
                        <img src={cpp} className="icon-holder col" />
                        <img src={java} className="icon-holder col" />
                        <img src={js} className="icon-holder col" />
                        <img src={python} className="icon-holder col" />
                        <img src={php} className="icon-holder col" />
                    </div>
                    <br />
                    <div className="row">
                        <img src={reactjs} className="icon-holder col" />
                        <img src={node} className="icon-holder col" />
                        <img src={flutter} className="icon-holder col" />
                        <img src={html} className="icon-holder col" />
                        <img src={css} className="icon-holder col" />
                        <img src={sql} className="icon-holder col" />
                    </div>
                </div>
                <hr />
                <br />
                <div className="row" id="projects">
                    <div className="row">
                        <h2 className="h2-heading">Projects</h2>
                        <br />
                        <p style={{ "fontFamily": "Comfortaa" }}>These are some of the projects I have worked on in the past...</p>
                    </div>
                    <div className="row mx-auto" style={{ "width": "70rem" }}>
                        <div className="card mx-auto bg-dark mb-3 about-body" >
                            {
                                this.state.projects.map((project) =>
                                    <ul className="card-body">
                                        <li>{project.name}</li>
                                        <ul>
                                            <li>{project.description}</li>
                                        </ul>
                                    </ul>
                                )
                            }
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="row mx-auto" style={{ "width": "30rem", "textAlign": "center" }}>
                        <br />
                        <h4 className="h2-heading" style={{ "fontSize": "35px" }}>Quiz Web App</h4>
                        <br />
                        <img src={vid} alt="..." style={{ "objectFit": "scale-down" }} />
                    </div>
                </div>
                <hr />
                <br />
                <br />
                <div className="row" id="internships">
                    <div className="row">
                        <h2 className="h2-heading">Work Experience</h2>
                        <p style={{ "fontFamily": "Comfortaa" }}>Here are some of the companies I have interned at in the past...</p>
                    </div>
                    <div className="row mx-auto" style={{ "width": "30rem" }}>
                        <div className="card mx-auto bg-dark mb-3 about-body">
                            {
                                this.state.internships.map((intern) =>
                                    <ul className="card-body">
                                        <li>{intern.company}</li>
                                        <ul>
                                            <li>{intern.title}</li>
                                        </ul>
                                    </ul>
                                )
                            }
                        </div>
                    </div>
                </div>
                <hr />
                <br />
                <div className="container-fluid">
                    <div className="row about-bottom-footer">
                        <p>Errol Costabir | Goa-India</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default About;