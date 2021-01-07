import "./App.css";
import { Link } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { BrowserRouter, Route } from "react-router-dom";
import * as boot from "react-bootstrap";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <boot.Navbar id="nav" bg="light" expand="lg">
          <boot.Navbar.Brand href="/">Home</boot.Navbar.Brand>
          <boot.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <boot.Navbar.Collapse id="basic-navbar-nav">
            <boot.Nav className="mr-auto">
              <boot.Nav.Link href="/about">About</boot.Nav.Link>
              <boot.Nav.Link href="/projects">Projects</boot.Nav.Link>
              <boot.Nav.Link href="/contact">Contact</boot.Nav.Link>
            </boot.Nav>
          </boot.Navbar.Collapse>
        </boot.Navbar>

        <div className="main">
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route path="/Projects" component={Projects}></Route>
          <Route path="/Contact" component={Contact}></Route>
        </div>

        <div className="footer">
          <ul>
            <li>
              <a
                className="footera"
                href="https://github.com/Giti-mafakheri"
                target="_blank"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                className="footera"
                href="https://www.linkedin.com/in/giti-mafakheri/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
