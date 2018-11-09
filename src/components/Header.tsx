import React, { Component } from 'react'
import styled from 'styled-components';

class Header extends Component {
  render() {
    return (
      <Nav>
        <div>logo</div>
        links
      </Nav>
    )
  }
}

const Nav = styled.nav`
  position: relative;
  height: 46px;
  color: rgb(255, 255, 255);
  background-color: rgb(25, 33, 38);
  border-bottom: 1px solid rgb(20, 24, 28);
`

export default Header;