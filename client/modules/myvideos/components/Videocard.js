import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

class Videocard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            description: "",
            url: "",
            timeCreated: ""
        }
    }

    render() {
        const { title, description, url, timeCreated } = this.props
        return (
            <div className="myvideo-card-item">
                <div style={{ cursor: "pointer" }} className="myvideo-card">
                    <div className="myvideo-card-menu">
                        <Dropdown id="myvideo-card-menu-dropdown">
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                <i className="fa fa-bars"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <a href="/video">
                        <img className="myvideo-thumbnail" src="images/Logo_BuildAR.png" />
                    </a>
                    <p>{title}</p>
                </div>
                <div className="myvideo-time">
                    <p>
                        {timeCreated}
                        <i id="myvideo-footer-icons" class="far fa-star"></i>
                        <i id="myvideo-footer-icons" class="fas fa-link"></i>
                    </p>
                </div>
            </div>
        )
    }
}

export default Videocard
