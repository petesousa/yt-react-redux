import React from 'react'

import styles from './PlaylistBanner.module.css'

const PlaylistHeader = ({ playlist, firstItem, secondItem, thirdItem }) => {
  return (
    <div className={styles.playlistHeader}>
      
      <div className={styles.mainThumbWrapper}>
        <img
          className={styles.mainThumb}
          src={firstItem.thumbnails.medium.url}
          alt={firstItem.title} />
      </div>

      <div className={styles.sideThumbsWrapper}>
        <img
          className={styles.sideThumb}
          src={secondItem.thumbnails.medium.url}
          alt={secondItem.title} />
          <img
            className={styles.sideThumb}
            src={thirdItem.thumbnails.medium.url}
            alt={thirdItem.title} />
      </div>
    </div>
  )
}

export default PlaylistHeader
