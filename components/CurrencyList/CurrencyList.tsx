'use client';
import { useAppSelector } from '@/redux/hooks';
import styles from './CurrencyList.module.scss';
import { CurrencyListProps } from '@/types';

export default function CurrencyList({ currencyData }: CurrencyListProps) {
  const currentCurrency = useAppSelector((state) => state.currency.currentCurrency);

  const baseRate = currencyData.rates[currentCurrency];

  const adjustedRates = Object.fromEntries(
    Object.entries(currencyData.rates).map(([currency, rate]) => {
      return [currency, (baseRate / rate).toFixed(2)];
    })
  );

  adjustedRates[currentCurrency] = '1.00';

  const currencyList = Object.entries(adjustedRates).map(
    ([currency, rate]) => `${currency}: ${rate} ${currentCurrency}`
  );

  return (
    <>
      {!currentCurrency && <div className="loader" />}
      <ul className={styles['currency-list']}>
        {currentCurrency && currencyList.map((el) => (
          <li className={styles['currency-list__item']} key={el}>
            {el}
          </li>
        ))}
      </ul>
    </>
  );
}
