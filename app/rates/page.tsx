import CurrencyList from '@/components/CurrencyList';
import React from 'react';


export default function Rates() {
  return (
    <div className="container">
      <h2>Currency rates</h2>
      <CurrencyList />
    </div>
  );
}
