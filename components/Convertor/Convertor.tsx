'use client';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { ChangeEvent, MouseEvent } from 'react';
import { resetAmount, setAmount, setFormData, setResult } from '@/redux/features/convertorSlice';
import styles from './Convertor.module.scss';
import { CurrencyListProps } from '@/types';

export default function Convertor({ currencyData }: CurrencyListProps) {
  const amount = useAppSelector((state) => state.convertor.amount);
  const formData = useAppSelector((state) => state.convertor);
  const result = useAppSelector((state) => state.convertor.result);
  const currencyNamesArray = useAppSelector((state) => state.currency.currenciesArray);
  const dispatch = useAppDispatch();

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = e.target.value;
    dispatch(setFormData({ ...formData, amount }));
  };

  const handleFromChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const from = e.target.value;
    dispatch(setFormData({ ...formData, from }));
  };

  const handleToChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const to = e.target.value;
    dispatch(setFormData({ ...formData, to }));
  };

  const handleAmountReset = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(resetAmount());
    dispatch(setResult(0));
  };

  const handleSubmitForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const fromCurrency = formData.from;
    const toCurrency = formData.to;
    const fromRate = currencyData.rates[fromCurrency];
    const toRate = currencyData.rates[toCurrency];
    const convertedAmount = +((Number(amount) / fromRate) * toRate).toFixed(3);
    dispatch(setResult(convertedAmount));
  };

  return (
    <div className={styles.convertor}>
      <form className={styles.convertor__form}>
        <div className={styles.convertor__field}>
          <label htmlFor="from" className={styles.convertor__label}>
            Amount
          </label>
          <input
            type="number"
            id="from"
            className={styles.convertor__input}
            value={amount}
            onChange={handleAmountChange}
          />
        </div>

        <div className={styles.convertor__field}>
          <label htmlFor="from" className={styles.convertor__label}>
            From
          </label>
          <select
            className={styles.convertor__select}
            value={formData.from}
            onChange={handleFromChange}
          >
            {currencyNamesArray.map((cur) => (
              <option value={cur[0]} key={cur[0]} className={styles.convertor__option}>
                {`${cur[0]}`}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.convertor__field}>
          <label htmlFor="from" className={styles.convertor__label}>
            To
          </label>
          <select
            className={styles.convertor__select}
            value={formData.to}
            onChange={handleToChange}
          >
            {currencyNamesArray.map((cur) => (
              <option value={cur[0]} key={cur[0]} className={styles.convertor__option}>
                {`${cur[0]}`}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.convertor__btns}>
          <button type="submit" className={styles.convertor__btn} onClick={handleSubmitForm}>
            Submit
          </button>
          <button className={styles.convertor__btn} onClick={handleAmountReset}>
            Reset
          </button>
        </div>
      </form>
      <div className={styles.convertor__result}>
        {result ? (
          <>
            <h3>Converted Amount:</h3>
            <p>{result}</p>
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
