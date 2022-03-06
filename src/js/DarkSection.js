import '../css/DarkSection.css';

function DarkSection(props) {
    return (
        <div className="DarkSection" id={props.name}>
            <div class="sectionContainer">
                <div class="container">
                    <div class="farLeft"></div>
                    <div class="darkLeft">
                        <div class="desktopHeader">
                            <h3>{props.title}</h3>
                            <div class="darkHeadingBar"></div>
                        </div>
                    </div>
                    <div class="content">
                        <div class="darkMobileHeader">
                            <h2>{props.title}</h2>
                            <div class="darkHeadingBarMobile"></div>
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

export default DarkSection;