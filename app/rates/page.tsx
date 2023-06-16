import CurrencyList from '@/components/CurrencyList';
import { getCurrency } from '@/servises/getCurrency';

export default async function Rates() {
  const currencyData = await getCurrency();

  return (
    <div className="container">
      <h2>Currency rates1</h2>
      <CurrencyList currencyData={currencyData} />
    </div>
  );
}
