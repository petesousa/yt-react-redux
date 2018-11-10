import _ from 'lodash'
import React, { Component } from 'react'

import PanelItem from './PanelItem/PanelItem'
import styles from './VideoPanel.module.css'

class VideoPanel extends Component {

  renderPanelItems = () => {
    return _.map(this.props.videoList, video => {
      return <PanelItem
                key={video.etag}
                video={video} />
    })
  }

  render() {
    return (
      <div className={styles.videoPanelContainer}>
        {this.renderPanelItems()}
      </div>
    )
  }
}

export default VideoPanel
