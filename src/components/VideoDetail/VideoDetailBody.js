import React from 'react'
import { Link } from 'react-router-dom'

// import { formatCounters } from '../../helpers'

import ChannelCard from '../ChannelCard/ChannelCard'

import styles from './VideoDetail.module.css'

const VideoDetailBody = (props) => {
  const {
    channel,
    publishedAt,
    description,
    category } = props
  const d = new Date(publishedAt).toString().split(" ")
  const datePublished = `${d[1]} ${d[2]}, ${d[3]}`
  const channelCardOptionalParams = { data: `Publised on ${datePublished}`}

  return (
    <div className={styles.body}>
      <ChannelCard
        channel={channel}
        avatarSize="Small"
        mode="Header"
        optionalParams={channelCardOptionalParams} />

      <div className={styles.about}>
        <p className={styles.description}>{description}</p>
        <h4 className={styles.categoryLabel}>Category</h4>
        <Link className={styles.reactLink} to={`/channel/${category.channelId}`}>
          <span className={styles.categoryLink}>
            {category.title}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default VideoDetailBody
