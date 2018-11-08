export enum TradeFilter {
  ALL = 0,
  ACTIVE,
  COMPLETED
}

export const TRADE_FILTER_TYPES = [
  TradeFilter.ALL,
  TradeFilter.ACTIVE,
  TradeFilter.COMPLETED
];

export const TRADE_FILTER_TITLES = {
  [TradeFilter.ALL]: 'All',
  [TradeFilter.ACTIVE]: 'Active',
  [TradeFilter.COMPLETED]: 'Completed'
};

export const TRADE_FILTER_LOCATION_HASH = {
  [TradeFilter.ALL]: '#',
  [TradeFilter.ACTIVE]: '#active',
  [TradeFilter.COMPLETED]: '#completed'
};
