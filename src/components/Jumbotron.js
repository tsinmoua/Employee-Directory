import React from "react";

function Jumbotron(props) {
  return (
    <div className="jumbotron">
      <h1 className="display-4">{props.heading}</h1>
    </div>
  );
}

export default Jumbotron;
