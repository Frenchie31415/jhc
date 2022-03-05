import React, { Component } from "react";
import Nav from './Nav.js';
import '../css/Landing.css';

class Landing extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Landing">
                <div id="Home">
                    <Nav />
                </div>
            </div>
        )
    }
}

export default Landing;