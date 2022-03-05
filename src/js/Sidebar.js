import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Component } from "react/cjs/react.production.min";

class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      yWindow: 0
    };
  }

  render() {
    return(
      <Menu {...this.props}>
        <a className="menu-item" href="#navContainer">
          Home
        </a>

        <a className="menu-item" href="#contentFb">
          FaceBook
        </a>

        <a className="menu-item" href="#contentAbout">
          About
        </a>

        <a className="menu-item" href="#contentGallery">
          Gallery
        </a>

        <a className="menu-item" href="#contentFooter">
          Contact Us
        </a>
      </Menu>
    )
  }
}

export default SideBar;