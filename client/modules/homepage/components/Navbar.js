import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { t } from "shared/translations/i18n";
import Mainlogo from "common/media/icons/Mainlogo"


class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-custom fixed-top" style={{ backgroundColor: "white" }}>
          <div className="container">
            <a className="navbar-brand logo-image" href="index.html"><img src="images/Logo_BuildAR.png" alt="alternative" style={{ height: "70%", width: "70%" }} /></a>
            {/* Mobile Menu Toggle Button */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-awesome fas fa-bars" />
              <span className="navbar-toggler-awesome fas fa-times" />
            </button>
            {/* end of mobile menu toggle button */}
            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle page-scroll" href="#products" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">Products</a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href=""><span className="item-text">Create Videos</span></a>
                    <div className="dropdown-items-divide-hr" />
                    <a className="dropdown-item" href=""><span className="item-text">Personalize Videos</span></a>
                    <div className="dropdown-items-divide-hr" />
                    <a className="dropdown-item" href=""><span className="item-text">API</span></a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle page-scroll" href="#usecases" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">Use Cases</a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href=""><span className="item-text">Sales</span></a>
                    <div className="dropdown-items-divide-hr" />
                    <a className="dropdown-item" href=""><span className="item-text">Marketing</span></a>
                    <div className="dropdown-items-divide-hr" />
                    <a className="dropdown-item" href=""><span className="item-text">Chatbot</span></a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle page-scroll" href="#learn" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">Learn</a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href=""><span className="item-text">Case Studies</span></a>
                    <div className="dropdown-items-divide-hr" />
                    <a className="dropdown-item" href=""><span className="item-text">Blogs</span></a>
                    <div className="dropdown-items-divide-hr" />
                    <a className="dropdown-item" href=""><span className="item-text">Developer API</span></a>
                  </div>
                </li>
                <li className="nav-item">
                  <Link to="/signin" className="nav-link page-scroll" >Sign in</Link>
                </li>
              </ul>
              <span className="nav-item">
                <Link to="/register" className="btn-outline-sm">Sign up</Link>
              </span>
            </div>
          </div>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
        </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}


export default Navbar;
