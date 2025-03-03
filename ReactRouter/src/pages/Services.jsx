import { Link } from "react-router-dom";
import "./styles/Home.module.css";

function Services() {
  return (
    <div className="container">
      <h1>Services</h1>
      <h3>
        <Link to="/" className="nav-link">
          Nav-Bar
        </Link>
      </h3>
    </div>
  );
}

export default Services;
