import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { t } from "shared/translations/i18n";
import Mainlogo from "common/media/icons/Mainlogo"


class Navbar extends Component {
	render() {
		return (
      <div>
			<nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top" style={{backgroundColor:"#726bfa"}}>
        <div className="container">
          <a className="navbar-brand logo-image" href="index.html"><img src="images/mainLogo.png" alt="alternative" style={{height:"10%",width:"10%"}}/></a> 
          {/* Mobile Menu Toggle Button */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-awesome fas fa-bars" />
            <span className="navbar-toggler-awesome fas fa-times" />
          </button>
          {/* end of mobile menu toggle button */}
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#header">HOME <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#features">FEATURES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#details">DETAILS</a>
              </li>
              {/* Dropdown Menu */}          
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle page-scroll" href="#video" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">VIDEO</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="article-details.html"><span className="item-text">ARTICLE DETAILS</span></a>
                  <div className="dropdown-items-divide-hr" />
                  <a className="dropdown-item" href="terms-conditions.html"><span className="item-text">TERMS CONDITIONS</span></a>
                  <div className="dropdown-items-divide-hr" />
                  <a className="dropdown-item" href="privacy-policy.html"><span className="item-text">PRIVACY POLICY</span></a>
                </div>
              </li>
              {/* end of dropdown menu */}
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#pricing">PRICING</a>
              </li>
            </ul>
            <span className="nav-item">
              <a className="btn-outline-sm">
				  <Link to="/signin" style={{color:"white"}}>LOG IN</Link></a>
            </span>
          </div>
        </div> {/* end of container */}
      </nav>
      </div>
		);
	}
}


export default Navbar;
