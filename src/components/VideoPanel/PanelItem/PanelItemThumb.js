import React from 'react'
import { Link } from 'react-router-dom'

import styles from './PanelItem.module.css'

const PanelItemThumb = ({ videoId, url, alt }) => {
  return (
    <div className={styles.cardHeader}>
      <Link className={styles.reactLink} to={`/watch/${videoId}`}>
        <img className={styles.thumb} src={url} alt={alt}/>
      </Link>
    </div>
  )
}

export default PanelItemThumb
