import React from 'react'

import styles from './VideoListLoading.module.css'

const VideoListLoading = ({ thumbSize }) => {
  let n = 14
  const items = Array.apply(null, {length: n}).map(Function.call, Math.random)

  const cardClass = `card${thumbSize}`
  return (
    <div className={styles.loadingVideosContainer}>
      <ul className={styles.videoPanelLoading}>
        { items.map((x, index) => {
          return (
            <li key={x+index} className={styles.videoPanelItemLoading}>
            <div className={styles[cardClass]}></div>
            <div className={styles.videoPanelMeta}>
            <h3 className={styles.videoPanelTitle}> </h3>
            <p className={styles.videoPanelParagraph}> </p>
            </div>
            </li>
          )
        }) }
      </ul>
    </div>
  )
}

export default VideoListLoading
