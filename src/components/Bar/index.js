import './Bar.css';
import React from "react";

function Bar() {
    return (
        <section className="bar-bg">
            <img className="abt-img" alt="filler" src="https://www.sfspca.org/wp-content/uploads/2023/04/11a9ff30-6e7e-438c-a547-f27cc5fc4f01.jpg"></img>
            
            <div className="bar-txt-div">
                <h2 className="bar-title">Header</h2>
                <p className="bar-body">Body</p>
            </div>    
              
        </section>
    )
}

export default Bar;