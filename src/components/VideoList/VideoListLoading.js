import React from 'react'

import styles from './VideoListLoading.module.css'

const VideoListLoading = ({ thumbSize }) => {
  let n = 14
  const items = Array.apply(null, {length: n}).map(Function.call, Math.random)

  const cardClass = `card${thumbSize}`
  return (
    <div className={styles.loadingVideosContainer}>
      <ul className={styles.videoListLoading}>
        { items.map((x, index) => {
          return (
            <li key={x+index} className={styles.videoListItemLoading}>
            <div className={styles[cardClass]}></div>
            <div className={styles.videoListMeta}>
            <h3 className={styles.videoListTitle}> </h3>
            <p className={styles.videoListParagraph}> </p>
            </div>
            </li>
          )
        }) }
      </ul>
    </div>
  )
}

export default VideoListLoading
