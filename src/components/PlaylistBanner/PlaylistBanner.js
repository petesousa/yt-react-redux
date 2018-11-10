import React, { Component } from 'react'

import PlaylistHeader from './PlaylistHeader'
import PlaylistBody from './PlaylistBody'

import styles from './PlaylistBanner.module.css'

class PlaylistBanner extends Component {
  render() {

    if (!this.props.featuredPlaylist.playlist) {
      return <div></div>
    }


    const { playlist, items } = this.props.featuredPlaylist

    return (
      <div className={styles.playlistBanner}>

        <PlaylistHeader
          playlist={playlist.snippet}
          firstItem={items[0].snippet}
          secondItem={items[1].snippet}
          thirdItem={items[2].snippet} />

        <PlaylistBody
          playlistItems={items} />

      </div>
    )
  }
}

export default PlaylistBanner
