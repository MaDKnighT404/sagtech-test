'use client';
import { useAppSelector } from '@/redux/hooks';
import Result from '../Result';
import Form from '../Form';
import styles from './Convertor.module.scss';
import { CurrencyListProps } from '@/types';

export default function Convertor({ currencyData }: CurrencyListProps) {
  const result = useAppSelector((state) => state.convertor.result);

  return (
    <div className={styles.convertor}>
      <Form currencyData={currencyData} />
      {result > 0 && <Result />}
    </div>
  );
}
