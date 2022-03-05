import React, { Component } from "react";
import Section from './Section.js';
import '../css/Section.css';
import '../css/FaceBook.css';
import { FacebookProvider, EmbeddedPost} from "react-facebook";

class FaceBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width : 500
        };
    }

    render() {
        return(
            <Section title="FaceBook" name="facebook">
                <div id="fBContainer">
                    <div id="contentFb">
                        <div class="fb">
                            <div class="fbPost">
                                <FacebookProvider appId="3197189103838166">
                                    <EmbeddedPost href="https://www.facebook.com/permalink.php?story_fbid=958945495045728&id=209220356684916&__cft__[0]=AZUJNAeAGl6I4Hxg42lSTGCwjmjBQ2qZePyz6ffU0v9JTP8xH27L86V45BL3IqzGumRnWM3aXXcLuj4OoUMlQLzGL4VtzA5_PhmMOeeoFYMRHLfNfTOvITVQqlF9s5-63bDfFm3hDwTpq7FIV9ZQEwji&__tn__=%2CO%2CP-R" width="auto"/>
                                </FacebookProvider>
                            </div>
                            <div class="mobileButton">
                                <div class="barTemplate2">
                                    <div class="sectionBar"></div>
                                    <a href="https://www.facebook.com/Jacs-Happy-Cakes-209220356684916" class="button">FaceBook</a>
                                    <div class="sectionBar"></div>
                                </div>
                            </div>
                        </div>
                        <div class="text">
                            <div class="barTemplate">
                                <h1 class = "title">Like My Page</h1>
                                <div class="sectionBar"></div>
                            </div>
                            <p>Donec varius rhoncus placerat. Integer varius nunc in sapien malesuada, eu facilisis risus hendrerit. Donec ac mauris finibus, maximus enim a, tristique dui. Quisque dictum rhoncus ex quis feugiat. Curabitur sodales.</p>
                            <p class="mobilePara"> metus cursus, lacinia lacus et, finibus enim. Ut at urna semper, efficitur nisl sit amet, vehicula velit. Aliquam viverra pretium auctor. Morbi felis velit, viverra nec tincidunt vitae, vestibulum et justo.</p>
                            <div class="barTemplate2">
                                <div class="sectionBar"></div>
                                <a href="https://www.facebook.com/Jacs-Happy-Cakes-209220356684916" class="button">FaceBook</a>
                                <div class="sectionBar"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        )
    }
}

export default FaceBook;