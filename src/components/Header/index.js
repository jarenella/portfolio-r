import React from "react";
const logo = "https://cdn-icons-png.flaticon.com/512/2579/2579272.png";

function NavBar() {
    const headerCSS = {
        position: "fixed",
        width: "100%",
        zIndex: "3",
        top: "0px",
        backgroundColor: "rgb(39 39 42)",
        display: "flex",
    }
    const logoCSS = {
        width: "50px",
        height: "50px",
        display: "inline",
        margin: "1rem",
        alignItems: "center",
    }
    const navbarCSS = {
        display: "inline-flex",
    }
    const buttonsCSS = {
        color: "rgb(255 255 255)",
        padding: "0.5rem",
        borderRadius: "0.375rem",
        alignItems: "center",
        display: "inline-flex",
        textDecoration: "none",
        marginTop: "8%",
        marginBottom: "8%",
        //on-hover & on-focus & font family styling can be found in App.css
    }
    
    return (
        <header style={headerCSS} className="App-header">
            <img id="navbar-icon" style={logoCSS} src={logo} className="App-logo" alt="logo" />
            <nav style={navbarCSS}>
                <a style={buttonsCSS} className="navbar-btn" href="#">Home</a>
                <a style={buttonsCSS} className="navbar-btn" href="#">Projects</a>
                <a style={buttonsCSS} className="navbar-btn" href="#">About</a>
                <a style={buttonsCSS} className="navbar-btn" href="#">Contact</a>
            </nav>
        </header>
    )
}

export default NavBar;