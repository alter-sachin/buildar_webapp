import React, { Component } from 'react'
import $ from 'jquery'

const data = [
    {
        id: 1,
        url: "https://www.dreal.in/assets/videos/home.mp4"
    },
    {
        id: 2,
        url: "https://www.dreal.in/assets/videos/home.mp4"
    },
    {
        id: 3,
        url: "https://www.dreal.in/assets/videos/home.mp4"
    },
]
const Sticky = () => {
    $.fn.isInViewport = function () {
        let elementTop = ($(this).offset() || { "top": NaN }).top;
        let elementBottom = elementTop + $(this).outerHeight();

        let viewportTop = $(window).scrollTop();
        let viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    var isActive = true
    function toggle(id) {
        document.getElementById("source").src = data[id - 1].url
        document.getElementById("sticky-player").load();
        if (id === 1 || id === 3) {
            isActive = false
        }
        else if (id === 2) {
            isActive = true
        }
        // console.log(`Active ${isActive} , id ${id}`);
    }

    $(window).scroll(function () {
        if ($('#view1').isInViewport() && isActive) {
            toggle(1)
        } else if ($('#view2').isInViewport() && !isActive) {
            toggle(2)
        }
        else if ($('#view3').isInViewport() && isActive) {
            toggle(3)
        }
    });
    return (
        <div className="sticky">
            <div className="flex-container">
                <div className="flex-container-right">
                    <div className="sticky-element">
                        <div className="img-wrapper">
                            <div className="w-embed">
                                <video
                                    id="sticky-player"
                                    autoPlay
                                    playsInline
                                    height={930}
                                    width={900}
                                    loop
                                    muted
                                    poster="https://www.buildar.in/assets/videos/home.mp4"
                                    style={{ height: 'auto', maxWidth: '90%', marginTop: '1.5rem' }}
                                >
                                    <source id="source" src="https://www.buildar.in/assets/videos/home.mp4" type="video/webm" />
                                    <source id="source" src="https://www.buildar.in/assets/videos/home.mp4" type="video/mp4" />
                                            Sorry, your browser doesn’t support embedded videos.
                                    </video>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-container-left">
                    <ul className="sticky-list">
                        <li className="sticky-one">
                            <h3 >Personalised Videos for Your Customers.</h3>
                            <p id="view1">Every User is different,target them at the right<br />
                                   channel at the right time based on their behavior<br />
                                   And likings. With A VIdeo.
                            </p>
                            <div className="mobile-player">
                                <div className="w-embed">
                                    <video
                                        id="sticky-player"
                                        autoPlay
                                        playsInline
                                        height={930}
                                        width={900}
                                        loop
                                        muted
                                        poster="https://www.buildar.in/assets/videos/home.mp4"
                                        style={{ height: 'auto', maxWidth: '90%', marginTop: '1.5rem' }}
                                    >
                                        <source id="source" src="https://www.buildar.in/assets/videos/home.mp4" type="video/webm" />
                                        <source id="source" src="https://www.buildar.in/assets/videos/home.mp4" type="video/mp4" />
                                            Sorry, your browser doesn’t support embedded videos.
                                    </video>
                                </div>
                            </div>
                        </li>
                        <li className="sticky-two">
                            <h3 >Save Time and Money.</h3>
                            <p id="view2">
                                Videos take time to create. Infact weeks!<br />
                                    Now do so in just minutes.
                            </p>
                            <div className="mobile-player">
                                <div className="w-embed">
                                    <video
                                        id="sticky-player"
                                        autoPlay
                                        playsInline
                                        height={930}
                                        width={900}
                                        loop
                                        muted
                                        poster="https://www.buildar.in/assets/videos/home.mp4"
                                        style={{ height: 'auto', maxWidth: '90%', marginTop: '1.5rem' }}
                                    >
                                        <source id="source" src="https://www.buildar.in/assets/videos/home.mp4" type="video/webm" />
                                        <source id="source" src="https://www.buildar.in/assets/videos/home.mp4" type="video/mp4" />
                                            Sorry, your browser doesn’t support embedded videos.
                                    </video>
                                </div>
                            </div>
                        </li>
                        <li className="sticky-three">
                            <h3 >API driven Videos.</h3>
                            <p id="view3">
                                Integrate with our API and create<br />
                                    Videos at scale. Connect with your CRM,<br />
                                    Database and design scripts that convert.
                            </p>
                            <div className="mobile-player">
                                <div className="w-embed">
                                    <video
                                        id="sticky-player"
                                        autoPlay
                                        playsInline
                                        height={930}
                                        width={900}
                                        loop
                                        muted
                                        poster="https://www.buildar.in/assets/videos/home.mp4"
                                        style={{ height: 'auto', maxWidth: '90%', marginTop: '1.5rem' }}
                                    >
                                        <source id="source" src="https://www.buildar.in/assets/videos/home.mp4" type="video/webm" />
                                        <source id="source" src="https://www.buildar.in/assets/videos/home.mp4" type="video/mp4" />
                                            Sorry, your browser doesn’t support embedded videos.
                                    </video>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sticky
