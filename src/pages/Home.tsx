import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';
import { TradeStore, RouterStore, AppStore } from '../stores';

interface HomeProps {
  router: RouterStore,
  trade: TradeStore,
  app: AppStore
}

interface HomeState {}

class Home extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
  }
  getData = () => {
    const tradeStore = this.props.trade;
    tradeStore.getData();
  }
  render() {
    return (
      <div>
        Home
        <button onClick={this.getData}>getData</button>
      </div>
    )
  }
}

export default inject(
  'app',
  'trade',
  'router'
)(observer(Home));