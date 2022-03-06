import React, { Component } from "react";
import DarkSection from './DarkSection.js';
import '../css/Section.css';
import '../css/Gallery.css';

class Gallery extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <DarkSection title="Gallery" name="gallery">
                <div id="contentGallery">
                    <div class="gridDesktop">
                        <div class="tile">
                        </div>
                        <div class="tile"></div>
                        <div class="tile"></div>
                        <div class="sectionBarGrid"></div>
                        <a href="#" class="buttonGrid" onClick={this.handleClick}>See Gallery</a>
                        <div class="sectionBarGrid"></div>
                    </div>
                    <div class="gridMobile">
                        <div class="tile">
                            
                        </div>
                        <a href="#" class="buttonMobileGrid">See Gallery</a>
                    </div>
                </div>
            </DarkSection>
        )
    }
}

export default Gallery;