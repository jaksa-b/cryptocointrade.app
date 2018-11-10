import { History } from 'history';
import { TradeStore } from './TradeStore';
import { RouterStore } from './RouterStore';
import { STORE_TRADE, STORE_ROUTER } from '../constants';

export function createStores(history: History) {
  const tradeStore = new TradeStore([])
  const routerStore = new RouterStore(history);
  return {
    [STORE_TRADE]: tradeStore,
    [STORE_ROUTER]: routerStore
  };
}
