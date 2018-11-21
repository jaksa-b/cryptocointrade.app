import React, { Component } from 'react'
import styled from 'styled-components';
import { Grid, Col } from './elements';

export default class Bottom extends Component {
  render() {
    return (
      <Footer>
        <Grid>
          <Col>
            <span className="serverStatus"></span>
          </Col>
          <Col empty></Col>
          <Col>
            <select>
              <option value="classic">classic</option>
              <option value="dark">dark</option>
              <option value="light">light</option>
            </select>
          </Col>
        </Grid>
      </Footer>
    )
  }
}

const Footer = styled.div`
  position: relative;
  height: 30px;
  border-top: 1px solid ${p => p.theme.border};
  background: ${p => p.theme.headerBgColor};
`
