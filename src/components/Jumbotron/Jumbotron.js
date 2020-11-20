import React from "react";
import "./style.css";

function Jumbotron(props) {
  return (
    <div className="jumbotron">
      <h1 className="display-1">{props.heading}</h1>
      <h2 className="display-4">{props.heading2}</h2>
    </div>
  );
}

export default Jumbotron;
