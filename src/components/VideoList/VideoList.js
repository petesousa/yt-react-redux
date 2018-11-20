import _ from 'lodash'
import React, { Component } from 'react'

import VideoCard from './VideoCard/VideoCard'

import styles from './VideoList.module.css'

class VideoList extends Component {
  renderVideoItems = () => {
    const { page } = this.props
    return _.map(this.props.videoList.data, video => {
      return <VideoCard
                key={video.etag}
                video={video}
                page={page} />
    })
  }

  render() {
    return (
      <div className={styles.videoListContainer}>
        {this.renderVideoItems()}
      </div>
    )
  }
}

export default VideoList
