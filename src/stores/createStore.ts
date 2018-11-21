import { History } from 'history';
import { AppStore } from './AppStore';
import { TradeStore } from './TradeStore';
import { RouterStore } from './RouterStore';

export function createStores(history: History) {
  return {
    app: new AppStore(),
    trade: new TradeStore([]),
    router: new RouterStore(history)
  };
}
