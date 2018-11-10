import React from 'react'

import styles from './LoadingVideos.module.css'

const LoadingVideos = () => {
  return (
    <div className={styles.loadingVideosContainer}>
      <ul className={styles.videoPanelLoading}>
        { [1,2,3,4,5,6,7,8,9,1,12,13,14].map((line) => {
          return (
            <li key={line} className={styles.videoPanelItemLoading}>
            <div className={styles.videoPanelThumb}></div>
            <div className={styles.videoPanelMeta}>
            <h3> </h3>
            <p> </p>
            </div>
            </li>
          )
        }) }
      </ul>
    </div>
  )
}

export default LoadingVideos
