import React from 'react'

import styles from './VideoDetailLoading.module.css'

const VideoDetailHeaderLoading = () => {

  return (
    <div className={styles.header}>
      <h1 className={styles.title}> </h1>
      <h2 className={styles.statistics}> </h2>
      <div className={styles.headerMetaData}>
        <span className={styles.ratingSpan}></span>
        <span className={styles.ratingSpan}></span>
        <span className={styles.ratingSpan}></span>
        <span className={styles.ratingSpan}></span>
      </div>
    </div>
  )
}

export default VideoDetailHeaderLoading
