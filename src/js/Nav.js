import React, { Component } from "react";
import SideBar from "./Sidebar";
import '../css/SideBar.css';
import '../css/Nav.css';
import FaceBook from "./FaceBook";

class Nav extends Component{
  constructor(props) {
    super(props);
    
    this.state = {
      yWindow: 0,
      menuMobile: 'menuMobile',
      fixedContainerDesktop: 'fixedContainer',
      bar: "bar",
      desktopLink: "desktopLink",
      burgerBar: "burger-bars"
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    let scrollTop = window.scrollY;

    this.setState({yWindow: scrollTop});

    if(this.state.yWindow > 100) {
      this.setState({
        menuMobile: 'menuMobileScrolled',
        fixedContainerDesktop: 'fixedContainerScrolled',
        bar: "barScrolled",
        desktopLink: "desktopLinkScrolled",
        burgerBar: "burger-bars-scrolled",
        logo: "logoScrolled"
      });
    } else {
      this.setState({
        menuMobile: 'menuMobile',
        fixedContainerDesktop: 'fixedContainer',
        bar: "bar",
        desktopLink: "desktopLink",
        burgerBar: "burger-bars",
        logo: "logo"
      }); 
    }
  }

  render() {
    return (
        <div className="Nav">
          <div class={this.state.fixedContainerDesktop}>
            <div class="menu">
              <a href ="#facebook" class={this.state.desktopLink}>FaceBook</a>
              <a href="#about" class={this.state.desktopLink}>About</a>
              <a href="#Home" class={this.state.desktopLink}><h1>Logo</h1></a>
              <a href="#contentGallery" class={this.state.desktopLink}>Gallery</a>
              <a href="#containerFooter" class={this.state.desktopLink}>Contact Us</a>
            </div>
            <div class={this.state.bar}></div>
          </div>
          <div class="fixedContainerMobile">
            <div class="mobile">
              <div class={this.state.menuMobile}>
                <a href="#" class={this.state.logo}><h1 class="logo">Logo</h1></a>
                <SideBar pageWrapId={"page-wrap"} outerContainerId={"menuMobile"} burgerBarClassName={this.state.burgerBar}/>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Nav;