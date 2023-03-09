import React from "react";
import {Link} from "react-router-dom"
import "./nav.css"

function Nav (){
    return(
        <div className="Nav">
            <ul className="Nav-list">
            <li className="about"><Link to={'/'}>About me</Link></li>
                <li className="work"><Link to={'/experience'}>Work Experience</Link></li>
                <li className="SandL"><Link to={'/skills-lenguages'}>Skills and Lenguages</Link></li>
                <li className="courses"><Link to={'/courses'}>Courses</Link></li>
            </ul>
        </div>
    )
}

export default Nav