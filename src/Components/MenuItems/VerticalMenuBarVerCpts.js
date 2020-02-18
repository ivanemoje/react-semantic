import React, { Component } from 'react';
import { Menu, Grid, Segment } from 'semantic-ui-react';
// import { Router, Route, Switch } from "react-router";
import {
  BrowserRouter as Router,
  Link,
  Route, // for later
  Switch
} from 'react-router-dom';

import Home from './Home';
import BenData from './BenData';
import SearchBen from './SearchBen';
import Anomalies from './Anomalies';
import CashReleaseNotes from './CashReleaseNotes';
import MemoPayment from './MemoPayment';
import FileMgt from './FileMgt';
import Amel from './Amel';
import System from './System';



class VerticalMenuBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <Router>
      <Segment inverted>
      <Menu inverted secondary>
        <Menu.Item 
          as={Link} to='/'
          name='Home' 
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link} to='/bendata'
          name='Beneficiary Data'
          active={activeItem === 'bendata'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link} to='/searchben'
          name='Search Beneficiary'
          active={activeItem === 'searchben'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link} to='/anomalies'
          name='Anomalies'
          active={activeItem === 'anomalies'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link} to='/crns'
          name='CRNS'
          active={activeItem === 'crns'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link} to='/memopayment'
          name='Memos and Payment Requests'
          active={activeItem === 'memopayment'}
          onClick={this.handleItemClick}
        />

        <Menu.Item
          name='File Management'
          as={Link} to='/filemgt'
          active={activeItem === 'filemgt'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='AMEL'
          as={Link} to='/amel'
          active={activeItem === 'amel'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link} to='/system'
          name='System'
          active={activeItem === 'system'}
          onClick={this.handleItemClick}
        />

        <Switch>
          <Route exact path="/" component = {Home} />
          <Route exact path="/bendata" component = {BenData} />
          <Route exact path="/searchben" component = {SearchBen} />
          <Route exact path="/anomalies" component = {Anomalies} />
          <Route exact path="/crns" component = {CashReleaseNotes} />
          <Route exact path="/memopayment" component = {MemoPayment} />          
          <Route exact path="/filemgt" component = {FileMgt} />
          <Route exact path="/amel" component = {Amel} />
          <Route exact path="/system" component = {System} />
        </Switch>
             
      </Menu>
    </Segment>
    </Router>
    )
  }
}
export default VerticalMenuBar;

