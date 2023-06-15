import Image from 'next/image';
import styles from './Header.module.scss';
import Link from 'next/link';

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
        <nav className={styles.header__navigation}>
          <Link href="/">Convertor</Link>
          <Link href="/information">Information</Link>
        </nav>
        <div className={styles.header__navigation}>$$$</div>
      </div>
    </header>
  );
}
