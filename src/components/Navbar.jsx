import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logos1.png";   // <-- IMPORT LOGO HERE

export default function Navbar() {
  return (
    <nav className="nav">

      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="AYLEN Pharma Logo" className="logo-img" />
        </Link>
        <span className="logo-text">AYLEN Pharmaceutical Pvt. Ltd.</span>
      </div>

      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/distributors">Distributors</NavLink></li>
        <li><NavLink to="/career">Career</NavLink></li>

        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>

    </nav>
  );
}
