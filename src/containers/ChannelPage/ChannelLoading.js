import React from 'react'

import styles from './ChannelLoading.module.css'

const ChannelLoading = () => {
  return (
    <div>
      <header className={styles.channelHeaderLoading}></header>
      <div className={styles.channelBannerLoading}>
        <div className={styles.channelAvatarLoadingWrapper}>
          <div className={styles.channelAvatarLoading}></div>
        </div>
        <div className={styles.channelSubscribeLoadingWrapper}>
          <div className={styles.channelSubscribeLoading}></div>
        </div>
      </div>
    </div>
  )
}

export default ChannelLoading
