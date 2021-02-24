import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
// import { t } from "shared/translations/i18n";
// import Mainlogo from "common/media/icons/Mainlogo"


class NavBar extends Component {
  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        {/* <nav className="navbar navbar-expand-md navbar-custom fixed-top" style={{ backgroundColor: "white" }}>
          <a className="navbar-brand logo-image" href="index.html"><img src="images/Logo_BuildAR.png" alt="alternative" /></a>
          Mobile Menu Toggle Button
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-awesome fas fa-bars" />
            <span className="navbar-toggler-awesome fas fa-times" />
          </button>
          end of mobile menu toggle button
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
        </nav> */}
        <Navbar className="sticky-nav" bg="light" expand="lg" sticky="top">
          <Navbar.Brand href="index.html"><img src="images/Logo_BuildAR.png" alt="alternative" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavDropdown title="Products" className="basic-nav-dropdown">
                <NavDropdown.Item className="nav-dropdown-item" href="#createvideos">Create Videos</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="nav-dropdown-item" href="#personalizevideos">Personalize Videos</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="nav-dropdown-item" href="#api">API</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Use Cases" className="basic-nav-dropdown">
                <NavDropdown.Item className="nav-dropdown-item" href="#sales">Sales</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="nav-dropdown-item" href="#marketing">Marketing</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="nav-dropdown-item" href="#chatbot">Chatbot</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Learn" className="basic-nav-dropdown">
                <NavDropdown.Item className="nav-dropdown-item" href="#casestudies">Case Studies</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="nav-dropdown-item" href="#blogs">Blogs</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="nav-dropdown-item" href="#developer">Developer API</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="nav-sign-in" href="/signin">Sign-In</Nav.Link>
              <Button className="btn btn-dark" href="/register">Sign-Up</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}


export default NavBar;
