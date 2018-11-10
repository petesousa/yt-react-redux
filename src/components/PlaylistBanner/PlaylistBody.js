import React from 'react'

import { formatCounters } from '../../helpers'

import styles from './PlaylistBanner.module.css'

const PlaylistBody = ({ playlistItems }) => {
  return (
    <div className={styles.playlistItems}>
      <ul>
          {playlistItems.map((item) => {
            const views = formatCounters(item.statistics.viewCount)
            return (
              <li key={item.etag}>
                <h4>{item.snippet.title.substring(0,48)}...</h4>
                <h6>
                  {views} views
                </h6>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default PlaylistBody
