import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { resetForm, setFormData, setResult } from '@/redux/features/convertorSlice';
import { MouseEvent } from 'react';
import { CurrencyListProps } from '@/types';
import styles from './Form.module.scss';

export default function Form({ currencyData }: CurrencyListProps) {
  const amount = useAppSelector((state) => state.convertor.amount);
  const formData = useAppSelector((state) => state.convertor);
  const currencyNamesArray = useAppSelector((state) => state.currency.currencyArray);
  const dispatch = useAppDispatch();

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = e.target.value;
    const amountNoZeros = `${parseInt(amount, 10)}`;
    dispatch(setFormData({ ...formData, amount: amountNoZeros }));
    dispatch(setResult(0));
  };

  const handleFromChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const from = e.target.value;
    dispatch(setFormData({ ...formData, from }));
    dispatch(setResult(0));
  };

  const handleToChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const to = e.target.value;
    dispatch(setFormData({ ...formData, to }));
    dispatch(setResult(0));
  };

  const handleFormReset = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(resetForm());
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
    <form className={styles.form}>
      <div className={styles.form__field}>
        <label htmlFor="from" className={styles.convertor__label}>
          Amount
        </label>
        <input
          type="number"
          id="from"
          className={styles.form__input}
          value={amount}
          onChange={handleAmountChange}
        />
      </div>

      <div className={styles.form__field}>
        <label htmlFor="from" className={styles.form__label}>
          From
        </label>
        <select className={styles.form__select} value={formData.from} onChange={handleFromChange}>
          {currencyNamesArray.map((cur) => (
            <option value={cur[0]} key={cur[0]} className={styles.form__option}>
              {`${cur[0]}`}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.form__field}>
        <label htmlFor="from" className={styles.form__label}>
          To
        </label>
        <select className={styles.form__select} value={formData.to} onChange={handleToChange}>
          {currencyNamesArray.map((cur) => (
            <option value={cur[0]} key={cur[0]} className={styles.convertor__option}>
              {`${cur[0]}`}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.form__btns}>
        <button type="submit" className={styles.form__btn} onClick={handleSubmitForm}>
          Submit
        </button>
        <button className={styles.form__btn} onClick={handleFormReset}>
          Reset
        </button>
      </div>
    </form>
  );
}
