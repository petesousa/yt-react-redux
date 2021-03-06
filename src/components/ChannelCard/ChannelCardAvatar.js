import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import styles from './ChannelCard.module.css'

class ChannelCardAvatar extends Component {
  render() {
    const { url, alt, page, channelId } = this.props
    const avatar = `${page}Avatar`
    return (
      <div className={styles.avatarWrapper}>
        <img
          onClick={() => this.props.history.push(`/channel/${channelId}`)}
          className={styles[avatar]}
          src={url}
          alt={alt}/>
        </div>
      )
  }
}

export default withRouter(ChannelCardAvatar)
