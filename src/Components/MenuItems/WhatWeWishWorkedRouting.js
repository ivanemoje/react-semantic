import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
// import { Router, Route, Switch } from "react-router";
import {
  BrowserRouter as Router,
  Link,
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
    const { activeItem } = this.state

    return (
      <Router>
          <Menu pointing vertical>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick} >
            <Link to='/'>Home </Link>
          </Menu.Item>
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
            >
            <Link to='/messages'>Messages </Link>
          </Menu.Item>
          <Menu.Item
            name='about'
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
            >
            <Link to='/about'>About </Link>
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

