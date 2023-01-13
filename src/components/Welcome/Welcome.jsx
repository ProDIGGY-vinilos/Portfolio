import React from 'react'
import styles from 'components/Welcome/Welcome.module.css'

const Welcome = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.name}>Cristian Gerster</h1>
      <h2 className={styles.h2Tag}>MERN Stack Developer</h2>
      <p className={styles.pTag}>
        Bienvenido a mi portfolio, aca podras conocerme un poco, ver mis proyectos y contactarme si gustas :).
      </p>
    </div>
  )
}

export default Welcome
