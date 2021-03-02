import React, { Component } from 'react'

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
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <video controls width="300" height="240">
                    <source src={url} />
                </video>
            </div>
        )
    }
}

export default Videocard
