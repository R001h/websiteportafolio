import React from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css'

function Navbar(){
    return (
        <div>
            <nav >
                <ul className="navbar">
                    <li><Link to="/Login">Login </Link> </li>
                    <li><Link to="/Home">Portal </Link> </li>
                    <li><Link to="/Register">Sign Up </Link> </li>
                    <li><Link to="/Contact">Contact </Link> </li>
                    <li><Link to="/Register">AboutUs </Link> </li>
                </ul>
            </nav>
        </div>

    )
}

export default Navbar;