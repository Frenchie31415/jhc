import '../css/Section.css';

function Section(props) {
    return (
        <div className="Section" id={props.name}>
            <div class="sectionContainer">
                <div class="container">
                    <div class="farLeft"></div>
                    <div class="left">
                        <div class="desktopHeader">
                            <h3>{props.title}</h3>
                            <div class="headingBar"></div>
                        </div>
                    </div>
                    <div class="content">
                        <div class="mobileHeader">
                            <h2>{props.title}</h2>
                            <div class="headingBarMobile"></div>
                        </div>
                        <div class="contentInsert">
                            {props.children}
                        </div>
                    </div>
                    <div class="right"></div>
                    <div class="farRight"></div>
                </div>
            </div>
        </div>
    )
}

export default Section;