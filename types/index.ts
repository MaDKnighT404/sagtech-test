export interface CurrencyListProps {
  currencyData: ExchangeRates;
}

interface ExchangeRates {
  disclaimer: string;
  license: string;
  timestamp: number;
  base: string;
  rates: {
    [currency: string]: number;
  };
}
