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
        <Navbar className="sticky-nav" bg="white" expand="lg" sticky="top">
          <Navbar.Brand href="index.html"><img src="images/Logo_BuildAR.png" alt="alternative" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavDropdown title="Products" className="basic-nav-dropdown">
                <NavDropdown.Item className="nav-dropdown-item" href="#createvideos">Create Videos</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="nav-dropdown-item" href="#personalizevideos">Personalize Videos</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="nav-dropdown-item" href="/docs">API</NavDropdown.Item>
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
                <NavDropdown.Item className="nav-dropdown-item" href="/docs">Developer API</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="nav-blog" href="/blogs">Blogs</Nav.Link>
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
