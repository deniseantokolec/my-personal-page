import React from "react";
import {Link} from "react-router-dom"
import "./welcome.css"

function Welcome () {
    return (
        <div className="all">
            <div className="div-welcome">
                <h1 className="welcome2">Welcome!</h1>           
            </div>
            <div className="div-context">
                <h4 className="introduction">
                Maybe you are asking to yourself, Who is <span>Denise Antokolec</span>?<br />
                In this web I would tell you a little bit about me.
                </h4>
                
            </div>
            <div className="div-comenzar">
                <button className="start"><Link to='/about'>Start to know me</Link></button>
            </div>
        </div>    
    )
}

export default Welcome