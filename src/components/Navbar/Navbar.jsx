import styles from 'Components/Navbar/Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.container}>
      <div>
        <img src="skills/illustrator.png" alt="logo" />
      </div>
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
    </nav>
  )
}

export default Navbar
