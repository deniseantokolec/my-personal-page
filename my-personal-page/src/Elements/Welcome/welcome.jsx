import React from "react";
import {Link} from "react-router-dom"
import "./welcome.css"

function Welcome () {
    return (
        <div className="div">
            <h1 className="welcome2">Welcome!</h1>
            <button className="start"><Link to='/about'>Start to know me</Link></button>
            
        </div>
    )
}

export default Welcome