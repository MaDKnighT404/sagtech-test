import { useEffect } from 'react';
import { useRatesQuery } from '@/redux/services/userApi';
import styles from './CurrencyList.module.scss';


export default function CurrencyList({ currencyData }) {

  // const { data, error, isLoading } = useRatesQuery();

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   const errorData = error as {
  //     data: {
  //       description: string;
  //     };
  //   };

  //   const errMsg = errorData.data.description;

  //   return (
  //     <div>
  //       <div>Something went wrong:</div>
  //       <div>{errMsg}</div>
  //     </div>
  //   );
  // }

  return (
    <ul className={styles.currency}>
      {/* {data &&
        Object.entries(data.rates).map(([currency, rate]) => (
          <li className={styles.currency} key={currency}>
            {currency}: {rate}
          </li>
        ))} */}
    </ul>
  );
}
