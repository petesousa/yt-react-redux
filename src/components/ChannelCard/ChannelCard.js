import React from 'react'
import { formatCounters } from '../../helpers'
import ChannelCardAvatar from './ChannelCardAvatar'
import ChannelCardMeta from './ChannelCardMeta'

import styles from './ChannelCard.module.css'

const ChannelCard = ({ channel, avatarSize, mode, optionalParams }) => {
  if (!channel.id) { return <div></div> }

  const { id, snippet, statistics } = channel
  const { title, description } = snippet
  const { url } = snippet.thumbnails.default
  const { subscriberCount, videoCount } = statistics
  const subscribers = formatCounters(subscriberCount)
  const about = description.length >= 156 ? `${description.substring(0,156)}...` : description
  const metaData = { id, title, subscribers, videoCount, about }
  const cardClassName = `card${mode}`

  return (
    <article className={styles[cardClassName]}>
      <ChannelCardAvatar url={url} size={avatarSize} alt={title} channelId={id} />
      <ChannelCardMeta metaData={metaData} optionalParams={optionalParams} />
    </article>
  )
}

export default ChannelCard
