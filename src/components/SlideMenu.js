import React, { Component } from 'react';
import { MenuButton } from './MenuButton.js';
import { Menu } from './Menu.js';
import '../styles/SlideMenu.css';

export class SlideMenu extends Component {

  constructor(props, context) {
    super(props,context);
    this.state = {
      visible: false
    }

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  handleMouseDown(e) {
    this.toggleMenu();

    console.log("Clicked!");
    e.stopPropagation();
  }
  toggleMenu() {
    this.setState(
      {
        visible: !this.state.visible
      }
    );
  }
  render() {
    return (
      <div className="container">
        <MenuButton handleMouseDown={this.handleMouseDown}/>
        <Menu handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible}/>
      </div>
    );
  }
}
