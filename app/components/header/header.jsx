import React from 'react';
import Link from 'next/link';
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href='/'><img className={styles.logo} src="/images/logo.svg" alt='logo'></img></Link>
        <div className={styles.desktopLinks}>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/about">About us</Link>
        <Link href="/contact">Contact</Link>
        </div>

        <img src="/images/icons/icon-hamburger.svg" alt="hamburger"></img>

      </nav>
    </header>
  );
}
