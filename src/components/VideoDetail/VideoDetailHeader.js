import React from 'react'
import { formatCounters } from '../../helpers'

import styles from './VideoDetail.module.css'

const VideoDetailHeader = ({ title, statistics }) => {
  const { viewCount, likeCount, dislikeCount } = statistics
  // no idea how this regex is working!
  const views = viewCount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  const likes = formatCounters(likeCount)
  const dislikes = formatCounters(dislikeCount)

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.statistics}>{views} views</h2>
      <div className={styles.headerMetaData}>
        <span className={styles.ratingSpan}>
          <i className="fas fa-thumbs-up"></i>{likes}
        </span>
        <span className={styles.ratingSpan}>
          <i className="fas fa-thumbs-down"></i>{dislikes}
        </span>
      </div>
    </div>
  )
}

export default VideoDetailHeader
