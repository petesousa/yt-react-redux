import React from 'react'

import { formatCounters } from '../../../helpers'

import PanelItemThumb from './PanelItemThumb'
import PanelItemMeta from './PanelItemMeta'

import styles from './PanelItem.module.css'

const PanelItem = ({ video }) => {
  if (!video.id) { return <div></div> }

  const videoId = video.id
  const { snippet, statistics } = video
  const { thumbnails, title, channelId, channelTitle } = snippet
  const { url } = thumbnails.medium
  const views = formatCounters(statistics.viewCount)
  const videoTitle = title.length >= 56 ? `${title.substring(0,56)}...` : title
  const metaData = { videoId, videoTitle, channelId, channelTitle, views }

  return (
    <div className={styles.card}>
      <PanelItemThumb videoId={videoId} url={url} alt={title} />
      <PanelItemMeta metaData={metaData} />
    </div>
  )
}

export default PanelItem
