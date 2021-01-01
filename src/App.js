import "./App.css";
import { Link } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <div className="header">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Projects">Projects</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="main">
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route path="/Projects" component={Projects}></Route>
          <Route path="/Contact" component={Contact}></Route>
        </div>

        <div className="footer">
          <ul>
            <li>
              <a href="https://github.com/Giti-mafakheri" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <a
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
