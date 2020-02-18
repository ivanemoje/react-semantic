import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default class HorizontalMenuBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div class="ui secondary menu">
       
          <div class="right menu">
            <div class="item">
              <div class="ui icon input">
                <input type="text" placeholder="Search..." />
                <i aria-hidden="true" class="search icon"></i>
              </div>
            </div>
            <a class="item">Logout</a>
          </div>
      </div>
    )
  }
}