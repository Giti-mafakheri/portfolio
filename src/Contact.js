import React from "react";
import ax from "./img/ax.jpg";
import * as boot from "react-bootstrap";
export default function Contact() {
  return (
    <boot.Card>
      <boot.Card.Img
        src={ax}
        style={{ width: "400px", margin: "0 auto", borderRadius: "8em" }}
        alt="ax"
      />
      <boot.Card.Body>
        <boot.Card.Title>Giti Mafakheri</boot.Card.Title>
        <boot.Card.Text>giti.mafakheri@gmail.com</boot.Card.Text>
        <boot.Card.Text className="techtest">+61421000724</boot.Card.Text>
      </boot.Card.Body>
    </boot.Card>
  );
}
