import React, { Component } from 'react'

class Sticky extends Component {
    render() {
        return (
            <div className="sticky">
                <div className="flex-container">
                    <div className="flex-container-right">
                        <div className="sticky-element">
                            <div className="img-wrapper">
                                <div className="w-embed">
                                    <video autoPlay playsInline height={930} width={900} loop muted poster="https://www.buildar.in/assets/videos/home.mp4" style={{ height: 'auto', maxWidth: '90%', marginTop: '1.5rem' }}>
                                        <source src="https://www.buildar.in/assets/videos/home.mp4" type="video/webm" />
                                        <source src="https://www.buildar.in/assets/videos/home.mp4" type="video/mp4" />
                                            Sorry, your browser doesn’t support embedded videos.
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-container-left">
                        <ul className="sticky-list">
                            <li>
                                <h3>Personalised Videos for Your Customers.</h3>
                                <p>Every User is different,target them at the right<br />
                                   channel at the right time based on their behavior<br />
                                   And likings. With A VIdeo.
                                </p>
                            </li>
                            <li>
                                <h3>Save Time and Money.</h3>
                                <p>
                                    Videos take time to create. Infact weeks!<br />
                                    Now do so in just minutes.
                                </p>
                            </li>
                            <li>
                                <h3>API driven Videos.</h3>
                                <p>
                                    Integrate with our API and create<br />
                                    Videos at scale. Connect with your CRM,<br />
                                    Database and design scripts that convert.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sticky
