import React, { Component } from 'react'
import ReactPlayer from "react-player"

class Videoplayer extends Component {
    render() {
        const { videoUrl } = this.props
        // console.log(videoUrl);
        return (
            <div>
                <ReactPlayer
                    url={videoUrl}
                    height="300px"
                    width="500px"
                    controls={true}
                />
            </div>
        )
    }
}

export default Videoplayer
