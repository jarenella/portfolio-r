import './Card.css';
import React from "react";

function Card(props) {
    const message = props.message;

    return (
        <section className="card">
            <a href="test" className="card-a">
                <div className="card-div">
                    <h1 className="card-header">AUTO MAILER</h1>
                    <p className="card-body">{message}</p>
                </div>
            </a>
        </section>
    )
}

export default Card;