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
          <h4>PEDRO HENRIQUE SOUSA</h4>
          <h6>Web Developer</h6>
          <a href="http://petesousa.xyz" className={styles.getInTouch}>GET IN TOUCH</a>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard
