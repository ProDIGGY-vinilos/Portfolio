import React from 'react'
import styles from 'components/Navbar/Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <img src="" alt="logo" />
      </div>
      <div className={styles.listContainer}>
        <ul className={styles.list}>
          <li className={styles.items}>
            <a href="/">Home</a>
          </li>
          <li className={styles.items}>
            <a href="/about">About</a>
          </li>
          <li className={styles.items}>
            <a href="/">Projects</a>
          </li>
          <li className={styles.items}>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
