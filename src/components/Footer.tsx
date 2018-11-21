import React, { Component } from 'react'
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { AppStore } from '../stores'
import { Grid, Col } from './elements';

interface Props {
  app: AppStore
}

interface State {}

class Bottom extends Component<any> {
  changeTheme = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const appStore = this.props.app;
    appStore.switchTheme(e.target.value);
  }
  render() {
    console.log(this.props)
    return (
      <Footer>
        <Grid>
          <Col>
            <span className="serverStatus"></span>
          </Col>
          <Col empty></Col>
          <Col>
            <select onChange={this.changeTheme}>
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
export default inject('app')(observer(Bottom));