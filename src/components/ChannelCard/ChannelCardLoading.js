import React from 'react'

import styles from './ChannelCardLoading.module.css'

const ChannelCardLoading = () => {
  return (
    <article className={styles.channelCardLoading}>
      <div className={styles.avatarWrapper}>
        <div className={styles.avatar}></div>
      </div>

      <div className={styles.metaDataWrapper}>
        <h1 className={styles.title}> </h1>
        <h2 className={styles.statistics}> </h2>
        <p className={styles.about}></p>  
      </div>
    </article>
  )
}

export default ChannelCardLoading
