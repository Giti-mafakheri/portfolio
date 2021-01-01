import React from "react";
import one from "./img/one.png";
import tic from "./img/tic.png";
import ecom from "./img/ecom.png";
import album from "./img/album.png";

export default function Projects() {
  return (
    <div className="projects">
      <div className="project">
        <img src={tic} alt="tic" />
        <h2>Tic Tac Toe</h2>
        <h3 style={{ fontweight: "bold" }}>Brief:</h3>
        <h4>
          A popular game in which you can choose which palyer to start the game
          and keep track of the number of wins for each player
        </h4>
        <h3 style={{ fontweight: "bold" }}>Tech:</h3>
        <h4>javascript, css, html, Jquery</h4>
      </div>
      <div className="project">
        <img src={album} alt="album" />
        <h2>Photo Album</h2>
        <h3 style={{ fontweight: "bold" }}>Brief:</h3>
        <h4>
          A CRUD system used as photo album. You can save your photos in it and
          add adescription for each of them.
        </h4>
        <h3 style={{ fontweight: "bold" }}>Tech:</h3>
        <h4>React, Nodejs, graphql ,typography </h4>
      </div>

      <div className="project">
        <img src={ecom} alt="ecom" />
        <h2>E-Commerce</h2>
        <h3 style={{ fontweight: "bold" }}>Brief:</h3>
        <h4>
          A full e-commerce website. Features include shopping cart, product
          list, shipping, user login
        </h4>
        <h3 style={{ fontweight: "bold" }}>Tech:</h3>
        <h4>React, Redux, Nodejs, mongoodb</h4>
      </div>
    </div>
  );
}
