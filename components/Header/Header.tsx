'use client';

import Image from 'next/image';
import styles from './Header.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

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
        <nav className={styles.header__navigation}>
          <Link
            className={`${styles.header__link} ${
              pathname === '/' ? styles.header__link_active : ''
            }`}
            href="/"
          >
            Convertor
          </Link>
          <Link
            className={`${styles.header__link} ${
              pathname === '/rates' ? styles.header__link_active : ''
            }`}
            href="/rates"
          >
            Rates
          </Link>
        </nav>
        <div className={styles.header__navigation}>$$$</div>
      </div>
    </header>
  );
}
