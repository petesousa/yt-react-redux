import React from 'react'
import { Link } from 'react-router-dom'

import ChannelCardSubscribeButton from './ChannelCardSubscribeButton'

import styles from './ChannelCard.module.css'

const ChannelCardMeta = ({ metaData, page, optionalParams = '' }) => {
  const { id, title, subscribers, videoCount, about } = metaData
  return (
    <div className={styles.metaDataWrapper}>
      <h1 className={styles.title}>
        <Link className={styles.reactLink} to={`/channel/${id}`}>
          {title}
        </Link>
      </h1>
      {
        page === 'searchResults' &&
        <h2 className={styles.statistics}>{subscribers} subscribers . {videoCount} videos </h2>
      }
      {
        page === 'searchResults' &&
        <p className={styles.about}>{about}</p>
      }
      { page !== 'searchResults' && <ChannelCardSubscribeButton subscribers={subscribers}/> }
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
