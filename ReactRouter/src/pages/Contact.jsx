import { Link } from "react-router-dom";
import './styles/Contact.module.css';

function Contact() {
  return (
    <div className="container"> 
      <h1>Contact</h1>
      <h3>
        <Link to="/" className="nav-link">
          Nav-Bar
        </Link>
      </h3>
    </div>
  );
}

export default Contact;
