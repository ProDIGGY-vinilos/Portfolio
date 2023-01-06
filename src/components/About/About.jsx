import React from 'react'
import styles from 'components/About/About.module.css'

function About() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>About Me</h1>
      <div className={styles.about}>
        <p className={styles.introduction}>
          Hola, me llamo Cristian pero me gusta trabajar bajo el nombre de ProDIGGY, soy desarrollador Full-stack y me
          gustaria que me conozcas un poco...
        </p>
        <p className={styles.resume}>
          Tengo 25 años, actualmente vivo en Rosario, Santa Fe, Argentina, soy apasionado por la tecnologia y la
          innovacion, siempre busco mejorar mis conocimientos y trato de aprender algo nuevo todos los dias. Me
          considero una persona apasionada por lo que hago, me gusta trabajar en equipo y aprender de los demas, cuando
          algo me llama la atencion soy de aprender y investigar a fondo sobre el tema para comprenderlo lo mas posible
          y asi poder comprenderlo y disfrutarlo en su totalidad.
        </p>
      </div>
      <h2 className={styles.skillsTitle}>Habilidades</h2>
      <div className={styles.skills}>
        <div className={styles.skillsItem}>
          <img src="skills/css.png" alt="CSS" />
        </div>
        <div className={styles.skillsItem}>
          <img src="skills/html.png" alt="HTML" />
        </div>
        <div className={styles.skillsItem}>
          <img src="skills/javascript.png" alt="JavaScript" />
        </div>
        <div className={styles.skillsItem}>
          <img src="skills/react.png" alt="React" />
        </div>
        <div className={styles.skillsItem}>
          <img src="skills/nodejs.png" alt="Node.JS" />
        </div>
        <div className={styles.skillsItem}>
          <img src="skills/expressjs.png" alt="Express.JS" />
        </div>
        <div className={styles.skillsItem}>
          <img src="skills/mongodb.png" alt="MongoDB" />
        </div>
        <div className={styles.skillsItem}>
          <img src="skills/mySql.png" alt="MySQL" />
        </div>
        <div className={styles.skillsItem}>
          <img src="skills/git.png" alt="Git" />
        </div>
        <div className={styles.skillsItem}>
          <img src="skills/npm.png" alt="NPM" />
        </div>
        <div className={styles.skillsItem}>
          <img src="skills/restapi.png" alt="REST API" />
        </div>
        <div className={styles.skillsItem}>
          <img src="skills/firebase.png" alt="Firebase" />
        </div>
        <div className={styles.skillsItem}>
          <img src="skills/jest.png" alt="Jest" />
        </div>
        <div className={styles.skillsItem}>
          <img src="skills/postman.png" alt="Postman" />
        </div>
        <div className={styles.skillsItem}>
          <img src="skills/figma.png" alt="Figma" />
        </div>
        <div className={styles.skillsItem}>
          <img src="skills/photoshop.png" alt="Photoshop" />
        </div>
        <div className={styles.skillsItem}>
          <img src="skills/illustrator.png" alt="Illustrator" />
        </div>
      </div>
    </section>
  )
}

export default About
