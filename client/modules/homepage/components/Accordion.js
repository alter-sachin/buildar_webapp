import React, { useState } from 'react';

const Accordion = () => {

    const data = [
        {
            "title": "Sales",
            "description": "Make your sales video driven"
        },
        {
            "title": "Marketing",
            "description": "Personalised messages sent at the right channel"
        },
        {
            "title": "Chatbots",
            "description": "We remember faces more than just words on a screen"
        },
    ]
    let indexPlus;

    const [active, setActive] = useState(0);

    const eventHandler = (e, index) => {
        e.preventDefault();
        setActive(index);
    }

    const indexCount = (index) => {
        indexPlus = index + 1;
        return indexPlus;
    }

    return (
        <div className="accordion">
            <h2 className="accordion-header">Built for your team.</h2>
            <div className=" flex-container">
                <div className="flex-item-left">
                    <div className="img-wrapper">
                        <div className="w-embed">
                            <video autoPlay playsInline height={930} width={900} loop muted poster="https://www.buildar.in/assets/videos/home.mp4" style={{ height: 'auto', maxWidth: '90%', marginTop: '1.5rem' }}>
                                <source src="https://www.buildar.in/assets/videos/home.mp4" type="video/webm" />
                                <source src="https://www.buildar.in/assets/videos/home.mp4" type="video/mp4" />
                                Sorry, your browser doesn’t support embedded videos.
                      </video>
                        </div>
                        {/*  <img class="img-fluid" src="images/header-software-app.png" alt="alternative"> */}
                    </div> {/* end of img-wrapper */}
                </div>
                <div className="flex-item-right">
                    <form>
                        {data.map((tab, index) => (
                            <div key={index}>
                                <h3>
                                    <button
                                        onClick={(e) => eventHandler(e, index)}
                                        className={active === index ? 'active' : 'inactive', "btn btn-dark"}
                                        aria-expanded={active === index ? 'true' : 'false'}
                                        aria-controls={'sect-' + indexCount(index)}
                                        aria-disabled={active === index ? 'true' : 'false'}
                                        tabIndex={indexCount(index)}
                                    >
                                        <span className="title-wrapper">{tab.title}
                                            <span className={active === index ? 'plus' : 'minus'}></span>
                                        </span>
                                    </button>
                                </h3>
                                <div id={'sect-' + indexCount(index)} className={active === index ? 'panel-open' : 'panel-close'}>
                                    {tab.description}
                                </div>
                            </div>
                        ))
                        }
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Accordion;