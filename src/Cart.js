import React from "react";
import * as boot from "react-bootstrap";

export default function Cart(props) {
  return (
    <div className="cardcontainer">
      <boot.Card>
        <boot.Card.Img src={props.Img} alt="tic" />
        <boot.Card.Body>
          <boot.Card.Title>{props.name}</boot.Card.Title>
          <boot.Card.Text>{props.brief}</boot.Card.Text>
          <boot.Card.Text className="techtest">{props.tech}</boot.Card.Text>

          <a href={props.url} target="_blank">
            View Project
          </a>
        </boot.Card.Body>
      </boot.Card>
    </div>
  );
}
