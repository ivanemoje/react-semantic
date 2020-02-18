import React, { Component } from 'react'
import { Segment, Image, Header } from 'semantic-ui-react'

import Image2 from './wfp_logo.png';


export default class HorizontalMenuBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    // const { activeItem } = this.state;
    // <div style={{width: 1000, margin: '0 auto'}}>
    return (
      <div class="ui secondary menu">
        <Header as='h2'>
          <Image circular src='./wfp_logo2.png' /> WebApp
        </Header>


      

        <div class="right menu">
        {/* <div class="ui small image">
          <img src="./wfp_logo2.png" />
        </div> */}
          <a class="item">Logout</a>
        </div>
      </div>
    )
  }
}

