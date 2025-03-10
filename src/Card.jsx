import React from "react";
import Avatar from "./Avatar";

function Card(props) {
  return (
    <div className="card glass-blur">
      <Avatar img={props.img} />
      <h2 className="name">{props.name}</h2>
      <p className="description">{props.description}</p>
    </div>
  );
}

export default Card;