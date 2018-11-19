import React from 'react'

import styles from './VideoPanelLoading.module.css'

const VideoPanelLoading = () => {
  let n = 5
  const lists = Array.apply(null, {length: n}).map(Function.call, Math.random)
  n = 10
  const items = Array.apply(null, {length: n}).map(Function.call, Math.random)

  return (
    <div className={styles.loadingVideosContainer}>
      { lists.map((x, index) => {
        return (
          <div key={x+'-'+index}>
            <h1 className={styles.videoPanelHeadingLoading} > </h1>
            <ul className={styles.videoPanelLoading}>
            { items.map((y, index) => {
              return (
                <li key={y+'-'+index} className={styles.videoPanelItemLoading}>
                  <div className={styles.videoPanelThumb}></div>
                  <div className={styles.videoPanelMeta}>
                    <h3 className={styles.videoPanelTitle}> </h3>
                    <p className={styles.videoPanelParagraph}> </p>
                  </div>
                </li>
              )
            }) }
            </ul>
          </div>
        )
      }) }
    </div>
  )
}

export default VideoPanelLoading
