import React from 'react'

import PortfolioCard from './PortfolioCard'
import AboutBanner from './AboutBanner'

import styles from './HomeAd.module.css'

const HomeAd = () => {
  return (
    <div className={styles.adWrapper}>
      <PortfolioCard />
      <AboutBanner />
    </div>
  )
}

export default HomeAd
