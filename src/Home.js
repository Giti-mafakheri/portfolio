import React from "react";
import * as boot from "react-bootstrap";
export default function Home() {
  return (
    <boot.Card>
      <boot.Card.Body>
        <boot.Card.Title>Hello, I'm Giti!</boot.Card.Title>
        <boot.Card.Text>
          {" "}
          My education is in IT and I have been in software idustry for 6 years
          as IT support engineer.
        </boot.Card.Text>

        <boot.Card.Subtitle>
          I enjoy writing code in javascript and its frameworks like react.
        </boot.Card.Subtitle>
      </boot.Card.Body>
    </boot.Card>
  );
}
