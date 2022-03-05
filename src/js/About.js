import React, { Component } from "react";
import Section from './Section.js';
import '../css/About.css';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            para: "hiddenText"
        }
    }

    render() {
        return(
            <Section title="About">
                <div class="outterContainer">
                    <div id="contentAbout">
                        <div class="textAbout">
                            <div class="sectionBar"></div>
                                <p>Donec varius rhoncus placerat. Integer varius nunc in sapien malesuada, eu facilisis risus hendrerit. Donec ac mauris finibus, maximus enim a, tristique dui. Quisque dictum rhoncus ex quis feugiat. Curabitur sodales. metus cursus, lacinia lacus et, finibus enim. Ut at urna semper, efficitur nisl sit amet, vehicula velit. Aliquam viverra pretium auctor. Morbi felis velit, viverra nec tincidunt vitae, vestibulum et justo.</p>
                                <p>Donec varius rhoncus placerat. Integer varius nunc in sapien malesuada, eu facilisis risus hendrerit. Donec ac mauris finibus, maximus enim a, tristique dui.</p>
                                <p class={this.state.para}>Donec varius rhoncus placerat. Integer varius nunc in sapien malesuada, eu facilisis risus hendrerit. Donec ac mauris finibus. Donec varius rhoncus placerat. Integer varius nunc in sapien malesuada, eu facilisis risus hendrerit. Donec ac mauris finibus, maximus enim a, tristique dui.</p>
                            <div class="barTemplate2">
                                <div class="sectionBar"></div>
                                <a class="button" onClick={this.handleClick}>About</a>
                                <div class="sectionBar"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        )
    }
}

export default About;