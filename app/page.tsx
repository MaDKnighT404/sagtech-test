import Convertor from '@/components/Convertor';
import styles from './page.module.scss';
import { getCurrency } from '@/servises/getCurrency';

export default async function Home() {
  const currencyData = await getCurrency();

  return (
    <div className="container">
      <h2>Currency convertor</h2>
      <Convertor currencyData={currencyData} />
    </div>
  );
}
