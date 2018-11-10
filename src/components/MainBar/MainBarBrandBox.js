import React from 'react'
import { Link } from 'react-router-dom'

import styles from './MainBar.module.css'

const MainBarBrandBox = () => {
  return (
    <Link to="/" className={styles.logoLink}>
      <i className="fas fa-home"></i>
    </Link>
  )
}

export default MainBarBrandBox
