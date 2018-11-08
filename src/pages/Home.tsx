import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';
import {
  STORE_TRADE,
  STORE_ROUTER,
} from '../constants';

@inject(STORE_TRADE, STORE_ROUTER)
@observer
export default class Home extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        Home
      </div>
    )
  }
}
