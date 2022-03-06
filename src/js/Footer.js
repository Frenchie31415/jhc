import { Component } from "react";
import '../css/Footer.css';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id="contactUs">
                <div class="contentGrid">
                    <div class="block">
                        <p>Bar 1</p>
                    </div>
                    <div class="block">
                        <p>Bar 1</p>
                    </div>
                    <div class="block">
                        <p>Bar 1</p>
                    </div>
                </div>
                <div class="smallPrint">
                    <h6 class="smallPrintText">This is the small print</h6>
                </div>
            </div>
        )
    }
}

export default Footer;