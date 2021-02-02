import React, { Component } from 'react'
import Actor from './components/Actor'
import Videoplayer from './components/Videoplayer'
import './styles/bootstrap.css'
import './styles/styles.css'

class index extends Component {
    render() {
        return (
            <div>
                <table>
                    <tr>
                        <td className="title">
                            <button type="button" className="btn btn-link video-title">
                                Video Title
                            </button>
                        </td>
                        <td >
                            <button type="button" className="btn create-video">
                                Create Video
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Actor />
                        </td>
                        <td>
                            <Videoplayer />
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default index

