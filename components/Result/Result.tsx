'use client';
import { useAppSelector } from '@/redux/hooks';
import styles from './Result.module.scss';

export default function Result() {
  const formData = useAppSelector((state) => state.convertor);
  const result = useAppSelector((state) => state.convertor.result);

  return (
    <div className={styles.result}>
      <p className={styles.result__text}>
        <span className={styles.result__from}>
          {formData.amount} {formData.from} =
        </span>
        <span className={styles.result__to}>
           {result} {formData.to}
        </span>
      </p>
    </div>
  );
}
