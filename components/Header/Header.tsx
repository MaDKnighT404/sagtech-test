import Image from 'next/image';
import styles from './Header.module.scss';
import Navigation from '../Navigation';
import CurrencySelector from '../CurrencySelector';

const navItems = [
  { label: 'Convertor', href: '/' },
  { label: 'Rates', href: '/rates' },
];

export default function Header() {
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
        <Navigation navLinks={navItems} />
        <CurrencySelector />
      </div>
    </header>
  );
}
