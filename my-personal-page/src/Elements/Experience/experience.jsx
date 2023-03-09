
import React from "react";
import "./experience.css"

function Experience () {
    return(
        <div>
            <h1 className="heading">Work Experience</h1>
            <h2 className="experience1">Financial Analyst</h2>
            <p className="text1"> <span className="title1">Company:</span> ThriveDx</p>
            <p className="text2"> <span className="title2">Start date:</span> 10/2022</p>
            <p className="text3"> <span className="title3">Start end:</span> present</p>
            <p className="text4"> <span className="title4">Experience:</span> 
             <ul className="experience-list1">
                <li>Financial analysis</li>
                <li>Billing</li>
                <li>Invoice report</li>
                <li>Invoice report analysis</li>
                <li>Business analysis</li>
                <li>Netsuite</li>
                <li>Hubspot</li>
             </ul>
            </p>
        </div>
    )
}

export default Experience

