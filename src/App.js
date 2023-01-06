import React from 'react'
import About from 'components/About/About'
import Welcome from 'components/Welcome/Welcome'
import styles from './App.module.css'
import Navbar from 'components/Navbar/Navbar'
import Projects from 'components/Projects/Projects'
import Footer from 'components/Footer/Footer'
import Contact from 'components/Contact/Contact'

function App() {
  return (
    <>
      <div className={styles.navContainer}>
        <Navbar />
      </div>
      <div className={styles.appContainer}>
        <Welcome />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
