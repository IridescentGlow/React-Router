import { Link } from "react-router-dom";
import './styles/Services.module.css';

function Home() {
  return (
    <div className="container">
      <h1>Home</h1>
      <h3>
        <Link to="/" className="nav-link">
          Nav-Bar
        </Link>
      </h3>
    </div>
  );
}

export default Home;