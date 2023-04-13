import React from "react";
import Card from '../components/Card';

function Home() {
    return (
        <>
            <div className="card-holder">
                <Card message={"how are u?"} />
                <Card message={"Lorum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} />
                <Card message={"another message for the purpose of testing"} />
            </div>
        </>
    )
}

export default Home;