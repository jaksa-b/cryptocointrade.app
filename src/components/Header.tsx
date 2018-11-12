import React, { Component } from 'react'
import { Button, Nav, Grid, Logo, Col, Menu, MenuItem } from './index'

class Header extends Component {
  render() {
    return (
      <Nav>
        <Grid>
          <Col>
            <Logo>Crypto Coin Trade</Logo>
          </Col>
          <Col>
            <Menu>
              <MenuItem active>Trade</MenuItem>
            </Menu>
          </Col>
          <Col empty></Col>
          <Col><Button wide>Sign in</Button></Col>
        </Grid>
      </Nav>
    )
  }
}

export default Header;