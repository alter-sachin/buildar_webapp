import React, { Component } from "react";

class Newsletter extends Component {
  render() {
    return (
      <div className="form">
        <div className="btn-case-studies">
          <a className="btn-solid-reg page-scroll" href="#casestudies">Read Case Studies</a>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-container">
                {/* <div className="above-heading">NEWSLETTER</div> */}
                <h2>1,00,000 Plus Videos have already been sent since 2021 using BuildAR <br />Join 100+ businesses that create videos with beautiful faces</h2>
              </div> {/* end of text-container */}
            </div> {/* end of col */}
          </div> {/* end of row */}

        </div> {/* end of container */}
      </div>

    )
  }
}

export default Newsletter;