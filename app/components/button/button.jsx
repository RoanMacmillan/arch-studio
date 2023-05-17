import React from 'react'
import styles from './button.module.css'
import Link from 'next/link'

// accepts props to alter text content or link path depending on button
export default function Button({href, children}) {
  return (
    <div className={styles.navButton}>
      <Link href={href}
        className={styles.button}>{children}
      </Link>
      <img className={styles.arrow} src="/images/icons/icon-arrow.svg" alt="arrow-right"></img>
    </div>
  )
}
