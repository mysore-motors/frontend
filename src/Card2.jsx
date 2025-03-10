import React from "react";
import Avatar from "./Avatar";

function Card2(props) {
  return (
    <div className="card glass-blur">
      <Avatar img={props.img} />
      <h2 className="card2-name">{props.name}</h2>
      
    </div>
  );
}

export default Card2;