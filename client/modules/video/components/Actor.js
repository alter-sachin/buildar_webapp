import React, { Component } from 'react'
import '../styles/styles.css'
import '../styles/bootstrap.css'
import axios from "axios"

class Actor extends Component {
    constructor(props) {
        super(props)

        this.state = {
            actors: [],
            active: 0
        }
    }
    componentDidMount() {
        axios.get("/api/v1.0/actor")
            .then(({ data }) => {
                let joined = this.state.actors.concat(data)
                this.setState({
                    actors: joined
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {
        const { actors, active } = this.state
        return (
            <div>
                <h3>Select Persona</h3>
                <div className="actor-list">
                    {actors.map((actor) => {
                        <img src={actor.thumbnail} />;
                    })}
                </div>
                <div className="script-input">
                    <h3>Script</h3>
                    <textarea
                        className="text-area"
                        placeholder="Insert script here"
                        rows="8"
                        cols="45"
                    />
                </div>
                <br />
                <button type="button" className="btn btn-secondary listen-button">
                    Listen
                </button>
            </div>
        )
    }
}

export default Actor
