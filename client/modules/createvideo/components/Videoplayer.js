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
                    height=""
                    width=""
                    controls={true}
                />
            </div>
        )
    }
}

export default Videoplayer
