import React from "react";
import styles from "./Footer.module.css";
import Button from "../button/button";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.iconWrapper}>
        <img src="/images/logo.svg" alt="logo"></img>
      </div>

      <nav className={styles.footerNav}>
        <a href="/portfolio">Portfolio</a>
        <a href="/about">About us</a>
        <a href="/contact">Contact</a>
      </nav>

      <Button href="/portfolio" width="252px">
        See Our Portfolio
      </Button>
    </footer>
  );
}
