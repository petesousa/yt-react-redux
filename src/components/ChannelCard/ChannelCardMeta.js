import React from 'react'
import { Link } from 'react-router-dom'

import ChannelCardSubscribeButton from './ChannelCardSubscribeButton'

import styles from './ChannelCard.module.css'

const ChannelCardMeta = ({ metaData, optionalParams = '' }) => {
  const { id, title, subscribers, videoCount, about } = metaData
  return (
    <div className={styles.metaDataWrapper}>
      <h1 className={styles.title}>
        <Link className={styles.reactLink} to={`/channel/${id}`}>
          {title}
        </Link>
      </h1>
      <h2 className={styles.statistics}>{subscribers} subscribers . {videoCount} videos </h2>
      <p className={styles.about}>{about}</p>
      <ChannelCardSubscribeButton subscribers={subscribers}/>
      {
        optionalParams.data
        ?
        <h3 className={styles.optParams}>{ optionalParams.data }</h3>
        :
        <p></p>
      }
    </div>
  )
}

export default ChannelCardMeta
