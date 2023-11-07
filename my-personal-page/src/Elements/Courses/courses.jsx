import React from "react";
import './courses.css'

function Courses () {
    return(
    <div className="all3">
        <div className="header-courses">
            <h1 className="title2">Courses</h1>
        </div>
        <div className="courses-cuerpo">
            <h3 className="subtitle2">Front-end developer</h3>
            <p className="text5"> <span className="title5">Institute:</span> Codehouse</p>
            <p className="text6"> <span className="title6">Start date:</span> 2021</p>
            <p className="text7"> <span className="title7">SEnd date:</span> 2022</p>
            <p className="text8"> <span className="title8">Content:</span>
                <ul className="content-list">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </p>
        </div>
    </div>
    )
}

export default Courses

