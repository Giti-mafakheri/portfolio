import React, { Component } from "react";
import Cart from "./Cart";
import tic from "./img/tic.png";
import album from "./img/album.png";
import ecom from "./img/ecom.png";

export default class Projects extends Component {
  render() {
    const gitProject = [
      {
        pName: "Tic Tac Toe",
        brief:
          "Brief: A popular game in which you can choose which player to start the game and keep track of numbers of wins for each player",
        Img: tic,
        tech: "Tech: javascript, css, html, Jquery",
      },
      {
        pName: "Photo Album",
        brief:
          "Brief: A CRUD system used as photo album. You can save your photos in it and add a description for each of them",
        Img: album,
        tech: "Tech: React, Nodejs, graphql ,typography",
      },
      {
        pName: "E-Commerce",
        brief:
          "Brief: A full e-commerce website. Features include shopping cart, product list, shipping, and user login",
        Img: ecom,
        tech: "Tech: React, Redux, Nodejs, mongoodb",
      },
    ];
    return (
      <div>
        {gitProject.map((pro) => (
          <Cart
            key={pro.pName}
            name={pro.pName}
            brief={pro.brief}
            Img={pro.Img}
            tech={pro.tech}
          />
        ))}
      </div>
    );
  }
}
