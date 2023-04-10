import './Card.css';
import React from "react";

function Card() {
    return (
        <section className="card">
            <a href="test" className="card-a">
                <div className="card-div">
                    <h1 className="card-header">AUTO MAILER</h1>
                    <p className="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </a>
        </section>
    )
}

export default Card;