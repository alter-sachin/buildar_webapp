import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import Button from "react-bootstrap/Button"

class ChatBot extends Component {
    constructor(props) {
        super(props)

        this.state = {
            url: "https://buildar.in/vid/1615800618.4738576.mp4",
            isHeadClicked: false,
            transitionClass: ''
        }
    }
    change(key) {
        switch (key) {
            case "toHosting":
                document.getElementById("overlay-intro").style.display = "none"
                document.getElementById("overlay-host").style.display = "block"
                this.setState({
                    url: "https://buildar.in/vid/1615800834.2182198.mp4"
                })
                break;

            case "toMessages":
                document.getElementById("overlay-intro").style.display = "none"
                document.getElementById("overlay-email").style.display = "block"
                this.setState({
                    url: "https://buildar.in/vid/1615801043.2547426.mp4"
                })
                break;

            case "toCreateVideos":
                document.getElementById("overlay-intro").style.display = "none"
                document.getElementById("overlay-create-video").style.display = "block"
                this.setState({
                    url: "https://buildar.in/vid/1615801043.2547426.mp4"
                })
                break;

            case "showBot":
                if (this.state.transitionClass === '') {
                    document.getElementById("chathead").style.display = "none"
                    this.setState({
                        transitionClass: 'animate',
                        isHeadClicked: !this.state.isHeadClicked
                    })
                    this.change("resetBot")
                }
                else {
                    this.setState({
                        transitionClass: '',
                        isHeadClicked: !this.state.isHeadClicked
                    })
                }
                break;

            case "resetBot":
                document.getElementById("overlay-intro").style.display = "block"
                document.getElementById("overlay-host").style.display = "none"
                document.getElementById("overlay-email").style.display = "none"
                document.getElementById("overlay-create-video").style.display = "none"
                this.setState({
                    url: "https://buildar.in/vid/1615800618.4738576.mp4",
                    isHeadClicked: true
                })
                break;

            case "closeBot":
                document.getElementById("chathead").style.display = "block"
                this.setState({
                    transitionClass: '',
                    isHeadClicked: !this.state.isHeadClicked
                })
                break;

            default:
                break;
        }
    }

    render() {
        const { url, isHeadClicked } = this.state
        return (
            <div id="main">
                <div id="chat-bot" className={this.state.transitionClass}>
                    <a href="#" className="close" onClick={() => { this.change("closeBot") }}></a>
                    <a className="arrow-left" onClick={() => { this.change("resetBot") }}>Menu</a>
                    <ReactPlayer
                        id="video-bot"
                        className="videoInsert"
                        playing={isHeadClicked}
                        controlsList="nodownload"
                        width="320px"
                        height="385px"
                        // onContextMenu={(e) => e.preventDefault()}
                        /* style={{width: "160px",height:"90px"}}*/
                        url={url}
                    />
                    <div className="overlay" >
                        <div id="overlay-intro">
                            <button className="btn btn-primary2" onClick={() => { this.change("toHosting") }}>Host me on your website</button>
                            <button className="btn btn-primary2" onClick={() => { this.change("toMessages") }}>Create Personalized messages</button>
                            <button className="btn btn-primary2" onClick={() => { this.change("toCreateVideos") }}>Create videos in 40+ Languages</button>
                            <button className="btn btn-primary2" onClick={() => { this.change("toCreateVideos") }}>Make me your sales girl</button>
                        </div>
                        <div id="overlay-host">
                            <p>Yes you can have me for yourself.<br /> I mean I can be present on your website!<br />
                            I helped others increase click rates<br /> by an astounding 100%.</p>
                            <button className="btn btn-primary2" onClick={() => { this.change("resetBot") }}>Main Menu</button>
                        </div>
                        <div id="overlay-email">
                            <p>I can talk directly to anyone by their name.<br /> Enter your email address and let me show you.</p>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                        </div>
                        <div id="overlay-create-video">
                            <p>I can speak in all languages.</p>
                        </div>
                    </div>
                </div>
                <div id="chathead" className="chatbot-head">
                    <button type="button" className="btn" onClick={() => { this.change("showBot") }}>
                        <ReactPlayer
                            id="video-bot"
                            className="videoInsert"
                            playing
                            muted
                            loop={true}
                            height="128px"
                            width="140px"
                            controlsList="nodownload"
                            // onContextMenu={(e) => e.preventDefault()}
                            url="https://buildar.in/vid/1615800618.4738576.mp4"
                        />
                        <div className="initial_overlay">Want to talk to AI me?</div>
                    </button>
                </div>
            </div>
        )
    }
}

export default ChatBot
