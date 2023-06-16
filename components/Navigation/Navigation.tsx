'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Navigation.module.scss';

type NavLink = {
  label: string;
  href: string;
};

type NavigationProps = {
  navLinks: NavLink[];
};

export default function Navigation({ navLinks }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav className={styles.navigation}>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.label}
            href={link.href}
            className={`${styles.navigation__link} ${
              isActive ? styles.navigation__link_active : ''
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
