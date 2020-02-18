import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
// import { Router, Route, Switch } from "react-router";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route, // for later
  Switch
} from 'react-router-dom';

import Home from './Home';
import Messages from './Messages';
import About from './About';


class VerticalMenuBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    const menuItems= [
      { as: Link, content: "Home", key: "home", path:"/"},
      { as: Link, content: "About Us", key: "about", path:"/about"},
      { as: Link, content: "Messages", key: "messages", path:"/messages"}
    ];

    return (

    <Router>

      <Menu pointing vertical>

        <Menu.Item as={Link} to='/' name='home' active={activeItem === 'home'}
            onClick={this.handleItemClick}>Home
        </Menu.Item>

        <Menu.Item as={Link} to='/messages' name='messages' active={activeItem === 'messages'}
            onClick={this.handleItemClick}>Messages
        </Menu.Item>

        <Menu.Item as={Link} to='/about' name='about' active={activeItem === 'about'}
            onClick={this.handleItemClick}>About
        </Menu.Item>
        <Switch>
          <Route exact path="/" component = {Home} />
          <Route exact path="/messages" component = {Messages} />
          <Route exact path="/about" component = {About} />
        </Switch>

      </Menu>

    </Router>
    )
  }
}
export default VerticalMenuBar;

