import { Link } from "react-router-dom";
import './App.css';

function Navbar() {
    return (
        <nav className="fixed-top navbar">
            <div className="container">
                <Link class="navbar-brand" style={{ fontFamily: "Comfortaa", color: "#293132", "fontSize": "17px" }} to="/about">About Me</Link>
            </div>
        </nav>
    );
}

export default Navbar;