'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setCurrencyArray, setCurrentCurrency } from '@/redux/features/currencySlice';
import styles from './CurrencySelector.module.scss';

interface CurrencySelectorProps {
  currencyNamesArray: [string, string][];
}

export default function CurrencySelector({ currencyNamesArray }: CurrencySelectorProps) {
  const currentCurrency = useAppSelector((state) => state.currency.currentCurrency);
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const isRates = pathname === '/rates';

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
        dispatch(setCurrencyArray(currencyNamesArray));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <select
      value={currentCurrency}
      onChange={handleCurrencyChange}
      className={`${styles.select} ${isRates ? '' : styles.select__hide}`}
    >
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
