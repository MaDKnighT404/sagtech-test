'use client';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setCurrentCurrency } from '@/redux/features/currencySlice';
import styles from './CurrencySelector.module.scss';

interface CurrencySelectorProps {
  currencyNamesArray: [string, string][];
}

export default function CurrencySelector({ currencyNamesArray }: CurrencySelectorProps) {
  const currentCurrency = useAppSelector((state) => state.currency.currentCurrency);
  const dispatch = useAppDispatch();

  const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCurrency = event.target.value;
    localStorage.setItem('currency', selectedCurrency);
    dispatch(setCurrentCurrency(selectedCurrency));
  };

  const defaultValue = localStorage.getItem('currency') as string;

  return (
    <select
      value={currentCurrency || defaultValue}
      onChange={handleCurrencyChange}
      className={styles.select}
    >
      {currencyNamesArray.map((cur) => (
        <option value={cur[0]} key={cur[0]}>
          {`${cur[1]} (${cur[0]})`}
        </option>
      ))}
    </select>
  );
}
