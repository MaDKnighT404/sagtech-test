import CurrencyList from '@/components/CurrencyList';

async function getCurrency() {
  const headersInstance = new Headers();
  // headersInstance.set('Authorization', `Token ${process.env.NEXT_PUBLIC_USER_ID_TOKEN}`);

  const res = await fetch('https://openexchangerates.org/api/latest.json', {
    headers: headersInstance,
  });

  if (!res.ok) throw new Error('Unable to fetch currency information!');
  return res.json();
}

export default async function Rates() {
  const currencyData = await getCurrency();

  return (
    <div className="container">
      <h2>Currency rates1</h2>
      <CurrencyList currencyData={currencyData} />
    </div>
  );
}
