import React, { Component } from "react";

class Description extends Component {
  render() {
    return (
      <div className="cards-1">
        <div className="container">
          <div className="row">
            <div className="trusted-by-row">
              <h2 className="trusted-by-header">Trusted By:</h2>
              <div className="trusted-logo-column">
                <a className="trusted-logo"><img src="images/htmedia.jpeg" /></a>
                <a className="trusted-logo"><img src="images/ie.png" /></a>
                <a className="trusted-logo"><img src="images/thub.png" /></a>
                <a className="trusted-logo"><img src="images/mycaptain.png" /></a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="flex-container">
              <div id="accordion">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button className="btn btn-dark" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Personalised Videos for Customers.
          </button>
                    </h5>
                  </div>
                  <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                      Every User is different,
                      target them at the right channel at the right time based on their behavior and likings
                      With A Video.
        </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                      <button className="btn btn-dark collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                        Save Time and Money.
          </button>
                    </h5>
                  </div>
                  <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body">
                      Videos take time to create. Infact weeks!
                      Now do so in just minutes.
        </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <button className="btn btn-dark collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                        API driven Videos.
          </button>
                    </h5>
                  </div>
                  <div id="collapseThree" className="collapse show" aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body">
                      Integrate with our API and create Videos at scale.
                      Connect with your CRM,
                      Database and design scripts that convert.
        </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          {/* <div className="row">
            <div className="accordion" id="myAccordion">
              <div className="panel">
                <button type="button" className="btn btn-danger" data-toggle="collapse" data-target="#collapsible-1" data-parent="#myAccordion">Question 1?</button><br />
                <div id="collapsible-1" className="collapse">
                  <p>1 Etiam posuere quam ac quam. Maecenas aliquet accumsan leo. Nullam dapibus fermentum ipsum. Etiam quis quam. Integer lacinia. Nulla est.</p>
                </div>
                <button type="button" className="btn btn-danger" data-toggle="collapse" data-target="#collapsible-2" data-parent="#myAccordion">Question 2?</button><br />
                <div id="collapsible-2" className="collapse">
                  <p>2 Etiam posuere quam ac quam. Maecenas aliquet accumsan leo. Nullam dapibus fermentum ipsum. Etiam quis quam. Integer lacinia. Nulla est.</p>
                </div>
                <button type="button" className="btn btn-danger" data-toggle="collapse" data-target="#collapsible-3" data-parent="#myAccordion">Question 3?</button><br />
                <div id="collapsible-3" className="collapse">
                  <p>3 Etiam posuere quam ac quam. Maecenas aliquet accumsan leo. Nullam dapibus fermentum ipsum. Etiam quis quam. Integer lacinia. Nulla est.</p>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="row">
            <div className="description-row">
              <h2>Create Videos from Text in 30+ Languages in a few Clicks</h2>
              <h3>Your personal brand ambassadors available 24*7</h3>
              <p><strong>Videos that speak to your customers directly</strong></p>
              <div className="description-1">
                <h3>Personalised Videos for Your Customers.</h3>
                <p>Every User is different,<br />target them at the right channel at the right time based on their behavior and likings<br /> With A Video.</p>
              </div>
              <div className="description-2">
                <h3>Save Time and Money.</h3>
                <p>Videos take time to create. Infact weeks!<br /> Now do so in just minutes. </p>
              </div>
              <div className="description-3">
                <h3>API driven Videos.</h3>
                <p>Integrate with our API and create Videos at scale.<br /> Connect with your CRM,<br />Database and design scripts that convert.</p>
              </div>
            </div>
          </div> */}
          <div className="row">
            <div className="col-lg-12">
              {/* <div className="above-heading">AI Videos</div> */}
              {/* <h2 className="h2-heading">How Companies Are Using BuildAR AI Videos</h2> */}
            </div> {/* end of col */}
          </div> {/* end of row */}
          <div className="row">
            <div className="col-lg-12">
              {/* Card */}
              <div className="card">
                <div className="card-image">
                  <img className="img-fluid" src="images/description-1.png" alt="alternative" />
                </div>
                <div className="card-body">
                  {/* <h4 className="card-title">Video Emails</h4>
                  <p>Send personal messages with Beautiful AI's as your face to increase email open rates. Videos Plus Personal Messaging makes your brand standout</p> */}
                  <h4 className="card-title">Sales</h4>
                  <p>Make your Sales Video Driven</p>
                </div>
              </div>
              {/* end of card */}
              {/* Card */}
              <div className="card">
                <div className="card-image">
                  <img className="img-fluid" src="images/description-2.png" alt="alternative" />
                </div>
                <div className="card-body">
                  {/* <h4 className="card-title">Corporate Communication</h4>
                  <p>Both Internal Videos and External brand videos can now be created at the fraction of the cost. You do not need to hire any actors or directors.</p> */}
                  <h4 className="card-title">Marketing</h4>
                  <p>Personalised messages sent at the right channel</p>
                </div>
              </div>
              {/* end of card */}
              {/* Card */}
              <div className="card">
                <div className="card-image">
                  <img className="img-fluid" src="images/description-3.png" alt="alternative" />
                </div>
                <div className="card-body">
                  {/* <h4 className="card-title">Expressive Chatbots</h4>
                  <p>Now AI has a face. Have a 24*7 available personel on your website. You can now create News with videos and a beautiful presenter.</p> */}
                  <h4 className="card-title">Expressive Chatbots</h4>
                  <p>We remember faces more than just words on a screen</p>
                </div>
              </div>
              {/* end of card */}
            </div> {/* end of col */}
          </div> {/* end of row */}
        </div> {/* end of container */}
      </div >
    )
  }
}

export default Description;