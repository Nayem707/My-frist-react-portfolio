import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <section>
      <div className="container-fluid">
        <h1>Bootstrap Affix Example</h1>
      </div>

      <nav
        className="navbar navbar-inverse"
        data-spy="affix"
        data-offset-top="199"
      >
        <div clasName="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/">WebSiteName</Link>
          </div>
          <div>
            <div className="collapse navbar-collapse" id="myNavbar"></div>
          </div>
        </div>
      </nav>
      {/* <ul className="nav navbar-nav">
                <li className="nav-link">
                  <Link to="/" className="nav-item">
                    Home
                  </Link>
                </li>
                <li className="nav-link">
                  <Link to="/about" className="nav-item">
                    About
                  </Link>
                </li>
                <li className="nav-link">
                  <Link to="/contact" className="nav-item">
                    Contact
                  </Link>
                </li>
              </ul>
              <Outlet /> */}
    </section>
  );
};

export default Navbar;
