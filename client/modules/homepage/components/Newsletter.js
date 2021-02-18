import React, { Component } from "react";

class Newsletter extends Component {
  render() {
    return (
      <div className="form">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-container">
                {/* <div className="above-heading">NEWSLETTER</div> */}
                <h2>1,00,000 Plus Videos have already been sent since 2021 using BuildAR <br />Join 100+ businesses that create videos with beautiful faces</h2>
                {/* Newsletter Form */}
                {/* <form id="newsletterForm" data-toggle="validator" data-focus="false">
                  <div className="form-group">
                    <input type="email" className="form-control-input" id="nemail" required />
                    <label className="label-control" htmlFor="nemail">Email</label>
                    <div className="help-block with-errors" />
                  </div>
                  <div className="form-group checkbox">

                    <div className="help-block with-errors" />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="form-control-submit-button">SUBSCRIBE</button>
                  </div>
                  <div className="form-message">
                    <div id="nmsgSubmit" className="h3 text-center hidden" />
                  </div>
                </form> */}
                {/* end of newsletter form */}
              </div> {/* end of text-container */}
            </div> {/* end of col */}
          </div> {/* end of row */}

        </div> {/* end of container */}
      </div>

    )
  }
}

export default Newsletter;