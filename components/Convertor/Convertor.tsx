'use client';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { ChangeEvent } from 'react';
import { resetAmount, setAmount } from '@/redux/features/convertorSlice';
import styles from './Convertor.module.scss';

export default function Convertor() {
  const dispatch = useAppDispatch();
  const amount = useAppSelector((state) => state.convertor.amount);
  const currencyNamesArray = useAppSelector((state) => state.currency.currenciesArray);

  const handleAmountInput = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    dispatch(setAmount(newValue));
  };

  const handleResetAmount = (e: ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(resetAmount());
  };

  return (
    <div className={styles.convertor}>
      <form className={styles.convertor__form}>
        <div className={styles.convertor__field}>
          <label htmlFor="from" className={styles.convertor__label}>
            Amount
          </label>
          <input
            type="text"
            id="from"
            className={styles.convertor__input}
            value={amount}
            onChange={handleAmountInput}
          />
        </div>

        <div className={styles.convertor__field}>
          <label htmlFor="from" className={styles.convertor__label}>
            From
          </label>
          <select className={styles.convertor__select}>
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
          <select className={styles.convertor__select}>
            {currencyNamesArray.map((cur) => (
              <option value={cur[0]} key={cur[0]} className={styles.convertor__option}>
                {`${cur[0]}`}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.convertor__btns}>
          <button className={styles.convertor__btn}>Submit</button>
          <button className={styles.convertor__btn} onClick={handleResetAmount}>
            Reset
          </button>
        </div>
      </form>
      <div className={styles.convertor__result}>Result</div>
    </div>
  );
}
