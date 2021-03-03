import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

class Videocard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            description: "",
            url: ""
        }
    }

    render() {
        const { title, description, url } = this.props
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
                    <video className="myvideo-vid" controls width="300" height="240">
                        <source src={url} />
                    </video>
                    <h4>{title}</h4>
                </div>
            </div>
        )
    }
}

export default Videocard
