import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a className={styles.footer__name} href="https://github.com/MaDKnighT404">
        Georgii Koloidi &nbsp;
      </a>
      <span className={styles.footer__contacts}> || Battleaxe@bk.ru || +7 918 204 28 88 </span>
    </footer>
  );
}
