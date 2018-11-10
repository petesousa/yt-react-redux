import React from 'react'

import styles from './VideoDetail.module.css'

const VideoPlayer = ({ url, title }) => {
  return (
    <div className={styles.embedResponsive16By9}>
      <iframe title={title} src={url} className={styles.embedResponsiveItem}></iframe>
    </div>
  )
}

export default VideoPlayer
