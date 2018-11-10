import React from 'react'

import styles from './VideoDetailLoading.module.css'

const VideoDetailBodyLoading = (props) => {
  return (
    <div className={styles.body}>
      <div className={styles.channelBannerLoading}>
        <div className={styles.channelAvatarLoadingWrapper}>
          <div className={styles.channelAvatarLoading}></div>
        </div>
        <div className={styles.channelNameLoadingWrapper}>
          <h1 className={styles.channelNameLoading}> </h1>
        </div>
        <div className={styles.channelSubscribeLoadingWrapper}>
          <div className={styles.channelSubscribeLoading}></div>
        </div>
      </div>

      <div className={styles.about}>
        <p className={styles.description}> </p>
        <p className={styles.description}> </p>
        <p className={styles.description}> </p>
      </div>
    </div>
  )
}

export default VideoDetailBodyLoading
