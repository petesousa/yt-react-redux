import React from 'react'
import { Link } from 'react-router-dom'

import styles from './VideoCard.module.css'

const VideoCardMeta = ({ metaData }) => {
  const { videoId, videoTitle, channelId, channelTitle, description, views } = metaData

  return (
    <div className={styles.cardMeta}>
      <h1 className={styles.videoTitle}>
        <Link className={styles.reactLink} to={`/watch/${videoId}`}>
          {videoTitle}
        </Link>
      </h1>
      <h2 className={styles.channelTitle}>
        <Link className={styles.reactLink} to={`/channel/${channelId}`}>
          {channelTitle}
        </Link>
      </h2>
      <span className={styles.separator}> . </span>
      <h3 className={styles.statistics}>{views} views</h3>
      <p className={styles.about}>{description.substring(0,156)}...</p>
    </div>
  )
}

export default VideoCardMeta
