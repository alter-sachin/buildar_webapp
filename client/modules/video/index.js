import React, { Component } from 'react'

class Video extends Component {
    render() {
        let url = "https://www.buildar.in/assets/videos/home.mp4"
        return (
            <div>
                <video>
                    <video autoPlay loop playsInline width={800} height={640}>
                        <source src={url} type="video/mp4" />
                    </video>
                </video>
            </div>
        )
    }
}

export default Video
