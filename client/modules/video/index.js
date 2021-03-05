import React, { Component } from 'react'
import ReactPlayer from 'react-player'
class Video extends Component {
    render() {
        let url = "https://www.buildar.in/assets/videos/home.mp4"
        return (
            <div className="individual-video">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 col-md-12 react-player-col">
                            <ReactPlayer
                                config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                                // Disable right click
                                onContextMenu={e => e.preventDefault()}
                                className="react-player single-video"
                                url={url}
                                width="80%"
                                controls
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 video-description">
                            <h1 className="video-title-edit" contentEditable="true">Title</h1>
                            <p>Nishant</p>
                            <form>
                                <div className="form-group">
                                    <textarea
                                        tabindex="0"
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                        placeholder="Add description..">
                                    </textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Video
