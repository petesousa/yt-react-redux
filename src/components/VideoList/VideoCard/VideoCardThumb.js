import React from 'react'
import { Link } from 'react-router-dom'

import styles from './VideoCard.module.css'

const VideoCardThumb = ({ videoId, url, alt }) => {
  return (
    <div className={styles.cardHeader}>
      <Link className={styles.reactLink} to={`/watch/${videoId}`}>
        <img className={styles.thumb} src={url} alt={alt}/>
      </Link>
    </div>
  )
}

export default VideoCardThumb
