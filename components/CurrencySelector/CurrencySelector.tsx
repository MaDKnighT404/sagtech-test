'use client';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setCurrentCurrency } from '@/redux/features/currencySlice';
import styles from './CurrencySelector.module.scss';
import { useEffect } from 'react';

interface CurrencySelectorProps {
  currencyNamesArray: [string, string][];
}

export default function CurrencySelector({ currencyNamesArray }: CurrencySelectorProps) {
  const currentCurrency = useAppSelector((state) => state.currency.currentCurrency);
  const dispatch = useAppDispatch();

  const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCurrency = event.target.value;
    dispatch(setCurrentCurrency(selectedCurrency));
  };

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((response) => response.json())
      .then((data) => {
        const currency = data.currency;
        dispatch(setCurrentCurrency(currency));
      })
      .catch((error) => {
        console.log('Ошибка при получении данных:', error);
      });
  }, []);

  return (
    <select value={currentCurrency} onChange={handleCurrencyChange} className={styles.select}>
      <option value="" disabled>
        Select currency
      </option>
      {currencyNamesArray.map((cur) => (
        <option value={cur[0]} key={cur[0]}>
          {`${cur[1]} (${cur[0]})`}
        </option>
      ))}
    </select>
  );
}
