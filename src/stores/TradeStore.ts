import { observable, computed, action } from 'mobx';
import { TradeModel } from '../models/TradeModel';

export class TradeStore {
  constructor(fixtures: TradeModel[]) {
    this.trades = fixtures;
    this.tradeHistory = fixtures;
    this.tradeOrders = fixtures;
  }

  @observable public trades: Array<TradeModel>;
  @observable public tradeHistory: Array<TradeModel>;
  @observable public tradeOrders: Array<TradeModel>;

  @computed
  get activeTrades() {
    return this.trades.filter((trade) => !trade.completed);
  }

  @action
  addTrade = (item: TradeModel): void => {
    this.trades.push(new TradeModel(item.text, item.completed));
  };
}

export default TradeStore;
