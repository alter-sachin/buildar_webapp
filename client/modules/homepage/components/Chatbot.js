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
            case "toArticles":
                document.getElementById("overlay-intro").style.display = "none"
                document.getElementById("overlay-articles").style.display = "block"
                this.setState({
                    url: "https://buildar.in/vid/1615800834.2182198.mp4"
                })
                break;

            case "toNewsLetter":
                document.getElementById("overlay-intro").style.display = "none"
                document.getElementById("overlay-email").style.display = "block"
                this.setState({
                    url: "https://buildar.in/vid/1615801043.2547426.mp4"
                })
                break;

            case "toTwitter":
                document.getElementById("overlay-intro").style.display = "none"
                document.getElementById("overlay-twitter").style.display = "block"
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
                }
                else {
                    this.setState({
                        transitionClass: '',
                        isHeadClicked: !this.state.isHeadClicked
                    })
                }
                break;

            case "closeBot":
                document.getElementById("chathead").style.display = "block"
                this.setState({
                    transitionClass: '',
                    isHeadClicked: !this.state.isHeadClicked
                })
                break;

            case "resetBot":
                document.getElementById("overlay-intro").style.display = "block"
                document.getElementById("overlay-articles").style.display = "none"
                document.getElementById("overlay-email").style.display = "none"
                document.getElementById("overlay-twitter").style.display = "none"
                this.setState({
                    url: "https://buildar.in/vid/1615800618.4738576.mp4",
                    isHeadClicked: true
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
                            <button className="btn btn-primary2" onClick={() => { this.change("toArticles") }}>Show me your best articles</button>
                            <button className="btn btn-primary2" onClick={() => { this.change("toNewsLetter") }}>Subscribe to my newsletter</button>
                            <button className="btn btn-primary2" onClick={() => { this.change("toTwitter") }}>Follow me on Twitter</button>
                        </div>
                        <div id="overlay-articles">
                            <a type="button" className="btn btn-primary2 " href="#">Fake News</a>
                            <a type="button" className="btn btn-primary2 " href="#">Meditation</a>
                            <a type="button" className="btn btn-primary2" href="#">Selling Twitch</a>
                        </div>
                        <div id="overlay-email">
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                        </div>
                        <div id="overlay-twitter">
                            <button type="button" className="btn" href="#twitter">
                                <p>Here's my Twitter  </p>
                                <i className="fa fa-twitter fa-10x" aria-hidden="true">  </i>
                            </button>
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
                            width="128px"
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
