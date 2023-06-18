export async function getCurrency() {
  const headersInstance = new Headers();
  headersInstance.set('Authorization', `Token ${process.env.NEXT_PUBLIC_USER_ID_TOKEN}`);

  const res = await fetch('https://openexchangerates.org/api/latest.json', {
    headers: headersInstance,
  });

  if (!res.ok) throw new Error('Unable to fetch currency information!');
  return res.json();
}

export async function getCurrencyNames() {
  const headersInstance = new Headers();
  headersInstance.set('Authorization', `Token ${process.env.NEXT_PUBLIC_USER_ID_TOKEN}`);

  const res = await fetch('https://openexchangerates.org/api/currencies.json', {
    headers: headersInstance,
  });

  if (!res.ok) throw new Error('Unable to fetch currency information!');
  return res.json();
}
