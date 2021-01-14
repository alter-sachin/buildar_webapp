import React, { Component } from "react";

class Footer extends Component{
    render(){
        return(
	        <div className="footer">
	          <div className="container">
	            <div className="row">
	              <div className="col-md-4">
	                <div className="footer-col first">
	                  <h4>About BuildAR</h4>
	                  <p className="p-small">BuildAR is an award winning company driven by passion for using AI to create amazing customer experiences.</p>
	                </div>
	              </div> {/* end of col */}
	              <div className="col-md-4">
	                <div className="footer-col middle">
	                  <h4>Important Links</h4>
	                  <ul className="list-unstyled li-space-lg p-small">
	                    <li className="media">
	                      <i className="fas fa-square" />
	                      <div className="media-body"><a className="white" href="https://buildar.in">Buildar.in</a></div>
	                    </li>
	                    <li className="media">
	                      <i className="fas fa-square" />
	                      <div className="media-body">Read our <a className="white" href="terms-conditions.html">Terms &amp; Conditions</a>, <a className="white" href="privacy-policy.html">Privacy Policy</a></div>
	                    </li>
	                  </ul>
	                </div>
	              </div> {/* end of col */}
	              <div className="col-md-4">
	                <div className="footer-col last">
	                  <h4>Contact</h4>
	                  <ul className="list-unstyled li-space-lg p-small">
	                    <li className="media">
	                      <i className="fas fa-map-marker-alt" />
	                      <div className="media-body">+91-9646617007</div>
	                    </li>
	                    <li className="media">
	                      <i className="fas fa-envelope" />
	                      <div className="media-body"><a className="white" href="mailto:team@buildar.live">team@buildar.live</a> <i className="fas fa-globe" /><a className="white" href="#your-link">www.buildar.in</a></div>
	                    </li>
	                  </ul>
	                </div> 
	              </div> {/* end of col */}
	            </div> {/* end of row */}
	          </div> {/* end of container */}
	        </div>
	      
        )
    }
}

export default Footer;