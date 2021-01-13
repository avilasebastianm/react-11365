import React from "react";

export const NavBar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        LOGO
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Acuaticos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Terrestres
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Voladores
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
