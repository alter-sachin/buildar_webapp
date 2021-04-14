import React, { Component } from 'react'

class Documentation extends Component {
    render() {
        return (
            <div>
                {/*
 API Documentation HTML Template  - 1.0.1
 Copyright © 2021 BuildAR
 Licensed under the MIT license.
 https://github.com/alter-sachin/
 !*/}
                <meta charSet="utf-8" />
                <title>BuildAR AI Videos API - Documentation</title>
                <meta name="description" content />
                <meta name="author" content="ticlekiwi" />
                <meta httpEquiv="cleartype" content="on" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,500|Source+Code+Pro:300" rel="stylesheet" />
                <link rel="stylesheet" href="style.css" media="all" />
                <link rel="stylesheet" href="highlightjs-dark.css" />
                <div className="left-menu">
                    <div className="content-logo">
                        <img src="images/Logo_BuildAR.png" height={32} />
                        <span>API Documentation</span>
                    </div>
                    <div className="content-menu">
                        <ul>
                            <li className="scroll-to-link active" data-target="get-started">
                                <a href="#get-started">GET STARTED</a>
                            </li>
                            <li className="scroll-to-link" action="get-api-access">
                                <a href="#get-api-access">Get API Access</a>
                            </li>
                            <li className="scroll-to-link" data-target="get-available-voices">
                                <a href="#overview">Overview</a>
                            </li>
                            <li className="scroll-to-link" data-target="get-avialable-voices">
                                <a href="#get-avialable-voices">Get Available Voices</a>
                            </li>
                            <li className="scroll-to-link" data-target="generate-audio">
                                <a href="#generate-audio">Generate Audio</a>
                            </li>
                            <li className="scroll-to-link" data-target="generate-video">
                                <a href="#generate-video">Generate Video</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="content-page">
                    <div className="content-code" />
                    <div className="content">
                        <div className="overflow-hidden content-section" id="get-started">
                            <h1 id="get-started">Get started</h1>
                            <pre>API Endpoint{"          "}{"\n"}{"\n"}{""}https:<span style={{ color: "#a8a8a2" }}>//35.232.47.147:8001/</span>{"\n"}{"                "}</pre>
                            <p>
                                The BuildAR API provides programmatic access to create videos in 40+ Languages from just text.
                                You need to select an actor, speaker and enter your text script and videos are created in a few minutes.
              </p>
                        </div>
                        <div className="overflow-hidden content-section" id="get-api-access">
                            <h1 id="get-started">Get API Access</h1>
                            <pre>{""}For API Key {"\n"}{""}Reach out to:{"\n"}{"\n"}{""}<span style={{ color: "#cb7832" }}>email</span>: <span style={{ color: "#cb7832" }}>team</span>@<span style={{ color: "#cb7832" }}>buildar</span>.<span style={{ color: "#cb7832" }}>live</span>{"\n"}{""}<span style={{ color: "#cb7832" }}>call</span>: +<span style={{ color: "#6896ba" }}>91</span>-<span style={{ color: "#6896ba" }}>9646617007</span>{"\n"}{"                "}</pre>
                            <p>
                                To create BuildAR's AI videos, you need an <strong>API key</strong>. Please contact us at <a href="mailto:team@buildar.live">team@buildar.live</a> to get your own API key.<br />
                We have subscription plans based on the volume of videos you are looking to create.
              </p>
                        </div>
                        <div className="overflow-hidden content-section" id="overview">
                            <h1 id="overview">Overview</h1>
                            <pre>Your text script is first<br /> converted to audio file.<br />This audio file is combined <br />with a selected actor that creates<br /> the final video{"\n"}{"                "}</pre>
                            <p>
                                BuildAR's API has two main components<strong> Audio</strong> and  <strong>Video</strong>. <br />We have a selection of voices across 40+ languages that can be used to convert your text to audio.<br />
                You are then needed to select an actor from our list of available actors with the previously created audio file to now create your final video.
              </p>
                        </div>
                        <div className="overflow-hidden content-section" id="content-get-characters">
                            <h2 id="get-avialable-voices">GET AVAILABLE VOICES FOR AUDIO</h2>
                            <pre><code className="bash">{"\n"}<span style={{ color: "#a8a8a2" }}># Here is a curl example</span>{"\n"}curl -X 'GET' \{"\n"}{"  "}'http://35.232.47.147:8001/audio' \{"\n"}{"  "}-H 'accept: application/json' \{"\n"}{"  "}-H 'Authorization: Bearer YOUR_API_KEY'{"\n"}{"                "}</code></pre>
                            <p>
                                We provide a large variety(40+) of voices both in languages and accents.To get list of all available voices you need to make a GET call to the following url :<br />
                                <code className="higlighted">http://35.232.47.147:8001/audio</code>
                            </p>
                            <br />
                            <pre><code className="json">{"\n"}Result example :{"\n"}{"{"}{"\n"}{"  "}query:{"{"}{"}"}{"\n"}{"  "}result: =[{"\n"}{"  "}{"{"}{"\n"}{"    "}"Voice": <span style={{ color: "#a8a8a2" }}>"Indian English Female Voice 1"</span>,{"\n"}{"    "}"Gender": <span style={{ color: "#a8a8a2" }}>"Female"</span>{"\n"}{"  "}{"}"},{"\n"}{"  "}{"{"}{"\n"}{"    "}"Voice": <span style={{ color: "#a8a8a2" }}>"Indian English Female Voice 2"</span>,{"\n"}{"    "}"Gender": <span style={{ color: "#a8a8a2" }}>"Female"</span>{"\n"}{"  "}{"}"},{"\n"}{"  "}{"{"}{"\n"}{"    "}"Voice": <span style={{ color: "#a8a8a2" }}>"Indian English Male Voice 1"</span>,{"\n"}{"    "}"Gender": <span style={{ color: "#a8a8a2" }}>"Male"</span>{"\n"}{"  "}{"}"},{"\n"}{"  "}{"{"}{"\n"}{"    "}"Voice": <span style={{ color: "#a8a8a2" }}>"Hindi Female Voice 1"</span>,{"\n"}{"    "}"Gender": <span style={{ color: "#a8a8a2" }}>"Female"</span>{"\n"}{"  "}{"}"},{"\n"}{"  "}{"{"}{"\n"}{"    "}"Voice": <span style={{ color: "#a8a8a2" }}>"Hindi Female Voice 2"</span>,{"\n"}{"    "}"Gender": <span style={{ color: "#a8a8a2" }}>"Female"</span>{"\n"}{"  "}{"}"}{"\n"}]{"\n"}{"}"}{"\n"}{"\n"}{"                "}</code></pre>
                        </div>
                        <div className="overflow-hidden content-section" id="content-errors">
                            <h2 id="generate-audio">GENERATE AUDIO</h2>
                            <pre><code className="bash">{"\n"}<span style={{ color: "#a8a8a2" }}># Here is a curl example</span>{"\n"}curl -X 'POST' \{"\n"}{"  "}'http://35.232.47.147:8001/audio' \{"\n"}{"  "}-H 'accept: application/json' \{"\n"}{"  "}-H 'Authorization: Bearer YOUR_API_KEY' \{"\n"}{"  "}-H 'Content-Type: application/json' \{"\n"}{"  "}-d '{"{"}{"\n"}{"  "}"speakerId": "Indian English Female Voice 1",{"\n"}{"  "}"textScript": "Hello, how are you?",{"\n"}{"  "}"speed": Speed between 0&amp;1{"\n"}{"}"}'{"\n"}{"                "}</code></pre>
                            <p>
                                You can generate audio from any text script. <br />
                Select a single voice from the collection of available voices, and enter the text script <br />
                You can also control the speed of the audio.<br />
                Normal speed has value 1. We suggest increment or decrement by a step of .05 <br />
                                <code className="higlighted">http://35.232.47.147:8001/audio</code>
                            </p>
                            <br />
                            <pre><code className="json">{"\n"}Result example :{"\n"}{"{"}{"\n"}{"  "}query:{"{"}{"\n"}{"  "}"speakerId": <span style={{ color: "#a8a8a2" }}>"string"</span>,{"\n"}{"  "}"textScript": <span style={{ color: "#a8a8a2" }}>"string"</span>,{"\n"}{"  "}"speed": <span style={{ color: "#6896ba" }}>0</span>{"\n"}{"}"}{"\n"}{"  "}result: =[{"\n"}{"  "}{"{"}{"{"}{"\n"}{"  "}"audioUrl": <span style={{ color: "#a8a8a2" }}>"string"</span>{"\n"}{"}"}{"\n"}]{"\n"}{"}"}{"\n"}{"\n"}{"                "}</code></pre>
                            <h4>QUERY PARAMETERS</h4>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Field</th>
                                        <th>Type</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>speakerId</td>
                                        <td>String</td>
                                        <td>Voice for the audio</td>
                                    </tr>
                                    <tr>
                                        <td>textScript</td>
                                        <td>String</td>
                                        <td>The text whose audio needs to be generated</td>
                                    </tr>
                                    <tr>
                                        <td>speed</td>
                                        <td>float</td>
                                        <td>
                                            to control the speed of the generated audio
                    </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="overflow-hidden content-section" id="generate-video">
                            <h2 id="generate-video">GENERATE VIDEO</h2>
                            <pre><code className="bash">{"\n"}<span style={{ color: "#a8a8a2" }}># Here is a curl example</span>{"\n"}curl -X 'POST' \{"\n"}{"  "}'http://35.232.47.147:8001/video' \{"\n"}{"  "}-H 'accept: application/json' \{"\n"}{"  "}-H 'Authorization: Bearer YOUR_API_KEY' \{"\n"}{"  "}-H 'Content-Type: application/json' \{"\n"}{"  "}-d '{"{"}{"\n"}{"  "}"actorId": 0,{"\n"}{"  "}"audioUrl": "URL"{"\n"}{"}"}'{"\n"}{"\n"}{"                "}</code></pre>
                            <p>
                                <style dangerouslySetInnerHTML={{ __html: "\n            \t\tfigure{\n            \t\t\tpadding:1em;\n            \t\t}\n            \t" }} />
                BuildAR's AI videos need to inputs the face and audio url.
                A video can now be generated from the previously generated audio by choosing a actor :<br />
                We currently support 3 actors and these are :<br />
                            </p><div style={{ display: 'flex' }}>
                                <figure><img src="https://buildar.in/actors/actor0.png" /><figcaption>actorId:0</figcaption></figure>
                                <figure><img src="https://buildar.in/actors/actor1.jpeg" /><figcaption>actorId:1</figcaption></figure>
                                <figure><img src="https://buildar.in/actors/actor2.jpeg" /><figcaption>actorId:2</figcaption></figure>
                            </div>
                            <p>More actors can be added on demand by contacting the team.
                Please contact us at <a href="mailto:team@buildar.live">team@buildar.live</a> or call +91-9646617007 to get your new faces added.<br />
                If a unique 3D avatar or face is needed do let us know.
              </p><p />
                            <code className="higlighted" style={{ margin: '4em' }}>http://35.232.47.147:8001/video</code>
                            <br />
                            <pre><code className="json">{"\n"}Result example :{"\n"}{"{"}{"\n"}{"  "}query:{"{"}{"\n"}{"  "}"actorId": <span style={{ color: "#6896ba" }}>0</span>,{"\n"}{"  "}"audioUrl": <span style={{ color: "#a8a8a2" }}>"string"</span>{"\n"}{"}"}{"\n"}{"  "}result: =[{"\n"}{"  "}{"{"}{"{"}{"\n"}{"  "}"videoUrl": <span style={{ color: "#a8a8a2" }}>"string"</span>{"\n"}{"}"}{"\n"}]{"\n"}{"}"}{"\n"}{"\n"}{"                "}</code></pre>
                            <div style={{ paddingTop: '2em' }}>
                                <h4>QUERY PARAMETERS</h4>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Field</th>
                                            <th>Type</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>actorId</td>
                                            <td>int</td>
                                            <td>Select actor from the list of available actors</td>
                                        </tr>
                                        <tr>
                                            <td>audioUrl</td>
                                            <td>String</td>
                                            <td>Url of the audio generated from the script, or any audio url</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="content-code" />
                </div>
                <script src="./script.js"></script>
            </div>
        );
    }
};


export default Documentation