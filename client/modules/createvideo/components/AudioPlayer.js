import React, { Component } from 'react'
import ReactAudioPlayer from 'react-audio-player';


class AudioPlayer extends Component {
    render() {
        const { audioUrl } = this.props
        return (
            <div>
                <ReactAudioPlayer
                    src={audioUrl}
                    controls
                    controlsList="nodownload"
                />
                {/* <audio className="audio-player" controls>
                    {(audioUrl === "") ? "Nothing to play yet" : <source src={audioUrl} type="audio/wav" />}
                </audio> */}
            </div>
        )
    }
}

export default AudioPlayer