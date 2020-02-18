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
        <div> 

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/messages'} className="nav-link">Messages</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
          </nav>
           
     
        <Switch>
          <Route exact path="/" component = {Home} />
          <Route exact path="/messages" component = {Messages} />
          <Route exact path="/about" component = {About} />
        </Switch>
        </div>
      </Router>
    )
  }
}
export default VerticalMenuBar;

