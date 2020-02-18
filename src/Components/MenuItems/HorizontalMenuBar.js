import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'

export default class HorizontalMenuBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    // const { activeItem } = this.state;

    return (
      <div class="ui secondary menu">
        <Segment>
          <img src='../assets/images/wfp_logo.png' />
        </Segment>
        <div class="right menu">
          <a class="item">Logout</a>
        </div>
      </div>
    )
  }
}

