import React from 'react'

import styles from './HomeAd.module.css'

const PortfolioCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}></div>
      <div className={styles.cardBody}>
        <div className={styles.cardAvatarWrapper}>
          <div className={styles.cardAvatar}></div>
        </div>
        <div className={styles.cardMetaData}>
          <h1>PETE SOUSA</h1>
          <h2>Web Developer</h2>
          <a href="https://petesousa-portfolio-app.firebaseapp.com/" className={styles.getInTouch}>GET IN TOUCH</a>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard
