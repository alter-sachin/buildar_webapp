import React, { Component } from "react";

class Customers extends Component{
    render(){
        return(
             <div className="slider-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Image Slider */}
              <div className="slider-container">
                <div className="swiper-container image-slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <img className="img-fluid" src="images/customer-logo-1.jpg" alt="alternative" />
                    </div>
                    <div className="swiper-slide">
                      <img className="img-fluid" src="images/customer-logo-2.jpg" alt="alternative" />
                    </div>
                    <div className="swiper-slide">
                      <img className="img-fluid" src="images/customer-logo-3.jpg" alt="alternative" />
                    </div>
                    <div className="swiper-slide">
                      <img className="img-fluid" src="images/customer-logo-4.jpg" alt="alternative" />
                    </div>
                    <div className="swiper-slide" style={{visibility: 'hidden'}}>
                      <img className="img-fluid" src="images/customer-logo-2.png" alt="alternative" />
                    </div>
                    <div className="swiper-slide" style={{visibility: 'hidden'}}>
                      <img className="img-fluid" src="images/customer-logo-3.png" alt="alternative" />
                    </div>
                  </div> {/* end of swiper-wrapper */}
                </div> {/* end of swiper container */}
              </div> {/* end of slider-container */}
              {/* end of image slider */}
            </div> {/* end of col */}
          </div> {/* end of row */}
        </div> {/* end of container */}
      </div> 
        )
    }
}

export default Customers;