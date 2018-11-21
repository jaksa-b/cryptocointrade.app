import { observable, computed, action, flow } from 'mobx';
import { TradeModel } from './models/TradeModel';

//config
import themes from '../styles/themes';

interface Order {
  BTC: number,
  USD: number,
  EUR: number
}

export class TradeStore {
  constructor(fixtures: TradeModel[]) {
    this.trades = fixtures;
    this.tradeHistory = fixtures;
    this.tradeOrders = {
      BTC: 0.5,
      USD: 215,
      EUR: 185
    };
  }

  /* Observables */
  @observable themeName: string = 'classic';
  @observable public trades: Array<TradeModel>;
  @observable public tradeHistory: Array<TradeModel>;
  @observable public tradeOrders: Order;

  @computed
  get activeTrades() {
    return this.trades.filter((trade) => !trade.completed);
  }

  /* Actions */

  @action
  addTrade = (item: TradeModel): void => {
    this.trades.push(new TradeModel(item.text, item.completed));
  };

  @action
  resetAllSettings = () => {
    this.themeName = 'classic';
  };

  @computed
  get theme(): Object {
    return themes[this.themeName];
  }

  @action
  switchTheme = (name: string) => {
    this.themeName = name
  };

  @action
  async getData() {
    try {
      const res = await fetch('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR');
      const data = await res.json();
      this.tradeOrders = data;
      console.log(this.tradeOrders)
    } catch (error) {
      console.log(error)
    }
  }

  @action
  public loadTags = flow(function* (this: TradeStore) {
    try {
      const res = yield fetch('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR');
      const data = yield res.json();
      this.tradeOrders = data;
    } catch (err) {
      console.log(err)
    }
  })
}

export default TradeStore;
