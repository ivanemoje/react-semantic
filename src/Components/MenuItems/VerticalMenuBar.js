import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class VerticalMenuBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing vertical>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='friends'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='item5'
          active={activeItem === 'item5'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='item6'
          active={activeItem === 'item6'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='item7'
          active={activeItem === 'item7'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
export default VerticalMenuBar;

