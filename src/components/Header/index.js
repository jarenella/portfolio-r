import './Header.css';
import React from "react";
const logo = "https://cdn-icons-png.flaticon.com/512/2579/2579272.png";

function NavBar() {
    return (
        <header className="header">
            <a href=" "><img id="navbar-icon" src={logo} className="App-logo" alt="logo" /></a>
            <nav class="navbar">
                <a className="navbar-btn" href="/">Home</a>
                <a className="navbar-btn" href="test">Projects</a>
                <a className="navbar-btn" href="about">About</a>
                <a className="navbar-btn" href="contact">Contact</a>
            </nav>
        </header>
    )
}

export default NavBar;