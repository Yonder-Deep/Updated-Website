import { Link } from "react-router-dom";
import "./header.css";
import logo from "../assets/BlackonWhite.inverted.png";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="brand">
        <img
          className="logo"
          src={logo}
          alt="Yonder Deep logo"
        />
      </Link>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/join">Join</Link>

        <div className="navDropdown">
          <button
            type="button"
            className="dropdownMain"
            aria-haspopup="true"
          >
            Projects
          </button>

          <div className="dropdownMenu">
            <Link to="/projects/auv">AUV</Link>
            <Link to="/projects/usv">USV</Link>
            <Link to="/projects/robosub">Triton RoboSub</Link>
          </div>
        </div>

        <Link to="/sponsor">Sponsor</Link>
      </nav>
    </header>
  );
}