import React from "react";
import "./index.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <ul className="nav-links">
          <li><a href="#">Road Map</a></li>
          <li><a href="#">Documentação</a></li>
          <li><a href="#">Indique</a></li>
          <li><a href="#">Configurações</a></li>
        </ul>
      </div>
      <div className="navbar-right">
      </div>
    </nav>
  );
};

export default Navbar;
