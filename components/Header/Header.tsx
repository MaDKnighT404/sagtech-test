import Image from 'next/image';
import styles from './Header.module.scss';
import Navigation from '../Navigation';
import CurrencySelector from '../CurrencySelector';
import { getCurrencyNames } from '@/servises/getCurrency';
const navItems = [
  { label: 'Convertor', href: '/' },
  { label: 'Rates', href: '/rates' },
];

export default async function Header() {
  const currencyNames = await getCurrencyNames();
  const currencyNamesArray = Object.entries(currencyNames) as [string, string][]

  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <Image
          className={styles.header__logo}
          src="/images/logo.svg"
          alt="logo"
          width={45}
          height={45}
        />
        <CurrencySelector currencyNamesArray={currencyNamesArray} />
        <Navigation navLinks={navItems} />
      </div>
    </header>
  );
}
