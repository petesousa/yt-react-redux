import React from 'react'

import styles from './ChannelCard.module.css'

const ChannelCardSubscribeButton = ({ subscribers }) => {
  return (
    <div className={styles.subscribeButtonWrapper}>
      <button className={styles.subscribeButton}>
        { subscribers } SUBSCRIBERS
      </button>
    </div>
  )
}

export default ChannelCardSubscribeButton
