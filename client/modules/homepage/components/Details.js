import React, { Component } from "react";

class Details extends Component {
  render() {
    return (
      <div id="details" className="basic-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-container">
                <h2>Your Face can talk 24*7 and 30+ Languages</h2>
                <h4>Even when you don't</h4>
                <p>Share your face picture and connect personally with your customer. Make your personal brand stand out</p>
                <ul className="list-unstyled li-space-lg">
                  <li className="media">
                    <i className="fas fa-square" />
                    <div className="media-body">Understand customers and meet their requirements</div>
                  </li>
                </ul>
                <a className="btn-solid-reg page-scroll" href="#casestudies">Read Case Studies</a>
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