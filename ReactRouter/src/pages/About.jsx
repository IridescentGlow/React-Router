import { Link } from "react-router-dom";
import './styles/About.module.css';

function About() {
  return (
    <div className="container">
      <h1>About</h1>
      <h3>
        <Link to="/" className="nav-link">
          Nav-Bar
        </Link>
      </h3>
    </div>
  );
}

export default About;
