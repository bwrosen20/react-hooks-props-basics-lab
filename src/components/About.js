import React from "react";
import Links from "./Links"




function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* {props.bio===null||props.bio===" "? null : <p>{props.bio}</p>} */}
      {/* {props.bio ? <p>{props.bio}</p> : null} */}
      {props.bio && <p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links linkedin={props.linkedin} github= {props.github}/>
    </div>
  );
}

export default About;
