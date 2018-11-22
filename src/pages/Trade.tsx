import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';
import styled, { css } from 'styled-components'
import { TradeStore, RouterStore, AppStore } from '../stores';
import { Grid, Col, Card } from '../components/elements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

interface Props {
  router: RouterStore,
  trade: TradeStore,
  app: AppStore
}

interface State { }

class Trade extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  getData = () => {
    const tradeStore = this.props.trade;
    tradeStore.getData();
  }
  render() {
    return (
      <>
        <TradeHeader>
          <Grid>
            <Col>
              <TradeCurrency>
                <Section><Text>BTC-EUR</Text></Section>
                <Section><Span>Select Market <FontAwesomeIcon icon={faAngleDown} /> </Span></Section>
              </TradeCurrency>
            </Col>
            <Col>
              <CurrentPrice>
                <Section><Text>3,919.87 EUR</Text><Small>Last trade price</Small></Section>
                <Section><Text>-4.52%</Text><Small>24h price</Small></Section>
                <Section><Text>5,417 BTC</Text><Small>24h volume</Small></Section>
              </CurrentPrice>
            </Col>
            <Col empty></Col>
          </Grid>
        </TradeHeader>
        <TradeBody>
          <TradeGrid>
            <Sidebar>
              <Card title="Wallet Balance" />
            </Sidebar>
            <OrderBook>
              <Card title="Order Book" />
            </OrderBook>
            <Chart>
              <Card title="Price Chart" />
            </Chart>
            <Trading>
              <Card title="Open Orders" />
            </Trading>
            <TradingHistory>
              <Card title="Trade History" />
            </TradingHistory>
          </TradeGrid>
        </TradeBody>
      </>
    )
  }
}

const TradeGrid = styled.div`
  display: grid;
  min-width: 0px;
  min-height: 0px;
  grid-template-columns: 279px 300px 1fr 285px;
  grid-template-rows: 1fr 1fr 280px;
  grid-template-areas: "sidebar order-book chart trade-history" "sidebar order-book chart trade-history" "sidebar order-book trading trade-history";
  flex: 1 1 0%;
  overflow: hidden;
  gap: 1px 1px;
  background: rgb(20, 24, 28);
`

const Sidebar = styled.div.attrs({ name: 'sidebar' })`
  display: flex;
  min-width: 0px;
  min-height: 0px;
  grid-area: sidebar / sidebar / sidebar / sidebar;
` as any

const OrderBook = styled.div.attrs({ name: 'order-book' })`
  display: flex;
  min-width: 0px;
  min-height: 0px;
  grid-area: order-book / order-book / order-book / order-book;
`as any

const Chart = styled.div.attrs({ name: 'chart' })`
  display: flex;
  min-width: 0px;
  min-height: 0px;
  grid-area: chart / chart / chart / chart;
`as any

const Trading = styled.div.attrs({ name: 'trading' })`
  display: flex;
  min-width: 0px;
  min-height: 0px;
  grid-area: trading / trading / trading / trading;
`as any

const TradingHistory = styled.div.attrs({ name: 'trade-history' })`
  display: flex;
  min-width: 0px;
  min-height: 0px;
  grid-area: trade-history / trade-history / trade-history / trade-history;
`as any

const TradeHeader = styled.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  height: 46px;
  border-bottom: 1px solid ${p => p.theme.border};
  background: ${p => p.theme.headerBgColor};
`

const TradeBody = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 1 0%;
  overflow: hidden;
`

const Text = styled.span`
  font-weight: bold;
  line-height: 1.5;
  word-break: normal;
  display: inline;
  font-family: atlas, opensans, sans-serif, btcglyph;
  font-size: 14px;
  text-align: left;
  text-transform: inherit;
  color:  ${p => p.theme.color};
`

const Span = styled.span`
  font-weight: normal;
  line-height: 1.5;
  word-break: normal;
  display: inline;
  font-family: atlas, opensans, sans-serif, btcglyph;
  font-size: 11px;
  text-align: left;
  text-transform: inherit;
  color:  ${p => p.theme.color};
`


const Section = styled.div`
  display: flex;
  flex-shrink: 0;
  height: 46px;
  margin-right: 30px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

const TradeCurrency = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  height: 46px;
  position: relative;
  color: ${p => p.theme.color};
  width: 224px;
  border-right: 1px solid ${p => p.theme.border};
  padding: 0px 28px;
`
const CurrentPrice = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 0px 28px;
`

const Small = styled.small`
  font-weight: normal;
  line-height: 1.5;
  word-break: normal;
  display: inline;
  margin-left: 9px;
  font-family: atlas, opensans, sans-serif, btcglyph;
  font-size: 11px;
  text-align: left;
  text-transform: inherit;
  color: rgba(255, 255, 255, 0.4);
`

export default inject(
  'app',
  'trade',
  'router'
)(observer(Trade));