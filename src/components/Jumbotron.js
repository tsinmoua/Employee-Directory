import React from "react";

function Jumbotron(props) {
  return (
    <div class="jumbotron">
      <h1 class="display-4">{props.heading}</h1>
    </div>
  );
}

export default Jumbotron;
