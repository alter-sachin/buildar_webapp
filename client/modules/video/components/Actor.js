import React, { Component } from 'react'
import '../styles/styles.css'
import '../styles/bootstrap.css'

class Actor extends Component {
    constructor(props) {
        super(props)

        this.state = {
            actors: [],
            active: 0
        }
    }
    // const actor={
    //     name:"",
    //     actorId:"",
    //     thumbnail:""
    // }
    render() {
        const { actors, active } = this.state
        return (
            <div>
                <h3>Select Persona</h3>
                {actors.map((actor) => {
                    <img
                        src={actor.thumbnail}
                    />
                })}
                <h3>Script</h3>
                <textarea placeholder="Insert script here" />
                <button type="button" className="btn btn-secondary listen-button">
                    Listen
                </button>
            </div>
        )
    }
}

export default Actor
