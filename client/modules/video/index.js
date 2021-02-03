import React, { Component } from 'react'
import Actor from './components/Actor'
import Videoplayer from './components/Videoplayer'
import './styles/bootstrap.css'
import './styles/styles.css'

class index extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <div class="row">
                        <div className="title col-sm">
                            <button type="button" className="btn btn-link video-title">
                                Video Title
            </button>
                        </div>
                        <div className="col-sm">
                            <button type="button" className="btn create-video">
                                Create Video
            </button>
                        </div>
                    </div>
                    <div class="row">
                        <div className="col-sm">
                            <Actor />
                        </div>
                        <div className="col-sm">
                            <Videoplayer />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default index

