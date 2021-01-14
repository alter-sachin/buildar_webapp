import React, { Component } from "react";

class Details extends Component{
    render(){
        return(
            <div id="details" className="basic-1">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="text-container">
                    <h2>Target your customer with personal videos at every step of the customer journey.</h2>
                    <p>Target the right customers for your business with the right personalised video with the help of BuildAR's exclusive technology and deploy efficient video marketing campaigns. Keep your customers happy and loyal.</p>
                    <ul className="list-unstyled li-space-lg">
                      <li className="media">
                        <i className="fas fa-square" />
                        <div className="media-body">Understand customers and meet their requirements</div>
                      </li>
                     
                    </ul>
                    <a className="btn-solid-reg page-scroll" href="sign-up.html">SIGN UP</a>
                  </div> {/* end of text-container */}
                </div> {/* end of col */}
                <div className="col-lg-6">
                  <div className="image-container">
                    <img className="img-fluid" src="images/details.png" alt="alternative" />
                  </div> {/* end of image-container */}
                </div> {/* end of col */}
              </div> {/* end of row */}
            </div> {/* end of container */}
          </div>
        )
    }
}

export default Details;