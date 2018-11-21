import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';
import { TradeStore, RouterStore } from '../stores';
import {
  STORE_TRADE,
  STORE_ROUTER,
} from '../constants';

interface HomeProps {
  [STORE_ROUTER]: RouterStore,
  [STORE_TRADE]: TradeStore;
}

interface HomeState {}

class Home extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
  }
  getData = () => {
    const tradeStore = this.props[STORE_TRADE] as TradeStore;
    tradeStore.getData();
  }
  changeTheme = (event: any) => {
    const tradeStore = this.props[STORE_TRADE] as TradeStore;
    tradeStore.switchTheme(event.target.value);
  }
  render() {
    console.log(this.props)
    return (
      <div>
        Home
        <select onChange={this.changeTheme}>
          <option value="classic">classic</option>
          <option value="dark">dark</option>
          <option value="light">light</option>
        </select>
        <button onClick={this.getData}>getData</button>
      </div>
    )
  }
}

export default inject(
  STORE_TRADE,
  STORE_ROUTER
)(observer(Home));