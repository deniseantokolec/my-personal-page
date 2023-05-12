import React from "react";
import foto from "./foto-denise.jpg"
import "./about.css"

function About () {
  return(
    <div className="all2">
      <div className="header">
        <h1 className="title">About Me</h1>
        <h2 className="name">Denise Antokolec</h2>
      </div>
      <div className="img"><img src={foto} alt="foto" className="foto"/></div>
      <div className="cuerpo">
        <h3 className="subtitle">My history</h3>
        <p className="text">
          I born in Buenos Aires, Argentina on September 23rd in 1994 <br />
          My dad's name is Ariel and my mum's name is Patricia. And they gave me a youger sister called Natalie.
              
        </p>
      </div>
    </div>
  )
}

export default About

