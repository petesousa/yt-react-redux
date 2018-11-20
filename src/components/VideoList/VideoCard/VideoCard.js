import React from 'react'

import { formatCounters } from '../../../helpers'

import VideoCardThumb from './VideoCardThumb'
import VideoCardMeta from './VideoCardMeta'

import styles from './VideoCard.module.css'

const VideoCard = ({ video, thumbSize, mode, page }) => {
  if (!video.id) { return <div></div> }

  const videoId = video.id
  const { snippet, statistics } = video
  const { thumbnails, title, channelId, channelTitle, description } = snippet
  const { url } = thumbnails.medium
  const views = formatCounters(statistics.viewCount)
  const videoTitle = title.length >= 56 ? `${title.substring(0,56)}...` : title
  const metaData = { videoId, videoTitle, channelId, channelTitle, description, views }
  const cardClassName = `${page}Card`


  return (
    <div className={styles[cardClassName]}>
      <VideoCardThumb videoId={videoId} url={url} alt={title} />
      <VideoCardMeta metaData={metaData} />
    </div>
  )
}

export default VideoCard
