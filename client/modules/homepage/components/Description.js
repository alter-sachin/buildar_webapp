import React, { Component } from "react";

class Description extends Component{
    render(){
        return(
          <div className="cards-1">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="above-heading">AI Videos</div>
                  <h2 className="h2-heading">How Companies Are Using BuildAR AI Videos</h2>
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
                      <h4 className="card-title">Video Emails</h4>
                      <p>Send personal messages with Beautiful AI's as your face to increase email open rates. Videos Plus Personal Messaging makes your brand standout</p>
                    </div>
                  </div>
                  {/* end of card */}
                  {/* Card */}
                  <div className="card">
                    <div className="card-image">
                      <img className="img-fluid" src="images/description-2.png" alt="alternative" />
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">Corporate Communication</h4>
                      <p>Both Internal Videos and External brand videos can now be created at the fraction of the cost. You do not need to hire any actors or directors.</p>
                    </div>
                  </div>
                  {/* end of card */}
                  {/* Card */}
                  <div className="card">
                    <div className="card-image">
                      <img className="img-fluid" src="images/description-3.png" alt="alternative" />
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">Expressive Chatbots</h4>
                      <p>Now AI has a face. Have a 24*7 available personel on your website. You can now create News with videos and a beautiful presenter.</p>
                    </div>
                  </div>
                  {/* end of card */}
                </div> {/* end of col */}
              </div> {/* end of row */}
            </div> {/* end of container */}
          </div> 
        )
    }
}

export default Description;