import React from 'react'

import MainBarBrandBox from './MainBarBrandBox'
import SearchInput from '../../containers/SearchInput/SearchInput'

import styles from './MainBar.module.css'

const MainBar = () => {
  return (
    <nav className={styles.mainBar}>

      <div className={styles.brandWrapper}>
        <MainBarBrandBox />
      </div>
      <div className={styles.inputWrapper}>
        <SearchInput />
      </div>

    </nav>
  )
}

export default MainBar
