import React from "react";
import foto from "./foto-denise.jpg"
import "./about.css"

function About () {
    return(
        <div>
          <h1 className="title">About Me</h1>
          <h2 className="name">Denise Antokolec</h2>
          <h4 className="introduction">
            Maybe you are asking to yourself, Who is <span>Denise Antokolec</span>?<br />
            In this section I would tell you a little bit about me.
          </h4><br />
          <img src={foto} alt="foto" className="foto"/>
          <h3 className="subtitle">My history</h3>
          <p className="text">
            I born in Buenos Aires, Argentina on September 23rd in 1994 <br />
            My dad's name is Ariel and my mum's name is Patricia. And they gave me a youger sister called Natalie.
            
          </p>


        </div>
    )
}

export default About

