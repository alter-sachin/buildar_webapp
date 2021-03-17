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
        this.changeToArticles = this.changeToArticles.bind(this)
        this.changeToNewsLetter = this.changeToNewsLetter.bind(this)
        this.changeToTwitter = this.changeToTwitter.bind(this)
        this.showBot = this.showBot.bind(this)
    }

    changeToArticles() {
        document.getElementById("overlay-intro").style.display = "none"
        document.getElementById("overlay-articles").style.display = "block"
        this.setState({
            url: "https://buildar.in/vid/1615800834.2182198.mp4"
        })
    }
    changeToNewsLetter() {
        document.getElementById("overlay-intro").style.display = "none"
        document.getElementById("overlay-email").style.display = "block"
        this.setState({
            url: "https://buildar.in/vid/1615801043.2547426.mp4"
        })
    }
    changeToTwitter() {
        document.getElementById("overlay-intro").style.display = "none"
        document.getElementById("overlay-twitter").style.display = "block"
        this.setState({
            url: "https://buildar.in/vid/1615801043.2547426.mp4"
        })
    }

    showBot() {
        if (this.state.transitionClass === '') {
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
    }

    render() {
        const { url, isHeadClicked } = this.state
        return (
            <div id="main">
                <div id="chat-bot" className={this.state.transitionClass} >
                    <div className="container">
                        {/* <div className="wrapper"> */}
                        <ReactPlayer
                            id="video-bot"
                            className="videoInsert"
                            playing={isHeadClicked}
                            controls
                            height="960"
                            width="540"
                            controlsList="nodownload"
                            // onContextMenu={(e) => e.preventDefault()}
                            url={url}
                        />
                        {/* </div> */}
                        <div className="overlay" >
                            <div id="overlay-intro">
                                <Button block variant="primary" onClick={this.changeToArticles}>Show me your best articles</Button>
                                <Button block variant="primary" onClick={this.changeToNewsLetter}>Subscribe to my newsletter</Button>
                                <Button block variant="primary" onClick={this.changeToTwitter}>Follow me on Twitter</Button>
                            </div>
                            <div id="overlay-articles">
                                <a type="button" className="btn btn-primary btn-block" href="#">Fake News</a>
                                <a type="button" className="btn btn-primary btn-block" href="#">How to meditate</a>
                                <a type="button" className="btn btn-primary btn-block" href="#">Selling Startup</a>
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
                </div>
                <div id="chathead" className="chatbot-head">
                    <button type="button" className="btn" onClick={this.showBot}>
                        <i className="fa fa-commenting fa-2x" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        )
    }
}

export default ChatBot
