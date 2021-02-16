import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (

      <div>
        <header id="header" className="header">
          <div className="header-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-xl-6">
                  <div className="text-container">
                    <h2 className="text-header">Create Videos From Text
                     <br />In Few Minutes
                     <br />In 30 Plus Languages.</h2>
                    <p className="p-large">Type a script, Choose A Model. Your Video Is Created.<br />Create Thousands of Videos without hiring actors.<br />Directors or filmCrew</p>
                    <form>
                      <div class="form-group">
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                      </div>
                      <a className="btn-solid-lg page-scroll" href="#getstarted">GET STARTED</a>
                    </form>
                  </div> {/* end of text-container */}
                </div> {/* end of col */}
                <div className="col-lg-5 col-xl-6">
                  <div className="image-container">
                    <div className="img-wrapper">
                      <div className="w-embed">
                        <video autoPlay playsInline height={530} width={500} loop muted poster="https://www.buildar.in/assets/videos/home.mp4" style={{ height: 'auto', maxWidth: '90%', marginTop: '1.5rem' }}>
                          <source src="https://www.buildar.in/assets/videos/home.mp4" type="video/webm" />
                          <source src="https://www.buildar.in/assets/videos/home.mp4" type="video/mp4" />
                              Sorry, your browser doesn’t support embedded videos.
                            </video>
                      </div>
                      {/*  <img class="img-fluid" src="images/header-software-app.png" alt="alternative"> */}
                    </div> {/* end of img-wrapper */}
                  </div> {/* end of image-container */}
                </div> {/* end of col */}
              </div> {/* end of row */}
            </div> {/* end of container */}
          </div> {/* end of header-content */}
        </header> {/* end of header */}
        <svg className="header-frame" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1920 310"><defs><style dangerouslySetInnerHTML={{ __html: ".cls-1{fill:#726bfa;}" }} /></defs><title>header-frame</title><path className="cls-1" d="M0,283.054c22.75,12.98,53.1,15.2,70.635,14.808,92.115-2.077,238.3-79.9,354.895-79.938,59.97-.019,106.17,18.059,141.58,34,47.778,21.511,47.778,21.511,90,38.938,28.418,11.731,85.344,26.169,152.992,17.971,68.127-8.255,115.933-34.963,166.492-67.393,37.467-24.032,148.6-112.008,171.753-127.963,27.951-19.26,87.771-81.155,180.71-89.341,72.016-6.343,105.479,12.388,157.434,35.467,69.73,30.976,168.93,92.28,256.514,89.405,100.992-3.315,140.276-41.7,177-64.9V0.24H0V283.054Z" /></svg>
      </div>

    )
  }
}

export default Hero;