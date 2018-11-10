import React, { Component } from 'react'

import VideoPlayerLoading from './Loaders/VideoPlayerLoading'
import VideoDetailHeaderLoading from './Loaders/VideoDetailHeaderLoading'
import VideoDetailBodyLoading from './Loaders/VideoDetailBodyLoading'

import VideoPlayer from './VideoPlayer'
import VideoDetailHeader from './VideoDetailHeader'
import VideoDetailBody from './VideoDetailBody'

import styles from './VideoDetail.module.css'

class VideoDetail extends Component {

  renderVideoPlayer = () => {
    const { id } = this.props.videoPage.data
    const { title } = this.props.videoPage.data.snippet
    const url = `https://www.youtube.com/embed/${id}`
    return (
      <VideoPlayer
      url={url}
      title={title} />
    )
  }

  renderVideoDetailHeader = () => {
    const { statistics } = this.props.videoPage.data
    const { title } = this.props.videoPage.data.snippet
    return (
      <VideoDetailHeader
      title={title}
      statistics={statistics} />
    )
  }

  renderVideoDetailBody = () => {
    const channel = this.props.videoPageChannel.data
    const { publishedAt, description } = this.props.videoPage.data.snippet
    const category = this.props.videoPageCategory.data
    return (
      <VideoDetailBody
      channel={channel}
      publishedAt={publishedAt}
      description={description}
      category={category} />
    )
  }

  videoMetaDataLoading = () => {
    if (this.props.videoPage.isFetching) { return true }
    if (this.props.videoPageChannel.isFetching) { return true }
    if (this.props.videoPageCategory.isFetching) { return true }
    return false
  }

  render() {

    const videoPageLoading = this.props.videoPage.isFetching

    return (
      <div>
        <div className={styles.videoDetail}>
          { videoPageLoading && <VideoPlayerLoading /> }
          { videoPageLoading && <VideoDetailHeaderLoading /> }
          { !videoPageLoading && this.renderVideoPlayer() }
          { !videoPageLoading && this.renderVideoDetailHeader() }

          { this.videoMetaDataLoading() && <VideoDetailBodyLoading /> }
          { !this.videoMetaDataLoading() && this.renderVideoDetailBody() }
        </div>
      </div>
    )
  }

}

export default VideoDetail
